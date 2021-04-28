const C = document.getElementById("jogo");

const ctx = C.getContext("2d");


class PC{
    constructor(x, y) {

        this.x = x;
        this.y = y;
    }
}

let S = 7;

let CT = 20;
let TT = C.width / CT - 2;

let LX = 10;
let LY = 10;

const PSC = [];
let PDR = 2;

let MX = 5;
let MY = 5;

let XV = 0;
let YV = 0;

let PONTOS = 0;

const musicaFundo = new Audio("../musicas/background.mp3")
const musicaMaca = new Audio("../musicas/maca_effect.mp3")
const musicaGameOver = new Audio("../musicas/Game_over.mp3")


function jogo(){

    musicaFundo.loop = true
    musicaFundo.play();
    musicaFundo.volume = 0.06;

    MPC();
    let result = PERDEU();
    if (result){

        return;
    }

    LT();

    CCM();
    maca();
    cobrinha();

    placar();

    if(PONTOS > 5){

        S = 9
    }

    if(PONTOS > 10){

        S = 10
    }

    if(PONTOS > 100){

        S = 15
    }

    setTimeout( jogo, 1000 / S);
}

function PERDEU(){

    let PerdeuSim = false ;

    if(YV ===0 && XV ===0){
        return false;
    }

    if(LX < 0 ) {
        PerdeuSim = true;
    }

    else if(LX === CT){
        PerdeuSim = true
    }
    else if(LY < 0 ) {
        PerdeuSim = true;
    }

    else if(LY === CT){
        PerdeuSim = true
    }

    for(let i =0; i < PSC.length; i++){
        let P = PSC[i];
        if(P.x === LX && P.y === LY){
            PerdeuSim = true;
            break;

        }

    }

    if (PerdeuSim) {
        ctx.fillStyle = "orange";
        ctx.font = "30px Plex Serif bold ";

        if (PerdeuSim) {
            ctx.fillStyle = "orange";
            ctx.font = "30px IBM Plex Serif bold";

            ctx.fillText("VOCÊ PERDEU!", C.width-300, 200);


           musicaFundo.pause()
            musicaGameOver.play()
            musicaGameOver.volume = 0.06;
        }
    }

    return PerdeuSim;



}

function placar(){

    ctx.fillStyle = "orange";
    ctx.font = "30px IBM Plex Serif bold"
    ctx.fillText("Score:" +PONTOS, C.width-245, 30)
}

function LT(){

   ctx.fillStyle = "black";
    ctx.fillRect( 0,0, C.width, C.height);
}

function cobrinha(){

    ctx.fillStyle = "white";
    for ( let i = 0; i < PSC.length; i++){

        let P = PSC[ i ];
        ctx.fillRect( P.x * CT, P.y * CT, TT, TT)
    }

    PSC.push( new PC(LX, LY));

    while (PSC.length > PDR){

        PSC.shift();
    }

    ctx.fillStyle = "yellow";
    ctx.fillRect(LX * CT,  LY * CT, TT, TT );


}

function MPC(){

    LX = LX + XV;
    LY = LY + YV;
}

function maca(){

    ctx.fillStyle = "red"
    ctx.fillRect( MX * CT, MY * CT, TT, TT)
}

function CCM(){

    if ( MX === LX && MY === LY){

        MX = Math.floor(Math.random() * CT);
        MY = Math.floor(Math.random() * CT);
        PDR++;
        PONTOS++;

        musicaMaca.play()
    }
}

document.body.addEventListener("keydown", SPB);

function SPB( evento ){

    if( evento.keyCode === 38){

        if( YV === 1 )
            return;

        YV = -1;
        XV = 0;
    }
    if( evento.keyCode === 40){

        if( YV === -1)
            return;
        YV = 1;
        XV = 0;
    }
    if( evento.keyCode === 37){

        if( XV === 1)
            return;
        YV = 0;
        XV = -1;
    }

    if( evento.keyCode === 39) {

        if( XV === -1)
            return;
        YV = 0;
        XV = 1;
    }

}

jogo();


window.addEventListener("keydown", function(e) {

    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

