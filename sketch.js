function setup () {
    createCanvas(800, 800);
       background('orange');
        
    }  
   
   function draw() {
   
   stroke('black')
   fill ('white')
   
   if (mouseIsPressed){
       rect(mouseX, mouseY, 99, 99);
    }
   }  