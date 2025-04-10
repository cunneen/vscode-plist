import * as vscode from 'vscode';
import * as plist from 'plist';

import {decodeBinaryPlist} from '../decoder/binary_plist_decoder';
import {plutil} from '../../../common/utilities/node/plutil';
import {BinaryPlistDocument} from '../binary_plist_document';
// eslint-disable-next-line node/no-extraneous-import
import {CreateOptions} from 'xmlbuilder';

export async function generateTextualPlist(
  document: BinaryPlistDocument,
  token: vscode.CancellationToken,
  useMacosDecoder: boolean
): Promise<void> {
  if (!document.generatedUri) return;

  if (useMacosDecoder) {
    await plutil.convert(
      document.uri.fsPath,
      'plist',
      document.generatedUri.fsPath,
      token
    );
  } else {
    const content = await decodeBinaryPlist(document.uri);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const plistContent = plist.build(content as plist.PlistValue, {}, {
      invalidCharReplacement: '�',
    } as CreateOptions);
    if (plistContent.indexOf('�') !== -1) {
      vscode.window.showWarningMessage(
        'The “�” symbol appears in this editor, possibly due to control characters in the original file. If you save it now, those symbols will be saved too.'
      );
    }
    await vscode.workspace.fs.writeFile(
      document.generatedUri,
      new Uint8Array(Buffer.from(plistContent))
    );
  }
}

export async function exportTextualPlist(
  sourcePath: string,
  destPath: string
): Promise<string> {
  return plutil.convert(sourcePath, 'bplist', destPath);
}
