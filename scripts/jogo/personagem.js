 class Personagem extends Animacao {
   constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
     super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
     this.imagem = imagem

     this.frameAtual = 0
     this.variacaoY = variacaoY
     this.yInicial = height - this.altura
     this.y = this.yInicial

     this.gravidade = 6
     this.velocidadeDoPulo = 0
     this.alturaDoPulo = -50
     this.pulos = 0
     this.invencivel = false
   }

   pula() {
     if (this.pulos < 2) {
       this.velocidadeDoPulo = this.alturaDoPulo
       this.pulos++
     }
   }

   aplicaGravidade() {
     this.y = this.y + this.velocidadeDoPulo
     this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
     if (this.y > this.yInicial) {
       this.y = this.yInicial
       this.pulos = 0
     }
   }

   ficaInvencivel() {
     this.invencivel = true
     setTimeout(() => {
       this.invencivel = false
     }, 1000)
   }

   // TODO Melhorar sistema de colisão
    estaColidindo(inimigo) {
      if(this.invencivel) {
        return false
      }
        let precisaoAlturaPersonagem = 0.9;
        let precisaoLarguraPersonagem = 0.6;
        let precisaoAlturaInimigo = 0.7;
        let precisaoLarguraInimigo = 0.7;

        // rectMode(CORNER);
//         ellipseMode(CENTER);

        
//             //console.log("Modo debug ativo");
//             noFill();
//             stroke(255, 204, 0);
//             strokeWeight(4);
//             ellipse(
//                 this.x + this.largura/2,
//                 this.y + this.altura/2,
//                 this.largura * precisaoLarguraPersonagem,
//                 this.altura * precisaoAlturaPersonagem,
//             )

            // rect(
            //     inimigo.x + (inimigo.largura - (inimigo.largura * precisaoLarguraInimigo))/2,
            //     inimigo.y + (inimigo.altura - (inimigo.altura * precisaoLarguraInimigo))/2,
            //     inimigo.largura * precisaoLarguraInimigo,
            //     inimigo.altura * precisaoAlturaInimigo,
            // )
            noStroke();
        

        let colidiu = collideRectCircle(
            inimigo.x + (inimigo.largura - (inimigo.largura * precisaoLarguraInimigo))/2,
            inimigo.y + (inimigo.altura - (inimigo.altura * precisaoLarguraInimigo))/2,
            inimigo.largura * precisaoLarguraInimigo,
            inimigo.altura * precisaoAlturaInimigo,

            this.x + this.largura/2,
            this.y + this.altura/2,
            this.largura * precisaoLarguraPersonagem,
            this.altura * precisaoAlturaPersonagem,
        );

        rectMode(CORNER);

        return colidiu;
    }}