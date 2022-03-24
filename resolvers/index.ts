import { prisma } from "../server";

const testQuery = (parent, args, ctx, info) => {};
const testMutation = (parent, args, ctx, info) => {};

const resolvers = {
  Query: {
    testQuery,
  },
  Mutations: {
    testMutation,
  },
};

export default resolvers;
