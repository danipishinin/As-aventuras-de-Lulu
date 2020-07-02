class Botao{
  constructor(texto,x,y){
    this.texto = texto
    this.x = x
    this.y = y
    this.botao = createButton(this.texto)
    this.botao.mousePressed(() => this.alteraCena())
    //estilizando o botão
    this.botao.addClass('botao-tela-inicial')
  }
  
  draw(){
    this.botao.position(this.x,this.y)
    this.botao.center('horizontal')
  }
  alteraCena(){
    this.botao.remove()
    
    if (cenaAtual == 'gameOver') 
      window.location.reload()
    else
      cenaAtual = 'jogo'
  }
}