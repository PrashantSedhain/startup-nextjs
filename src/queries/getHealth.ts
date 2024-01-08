import { gql } from "@apollo/client"

const HEALTH = gql(`
  query {
    health
  }
`);

export default HEALTH;
