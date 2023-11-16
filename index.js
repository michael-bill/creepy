const express = require('express');
const fs = require("fs");
const geoip = require('geoip-lite');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/client"));

app.get("/", function (request, response) {
    var temp = request.ip.split(":");
    var ip = temp[temp.length - 1];
    var geo = geoip.lookup(ip);
    var user = {
        time: getTime(),
        userAgent: request.header("user-agent"),
        ip: ip,
        geo: geo
    }
    console.log(user);
    var page = fs.readFileSync(__dirname + "/client/page.html").toString();
    response.send(
        page.replace(
            "{ipipipip}",
            '<span>IP-Address</span>: ' + user.ip +
            '<br><span>User-Agent</span>: ' + user.userAgent +
            (user.geo ? 
            '<br><span>Country</span>: ' + user.geo.country +
            '<br><span>City</span>: ' + user.geo.city +
            '<br><span>Region</span>: ' + user.geo.region +
            '<br><span>Timezone</span>: ' + user.geo.timezone +
            '<br><span>Coordinates</span>: [' + user.geo.ll[0] + ', ' + user.geo.ll[1] + ']' : "") +
            '<br><span>Time</span>: ' + user.time
        ).replace('{number}', getRandomInt(1, 20) + "")
    );
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getTime() {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date()
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('.') + " " + d.toLocaleTimeString();
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})