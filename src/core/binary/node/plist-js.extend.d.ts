// This file is a temporary typescript workaround until the following PR is merged:
// https://github.com/TooTallNate/plist.js/pull/144
//
// (added as part of PR #8 )

//TODO: #10 Remove file plist-js.extend.d.ts once @TooTallNate/plist.js#144 is merged

import 'plist';
interface CreateOptions {
  invalidCharReplacement?: string | null;
}

declare module 'plist' {
  function build(
    obj: PlistValue,
    xmlToStringOpts?: PlistBuildOptions,
    createOpts?: CreateOptions
  ): string;
}
