export const schema = `
  type Query {
    contact(id: Int): Contact
    contacts: [Contact]
  }

  type Mutation {
    insertContact(
      firstName: String!
      lastName: String!
      salutation: String!
      position: String!
      createdBy: Int!
    ): Contact

    deleteContact(id: Int!): Contact
  }

  type Contact {
    id: Int!
    salutation: String
    firstName: String
    lastName: String
    position: String
    workStatus: Boolean
  }
`;
