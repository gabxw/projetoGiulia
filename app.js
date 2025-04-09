document.getElementById("botao-clique").addEventListener("click", function() {
  document.getElementById("tela-inicial").classList.add("hidden");
  document.getElementById("conteudo").classList.remove("hidden");
  document.body.classList.add("fundo-romantico");
  iniciarSlideshow();
  iniciarContador();
  iniciarCoracoes();

  // Coloque o link da música aqui (exemplo: Spotify embed)
  document.getElementById("player-musica").src = "https://open.spotify.com/embed/track/3QI5bIozef0HZ1kJnA2RdT?utm_source=generator";
});

// Slideshow
const imagens = ["ft2.JPEG", "ft1.JPEG", "ft3.jpg", "ft4.jpg","ft5.jpg", "ft6.JPG","ft7.jpg", "ft8.jpg","ft9.JPEG",
   "ft10.JPEG","ft11.JPEG", "ft12.JPEG","ft13.JPEG", "ft14.JPEG","ft15.JPEG", "ft16.JPEG","ft17.JPEG", "ft18.JPEG"];
let index = 0;

function iniciarSlideshow() {
  const img = document.getElementById("imagem-atual");

  // Preload das imagens
  imagens.forEach(src => {
    const i = new Image();
    i.src = `imagens/${src}`;
  });

  img.src = `imagens/${imagens[index]}`;

  setInterval(() => {
    img.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % imagens.length;
      img.src = `imagens/${imagens[index]}`;
      img.classList.remove("fade-out");
    }, 500);
  }, 3000);
}


// Contador de tempo
function iniciarContador() {
  const dataInicio = new Date("2022-05-05T00:00:00");
  const elemento = document.getElementById("tempo-decorrido");

  function atualizarTempo() {
    const agora = new Date();
    let diff = Math.floor((agora - dataInicio) / 1000);

    const anos = Math.floor(diff / (60 * 60 * 24 * 365));
    diff %= (60 * 60 * 24 * 365);
    const dias = Math.floor(diff / (60 * 60 * 24));
    diff %= 60 * 60 * 24;
    const horas = Math.floor(diff / (60 * 60));
    diff %= 60 * 60;
    const minutos = Math.floor(diff / 60);
    const segundos = diff % 60;

    elemento.textContent = `${anos} anos, ${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
  }

  atualizarTempo();
  setInterval(atualizarTempo, 1000);
}

// Corações animados
function iniciarCoracoes() {
  setInterval(() => {
    const coracao = document.createElement("div");
    coracao.classList.add("coraçao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.textContent = "❤️";
    document.body.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }, 300);
}
