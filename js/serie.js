const showEpisodes = document.getElementById("showEpisodes");
const episodes = document.querySelector(".episodios");

showEpisodes.addEventListener("click", () => {
  if (episodes.style.display === "none") {
    episodes.style.display = "block";
  } else {
    episodes.style.display = "none";
  }
});

const doneEps = document.querySelectorAll(".done");

doneEps.forEach((doneEp) => {
  doneEp.addEventListener("click", () => {
    if (doneEp.src.includes("done.png")) {
      doneEp.src = "../imgs/purpleDone.png";
    } else {
      doneEp.src = "../imgs/done.png";
    }
    atualizarDoneTemp(doneEp.closest(".temporada"));
  });
});

function atualizarDoneTemp(temporada) {
  const doneTemp = temporada.querySelector(".doneTemp");
  const epsTemp = temporada.querySelectorAll(".done");
  let isItPurple = true;
  epsTemp.forEach((doneEp) => {
    if (!doneEp.src.includes("purpleDone.png")) {
      isItPurple = false;
    }
  });
  if (isItPurple == true) {
    doneTemp.src = "../imgs/purpleDone.png";
  } else {
    doneTemp.src = "../imgs/done.png";
  }
}

const episodios = document.querySelectorAll('.episodio');

episodios.forEach(ep => {
  ep.addEventListener('click', () => {
    window.location.href = 'episodio.html'; 
  });
});

