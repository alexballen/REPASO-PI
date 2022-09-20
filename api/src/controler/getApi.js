const axios = require("axios");

const getCharApi = async () => {
  const gapi = (await axios.get("https://rickandmortyapi.com/api/character"))
    .data.results;
  const getApi = gapi.map((e) => {
    let obj = {
      image: e.image,
      name: e.name,
      origin: e.origin.name,
      species: e.species,
      episode: e.episode,
    };
    return obj;
  });
  return getApi;
};

module.exports = {
  getCharApi,
};
