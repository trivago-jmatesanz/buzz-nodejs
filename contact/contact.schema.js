export const schema = `
  type Query {
    contact(id: Int): Contact
    contacts: [Contact]
  }

  type Contact {
    id: Int!
    salutation: String
    firstName: String
    lastName: String
    workStatus: Boolean
    position: String
  }
`;
