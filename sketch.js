var menino, imgMenino;
var rua, imgRua;
var gameover, imgGameover;
var caro;

var moeda,nota,sacoMoedas,cofre

var imgmoeda,imgnotas,imgcofre,imgsaco_de_moedas;
var Gmoedas,Gcaros,Gnotas,Gcofres;

var imgcaro1,imgcaro2,imgcaro3,imgcaro4,imgcaro5,imgcaro6,
   imgcaro7,imgcaro8,imgcaro9,imgcaro10,imgcaro11,imgcaro12;


var ENCERRAR
var JOGAR
var estadodojogo = JOGAR

var placar = 0


var saco_de_moedas_grupo

var imgrestart, restart

function preload(){
 
  imgMenino = loadAnimation ("images/menino_correndo1.png","images/menino_correndo2.png",
 "images/menino_correndo3.png","images/menino_correndo4.png");
  imgRua = loadImage("images/Road.png");
 
  imgcaro1 = loadImage("images/Carro1.png");
  imgcaro2 = loadImage("images/Carro2.png");
  imgcaro3 = loadImage("images/Carro3.png");
  imgcaro4 = loadImage("images/Carro4.png");
  imgcaro5 = loadImage("images/Carro5.png");
  imgcaro6 = loadImage("images/Carro6.png");
  imgcaro7 = loadImage("images/Carro7.png");
  imgcaro8 = loadImage("images/Carro8.png");
  imgcaro9 = loadImage("images/Carro9.png");
  imgcaro10 = loadImage("images/Carro10.png");
  imgcaro11 = loadImage("images/Carro11.png");
  imgcaro12 = loadImage("images/Carro12.png");
  
  
  
  imgmoeda = loadImage("images/Moeda.png");
  imgnotas = loadImage("images/Notas.png");
  imgcofre = loadImage("images/Cofre.png");
  imgsaco_de_moedas = loadImage("images/saco de dinheiro.png");
  
  imgGameover = loadImage("images/gameOver.png");
  imgrestart = loadImage("images/restart.png")
}


function setup(){
createCanvas(600,600);
  
  
 Gcaros = createGroup();
 Gmoedas = createGroup();
 Gnotas = createGroup();
 Gcofres= createGroup();
 saco_de_moedas_grupo = createGroup();

  rua = createSprite (300,300);
  rua.addImage (imgRua);
  
  
  gameover = createSprite(300,250);
  gameover.addImage(imgGameover);
  gameover.visible = false
  
  menino = createSprite (250,250);
  menino.addAnimation ("correndo",imgMenino);
  menino.scale=0.4;
  //menino.debug = true;
  menino.setCollider("rectangle",10,-10,200,350);
  menino.velocityX = 4
  
  restart = createSprite (300,350);
  restart.addImage(imgrestart);
  restart.scale = 0.6
  restart.visible = false
  
  
}

function draw() {
  background(0);
  
  criarMoedas();
  drawSprites();
  gerarcarros();
  criarNotas();
  criarcofres();
  criarsacoMoedas();
  
 
  
  
   if(estadodojogo === JOGAR){
    
    rua.velocityX = (4+placar/100);
    
 if(menino.isTouching(Gmoedas)){
   placar = placar + 10
   Gmoedas.destroyEach();
   
 }
 if(menino.isTouching(Gnotas)){
   placar = placar + 40
   Gnotas.destroyEach();
   
  }    
    
    
 if(menino.isTouching(saco_de_moedas_grupo)){
   placar = placar + 70
   saco_de_moedas_grupo.destroyEach();
   
  }
    
    if(menino.isTouching(Gcofres)){
   placar = placar + 100
   Gcofres.destroyEach();
   
  } 
  
     if(keyDown("UP_ARROW")){
    menino.y = menino.y -7; } 
  
  if(keyDown("DOWN_ARROW")){
    menino.y = menino.y +7; }
     
      if(keyDown("LEFT_ARROW")){
    menino.x = menino.x -9; }
     
     if(keyDown("RIGHT_ARROW")){
    menino.x = menino.x +7; }
    
  
  
  if(rua.x > 1200 ){
    rua.x = width/2;
  }
  
    if (menino.isTouching(Gcaros)){
      rua.velocityX = 0
     
      saco_de_moedas_grupo.destroyEach();
      Gcofres.destroyEach();
      gameover.visible = true
      restart.visible = true
     
      menino.x = -2000
      Gcaros.x = -200
      estadojogo = ENCERRAR
       
     
    }
    
    
  }
  
   else if (estadodojogo === ENCERRAR){
     rua.velocityX = 0
     Gcaros.destroyEach();
     Gmoedas.destroyEach();
     Gnotas.destroyEach();
     saco_de_moedas_grupo.destroyEach();
     Gcofres.destroyEach();
     gameover.visible = true
     restart.visible = true
     reiniciar();
  }
  
  textSize(20);
  fill(255);
  text("Dinheiro: "+ placar,150,30);
  
  
}

function gerarcarros(){
  if(frameCount %80 === 0){
    caro = createSprite (-100,300)
    caro.setCollider("rectangle",10,20,300,150);
   //caro.debug = true;
    caro.velocityX = (6+placar/100);
    caro.y = Math.round(random(20,580));
    rand = Math.round(random(1,12));
    switch(rand){
      case 1: caro.addImage(imgcaro1);
        break;
      case 2: caro.addImage(imgcaro2); 
        break;
      case 3: caro.addImage(imgcaro3);
        break;
      case 4: caro.addImage(imgcaro4); 
        break;
      case 5: caro.addImage(imgcaro5);
        break;
      case 6: caro.addImage(imgcaro6); 
        break;
      case 7: caro.addImage(imgcaro7); 
        break;
      case 8: caro.addImage(imgcaro8); 
        break; 
      case 9: caro.addImage(imgcaro9); 
        break;
      case 10: caro.addImage(imgcaro10);
        break;
      case 11: caro.addImage(imgcaro11);
        break;
      case 12: caro.addImage(imgcaro12); 
        break;
      default: break; 
    }
    caro.scale = 0.7
    caro.lifetime = 200;
    Gcaros.add(caro)
  }
}

function criarMoedas() {
  if (frameCount % 200 === 0) {
   moeda = createSprite(-50,300);
  // moeda.debug = true;
   moeda.setCollider("circle",0,0,100);
   moeda.y = Math.round(random(20,580));
   moeda.addImage(imgmoeda);
   moeda.scale=0.2;
   moeda.velocityX = 4;
   moeda.lifetime = 200;
    Gmoedas.add(moeda);
  }
}

function criarNotas() {
  if (frameCount % 450 === 0) {
   nota = createSprite(-50,300)
   //nota.debug = true;
   nota.setCollider("rectangle",10,0,130,150);
   nota.y = Math.round(random(20,580));
   nota.addImage(imgnotas);
   nota.scale=0.3;
   nota.velocityX = 4;
   nota.lifetime = 200;
   Gnotas.add(nota);
  }
}

function criarsacoMoedas() {
  if (frameCount % 560 === 0) {
   sacoMoedas = createSprite(-50,350)
   //sacoMoedas.debug = true;
   sacoMoedas.y = Math.round(random(20,580));
   sacoMoedas.addImage(imgsaco_de_moedas);
   sacoMoedas.scale=0.3;
   sacoMoedas.velocityX = 4;
   sacoMoedas.lifetime = 200;
   saco_de_moedas_grupo.add(sacoMoedas)
  }
}

function criarcofres() {
  if (frameCount % 680 === 0) {
  cofre = createSprite(-50,300);
  //cofre.debug = true;
  cofre.y = Math.round(random(20,580));
  cofre.addImage(imgcofre);
  cofre.scale = 0.3;
  cofre.velocityX = 4;
  cofre.lifetime = 200;
  Gcofres.add(cofre);
  }
}

function reiniciar(){
  
if (mousePressedOver(restart)){
  estadojogo = JOGAR;
  Gcofres.destroyEach();
  Gnotas.destroyEach();
  Gmoedas.destroyEach();
  saco_de_moedas_grupo.destroyEach();
  placar = 0;
  gameOver.visible = false;
  restart.visible = false;
}  
  
}

