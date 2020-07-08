const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const jsonParser = bodyParser.json({ limit: '500mb' });
const app = express();
app.use(cors());

const sampleController = require('./src/controllers/sample');
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log("port-->", PORT)
});
app.get('/v1/hello', sampleController.sampleCheck);

// if(process.env.NODE_ENV ==="production" ||
// process.env.NODE_ENV ==="stage" ||
// process.env.NODE_ENV ==="test"||
// process.env.NODE_ENV ==="dev"){
//   app.use(express.static(path.join(__dirname,"/build")));
//   app.get("*",(req,res)=>{
//     res.sendfile(path.join(__dirname + "/build/index.html"));
//   });
// }
