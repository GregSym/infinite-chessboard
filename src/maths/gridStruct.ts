/// Default dict styled wrapper for js hashmap type
export class GridStruct {
  hashMap: Map<string, number>;
  constructor(hashMap: Map<string, number>) {
    this.hashMap = hashMap;
  }

  keys: () => number[][] = () =>
    [...this.hashMap.keys()].map((indecesString) => [
      Number(indecesString[0]),
      Number(indecesString[1]),
    ]);

  get(x: number, y: number) {
    return this.hashMap.has(x.toString() + y.toString())
      ? this.hashMap.get(x.toString() + y.toString())
      : 0;
  }

  set(value: number, x: number, y: number) {
    this.hashMap.set(x.toString() + y.toString(), value);
  }

  shapedIteration(): number[][] {
    var maxX = Math.max(...this.keys().map((index) => index[0]));
    var maxY = Math.max(...this.keys().map((index) => index[1]));
    var minX = Math.min(...this.keys().map((index) => index[0]));
    var minY = Math.min(...this.keys().map((index) => index[1]));
    var nDArray: number[][] = [];
    for (var y = minY - 1; y < maxY + 1; y++) {
      nDArray.push([]);
      for (var x = minX - 1; x < maxX + 1; x++) {
        nDArray[y].push(this.get(x, y));
      }
    }
    return nDArray;
  }
}
