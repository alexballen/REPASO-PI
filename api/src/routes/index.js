const { Router } = require("express");
const { allDbApi } = require("../controler/allChar.js");
const { getApiEpisodes } = require("../controler/getEpisodes.js");
const { Character } = require("../db");
const { postCharacter } = require("../controler/postChar.js");

const router = Router();

// Configurar los routers

router.get("/characters", async (req, res) => {
  const getChar = await allDbApi();
  res.json(getChar);
});

router.get("/episodes", async (req, res) => {
  const getEpi = await getApiEpisodes();
  res.status(404).json(getEpi);
});

router.post("/character", async (req, res) => {
  const charCreated = await Character.create(req.body);
  await charCreated.addEpisode(req.body.episode);
  const creaChar = await postCharacter(charCreated);
  res.json(creaChar);
});

module.exports = router;
