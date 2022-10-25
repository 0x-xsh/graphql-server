const {ApolloServer} = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")


const URI = "mongodb://localhost:27017/mydb"




const server = new ApolloServer({
  typeDefs,
  resolvers
})





mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
 
}).then(()=>{
  console.log("db connected");
  return server.listen({
    port: 5000
  })

}).then((res)=>{
  
  console.log(`server at ${res.url}`);
})



