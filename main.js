var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

preloadImages("cropped-Logo-Farve.png", "Om-os-billed.png", "2.png", "1.png", "3.png", "Logo-Farve.png", "sam-and-the-soulmate.jpg", "gammelgaard.png",
"i-think-ur-awesome.jpg", "addisabababand.jpg", "doessing.jpg", "Kiosk.jpg", "Pecha-Kucha.jpg", "fille.jpg", "i-think-youre-awesome.jpg", "Kiosk-2.jpg",
"Fille-2.jpg", "Faratuben.jpg", "Sam-and-the-Soulmates-2.jpg", "forside-baggrund.png", "baggrunds-billed.png");