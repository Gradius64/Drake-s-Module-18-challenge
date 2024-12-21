interface User {
  id: number;
  name: string;
  email: string;
}

// Step 2: Create a function that returns a User type
function getUser(): User {
  // Here you would typically fetch user data from an API or database
  return {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
  };
}

// Usage
const user = getUser();
console.log(user.name);