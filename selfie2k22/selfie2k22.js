function setup() {
createCanvas(600, 600);
}
function draw() {
background(204);

noStroke();

fill(0)
beginShape();
vertex(200, 450);
vertex(160, 500);
vertex(70, 525);
vertex(50, 600);
vertex(470, 600);
vertex(450, 525);
vertex(340, 500);
vertex(300, 450);
vertex(200, 450);
endShape();//neck and body

fill(241, 189, 173);
ellipse(250, 300, 340, 400);//head shape

fill(254, 254, 254);
ellipse(175, 300, 60, 30);//left eye
ellipse(315, 302, 60, 30);//right eye

fill(104, 126, 77);
ellipse(175, 295, 30, 20);//left iris
ellipse(315, 297, 30, 20);//right iris

fill(0)
ellipse(175, 295, 12, 12);//left pupil
ellipse(315, 297, 12, 12);//right pupil

fill(208, 192, 128)
beginShape();
vertex(225, 270);
vertex(225, 250);
vertex(150, 240);
vertex(130, 255);
vertex(150, 255);
vertex(225, 270);
endShape();//left eyebrow

beginShape();
vertex(275, 270);
vertex(275, 250);
vertex(350, 240);
vertex(370, 255);
vertex(350, 255);
vertex(275, 270);
endShape();//right eyebrow

fill(207, 130, 114)
beginShape();
vertex(235, 300);
vertex(225, 350);
vertex(215, 355);
vertex(220, 365);
vertex(240, 370);
vertex(250, 370);
vertex(270, 365);
vertex(275, 355);
vertex(265, 350);
vertex(260, 300);
vertex(235, 300);
endShape();//nose

fill(0);
beginShape();
vertex(220, 362);
vertex(238, 367);
vertex(235, 362);
vertex(220, 362);
endShape();//nostril left

fill(0);
beginShape();
vertex(270, 362);
vertex(252, 367);
vertex(255, 362);
vertex(270, 362);
endShape();//nostril right

fill(132, 54, 52);
beginShape()
vertex(202, 412);//1
vertex(230, 407);//2
vertex(245, 412);//3
vertex(260, 407);//4
vertex(288, 412);//5
vertex(270, 422);//6
vertex(255, 427);//7
vertex(235, 427);//8
vertex(220, 422);//9
vertex(202, 412);//10
endShape();//bottom lip

fill(110, 41, 34);
beginShape()
vertex(195, 415);//1
vertex(230, 400);//2
vertex(245, 405);//3
vertex(260, 400);//4
vertex(295, 415);//5
vertex(270, 410);//6
vertex(245, 415);//7
vertex(220, 410);//8
vertex(195, 415);//9
endShape();//top lip

}
