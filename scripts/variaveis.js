let imagemCenario
let imagemPersonagem
let imagemInimigo
let imagemGameOver
let imagemInimigoGrande
let imagemVoador
let imagemTelaInicial
let imagemVida
let fonteTelaInicial
let cenario
let personagem
let inimigo
let inimigoGrande
let inimigoVoador
let somDoJogo
let somPulo
let somGameOver
let pontuacao
let jogo
let cenario2


let cenaAtual = 'telaInicial'
let cenas
let telaInicial 
let botao
let vida
let fita
let ground
let gameOver

const inimigos = []
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizPersonagem = [
       [1920, 0],
       [1440, 0],
       [960, 0],
       [480, 0],
       [0, 0],
       
       [1920, 480],
       [1440, 480],
       [960, 480],
       [480, 480],
       [0, 480],
       
       [1920, 960],
       [1440, 960],
       [960, 960],
       [480, 960],
       [0, 960],
       
       [1920, 1440],
     ]
const matrizInimigoGrande = [
  [10, 55],
  [410, 55],
  [810, 55],
  [1210, 55],
  [1610, 55],
  [10, 455],
  [410, 455],
  [810, 455],
  [1210, 455],
  [1610, 455],
  [10, 855],
  [410, 855],
  [810, 855],
  [1210, 855],
  [1610, 855],
  [10, 1255],
  [410, 1255],
  [810, 1255],
  [1210, 1255],
  [1610, 1255],
  [10, 1655],
  [410, 1655],
  [810, 1655],
  [1210, 1655],
  [1610, 1655],
  [10, 2055],
  [410, 2055],
  [810, 2055],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
