let age: number = 7;
let userName: string = "Valodik";
let isAdmin: boolean = true;

function getNum(age: number): number {
  return age;
}

function getStr(userName: string): string {
  return userName;
}

function getBool(isAdmin: boolean): boolean {
  return isAdmin;
}

console.log(getNum(age));
console.log(getStr(userName));
console.log(getBool(isAdmin));
