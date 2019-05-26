const buttons = document.querySelectorAll("button");

for (let i =0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random()* buttons.length)].innerHTML;
        
        
        let result = "";

        if (joueur === robot) {
            result = "Egalité";
        }else if ((joueur === "Pierre" && robot === "ciseaux")
        ||(joueur === "Feuille" && robot === "Pierre")
        ||(joueur === "Ciseaux" && robot === "Feuille")){
            result = "Gagner";
        }else {
            result = "Perdu";
        }

        document.querySelector(".resultat").innerHTML = `
            Joueur :` + (joueur) + `</br>`
            + `Robot :` + (robot) + `</br>`
             + (result);
    });
}