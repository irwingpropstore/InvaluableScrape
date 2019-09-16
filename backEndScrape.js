var axios = require("axios");
var $ = require("cheerio");

const url = "https://www.invaluable.com/catalog/OEGRCFJUKX?size=200&page=2&categories=";

axios.get(url).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})