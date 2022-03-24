import { readFileSync } from "fs";
import path from "path";

const typeDefs = readFileSync(
  path.resolve(__dirname, "schema.graphql"),
  "utf-8"
);

export default typeDefs;
