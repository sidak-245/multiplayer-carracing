var ball;
var database;
var databaseposition;
function setup(){
    database=firebase.database();
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballref = database.ref("ball/position");
ballref.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref("ball/position").update({
       "x":databaseposition.x + x,
       "y":databaseposition.y + y,
    

   });
}
function readposition(data){
databaseposition = data.val()
ball.x= databaseposition.x;
ball.y = databaseposition.y
}
function showerror(){
    console.log("error conecting to the database due to network error")
}