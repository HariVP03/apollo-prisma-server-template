import { prisma } from "../server";

const testQuery = (parent, args, ctx, info) => {
  return "Hi";
};
const testMutation = (parent, args, ctx, info) => {
  return "Hi";
};

const resolvers = {
  Query: {
    testQuery,
  },
  Mutations: {
    testMutation,
  },
};

export default resolvers;
