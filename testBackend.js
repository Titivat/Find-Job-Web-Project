const fetch = require("node-fetch");

fetch("https://horrible-turkey-61.loca.lt/api/position")
  .then(response => response.json())
  .then(data => console.log(data));