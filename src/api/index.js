import ApolloClient from "apollo-boost";

export default (client = new ApolloClient({
   uri: process.env.REACT_APP_API
}));
