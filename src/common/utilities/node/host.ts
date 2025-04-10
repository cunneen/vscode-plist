import * as os from 'os';

export function isMacOS(): boolean {
  return os.platform() === 'darwin';
}
