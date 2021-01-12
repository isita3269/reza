var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy;

var line;

var ghost;

var carttoncat;

var jeff;

var taillexe;

var sonicexe;

var sllenderman;

var freedy;

var restart, restartimg;

var scarydoor;

var music;

function preload() {
    boyImg = loadImage("images/boy.jpg");

    ghostimg = loadImage("images/ghost.jpg");

    jeffimg = loadImage("images/jeff.png");

    carttoncatimg = loadImage("images/carttoncat.png");

    taillexeimg = loadImage("images/taillexe.png");

    sonicexeimg = loadImage("images/sonicexe.png");

    freedyimg = loadImage("images/freedy.png");

    sllendermanimg = loadImage("images/sllenderman.png");

    lineimg = loadImage("images/line.jpg");

    restartimg = loadImage("images/restart.jpg");

    scarydoorimg = loadImage("images/scarydoor.jpg");

    music = loadSound("sound/creepymusic.mp3");
}

function setup() {
    canvas = createCanvas(1200, 1200);

    music.play();

    boy = createSprite(300, 100, 20, 50);
    boy.addImage("boy", boyImg);
    boy.scale = 0.5;

    ghost = createSprite(500, 400, 20, 50);
    ghost.addImage("ghost", ghostimg);
    ghost.scale = 0.5;

    line = createSprite(350, 1500, 20, 50);
    line.shapeColor = "darkblue"
    line.addImage("line", lineimg);
    line.scale = 0.5;

    carttoncat = createSprite(300, 600, 50, 20);
    carttoncat.addImage("carttoncat", carttoncatimg);
    carttoncat.scale = 0.5;

    freedy = createSprite(500, 600, 50, 20);
    freedy.addImage("freedy", freedyimg);
    freedy.scale = 0.5;

    jeff = createSprite(100, 600, 50, 20);
    jeff.addImage("jeff", jeffimg);
    jeff.scale = 0.5;

    sllenderman = createSprite(200, 600, 50, 20);
    sllenderman.addImage("sllenderman", sllendermanimg);
    sllenderman.scale = 0.5;

    taillexe = createSprite(1000, 900, 50, 20);

    taillexe.addImage("taillexe", taillexeimg);
    taillexe.scale = 0.5;

    sonicexe = createSprite(1000, 700, 50, 20);
    sonicexe.addImage("sonicexe", sonicexeimg);
    sonicexe.scale = 0.5;


    scarydoor = createSprite(1000, 600, 50, 20);
    scarydoor.addImage("scarydoor", scarydoorimg);
    scarydoor.scale = 0.5;

    restart = createSprite(600, 600, 50, 20);
    restart.addImage("restart", restartimg);
    restart.scale = 0.5;
    restart.visible = false;


}

function draw() {
    background("blue")

    if (mousePressedOver(restart)) {
        reset();
    }

    if (ghost.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (carttoncat.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (freedy.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (jeff.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (sllenderman.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (sonicexe.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }



    if (taillexe.isTouching(boy)) {
        gameState = END;
    } else if (gameState === END) {
        restart.visible = true;
    }

    if (boy.isTouching(scarydoor)) {
        gameStata = END
    }

    drawSprites();
}

function reset() {
    gameState = PLAY;
    restart.visible = false;
}

function move(event) {
    var k = event.keyCode;
    var boy = {
        updown: function() { var y = 0; if (k == 38) {--y; } else if (k == 40) {++y; } return y; },

        leftright: function() { var x = 0; if (k == 37) {--x; } else if (k == 39) {++x; } return x; }

    };
    boy.style.top = (boy.updown()) + "px";
    boy.style.left = (boy.leftright()) + "px";
}