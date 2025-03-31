$(document).ready (function () {
    var headclix = 0,
    eyeclix = 0, noseclix = 0, mouthclix = 0;
    lightning1 (); lightning2 (); lightning3 () ;
    $("#head") .click (function () {
    if
    (headclix < 9) {$ ("#head").animate ({left:"-=367px"}, 500);
    headclix+=1;}

    else {$ ("#head").animate({left:"0px"}, 500) ;
    headclix = 0;}
    });
    $("#eyes").click(function(){
    if (eyeclix < 9) {$("#eyes").animate ({left:"-=367px"}, 500);
    eyeclix+=1;}
    else {$ ("#eyes").animate ({left:"0px"}, 500) ;
    eyeclix = 0;}
     });
    $("#nose").click(function(){
    if
    (noseclix < 9) {$("#nose").animate ({left:"-=367px"}, 500) ;
    noseclix+=1;}
    else{$ ("#nose").animate ({left:"0px"}, 500) ;
    noseclix = 0;}

    });//end click

    $ ("#mouth").click (function (){
    if (mouthclix < 9) {$("#mouth").animate ({left:"-=367px"}, 500);
    mouthclix+=1; }
    else {$ ("#mouth").animate ({left:"0px"},500) ;
    mouthclix = 0;}
    });
});//end doc.onready function
    function lightning1() {
    $ ("#container #lightning1").fadeIn (250).fadeOut(250); 
    setTimeout ("lightning1 ()", 4000);
    };
    function lightning2 () {
    $ ("#container #lightning2") .fadeIn ("fast").fadeOut ("fast") ; 
    setTimeout ("lightning2 ()" ,5000) ;
    };
    function lightning3 (){ 
    $ ("#container #lightning3") .fadeIn ("fast").fadeOut ("fast") ; 
    setTimeout ("lightning3 ()",7000) ;
    };
