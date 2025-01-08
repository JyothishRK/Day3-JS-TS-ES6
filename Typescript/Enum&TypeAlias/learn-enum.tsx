enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

type User = {
  id: number;
  name: string;
  role: UserRole;
};

function check(user: User): void {
  const { name, role } = user;
  if (user.role === "ADMIN") {
    console.log(`${name} has full admin access`);
  } else {
    console.log(`${name} has no admin access`);
  }
}

const users: User[] = [
  {
    id: 1,
    name: "John Admin",
    role: UserRole.Admin,
  },
  {
    id: 2,
    name: "Sarah Editor",
    role: UserRole.Editor,
  },
  {
    id: 3,
    name: "Mike Viewer",
    role: UserRole.Viewer,
  },
];

export function checkAccess(): number {
  users.forEach((user) => check(user));
  return 1;
}
