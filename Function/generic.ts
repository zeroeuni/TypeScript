//generic
type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);

//이렇게 하면 일일히 해야해서 번거롭고 효율적이지 못함...
//generic을 사용하는 경우 -> call signatures 에서 들어올 확실한 타입을 모를 때 사용
type SuperPrint2 = {
  <Generic>(arr: Generic[]): Generic;
};

const superPrint2: SuperPrint2 = (arr) => arr[0];

superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
superPrint2(["a", "b", "c"]);
superPrint2([1, 2, true, false]);
