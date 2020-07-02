class TelaGameOver{
  constructor() {
    this._botao = new Botao('Reiniciar',width / 2, height / 7 * 5);

  }

  draw() {
    this._imagemDeFundo()
    this._botao.draw()
  }
  
  _imagemDeFundo() {
    image(imagemGameOver, 0, 0, width, height);
  }
}

  
