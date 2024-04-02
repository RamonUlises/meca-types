export const gameInitLocalStorage = () => {
  localStorage.setItem("gameInitial", "false");
};

export const cambioLocalStorage = () => {
  const gameInitial = localStorage.getItem("gameInitial");

  if (gameInitial === "true") {
    localStorage.setItem("gameInitial", "false");
  } else if (gameInitial === "false") {
    localStorage.setItem("gameInitial", "true");
  }
};

export const getLocalStorage = () => {
  const gameInitial = localStorage.getItem("gameInitial");
  if (gameInitial === "true") {
    return true;
  } else {
    return false;
  }
};

export const setCountdown = () => {
  const $li = document.querySelector(".active-time");
  const countdown = $li.textContent;
  const time = parseInt(countdown);
  localStorage.setItem("countdown", time);
};
export const getCountDown = () => {
  const countdown = localStorage.getItem("countdown");
  return countdown;
};
export const decreaseCountdown = () => {
  let countdown = localStorage.getItem("countdown");
  countdown--;
  localStorage.setItem("countdown", countdown);
};
