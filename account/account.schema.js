export const schema = `
  type Query {
    account(id: Int): Account
  }

  type Account {
    id: Int!
    name: String
    contacts: [Contact]
  }
`;
