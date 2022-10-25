/* eslint-disable no-unused-vars */

const {gql} = require('apollo-server')



module.exports = 
gql`
type Article {
    _id: ID,
    name: String,
    description: String,
    img: String
    
}
##can't make Article both type and input
input ArticleInput {
    _id: ID,
    name: String,
    description: String,
    img: String
    
}


type Query {
    getArticleById(ID: ID!): Article!
    getArticles(amount : Int): [Article]
    


}

type Mutation {
    createArticle(article: ArticleInput): Article!
    deleteArticle(ID: ID!): String!
    editArticle(ID: ID!, article: ArticleInput): Article!


}



`