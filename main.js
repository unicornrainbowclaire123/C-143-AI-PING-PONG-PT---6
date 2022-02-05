noseX = "";
noseY = "";
game_status = "";


function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}

function changeGameStatus(character) {
  if(GameStatus=="start" && noseX !="" && gameConfig.status==="start") {
    world_start.play();
  }
}


function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav")
	setSprites();
	PingPongAnimation();
}

function setup() {
	canvas = createCanvas(650, 400);
	canvas. patrent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model loaded!');
}

function draw() {
     if (game_status == "start")

	background(#D3D3D3);
	  if(noseX < 300)
	  {
		  pingpongX = pingpongX - 1;
	  }
	  if(noseX > 300)
		{
			pingpongX = pingpongX + 1;
		}
		if(noseY > 300)
		{
			pingpongY = pingpongY - 1;
		}
		if(noseY > 300)
		{
			pingpongY = pingpongY + 1;
		}

	  image(img,pingpongX,pingpongY, 40,70);
}


function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}




