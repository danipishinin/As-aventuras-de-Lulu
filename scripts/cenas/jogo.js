class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }
  setup() {
    cenario = new Cenario(imagemCenario, 2)
    cenario2 = new Cenario(ground, 2)
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 240, 240, 480, 480)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemVoador, width - 52, 300, 100, 75, 200, 150, 10)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)

  }
  keyPressed() {
    if (key === 'ArrowUp') {
      personagem.pula()
      somPulo.play()
    }
  }



  draw() {
    cenario.exibe()
    cenario.move()

    vida.draw()
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    personagem.exibe()
    personagem.aplicaGravidade()

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }
    cenario2.exibe()
    cenario2.move()

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.ficaInvencivel()
      if (vida.vidas === 0) {
        noLoop()
        cenaAtual = 'gameOver'
        gameOver.draw()
        somDoJogo.stop()
        somGameOver.play()
      }
    }
  }
}