var balls = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
//Construa as variáveis 'canvas', 'angle', 'tower', 'ground' e 'cannon' utilizando a mesma estrutura da linha 5
var canvas, angle, tower, ground, cannon;

function preload() {
  //Na linha 11, você está carregado uma imagem que está dentro da pasta 'assets'.
  //Precisamos fazer o mesmo para a torre, então...
  //Crie o 'towerImage' e carregue a imagem 'tower.png' que também está dentro da pasta 'assets'.
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  //Coloque a palavra 'new' para adicionar um objeto das classes Ground, Tower e Cannon
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  //Adicione o nome da variável que está guardando a imagem de fundo.
  //Dica: Você criou ela da function preload
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  //Na linha abaixo, você está exibindo o ground(solo), exiba também o cannon(canhão) e o tower(torre)
  ground.display();
  cannon.display();
  tower.display();
  
 
}


function keyPressed() {
  //Programe que 'se keyCode for igual à DOWN_ARROW
  if (keyCode == DOWN_ARROW) {
    //Utilize o código que cria um objeto da bola de canhão
    var cannonBall = new CannonBall (cannon.x, cannon.y);
    //Utilize o código 'push' para que as bolas de canhão sejam adicionadas na variável 'cannonBall'
    balls.push(cannonBall);
  }
}

//função para exibir a bala
function showCannonBalls(ball) {
  //Utilize o código que irá mostrar a bola na tela
  ball.display();

}


//Crie a função 'keyReleased'
function keyReleased() {
  if (keyCode === DOWN_ARROW) { 
    balls[balls.length - 1].shoot();
  }
}

