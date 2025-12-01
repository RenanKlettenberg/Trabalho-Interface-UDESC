const doneEp = document.querySelector(".img-assistido");

doneEp.addEventListener("click", () => {
  if (doneEp.src.includes("done.png")) {
    doneEp.src = "../imgs/purpleDone.png";

    avaliacao = document.querySelector(".sectionAvaliacao");
    avaliacao.style.display = "block";
    avaliacao.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    doneEp.src = "../imgs/done.png";
  }
});

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagemFav) => {
  personagemFav.addEventListener("click", () => {
    const img = personagemFav.querySelector("img");
    if (img.style.border == "none" || img.style.border == "") {
      if (!img.closest(".informacoes")) {
        img.style.border = "#BA3CF4 solid 3px";
      }
    } else {
      img.style.border = "none";
    }
  });
});

const caixas = document.querySelectorAll(".box");

caixas.forEach((sentimento) => {
  sentimento.addEventListener("click", () => {
    const emoji = sentimento.querySelector(".emoji");
    if (emoji.style.border == "none" || emoji.style.border == "") {
      emoji.style.border = "#BA3CF4 solid 3px";
    } else {
      emoji.style.border = "none";
    }
  });
});
