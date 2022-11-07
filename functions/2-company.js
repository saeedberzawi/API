require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appVDYXIQ0fwL0rcz")
  .table("comp");

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    // console.log(records);
    const comp = records.map((com) => {
      const { id } = com;
      const {
        name,
        description,
        adress,
        phone,
        phone2,
        email,
        website,
        // image,
        categories,
        villag,
      } = com.fields;
      //   const img = image[0].url;
      return {
        id,
        name,
        description,
        adress,
        phone,
        phone2,
        email,
        website,
        categories,
        villag,
        // img,
      };
    });
    // console.log(comp);
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify(comp),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
