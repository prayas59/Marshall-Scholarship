// functions/fetchUniversities.js
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=United+Kingdom"
    );
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
