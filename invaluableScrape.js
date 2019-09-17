var soldPrices = document.getElementsByClassName("lot-result");
var soldArr = [];
for (var i = 0; i < soldPrices.length; i++) {
    soldArr.push(soldPrices[i].textContent)
}

var soldStr = "Sold: $600 Sold: $1,000 Sold: $400 Sold: $400 Sold: $400 Passed Sold: $1,700 Sold: $1,100 Sold: $850 Sold: $6,000 Sold: $1,500 Sold: $200 Sold: $800 Sold: $600 Passed Sold: $400 Sold: $3,000 Passed Sold: $200 Passed Passed Passed Sold: $400 Passed Passed Sold: $600 Sold: $600 Sold: $550 Sold: $3,250 Passed Sold: $375 Sold: $200 Passed Sold: $400 Passed Sold: $300 Sold: $1,800 Sold: $800 Sold: $300 Passed Passed Sold: $200 Sold: $325 Sold: $600 Passed Sold: $300 Sold: $200 Sold: $750 Passed Sold: $750 Sold: $450 Passed Sold: $3,000 Sold: $2,500 Passed Passed Sold: $400 Passed Sold: $600 Passed Passed Sold: $500 Sold: $400 Sold: $2,250 Passed Passed Sold: $950 Sold: $300 Sold: $25,000 Passed Sold: $350 Passed Sold: $600 Sold: $32,500 Passed Passed Sold: $600 Sold: $400 Sold: $800 Passed Sold: $800 Sold: $1,000 Sold: $500 Sold: $500 Sold: $400 Sold: $4,000 Sold: $750 Sold: $400 Passed Passed Sold: $200 Passed Sold: $550 Sold: $2,750 Sold: $2,250 Passed Sold: $300 Sold: $300 Passed Passed Passed Passed Passed Sold: $400 Sold: $425 Passed Sold: $200 Sold: $400 Passed Passed Passed Sold: $400 Passed Passed Sold: $800 Passed Sold: $400 Passed Passed Sold: $3,000 Sold: $1,000 Sold: $3,250 Sold: $2,250 Sold: $400 Sold: $600 Sold: $325 Sold: $1,000 Sold: $4,000 Passed Passed Passed Sold: $700 Passed Passed Passed Sold: $1,500 Sold: $475 Sold: $1,000 Sold: $500 Sold: $300 Passed Sold: $550 Passed Sold: $650 Sold: $600 Sold: $200 Sold: $350 Passed Passed Passed Sold: $350 Sold: $300 Sold: $1,700 Passed Passed Sold: $1,000 Passed Passed Sold: $800 Sold: $200 Passed Passed Sold: $17,000 Sold: $800 Passed Sold: $800 Sold: $3,000 Sold: $450 Sold: $900 Sold: $1,500 Sold: $2,500 Sold: $3,000 Sold: $400 Sold: $325 Passed Sold: $600 Sold: $600 Sold: $400 Passed Sold: $300 Sold: $6,500 Passed Sold: $2,500 Sold: $1,500 Sold: $2,000 Sold: $6,000 Passed Sold: $500 Sold: $375 Passed Sold: $350 Passed Passed Sold: $475 Passed Sold: $400 Sold: $425 Sold: $1,000 Sold: $2,750 Sold: $1,700"
    // var numbers = soldStr.match(/\d+/g).map(Number);

var soldArr = [];
var fullNum = '';
var newArr = [];
for (var i = 0; i < soldStr.length; i++) {
    if (soldStr[i] === "0" || soldStr[i] == "1" || soldStr[i] == "2" || soldStr[i] == "3" || soldStr[i] == "4" || soldStr[i] == "5" || soldStr[i] == "6" || soldStr[i] == "7" || soldStr[i] == "8" || soldStr[i] == "9") {
        // console.log(soldStr[i])
        fullNum += soldStr[i];
        if (soldStr[i + 1] === " ") {

            newArr.push(fullNum);
            fullNum = '';
        }
    }
    if (soldStr[i] === " " && soldStr[i + 1] !== "$") {

        // newArr.push(fullNum);
    }
}
// newArr.push(fullNum);

console.log(newArr);

//-----------------------------------------------------------------


// let prices = [];
// let r = document.getElementsByClassName("lot-result");
// for (let i = 0; i < r.length; i++) {
//     if (r[i].textContent.includes("$")) {
//         prices.push(r[i].textContent.substring(7));
//     }
//     $("h1").append(prices[i])
//     console.log(prices[i])
// }



//  steve's code


let prices = [];
let r = document.getElementsByClassName("lot-result");
for (let i = 0; i < r.length; i++) {
    if (r[i].textContent.includes("$")) {
        prices.push(r[i].textContent.substring(7));
        let d = document.createElement("div");
        d.textContent = prices[i];
        document.getElementsByClassName("space-bottom-wide auction-info-container")[0].prepend(d);

    }
}
console.log(prices);

//-----------------------------------