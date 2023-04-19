// Definindo variáveis
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var player = {
  x: width / 2,
  y: height / 2,
  speed: 5,
  width: 50,
  height: 50,
  jumping: false
};
var keys = [];

// Adicionando eventos
window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
window.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

// Função de atualização do jogo
function update() {
  // Verificando se o jogador está pulando
  if (player.jumping) {
    player.y -= player.speed * 2;
    player.speed -= 1;
    if (player.speed < -5) {
      player.jumping = false;
      player.speed = 5;
    }
  }
  // Movendo o jogador para a esquerda
  if (keys[37]) {
    player.x -= player.speed;
  }
  // Movendo o jogador para a direita
  if (keys[39]) {
    player.x += player.speed;
  }
  // Verificando se o jogador está no chão
  if (player.y + player.height >= height) {
    player.y = height - player.height;
    player.jumping = false;
  }
  // Desenhando o jogador
  ctx.fillStyle = "#fff";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Loop principal do jogo
function loop() {
  // Limpando a tela
  ctx.clearRect(0, 0, width, height);
  // Atualizando o jogo
  update();
  // Chamando o loop novamente
  requestAnimationFrame(loop);
}

// Iniciando o jogo
loop();
