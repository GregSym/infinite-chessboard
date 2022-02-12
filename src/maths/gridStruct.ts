/// Default dict styled wrapper for js hashmap type
export class GridStruct {
  hashMap: Map<string, number> = new Map();
  constructor(hashMap: Map<string, number>) {
    [...hashMap.entries()].forEach((entry) => {
      this.hashMap.set(...entry);
    });
    // this.hashMap = hashMap;
    console.log(this.hashMap);
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
    console.log(this.hashMap);
  }

  shapedIteration(): number[][] {
    // boundaries
    var maxX = Math.max(...this.keys().map(([x,y]) => x));
    var maxY = Math.max(...this.keys().map(([x,y]) => y));
    var minX = Math.min(...this.keys().map(([x,y]) => x));
    var minY = Math.min(...this.keys().map(([x,y]) => y));

    // store indeces
    var nDArrayY: number[] = [];
    var nDArrayX: number[] = [];
    // create indeces
    for (var y = minY - 1; y < maxY + 1; y++) {
      nDArrayY.push(y);
    }
    for (var x = minX - 1; x < maxX + 1; x++) {
      nDArrayX.push(x);
    }
    console.log(nDArrayX.map((x) => nDArrayY.map((y) => this.get(x, y))));
    // return shaped array
    return nDArrayX.map((x) => nDArrayY.map((y) => this.get(x, y)));
  }

  copy(): GridStruct {
    var newHashMap: Map<string, number> = new Map();
    this.hashMap.forEach((value, key, _) => newHashMap.set(key, value));
    return new GridStruct(newHashMap);
  }
}
