function createTabFromCollection(nodeCollection){
    let tab = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    let x = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3;j++) {
            tab[i][j] = nodeCollection[x].innerText;
            x++;
        }
    }
    console.log(tab);
    return tab;
}

function colToTab(tab,col){
    let r = [
        tab[0][col],
        tab[1][col],
        tab[2][col]
    ];
    return r;
}

function checkRow(row){
    if(row[0] == row[1] && row[1] == row[2])
        return true;
    return false;
}

function checkDiagonals(tab){
    if(tab[0][0] == tab[1][1] && tab[1][1] == tab[2][2])
        return true;
    else if(tab[0][2] == tab [1][1] && tab [2][0] == tab[1][1])
        return true;
    return false;
}

function checkVictory(){
    let cases = document.querySelectorAll(".case");
    let tab =  createTabFromCollection(cases);
    let winner;
    if(checkRow(tab[0])){
        winner = tab[0][0];
    } else if(checkRow(tab[1])){
        winner = tab[1][0];
    } else if(checkRow(tab[2])){
        winner = tab[2][0];
    } else if(checkRow(colToTab(tab,0))){
        winner = tab[0][0];
    } else if(checkRow(colToTab(tab,1))){
        winner = tab[0][1];
    } else if(checkRow(colToTab(tab,2))){
        winner = tab[0][2];
    } else if (checkDiagonals(tab)){
        winner = tab[1][1];
    } else {
        winner = "n";
    }
    return winner;
}

let grille = document.querySelector("#grille");

let h2 =  document.querySelector("h2");
let tourX = true;

let victory = "";
let count = 0;
grille.addEventListener("click",function(e) {
    if(victory == "" || victory == "n"){
        if(tourX) {
            if(!e.target.innerText){
                e.target.innerText = "x"
                tourX = false;
                count++;
            }
        } else {
            if(!e.target.innerText){
                e.target.innerText = "o"
                tourX = true;
                count++;
            }
        }
        victory = checkVictory();
        if(victory == "x"){
            h2.innerText = "Le joueur X a gagné"
        } else if(victory == "o"){
            h2.innerText = "Le joueur O a gagné"
        } else if(count == 9){
            h2.innerText = "Match nul!"
        }
    }
})