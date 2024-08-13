enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

function welcome(role: Role): string {
  switch (role) {
    case Role.Admin:
      return `Welcome, ${Role.Admin}! You have full access.`;

    case Role.User:
      return `Welcome, ${Role.User}! You have full access.`;

    case Role.Guest:
      return `Welcome, ${Role.Guest}! You have full access.`;
  }
}

console.log(welcome(Role.Admin));
console.log(welcome(Role.User));
console.log(welcome(Role.Guest));
