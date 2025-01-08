const user = {
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: "123 Main St",
};

const additionalInfo = {
  phone: "555-1234",
  isAdmin: true,
};

const users1 = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
];

const users2 = [
  { name: "Bob", age: 35 },
  { name: "Sarah", age: 28 },
];

export function destructureData() {
  const { name, email } = user;
  console.log("Name: " + name);
  console.log("Email: " + email);
}

export function combineData() {
  const newData = { ...user, ...additionalInfo };
  console.log(newData);
}

export function mergeUsers() {
  const allUsers = [...users1, ...users2];
  console.log(allUsers);
}
