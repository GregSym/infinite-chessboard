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
    const nDArrayY: number[] = [];
    const nDArrayX: number[] = [];
    for (var y = minY; y < maxY + 1; y++) {
      nDArrayY.push(y);
    }
      for (var x = minX; x < maxX + 1; x++) {
        nDArrayX.push(x);
    }
    return nDArrayY.map(y => nDArrayX.map(x => this.get(x,y)));
  }
}
