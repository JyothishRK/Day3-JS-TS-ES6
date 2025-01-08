function reverseArray<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}

export function learnGenerics(): number {
  const nums: number[] = [1, 2, 3, 4, 5];
  console.log(reverseArray(nums));

  const strings: string[] = ["Q", "W", "E", "R", "T", "Y"];
  console.log(reverseArray(strings));

  type Person = { name: string; age: number };
  const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  console.log(reverseArray(people));

  return 1;
}
