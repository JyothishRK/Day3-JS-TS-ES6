interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function fetchUserData(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users: User[] = await response.json();

    console.log("Fetched Users:");
    users.forEach((user) => {
      console.log(`
                Name: ${user.name}
                Email: ${user.email}
                Company: ${user.company.name}
                City: ${user.address.city}
            `);
    });
  } catch (error) {
    console.error(
      "Error fetching user data:",
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
}

export function getData(): number {
  console.log("Fetching user data...");
  fetchUserData().then(() => {
    console.log("Fetch operation completed.");
  });
  return 1;
}
