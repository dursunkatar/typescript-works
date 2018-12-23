function topla(x, y) {
  return x + y;
}

function topla2(x: number, y: number): number {
  return x + y;
}

let topla3 = function(x: number, y: number): number {
  return x + y;
};

console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));

function topla4(x: number, y: number = 4): number {
  return x + y;
}

console.log(topla4(3));

function topla5(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

console.log(topla5(3, 40));

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Dursun","Ramazan","Ayşe"))
