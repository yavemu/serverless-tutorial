'use strict';

module.exports.index = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Welcome to Serverless!'
    }),
  };
};

module.exports.hello = async (event) => {
  
  let name = process.env.defaultName;
  if (event.queryStringParameters && event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${name}, nice to meet you!.`,
      }),
    };
};

module.exports.info = async (event) => {
  if (event.httpMethod === 'POST' && event.body) {
    let jsonBody = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hi, I have recived a JSON object from you!.`,
        object: jsonBody
      }),
    };
  }
}
