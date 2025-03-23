const http = require("http");
const https = require("https");

let options = {
    hostname: 'place.dog',
    port: 443,
    path: "/300/200",
    method: "GET"
};

http.createServer((req,res)=>{
    res.setHeader("Content-Type","image/jpeg");
    getImage(res);
}).listen(3000);


async function getImage(outerRes){
    https.request(options,(innerRes)=>{
        innerRes.pipe(outerRes);
    }).end();
}