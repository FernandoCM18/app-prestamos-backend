

const rootTypeDefs = `#graphql
   type Query {
    hello: String
  }

  type Mutation {
    hello(title: String): String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  enum Frecuency {
    WEEKLY
    MONTHLY
    ANNUAL
  }

  enum Days {
    MONDAY
    TUESDAY
    WEDNESDAY
    THURSDAY
    FRIDAY
    SATURDAY
    SUNDAY
  }

`;

export default [rootTypeDefs];