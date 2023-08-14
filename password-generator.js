const generator = require("generate-password");

const randomPassword = generator.generate({
  length: 10,
  numbers: true,
  uppercase: true,
});

// 'uEyMTw32v9'
console.log(randomPassword);
