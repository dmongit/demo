const aws = require('aws-sdk');

module.exports.handler = async (event, context) => {
  console.log('event', event);

  const responseBody = {
    "key3": "value3",
    "key2": "value2",
    "key1": "value1"
  };

  var status = 200;
  const response = {
    'statusCode': status,
    'headers': {
      'Content-Type': 'application/json',
    },
    'body': JSON.stringify(responseBody),
    'isBase64Encoded': false
  };

  console.log('response', response)
  return response;
}

