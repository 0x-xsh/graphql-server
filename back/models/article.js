const {Schema, model} = require('mongoose')


const ArticleSchema = new Schema({
    name : String,
    description : String,
    img : String

})

const Article = model('Article', ArticleSchema)


module.exports = {Article, ArticleSchema}

