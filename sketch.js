var dog,sadDog,happyDog;
var milk,milkImage
var feedDog,addFoods,lastFed


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImage=loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  milk=createSprite(300,200,150,150)
  milk.addImage(milkImage)
  milk.scale=0.11

  feedpet=createButton("Feed the dog")
  feedpet.position(700,95)
  feedpet.mousePressed(feedDog)

  addfood=createButton("add Food")
  addfood.position(800,95)
  addfood.mousePressed(addFoods)



}

function draw() {
  background("green");


fill(255,255,254)
textSize(15)
if(lastFed>=12){
  text("Last Feed:"+lastFed%12 + "PM",350,30)
}else if(lastFed==0){
text("Last Feed:12 AM",350,30)
}else{
  text("Last Feed:"+lastFed+"AM",350,30)
}



  drawSprites();


//function to read food Stock
function feedDog(){
  dog.addImage(happyDog)


  if(foodObj.getFoodStock()<=0){
    foodObj.updatefoodstock(foodObj.getFoodStock()*0)

  }else{
    foodObj.updatefoodstock(foodObj.getFoodStock()-1)
  }
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog)
  foodObj.updatefoodstock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++
  database.ref('/').update({
    food:foodS
  })
}
}



