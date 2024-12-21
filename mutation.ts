import { gql } from 'apollo-server-express';
import { User } from './models/User'; // Adjust the path as necessary
import { Book } from './models/Book'; // Adjust the path as necessary
import { Auth } from './models/Auth'; // Adjust the path as necessary
import { signToken } from './utils/auth'; // Adjust the path as necessary

// Define your type definitions for the mutations
export const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  extend type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: String!, authors: [String!], title: String!, description: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
  }
`;

// Define your resolvers for the mutations
export const resolvers = {
  Mutation: {
    async login(parent: any, { email, password }: { email: string; password: string }) {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new Error('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    async addUser(parent: any, { username, email, password }: { username: string; email: string; password: string }) {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    async saveBook(parent: any, { bookId, authors, title, description, image, link }: { bookId: string; authors: string[]; title: string; description: string; image: string; link: string }, context: any) {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: { bookId, authors, title, description, image, link } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error('You need to be logged in!');
    },

    async removeBook(parent: any, { bookId }: { bookId: string }, context: any) {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new Error('You need to be logged in!');
    },
  },
};

