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
    [...this.hashMap.keys()].map(([a, b, c, d]) => [
      Number(a !== "-" ? a : a + b),
      Number(a !== "-" && b !== "-" ? b : c !== "-" ? c : d),
    ]);

  get(x: number, y: number): number {
    return this.hashMap.has(x.toString() + y.toString())
      ? this.hashMap.get(x.toString() + y.toString())
      : 0;
  }

  set(value: number, x: number, y: number): void {
    this.hashMap.set(x.toString() + y.toString(), value);
    console.log(this.hashMap);
  }

  shapedIteration(): (number | number[][])[] {
    // boundaries
    var maxX = Math.max(...this.keys().map(([x, y]) => x));
    var maxY = Math.max(...this.keys().map(([x, y]) => y));
    var minX = Math.min(...this.keys().map(([x, y]) => x));
    var minY = Math.min(...this.keys().map(([x, y]) => y));
    console.log(maxX, maxY, minX, minY);

    // store indeces
    var nDArrayY: number[] = [];
    var nDArrayX: number[] = [];
    // create indeces
    for (var y = minY - 3; y < maxY + 3; y++) {
      nDArrayY.push(y);
    }
    for (var x = minX - 3; x < maxX + 3; x++) {
      nDArrayX.push(x);
    }
    console.log(
      nDArrayX.map((x, pos) =>
        nDArrayY.map((y, posy) => {
          console.log(this.get(x, y));
          return this.get(x, y);
        })
      )
    );
    // return shaped array
    return [
      nDArrayX.map((x) => nDArrayY.map((y) => this.get(x, y))),
      minX-1,
      minY-1,
    ];
  }

  copy(): GridStruct {
    var newHashMap: Map<string, number> = new Map();
    // do shallow copy
    this.hashMap.forEach((value, key, _) => newHashMap.set(key, value));
    return new GridStruct(newHashMap);
  }
}
