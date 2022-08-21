gsap.to('#CVButton', {
    duration: 2,
    scale: 1.1,
    repeat: -1,
    yoyo: true,
});

gsap.to('.skillLogo', {
    duration: 1.5,
    y: -10,
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.1,
        from: "center",
    }
});

//----------------------------- Zoom in Zoom Out For Each Log and Flag :( ---------------------------------
//#region skillLogo1
var zoom1 = new TimelineMax({paused: true})
var zoomO1 = new TimelineMax({paused: true})
zoom1.to('#skillLogo1',{
    duration: 0.5,
    scale: 1.25,
});

zoomO1.to('#skillLogo1',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo1").addEventListener("mouseover", zoomIt1);
document.querySelector("#skillLogo1").addEventListener("mouseleave", zoomOut1);

function zoomIt1(){
    if(!zoom1.isActive()){zoom1.play(0);}
}

function zoomOut1(){
    if(!zoomO1.isActive()){zoomO1.play(0);}
}
//#endregion
//#region skillLogo2
var zoom2 = new TimelineMax({paused: true})
var zoomO2 = new TimelineMax({paused: true})
zoom2.to('#skillLogo2',{
    duration: 0.5,
    scale: 1.25,
});

zoomO2.to('#skillLogo2',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo2").addEventListener("mouseover", zoomIt2);
document.querySelector("#skillLogo2").addEventListener("mouseleave", zoomOut2);

function zoomIt2(){
    if(!zoom2.isActive()){zoom2.play(0);}
}

function zoomOut2(){
    if(!zoomO2.isActive()){zoomO2.play(0);}
}
//#endregion
//#region skillLogo3
var zoom3 = new TimelineMax({paused: true})
var zoomO3 = new TimelineMax({paused: true})

zoom3.to('#skillLogo3',{
    duration: 0.5,
    scale: 1.25,
});

zoomO3.to('#skillLogo3',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo3").addEventListener("mouseover", zoomIt3);
document.querySelector("#skillLogo3").addEventListener("mouseleave", zoomOut3);

function zoomIt3(){
    if(!zoom3.isActive()){zoom3.play(0);}
}

function zoomOut3(){
    if(!zoomO3.isActive()){zoomO3.play(0);}
}
//#endregion
//#region skillLogo4
var zoom4 = new TimelineMax({paused: true})
var zoomO4 = new TimelineMax({paused: true})
zoom4.to('#skillLogo4',{
    duration: 0.5,
    scale: 1.25,
});

zoomO4.to('#skillLogo4',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo4").addEventListener("mouseover", zoomIt4);
document.querySelector("#skillLogo4").addEventListener("mouseleave", zoomOut4);

function zoomIt4(){
    if(!zoom4.isActive()){zoom4.play(0);}
}

function zoomOut4(){
    if(!zoomO4.isActive()){zoomO4.play(0);}
}
//#endregion
//#region skillLogo5
var zoom5 = new TimelineMax({paused: true})
var zoomO5 = new TimelineMax({paused: true})
zoom5.to('#skillLogo5',{
    duration: 0.5,
    scale: 1.25,
});

zoomO5.to('#skillLogo5',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo5").addEventListener("mouseover", zoomIt5);
document.querySelector("#skillLogo5").addEventListener("mouseleave", zoomOut5);

function zoomIt5(){
    if(!zoom5.isActive()){zoom5.play(0);}
}

function zoomOut5(){
    if(!zoomO5.isActive()){zoomO5.play(0);}
}
//#endregion
//#region skillLogo6
var zoom6 = new TimelineMax({paused: true})
var zoomO6 = new TimelineMax({paused: true})
zoom6.to('#skillLogo6',{
    duration: 0.5,
    scale: 1.25,
});

zoomO6.to('#skillLogo6',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo6").addEventListener("mouseover", zoomIt6);
document.querySelector("#skillLogo6").addEventListener("mouseleave", zoomOut6);

function zoomIt6(){
    if(!zoom6.isActive()){zoom6.play(0);}
}

function zoomOut6(){
    if(!zoomO6.isActive()){zoomO6.play(0);}
}
//#endregion
//#region skillLogo7
var zoom7 = new TimelineMax({paused: true})
var zoomO7 = new TimelineMax({paused: true})
zoom7.to('#skillLogo7',{
    duration: 0.5,
    scale: 1.25,
});

zoomO7.to('#skillLogo7',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo7").addEventListener("mouseover", zoomIt7);
document.querySelector("#skillLogo7").addEventListener("mouseleave", zoomOut7);

function zoomIt7(){
    if(!zoom7.isActive()){zoom7.play(0);}
}

function zoomOut7(){
    if(!zoomO7.isActive()){zoomO7.play(0);}
}
//#endregion
//#region skillLogo8
var zoom8 = new TimelineMax({paused: true})
var zoomO8 = new TimelineMax({paused: true})
zoom8.to('#skillLogo8',{
    duration: 0.5,
    scale: 1.25,
});

zoomO8.to('#skillLogo8',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo8").addEventListener("mouseover", zoomIt8);
document.querySelector("#skillLogo8").addEventListener("mouseleave", zoomOut8);

function zoomIt8(){
    if(!zoom8.isActive()){zoom8.play(0);}
}

function zoomOut8(){
    if(!zoomO8.isActive()){zoomO8.play(0);}
}
//#endregion
//#region skillLogo9
var zoom9 = new TimelineMax({paused: true})
var zoomO9 = new TimelineMax({paused: true})
zoom9.to('#skillLogo9',{
    duration: 0.5,
    scale: 1.25,
});

zoomO9.to('#skillLogo9',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#skillLogo9").addEventListener("mouseover", zoomIt9);
document.querySelector("#skillLogo9").addEventListener("mouseleave", zoomOut9);

function zoomIt9(){
    if(!zoom9.isActive()){zoom9.play(0);}
}

function zoomOut9(){
    if(!zoomO9.isActive()){zoomO9.play(0);}
}
//#endregion

//#region EspFlag
var zoomEsp = new TimelineMax({paused: true})
var zoomOEsp = new TimelineMax({paused: true})
zoomEsp.to('#espFlag',{
    duration: 0.5,
    scale: 1.25,
});

zoomOEsp.to('#espFlag',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#espFlag").addEventListener("mouseover", zoomItEsp);
document.querySelector("#espFlag").addEventListener("mouseleave", zoomOutEsp);

function zoomItEsp(){
    if(!zoomEsp.isActive()){zoomEsp.play(0);}
}

function zoomOutEsp(){
    if(!zoomOEsp.isActive()){zoomOEsp.play(0);}
}
//#endregion
//#region EngFlag
var zoomEng = new TimelineMax({paused: true})
var zoomOEng = new TimelineMax({paused: true})
zoomEng.to('#engFlag',{
    duration: 0.5,
    scale: 1.25,
});

zoomOEng.to('#engFlag',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#engFlag").addEventListener("mouseover", zoomItEng);
document.querySelector("#engFlag").addEventListener("mouseleave", zoomOutEng);

function zoomItEng(){
    if(!zoomEng.isActive()){zoomEng.play(0);}
}

function zoomOutEng(){
    if(!zoomOEng.isActive()){zoomOEng.play(0);}
}
//#endregion
//#region CatFlag
var zoomCat = new TimelineMax({paused: true})
var zoomOCat = new TimelineMax({paused: true})
zoomCat.to('#catFlag',{
    duration: 0.5,
    scale: 1.25,
});

zoomOCat.to('#catFlag',{
    duration: 0.5,
    scale: 1,
});

document.querySelector("#catFlag").addEventListener("mouseover", zoomItCat);
document.querySelector("#catFlag").addEventListener("mouseleave", zoomOutCat);

function zoomItCat(){
    if(!zoomCat.isActive()){zoomCat.play(0);}
}

function zoomOutCat(){
    if(!zoomOCat.isActive()){zoomOCat.play(0);}
}
//#endregion

//#region UPC
var zoomUPC = new TimelineMax({paused: true})
var zoomOUPC = new TimelineMax({paused: true})
zoomUPC.to('#UPCLogo',{
    duration: 0.1,
    scale: 1.25,
});

zoomOUPC.to('#UPCLogo',{
    duration: 0.5,
    scale: 1,
});

zoomUPC.to('#UPC',{
    duration: 0.5,
    x: 50,
    y: -10,
    scale: 1.25,
});

zoomOUPC.to('#UPC',{
    duration: 0.5,
    scale: 1,
    x: 0,
    y: 0,
});

document.querySelector("#UPCLogo").addEventListener("mouseenter", zoomItUPC);
document.querySelector("#UPCLogo").addEventListener("mouseleave", zoomOutUPC);

function zoomItUPC(){
    if(!zoomUPC.isActive()){zoomUPC.play(0);}
}

function zoomOutUPC(){
    if(!zoomOUPC.isActive()){zoomOUPC.play(0);}
}
//#endregion
//#region HSB
var zoomHSB = new TimelineMax({paused: true})
var zoomOHSB = new TimelineMax({paused: true})
zoomHSB.to('#HSBLogo',{
    duration: 0.1,
    scale: 1.25,
});

zoomOHSB.to('#HSBLogo',{
    duration: 0.5,
    scale: 1,
});

zoomHSB.to('#HSB',{
    duration: 0.5,
    x: 50,
    y: -10,
    scale: 1.25,
});

zoomOHSB.to('#HSB',{
    duration: 0.5,
    scale: 1,
    x: 0,
    y: 0,
});

document.querySelector("#HSBLogo").addEventListener("mouseover", zoomItHSB);
document.querySelector("#HSBLogo").addEventListener("mouseleave", zoomOutHSB);

function zoomItHSB(){
    if(!zoomHSB.isActive()){zoomHSB.play(0);}
}

function zoomOutHSB(){
    if(!zoomOHSB.isActive()){zoomOHSB.play(0);}
}
//#endregion
//#region H10
var zoomH10 = new TimelineMax({paused: true})
var zoomOH10 = new TimelineMax({paused: true})
zoomH10.to('#H10Logo',{
    duration: 0.1,
    scale: 1.25,
});

zoomOH10.to('#H10Logo',{
    duration: 0.5,
    scale: 1,
});

zoomH10.to('#H10',{
    duration: 0.5,
    x: -50,
    y: -10,
    scale: 1.25,
});

zoomOH10.to('#H10',{
    duration: 0.5,
    scale: 1,
    x: 0,
    y: 0,
});


document.querySelector("#H10Logo").addEventListener("mouseover", zoomItH10);
document.querySelector("#H10Logo").addEventListener("mouseleave", zoomOutH10);

function zoomItH10(){
    if(!zoomH10.isActive()){zoomH10.play(0);}
}

function zoomOutH10(){
    if(!zoomOH10.isActive()){zoomOH10.play(0);}
}
//#endregion
//#region A2M
var zoomA2M = new TimelineMax({paused: true})
var zoomOA2M = new TimelineMax({paused: true})
zoomA2M.to('#A2MLogo',{
    duration: 0.1,
    scale: 1.25,
});

zoomOA2M.to('#A2MLogo',{
    duration: 0.5,
    scale: 1,
});

zoomA2M.to('#A2M',{
    duration: 0.5,
    x: -50,
    y: -10,
    scale: 1.25,
});

zoomOA2M.to('#A2M',{
    duration: 0.5,
    scale: 1,
    x: 0,
    y: 0,
});


document.querySelector("#A2MLogo").addEventListener("mouseover", zoomItA2M);
document.querySelector("#A2MLogo").addEventListener("mouseleave", zoomOutA2M);

function zoomItA2M(){
    if(!zoomA2M.isActive()){zoomA2M.play(0);}
}

function zoomOutA2M(){
    if(!zoomOA2M.isActive()){zoomOA2M.play(0);}
}
//#endregion
