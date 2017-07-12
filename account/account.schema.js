export const schema = `
  type Query {
    account(id: Int): Account
  }

  type Account {
    id: Int!
    name: String
    contacts: [Contact]
    accountHotel: AccountHotel
  }

  type AccountHotel {
    id: Int!
    item_id: Int
    chain_name: String
    category: Int
    hotel_type: String
    content_score: Int
    news: Boolean,
  }
`;
