var http = require("https");

var options = {
  "method": "GET",
  "hostname": "service.datadirectcloud.com",
  "port": null,
  "path": "/api/odata/Salesforce/LEADS",
  "headers": {
    "accept": "application/json",
    "authorization": "Basic YWt1ZHJ5YToxMjNxd2VBU0Q=",
    "cache-control": "no-cache",
    "postman-token": "ff21fe29-ce7b-4e42-e645-388ad5858f10"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    var res = JSON.parse(body).d.results;
    var str = "Companies are "
    for (var i=0;i<res.length;i++){
        str = str + res[i].COMPANY + ", ";
        // console.log(res[i].COMPANY);
    }
    console.log(str);
  });
});

req.end();