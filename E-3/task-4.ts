enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

function welcome(role: Role): string {
  switch (role) {
    case Role.Admin:
      return "Welcome, Admin! You have full access.";

    case Role.User:
      return "Welcome, User! You have limited access.";

    case Role.Guest:
      return "Welcome, Guest! Please sign up to gain access.";
  }
}

console.log(welcome(Role.Admin));
console.log(welcome(Role.User));
console.log(welcome(Role.Guest));
