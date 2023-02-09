const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
//Construa as variáveis 'canvas', 'angle', 'tower', 'ground' e 'cannon' utilizando a mesma estrutura da linha 5
???

function preload() {
  //Na linha 11, você está carregado uma imagem que está dentro da pasta 'assets'.
  //Precisamos fazer o mesmo para a torre, então...
  //Crie o 'towerImage' e carregue a imagem 'tower.png' que também está dentro da pasta 'assets'.
  backgroundImg = loadImage("./assets/background.gif");
  ???
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  //Coloque a palavra 'new' para adicionar um objeto das classes Ground, Tower e Cannon
  ground = ??? Ground(0, height - 1, width * 2, 1);
  tower = ??? Tower(150, 350, 160, 310);
  cannon = ??? Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  //Adicione o nome da variável que está guardando a imagem de fundo.
  //Dica: Você criou ela da function preload
  image(???, 0, 0, width, height);

  

  Engine.update(engine);
  //Na linha abaixo, você está exibindo o ground(solo), exiba também o cannon(canhão) e o tower(torre)
  ground.display();
  ???
  ???
  
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  
 
}


