var crypto = require('crypto');

exports.encode = function(payload, secret) {
  algorithm = 'HS265';

  var header = { type: 'JWT', alg: algorithm };

  var jwt = base64Encode(JSON.stringify(header)) + '.' + base64Encode(JSON.stringify(payload));
  jwt += '.' + sign(jwt, secret);

  return jwt;
};

function base64Encode(str) {
  return new Buffer(str).toString('base64');
};

function sign(str, key) {
  return crypto.createHmac('sha256', key).update(str).digest('base64');
}
