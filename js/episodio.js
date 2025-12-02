const doneEp = document.querySelector(".img-assistido");
avaliacao = document.querySelector(".sectionAvaliacao");
const personagens = document.querySelectorAll(".personagem");
const caixas = document.querySelectorAll(".box");
const divNota = document.querySelector(".nota");
const divStar = divNota.querySelector(".star-review");
const stars = divStar.querySelectorAll("i");

doneEp.addEventListener("click", () => {
  if (doneEp.src.endsWith("done.png")) {
    doneEp.src = "../imgs/purpleDone.png";
    avaliacao.style.display = "block";

    personagens.forEach((personagem) => {
      personagem.style.border = "none";
    });

    caixas.forEach((sentimento) => {
      sentimento.style.border = "none";
    });

    stars.forEach((star) => {
      star.style.setProperty("color", "azure", "important");
    });

    avaliacao.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    doneEp.src = "../imgs/done.png";
    avaliacao.style.display = "none";

    notaAtual = 0;
    stars.forEach((star) => {
      star.style.setProperty("color", "azure", "important");
    });

    personagens.forEach((personagem) => {
      const img = personagem.querySelector("img");
      if (img) img.style.border = "none";
    });

    caixas.forEach((sentimento) => {
      const emoji = sentimento.querySelector(".emoji");
      if (emoji) emoji.style.border = "none";
    });
  }
});


personagens.forEach((personagemFav) => {
  personagemFav.addEventListener("click", () => {
    const img = personagemFav.querySelector("img");
    personagens.forEach((p) => {
      const outraImg = p.querySelector("img");
      if (outraImg && outraImg !== img) {
        outraImg.style.border = "none";
      }
    });
    if (img.style.border == "none" || img.style.border == "") {
      if (!img.closest(".informacoes")) {
        img.style.border = "#BA3CF4 solid 3px";
      }
    } else {
      img.style.border = "none";
    }
  });
});


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

const likes = document.querySelectorAll(".bi-heart");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    if(like.style.color == "white"){
    like.style.color = "#BA3CF4";
  } else{
    like.style.color = "white";
  }
  })
})

let notaAtual = 0; 

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    if (notaAtual === index + 1) {
      notaAtual = 0;
    } else {
      notaAtual = index + 1; 
    }

    stars.forEach((s, i) => {
      if (i < notaAtual) {
        s.style.setProperty("color", "#ba3cf4", "important");
      } else {
        s.style.setProperty("color", "azure", "important");
      }
    });
  });
});
