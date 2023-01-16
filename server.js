const express = require("express");
const request = require("request");

const app = express();

app.get("/reportjson", (req, res) => {
    const xVersion = "5.0.0";
    const xSoftwareName = "Cardknox";
    const xSoftwareVersion = "2.1";
    const { xKey } = req.query;
    const { xCommand } = req.query;
    const { xBeginDate } = req.query;
    const { xEndDate } = req.query;
    const {xToken}  = req.query;
    const {xMaskedCardnumber} = req.query


    const body = JSON.stringify({
        xKey,
        xCommand,
        xVersion,
        xSoftwareName,
        xSoftwareVersion,
        xBeginDate,
        xEndDate,
        xToken,
        xMaskedCardnumber
      });

      request(
        {
          url: "https://x1.cardknox.com/reportjson",
          method: "POST",
          body: body,
        },

   

            
  
)})