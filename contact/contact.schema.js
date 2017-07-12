export const schema = `
  type Query {
    contact(id: Int!): Contact
    contacts: [Contact]
  }

  type Mutation {
    insertContact(
      first_name: String!
      last_name: String!
      salutation: String!
      position: String!
      created_by: Int!
    ): Contact

    updateContact(
      id: Int!
      firstName: String
      lastName: String
      salutation: String
      position: String
      createdBy: Int!
    ): Contact

    deleteContact(id: [Int]!): Int
  }

  type Contact {
    id: Int!
    salutation: String
    first_name: String
    last_name: String
    position: String
    work_status: Boolean
    fullName: String
  }
`;
