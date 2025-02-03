export function quoted(str: string): string {
  const isSingleQuoted = str.startsWith("'") && str.endsWith("'");
  const isQouted = isSingleQuoted || (str.startsWith('"') && str.endsWith('"'));
  return isQouted ? str : `'${str}'`;
}

export function dblQuoted(str: string): string {
  const isDblQuoted = str.startsWith('"') && str.endsWith('"');
  const isQuoted = isDblQuoted || (str.startsWith("'") && str.endsWith("'"));
  return isQuoted ? str : `"${str}"`;
}
