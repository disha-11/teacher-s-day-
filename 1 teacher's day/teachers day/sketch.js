
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var gamestate="play";

var m1,m1img;
var m2,m2img;
var q,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j;
var q1,e1,r1,t1,y1,u1,i1,o1,p1,a1,s1,d1,f1,g1,h1,j1;
var black;
var next;
var nextimg;
var blackimg;
var text,textimg;
var line,lineimg;

var text2,text3;

var last,last1;

var aish,bhuv,bin,chin,dad,gaya,apa,meen, mom ,raj ,sasi,seem,seeth,uma,usha;
var aish1,bhuv1,bin1,chin1,dad1,gaya1,apa1,meen1, mom1 ,raj1 ,sasi1,seem1,seeth1,uma1,usha1;

var blue,pink,orange,green,turq,db,dp,brown;
var blue1,pink1,orange1,green1,turq1,db1,dp1,brown1;

var a2,b2,c2,d2,e2,f2,g2,h2,i2,j2,k2,l2,z2,n2,o2,p2,q2,r2,s2,t2,u2,v2,w2,x2,y2;
var a3,b3,c3,d3,e3,f3,g3,h3,i3,j3,k3,l3,z3,n3,o3,p3,q3,r3,s3,t3,u3,v3,w3,x3,y3;
var pink5;

var alpha,alpha2,alpha3,alpha4,alpha5;
var alphai,alpha2i,alpha3i,alpha4i,alpha5i;

var back1,back2,back3,back4,back5;
var back1q,back2q,back3q,back4q,back5q;

var next1,next2;

function preload()
{
  m1img=loadImage("images/front.png");
  m2img=loadImage("images/play.png");
lineimg=loadImage("images/line.png");
textimg=loadImage("images/text.png");
  nextimg=loadImage("images/next.png");

  blackimg=loadImage("images/black.png");
  blue=loadImage("images/blue.png");
  pink=loadImage("images/pink.png");
  orange=loadImage("images/orange.png");
  green=loadImage("images/green.png");
  turq=loadImage("images/turquoise.png");
  db=loadImage("images/dull blue.png");
  dp=loadImage("images/darkpink.png");
  brown=loadImage("images/brown.png");
  pink5=loadImage("images/pink5.png");
  
  text3=loadImage("images/letterback.png");

  q=loadImage("images/(18).png");
  e=loadImage("images/(2).png");
  r=loadImage("images/(3).png");
  t=loadImage("images/(4).png");
  y=loadImage("images/(5).png");
  u=loadImage("images/(6).png");
  i=loadImage("images/(7).png");
  o=loadImage("images/(8).png");
  p=loadImage("images/(9).png");
 // a=loadImage("images/(10).png");
  s=loadImage("images/(19).png");
  d=loadImage("images/(12).png");
  f=loadImage("images/(13).png");
  g=loadImage("images/(14).png");
  h=loadImage("images/(15).png");
  j=loadImage("images/(16).png");
  
  

 aish=loadImage("images/aishwarya.png");
apa=loadImage("images/aparna.png");
bhuv=loadImage("images/bhuvaneshwari.png");
bin=loadImage("images/bindu.png");
chin=loadImage("images/chinnu.png");
dad=loadImage("images/dad.png");
gaya=loadImage("images/gayathri.png");
meen=loadImage("images/meenakshi.png");
mom=loadImage("images/mom.png");
raj=loadImage("images/rajni.png");
sasi=loadImage("images/sasi.png");
seem=loadImage("images/seema.png");
seeth=loadImage("images/seethalakshmi.png");
uma=loadImage("images/uma.png");
usha=loadImage("images/usha.png");


a2=loadImage("letters/a.png");
b2=loadImage("letters/b.png")
c2=loadImage("letters/c.png")
d2=loadImage("letters/d.png")
e2=loadImage("letters/e.png")
f2=loadImage("letters/f.png")
g2=loadImage("letters/g.png")
h2=loadImage("letters/h.png")
i2=loadImage("letters/i.png")
j2=loadImage("letters/j.png")
k2=loadImage("letters/k.png")
l2=loadImage("letters/l.png")
z2=loadImage("letters/m.png")
n2=loadImage("letters/n.png")
o2=loadImage("letters/o.png")
p2=loadImage("letters/p.png")
q2=loadImage("letters/q.png")
r2=loadImage("letters/r.png")
s2=loadImage("letters/s.png")
t2=loadImage("letters/t.png")
u2=loadImage("letters/u.png")
v2=loadImage("letters/v.png")
w2=loadImage("letters/w.png")
x2=loadImage("letters/x.png")
y2=loadImage("letters/y.png")


alphai=loadImage("alpha/alpha.png");
alpha2i=loadImage("alpha/alpha2.png");
alpha3i=loadImage("alpha/alpha3.png");
alpha4i=loadImage("alpha/alpha4.png");
alpha5i=loadImage("alpha/alpha5.png");

back1q=loadImage("back/1back.png")
back2q=loadImage("back/2back.png")
back3q=loadImage("back/3back.png")
//back4q=loadImage("back/4back.png")
back5q=loadImage("back/5back.png")

next1=loadImage("images/next1.png");
last=loadImage("images/last.png");
}

function setup() {
	createCanvas(1537, 710);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(43,80,106);
  console.log(gamestate);
  if (gamestate==="play"){
    play();
    
  }


if(gamestate==="note"){
  background(0)

  m1.visible=false;
  m2.visible=false;

  black=createSprite(150,50,200,20);
  black.addImage("img",blackimg);
  black.scale=10.0;

    text=createSprite(1150,220,200,20);
    text.addImage("img",textimg);
    text.scale=0.7;

    line=createSprite(930,640,200,20);
    line.addImage("img",lineimg);
    line.scale=0.8;

    next=createSprite(1150,500,200,20);
    next.addImage("img",nextimg);
    next.scale=0.8;

      

  q1=createSprite(150,50,200,20);
  q1.addImage("img",q);
  q1.scale=0.8;

  e1=createSprite(150,200,20,20);
  e1.addImage("img",e);
  e1.scale=0.8;

  r1=createSprite(150,350,20,20);
  r1.addImage("img",r);
  r1.scale=0.8;

  t1=createSprite(150,500,20,20);
  t1.addImage("img",t);
  t1.scale=0.8;

  y1=createSprite(150,650,20,20);
  y1.addImage("img",y);
  y1.scale=0.8;

  u1=createSprite(450,50,20,20);
  u1.addImage("img",u);
  u1.scale=0.8;

  i1=createSprite(450,200,20,20);
  i1.addImage("img",i);
  i1.scale=0.8;

  o1=createSprite(450,350,20,20);
  o1.addImage("img",o);
  o1.scale=0.8;

  p1=createSprite(450,500,20,20);
  p1.addImage("img",p);
  p1.scale=0.8;


  s1=createSprite(450,650,20,20);
  s1.addImage("img",s);
  s1.scale=0.8;

  d1=createSprite(720,50,20,20);
  d1.addImage("img",d);
  d1.scale=0.8;
 

  f1=createSprite(720,200,20,20);
  f1.addImage("img",f);
  f1.scale=0.8;

  g1=createSprite(720,350,20,20);
  g1.addImage("img",g);
  g1.scale=0.8

  h1=createSprite(720,500,20,20);
  h1.addImage("img",h);
  h1.scale=0.8

  j1=createSprite(720,650,20,20);
  j1.addImage("img",j);
  j1.scale=0.8




if(mousePressedOver(q1)){
  gamestate="aish1"
}

if(mousePressedOver(s1)){
  gamestate="apa1"
}

if(mousePressedOver(e1)){
  gamestate="bhuv1"
}

if(mousePressedOver(j1)){
  gamestate="bin1"
}

if(mousePressedOver(g1)){
  gamestate="chin1"
}

if(mousePressedOver(i1)){
  gamestate="dad1"
}

if(mousePressedOver(r1)){
  gamestate="gaya1"
}

if(mousePressedOver(y1)){
  gamestate="meen1"
}

if(mousePressedOver(u1)){
  gamestate="mom1"
}

if(mousePressedOver(f1)){
  gamestate="raj1"
}

if(mousePressedOver(h1)){
  gamestate="sasi1"
}

if(mousePressedOver(p1)){
  gamestate="seem1"
}

if(mousePressedOver(t1)){
  gamestate="seeth1"
}

if(mousePressedOver(d1)){
  gamestate="uma1"
}

if(mousePressedOver(o1)){
  gamestate="usha1"
}

if(mousePressedOver(next)){
  gamestate="letters"
}
}

if(gamestate==="letters"){
  black=createSprite(150,50,200,20);
  black.addImage("img",blackimg);
  black.scale=10.0;

  text2=createSprite(1150,270,200,20);
    text2.addImage("img",text3);
    text2.scale=0.9;


a3=createSprite(130,100,10,10);
a3.addImage("img",a2);
a3.scale=1.0;

b3=createSprite(300,90,10,10);
b3.addImage("img",b2);
b3.scale=1.0;


c3=createSprite(470,95,10,10);
c3.addImage("1mg",c2);
c3.scale=1.0;

d3=createSprite(630,95,10,10);
d3.addImage("1mg",d2);
d3.scale=1.0;

e3=createSprite(780,95,10,10);
e3.addImage("1mg",e2);
e3.scale=1.0;

f3=createSprite(130,230,10,10);
f3.addImage("1mg",f2);
f3.scale=1.0;

k3=createSprite(130,360,10,10);
k3.addImage("1mg",k2);
k3.scale=1.0;

p3=createSprite(130,490,10,10);
p3.addImage("1mg",p2);
p3.scale=1.0;

u3=createSprite(130,620,10,10);
u3.addImage("1mg",u2);
u3.scale=1.0;

g3=createSprite(290,225,10,10);
g3.addImage("1mg",g2);
g3.scale=1.0;

h3=createSprite(465,220,10,10);
h3.addImage("1mg",h2);
h3.scale=1.0;

i3=createSprite(610,220,10,10);
i3.addImage("1mg",i2);
i3.scale=1.0;

j3=createSprite(780,220,10,10);
j3.addImage("1mg",j2);
j3.scale=1.0;

l3=createSprite(290,360,10,10);
l3.addImage("1mg",l2);
l3.scale=1.0;

z3=createSprite(470,350,10,10);
z3.addImage("1mg",z2);
z3.scale=1.0;

n3=createSprite(630,360,10,10);
n3.addImage("1mg",n2);
n3.scale=1.0;

o3=createSprite(769,360,10,10);
o3.addImage("1mg",o2);
o3.scale=1.0;

q3=createSprite(290,500,10,10);
q3.addImage("1mg",q2);
q3.scale=1.0;

r3=createSprite(470,510,10,10);
r3.addImage("1mg",r2);
r3.scale=1.0;

s3=createSprite(640,510,10,10);
s3.addImage("1mg",s2);
s3.scale=1.0;

t3=createSprite(780,510,10,10);
t3.addImage("1mg",t2);
t3.scale=1.0;

v3=createSprite(280,630,10,10);
v3.addImage("1mg",v2);
v3.scale=1.0;

w3=createSprite(460,630,10,10);
w3.addImage("1mg",w2);
w3.scale=1.0

x3=createSprite(640,630,10,10);
x3.addImage("1mg",x2);
x3.scale=1.0

y3=createSprite(790,630,10,10);
y3.addImage("1mg",y2);
y3.scale=1.0;


if(mousePressedOver(a3)){
    gamestate="a3"
  }
  if(mousePressedOver(b3)){
    gamestate="b3"
  }
  if(mousePressedOver(c3)){
    gamestate="c3"
  }
  if(mousePressedOver(d3)){
    gamestate="d3"
  }
  if(mousePressedOver(e3)){
    gamestate="e3"
  }
  if(mousePressedOver(f3)){
    gamestate="f3"
  }
  if(mousePressedOver(g3)){
    gamestate="g3"
  }
  if(mousePressedOver(h3)){
    gamestate="h3"
  }
  if(mousePressedOver(i3)){
    gamestate="i3"
  }
  if(mousePressedOver(j3)){
    gamestate="j3"
  }
  if(mousePressedOver(k3)){
    gamestate="k3"
  }
  if(mousePressedOver(l3)){
    gamestate="l3"
  }
  if(mousePressedOver(n3)){
    gamestate="n3"
  }
  if(mousePressedOver(o3)){
  
    gamestate="o3"
  }
  
  if(mousePressedOver(p3)){
    gamestate="p3"
  }
  if(mousePressedOver(q3)){
    gamestate="q3"
  }
  if(mousePressedOver(r3)){
    gamestate="r3"
  }
  if(mousePressedOver(s3)){
    gamestate="s3"
  }
  if(mousePressedOver(t3)){
    gamestate="t3"
  }
  if(mousePressedOver(u3)){
    gamestate="u3"
  }
  if(mousePressedOver(v3)){
    gamestate="v3"
  }
  if(mousePressedOver(w3)){
    gamestate="w3"
  }
  if(mousePressedOver(x3)){
    gamestate="x3"
  }
  if(mousePressedOver(y3)){
    gamestate="y3"
  }
  if(mousePressedOver(z3)){
    gamestate="z3"
  }
}

if (gamestate==="e3"||gamestate==="j3"||gamestate==="t3"||gamestate==="o3"||gamestate==="y3"){
  back2=createSprite(768,310,20,20);
back2.addImage("123",back2q);
back2.scale=2.0;
  alpha5=createSprite(768,310,20,20);
  alpha5.addImage("123",alpha5i);
 
  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  

  if(mousePressedOver(next2)){
    gamestate="last";
  }
}
if (gamestate==="a3"||gamestate==="f3"||gamestate==="k3"||gamestate==="p3"||gamestate==="u3"){
  back5=createSprite(768,310,20,20);
  back5.addImage("123",back5q);
  back5.scale=2.0;
  alpha2=createSprite(768,310,20,20);
  alpha2.addImage("123",alpha2i);
  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
}
  

  if (gamestate==="b3"||gamestate==="g3"||gamestate==="l3"||gamestate==="q3"||gamestate==="v3"){
    back3=createSprite(768,310,20,20);
    back3.addImage("123",back3q);
    back3.scale=2.0;
    alpha=createSprite(768,310,20,20);
    alpha.addImage("123",alphai);

    next2=createSprite(1450,650,200,20);
    next2.addImage("img",next1);
    next2.scale=0.8;
    
    if(mousePressedOver(next2)){
      gamestate="last";
    }
  }


  if (gamestate==="w3"||gamestate==="r3"||gamestate==="z3"||gamestate==="h3"||gamestate==="c3"){
    back3=createSprite(768,310,20,20);
back3.addImage("123",back3q);
back3.scale=2.0;
    alpha3=createSprite(768,310,20,20);
    alpha3.addImage("123",alpha3i);

    next2=createSprite(1450,650,200,20);
    next2.addImage("img",next1);
    next2.scale=0.8;
    
    if(mousePressedOver(next2)){
      gamestate="last";
    }
  }


  if (gamestate==="d3"||gamestate==="i3"||gamestate==="n3"||gamestate==="s3"||gamestate==="x3"){
   back1=createSprite(768,310,20,20);
back1.addImage("123",back1q);
back1.scale=2.5;
    alpha4=createSprite(768,370,20,20);
    alpha4.addImage("123",alpha4i);
  
    next2=createSprite(1450,650,200,20);
    next2.addImage("img",next1);
    next2.scale=0.8;

    if(mousePressedOver(next2)){
      gamestate="last";
    }
  }


  
  

if (gamestate==="last"){
  black=createSprite(150,50,200,20);
  black.addImage("img",blackimg);
  black.scale=10.0;

 last1=createSprite(850,350,200,20);
  last1.addImage("img",last);
  last1.scale=1.0;
}



if(gamestate==="aish1"){

blue1=createSprite(768,310,20,20);
blue1.addImage("123",blue);
blue1.scale=2.0;
aish1=createSprite(768,310,20,20);
aish1.addImage("123",aish);
aish1.scale=1.3;

next2=createSprite(1450,650,200,20);
next2.addImage("img",next1);
next2.scale=0.8;

if(mousePressedOver(next2)){
  gamestate="last";
}
}

if(gamestate==="apa1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  apa1=createSprite(768,350,20,20);
  apa1.addImage("123",apa);
  apa1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="bin1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  bin1=createSprite(768,350,20,20);
  bin1.addImage("123",bin);
  bin1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="sasi1"){

  orange1=createSprite(768,310,20,20);
  orange1.addImage("123",orange);
  orange1.scale=2.0;
  sasi1=createSprite(768,330,20,20);
  sasi1.addImage("123",sasi);
  sasi1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="chin1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  chin1=createSprite(768,340,20,20);
  chin1.addImage("123",chin);
  chin1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="raj1"){

 turq1=createSprite(768,310,20,20);
 turq1.addImage("123",turq);
 turq1.scale=2.0;
  raj1=createSprite(768,310,20,20);
  raj1.addImage("123",raj);
  raj1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="uma1"){

  db1=createSprite(768,310,20,20);
  db1.addImage("123",db);
 db1.scale=2.0;
  uma1=createSprite(768,310,20,20);
  uma1.addImage("123",uma);
  uma1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="seem1"){

  dp1=createSprite(768,310,20,20);
  dp1.addImage("123",dp);
  dp1.scale=2.0;
  seem1=createSprite(768,350,20,20);
  seem1.addImage("123",seem);
  seem1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="usha1"){

  brown1=createSprite(768,310,20,20);
  brown1.addImage("123",brown);
  brown1.scale=2.0;
  usha1=createSprite(768,310,20,20);
  usha1.addImage("123",usha);
  usha1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="dad1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  dad1=createSprite(768,310,20,20);
  dad1.addImage("123",dad);
  dad1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="mom1"){

  pink1=createSprite(768,310,20,20);
 pink1.addImage("123",pink5);
  pink1.scale=5.0;
  mom1=createSprite(768,310,20,20);
  mom1.addImage("123",mom);
  mom1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="meen1"){

  black=createSprite(768,310,20,20);
  black.addImage("123",blackimg);
  black.scale=2.0;
  meen1=createSprite(768,350,20,20);
  meen1.addImage("123",meen);
  meen1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="seeth1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  seeth1=createSprite(768,310,20,20);
  seeth1.addImage("123",seeth);
  seeth1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="gaya1"){

 green1=createSprite(768,310,20,20);
  green1.addImage("123",green);
  green1.scale=2.0;
  gaya1=createSprite(768,310,20,20);
  gaya1.addImage("123",gaya);
  gaya1.scale=1.3;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }

  
if(gamestate==="bhuv1"){

  blue1=createSprite(768,310,20,20);
  blue1.addImage("123",blue);
  blue1.scale=2.0;
  bhuv1=createSprite(768,350,20,20);
  bhuv1.addImage("123",bhuv);
  bhuv1.scale=1.2;

  next2=createSprite(1450,650,200,20);
  next2.addImage("img",next1);
  next2.scale=0.8;
  
  if(mousePressedOver(next2)){
    gamestate="last";
  }
  }



  drawSprites();
 
}

function play(){
  m1=createSprite(750,290,20,20);
  m1.addImage("img",m1img);
  m1.scale=1.5
  m1.visible=true;
  m2=createSprite(880,640,20,20);
  m2.addImage("img",m2img);
  m2.scale=0.5;
m2.visible=true;
  if(mousePressedOver(m2)){
    gamestate="note";
    
  }
}




