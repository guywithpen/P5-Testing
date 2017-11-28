var diam1 = 50; 
var r, g, b;
function setup(){
    createCanvas(500, 500);
    r = random(420);
    g = random(420);
    b = random(420);
}
function draw(){
    background(r, g, b);
    fill(r, g, b);
    stroke("purple");
    strokeWeight(5);
    rect(random(width), random(height), random(100), random(100));
    textSize(20);
    noStroke();
    fill("purple");
    text("now im over here :]", r, g, b);
    ellipse(random(width), random(height), random(100), random(100));
    
}


function mousePressed(){
    diam1 = diam1 + random(50);
    if(diam1 > 200){
    diam1 = 50
    }
    r = random(420);
    g = random(420);
    b = random(420);
}