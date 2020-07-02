
function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(40)
  somDoJogo.loop()
  jogo = new Jogo()
  telaInicial = new TelaInicial()
  gameOver = new TelaGameOver()
  jogo.setup()
  cenas = {
    jogo,
    telaInicial,
    gameOver,
   
}
  botao = new Botao('Iniciar',width/2,height/2)
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  //jogo.draw()
  cenas[cenaAtual].draw()
}

