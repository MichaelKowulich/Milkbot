void setup() {
  size(1280, 1200);
  background(51);
  textSize(32);
  textAlign(CENTER, TOP);
  fill(255,255,255);
  if(args[0] != null) {
    text(args[0], 640, 20);
  }
  textSize(14);
  textAlign(LEFT);
  println(args.length);
  int reactionCount = 0;
  for (int i = 2; i <= args.length-1; i=i+2) {
     reactionCount += Integer.parseInt(args[i]);
  }
  int loopCount = 1;
  for (int i = 1; i <= (args.length-1); i=i+2) {
    text(args[i], 20, (height/(((args.length+2-1)/2)))*loopCount, 100, 100);
    fill(random(0, 255),random(0,255),random(0,255));
    float rectWidth = Float.parseFloat(args[i+1]);
    rectWidth= (rectWidth/reactionCount)*1000;
    rect(120, ((height/(((args.length+2-1)/2)))*loopCount)-50, rectWidth,100);
    loopCount++;
    fill(255,255,255);
  }  
  save("output.png");
  exit();
}
