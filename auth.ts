import type { Request, Response, NextFunction } from 'express';








interface JwtPayload {
  _id: unknown;
  username: string;
  email: string,
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    
};




type Auth = {
  token: string;
  user: {
      id: number;
      email: string;
      name: string;
  };
};

// Implement the login function

 {
  // Example API call (replace with actual API endpoint)
  
      
      


  
  /// add user 
  class User {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}

}
}

// Define the Auth type
type Auth = {
  username: string;
  email: string;
  token: string; // Assuming you want to return a token upon successful authentication
};

// Function to add a user
function addUser(username: string, email: string, password: string): Auth {
  // Here you would typically have logic to add the user to a database
  // and generate a token for authentication.

  // For demonstration purposes, we'll return a mock Auth object.
  const token = "mockToken"; // This should be generated securely in a real application.

  return {
      username,
      email,
      token,
  };
}

// Example usage
const newUser = addUser("johnDoe", "john@example.com", "securePassword123");
console.log(newUser);
