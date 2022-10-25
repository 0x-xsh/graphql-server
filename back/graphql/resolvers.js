/* eslint-disable no-unused-vars */
const { Article } = require("../models/article");

module.exports = {
  Query: {

    async getArticleById(_, { ID }) {
      return await Article.findById(ID);
    },



    async getArticles(_, { amount }) {
      return await Article.find({}).limit(amount);
    },

  },


  Mutation: {
    async createArticle(_, {article : {name, description, img}}) {
        const article = new Article({
            name : name,
            description : description,
            img : img

        })
        
        
      return await article.save()
    },
  
    async deleteArticle(_, {ID}){
      await Article.findByIdAndDelete(ID, function(error, doc){
        if (error){
          return "error"
        }
        return ID
      })
      


    },


    async editArticle(_, {ID, article : { name, desc, img}}){
      const article = await Article.findByIdAndUpdate(ID,{

        name : name,
        description : desc,
        img : img

      })

      return await article.save()

    }
  
  
  
  
  },
};
