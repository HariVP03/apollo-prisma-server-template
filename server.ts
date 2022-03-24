import { PrismaClient } from "@prisma/client";
import resolvers from "@resolvers";
import typeDefs from "@typeDefs";
import { ApolloServer } from "apollo-server";

export const prisma = new PrismaClient();

const server = new ApolloServer({ resolvers, typeDefs });

server
  .listen()
  .then(({ url }) => {
    console.log(`Server started at ${url} 🚀`);
  })
  .catch((e) => {
    console.log(e);
  });
