//Crie a classe Towe
class Tower {
  //Utilize 'constructor' para que seja sempre atribuído aos objetos eixo X, eixo Y, largura e altura
  constructor(x, y, width, height) {
    //isStatic deixa o elemento estático
    //Para a torre ficar estática, deixe esse código verdadeiro
    var options = {
      isStatic : true
    };

    //'this' sempre contém a referência a um único objeto.
    // Como os objetos, eles podem ser atribuídos a variáveis. E assim como os objetos, elas têm suas próprias propriedades. 
    //Adicione 'this' nas variáveis abaixo
    this.towerImage = loadImage("assets/tower.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    //Utilize o código 'World.add' para adicionar ao mundo
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
      //push(); captura uma nova configuração. Adicione esse código para que essa configuação seja adicionada apenas para a torre
    push();
    //translate altera o 0 do eixo para uma determinada posição x e y
    //Adicione ele abaixo
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.towerImage, 0, 0, this.width, this.height);
    //pop(); reverte para a configuração antiga, adicone esse código na linha abaixo
    pop();
  }
}