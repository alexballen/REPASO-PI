const { Character, Episode } = require("../db");
//

const postCharacter = async (infquery) => {
  const infChar = await Character.findOne({
    where: {
      name: infquery.toJSON().name,
    },
    include: Episode,
  });
  return infChar;
};

module.exports = {
  postCharacter,
};
