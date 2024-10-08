require("dotenv/config");
const statsCard = require("./api/index.js");
const repoCard = require("./api/pin.js");
const langCard = require("./api/top-langs.js");
const wakatimeCard = require("./api/wakatime.js");
const express = require("express");

const app = express();
app.listen(process.env.port || 9000);

app.get("/", statsCard);
app.get("/api", statsCard);
app.get("/pin", repoCard);
app.get("/top-langs", langCard);
app.get("/wakatime", wakatimeCard);

// http://localhost:9000/api?icon_color=333&hide_border=true&title_color=333&username=WindrunnerMax&show_icons=true&include_all_commits=true
console.log("http://localhost:9000/");
