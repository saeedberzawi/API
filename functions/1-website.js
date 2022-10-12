// http://localhost:8888/.netlify/functions/1-website

const data = require("../utils/myweb.json");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
