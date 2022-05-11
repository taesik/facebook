const express = require("express");
const cors = require('cors');
const app = express();
let allowed = ['http://localhost:3000','some other link'];
// function options(req, res) {
//   let tmp;
//   let origin = req.header('Origin');
//   if(allowed.indexOf(origin) >= 0) {
//     tmp = {
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   }else {
//     tmp = {
//       origin: 'stupid',
//     }
//   }
//   res(null,tmp);
// }
app.use(cors());


app.get("/", (req, res) => {
  res.send("welcome from home");
});
app.get("/books", (req, res) => {
  res.send("hahahahahahahhahahaaiidhiagduogauodhguagdigaiduygiuagduagdiu");
});
app.listen(8000, () => {
  console.log("server is lestining...");
});
