import { fetchAllPlayers } from "./ajaxHelpers.js";
import { renderAllPlayers, renderNewPlayerForm } from "./renderHelpers.js";

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  renderNewPlayerForm();
};

init();
