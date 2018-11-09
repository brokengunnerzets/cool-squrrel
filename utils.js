const randomstring = require('randomstring');

const getNewRoomName = () => {
  const random = randomstring.generate({
    length: 5,
    charset: 'alphanumeric',
    readable: true,
  });

  return random.toUpperCase();
}



module.exports = {
  getNewRoomName,
}
