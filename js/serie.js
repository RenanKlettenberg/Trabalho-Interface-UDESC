const showEpisodes = document.getElementById("showEpisodes");
const episodes = document.querySelector(".episodios");

showEpisodes.addEventListener("click", () => {
  if (episodes.style.display === "none") {
    showEpisodes.className = "fa-solid fa-angle-up";
    episodes.style.display = "block";
  } else {
    showEpisodes.className = "fa-solid fa-angle-down";
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
  let qtdPurple = 0;
  let qtdTotal = 0;
  epsTemp.forEach((doneEp) => {
    qtdTotal += 1;
    if (!doneEp.src.includes("purpleDone.png")) {
      isItPurple = false;
    } else{
      qtdPurple += 1;
    }
  });
  const imgTemporada = temporada.querySelector(".imgTemporada");
  const p = imgTemporada.querySelector("p");
  p.textContent = `${qtdPurple}/${qtdTotal}`
  if (isItPurple == true) {
    doneTemp.src = "../imgs/purpleDone.png";
  } else {
    doneTemp.src = "../imgs/done.png";
  }
}

const episodios = document.querySelectorAll('.info');

episodios.forEach(ep => {
  ep.addEventListener('click', () => {
    window.location.href = 'episodio.html'; 
  });
});

