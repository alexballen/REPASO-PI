const { getCharApi } = require("./getApi");
const { Character, Episode } = require("../db");

const getDb = async () => {
  const getDbChar = await Character.findAll({
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return getDbChar;
};

const allDbApi = async () => {
  const gapi = await getCharApi();
  const pchar = await getDb();
  const apiDb = await gapi.concat(pchar);
  return apiDb;
};

module.exports = {
  allDbApi,
};
