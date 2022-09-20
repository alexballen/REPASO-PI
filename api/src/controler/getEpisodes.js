const axios = require("axios");
const { Episode } = require("../db");

const getApiEpisodes = async () => {
  const gApEpi = (await axios.get("https://rickandmortyapi.com/api/episode"))
    .data.results;
  const geApiEpi = gApEpi.map((e) => {
    let obj = {
      name: e.name,
    };
    return obj;
  });

  geApiEpi.forEach((e) => {
    Episode.findOrCreate({
      where: { name: e.name },
    });
  });

  const allEpisodes = await Episode.findAll();

  return allEpisodes;
};

module.exports = {
  getApiEpisodes,
};
