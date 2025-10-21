let s;

// function de l'espace, t'apuis sur l'espace et une frace aparait
function spaceCallback(event){
    let texte = s.text(30, 30, "The Guardian is the best");
    texte.attr({
        fontSize: '15px',
        fontWeight: 'bold',
        fill: '#000000ff'
    });
}
// Repris de l'exemple tu click sur le grand rond et le petiti rond aparaise et disparaise
function clickCallback(event) {
       // how do I get the id of the clicked element?
       // is this cross browser valid?
       console.log(event.target.attributes);
      auverpetit.toggleClass("cache");
      bourpetit.toggleClass("cache");
      bretagnepetit.toggleClass("cache");
      centrepetit.toggleClass("cache");
      grandpetit.toggleClass("cache");
      hautpetit.toggleClass("cache");
      ilepetit.toggleClass("cache");
      normanpetit.toggleClass("cache");
      nouvpetit.toggleClass("cache");
      occipetit.toggleClass("cache");
      payspetit.toggleClass("cache");
      propetit.toggleClass("cache");
}
// quand tu va sur les petit rond un texte va aparaitre
 function mousecallback (event){
    console.log(event.target.attributes);
    alert("Pre-season: Junuary 1st - June 20th,       Post-season: September 6th - December 31st,       Season: June 21th - September 5th,       Blank: Festivals that do not fall into any of the other categories");
}


function onSVGLoaded( data ){ 
    s.append( data );

    auverpetit=s.select('#auver-');
    auverpetit.mouseover(mousecallback);

    
    auver=s.select('#auver');
    auver.click(clickCallback);
    
    bourpetit=s.select('#Bour-');
    bourpetit.mouseover(mousecallback);

    bour=s.select('#Bour');
    bour.click(clickCallback);

    bretagnepetit=s.select('#bretagne-');
    bretagnepetit.mouseover(mousecallback);

    bretagne=s.select('#bretagne');
    bretagne.click(clickCallback);

    centrepetit=s.select('#centre-');
    centrepetit.mouseover(mousecallback);

    centre=s.select('#centre');
    centre.click(clickCallback);

    grandpetit=s.select('#grand-');
    grandpetit.mouseover(mousecallback);

    grand=s.select('#grand');
    grand.click(clickCallback);

    hautpetit=s.select('#haut-');
    hautpetit.mouseover(mousecallback);

    haut=s.select('#haut');
    haut.click(clickCallback);

    ilepetit=s.select('#ile-');
    ilepetit.mouseover(mousecallback);

    ile=s.select('#ile');
    ile.click(clickCallback);
    
    normanpetit=s.select('#normandie_00000141454484354128009090000012309822749241699717_');
    normanpetit.click(mousecallback);
    

    norman=s.select('#normandie');
    norman.click(clickCallback);

    nouvpetit=s.select('#nouvelle-');
    nouvpetit.click(mousecallback);

    nouv=s.select('#nouvelle');
    nouv.click(clickCallback);

    occipetit=s.select('#occitanie-');
    occipetit.click(mousecallback);

    occi=s.select('#occitanie');
    occi.click(clickCallback);

    payspetit=s.select('#pays-');
    payspetit.click(mousecallback);

    pays=s.select('#pays');
    pays.click(clickCallback);

    propetit=s.select('#provence-');
    propetit.click(mousecallback);

    pro=s.select('#provence');
    pro.click(clickCallback);
}

function init(){
    s = Snap("#svg");
    Snap.load("info1.svg", onSVGLoaded);
    
// sa sait pour la bare d'espace marche
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            spaceCallback(event);
        }
    });
}


window.addEventListener("load", init);
