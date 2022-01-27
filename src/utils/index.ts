export function testMaximumStringSize(string:string, maxSize:number):boolean {
  if (string.length <= maxSize) {
    return true;
  }
  return false;
}
