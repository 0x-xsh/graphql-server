

let btn = document.getElementById("submit")

btn.addEventListener('click', event =>{

    let name = document.getElementById("name").value
    let desc = document.getElementById("desc").value
    let file = document.getElementById("file").files[0]

    //upload to firebase/s3..etc
    //get download url
    let imgUrl = "/img/url"
    let response = create(name, desc, imgUrl)
    console.log(response);

    
})



const create = async function(name, desc, img){

    const response = await fetch("http://localhost:5000/", {
        body: JSON.stringify({
          query : `mutation Mutation($article: ArticleInput) {
            createArticle(article: $article) {
              name
              description
              img
            }
          }`,
          variables : {
            article : {
              "name":name,
              "description":desc,
              "img":img
            }
          }

        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      const responseJson = await response.json();
      return responseJson.data;


}