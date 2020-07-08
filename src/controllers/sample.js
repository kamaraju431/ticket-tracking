const request = require("request");

exports.sampleCheck = (req, res, next) => {
    //callbacks
    res.json("Hello world");
  //   const successCB = result => {
  //     res.json(result);
  //   };
  //   const errorCB = error => {
  //     res.status(500).json({ error });
  //   };
  //   sampleCheck(successCB, errorCB);
 
  // function sampleCheck(successCB, errorCB) {
  //     try {
  //       successCB(JSON.parse("Hello World"));
  //     } catch (Exception) {
  //       errorCB({ message: Exception, status: 500 });
  //     }
  // };
}