const axios = require("axios");

const authKey = "48b8bf0add7440d29814f6e7c9ab194a";
const beginQueryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey;


const helpers = {

  runQuery: function(endQueryURL) {
    console.log("endQueryURL");
    console.log(endQueryURL);

    //queryURL
    const queryURL = beginQueryURL+endQueryURL
    return axios.get(queryURL).then(function(response) {
      // console.log("axios get(queryURL) response");
      // console.log(response.data.response.docs);

      if (response.data.response.docs) {

        return response.data.response.docs;

      }

      console.log("error")
      return "";
    });
  },

  getSavedArticles: function() {
    return axios.get("/api")
                .then(function(res){
                  return res
                })
  },

  // This function posts new searches to our database.
  postSavedArticle: function(article) {
    return axios.post("/api", article);
  },

    // This function posts new searches to our database.
  deleteArticle: function(article) {
    return axios.post("/api/delete", article);
  }

};

// We export the API helper
module.exports = helpers;
