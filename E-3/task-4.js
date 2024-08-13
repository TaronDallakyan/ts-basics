var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
function welcome(role) {
    switch (role) {
        case Role.Admin:
            return "Welcome, ".concat(Role.Admin, "! You have full access.");
        case Role.User:
            return "Welcome, ".concat(Role.User, "! You have full access.");
        case Role.Guest:
            return "Welcome, ".concat(Role.Guest, "! You have full access.");
    }
}
console.log(welcome(Role.Admin));
console.log(welcome(Role.User));
console.log(welcome(Role.Guest));
