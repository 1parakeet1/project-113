function setup(){
    canvas = createCanvas(1000,700);
    canvas.position(400, 250);
    view = createCapture(VIDEO);
    view.hide();

}

function draw(){
    image(view, 0, 0, 500, 500); 
    fill(0, 128, 0);
    rect(1, 1, 500, 55,);
    rect(1, 1, 55, 500,);
    rect(500, 1, 55, 555,);
    rect(0, 500, 500, 55,);
    fill(128, 0, 0);
    circle(50, 1, 100);
    circle(500, 1, 100);
    circle(50, 500, 100);
    circle(550, 500, 100);
}
function take_snapshot(){
    save("image");
}
