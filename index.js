for(var i = 1; i <= 81; i++) {
    var node = document.createElement("div");
    node.setAttribute("class", "grid-items");
    node.setAttribute("id" , "cell_{" + i + "}");
    node.textContent = i;   
    document.querySelector(".container-grid").appendChild(node);
}

for(var i = 0; i < 81; i++) {
    var node = document.querySelectorAll(".grid-items")[i];
    node.addEventListener("click", function() {
        
        if(bombs.indexOf(Number(this.textContent)) == -1) {

            var points = Math.floor(Math.random() * 3);
            this.textContent = points;
            document.getElementById(this.id).classList.add("pressed1");
            var x = document.getElementById("score");
            x.textContent = Number(x.textContent) + points; 
        }
        else {
            for(var i = 0; i < bombs.length; i++) {
                document.getElementById("cell_{" + bombs[i] + "}").classList.add("pressed");
            }
            setTimeout(() => {
                alert("game Over \n" + "Score = " + document.getElementById("score").textContent);
                location.reload();
            }, 100);
        }
    });  
}

function reset() {
    bombs.length = 0;
    location.reload();
}

var bombs = [];
function bombsLocation() {
    bombs.length = 0;
    while(bombs.length < 10) {
        var a = Math.ceil(Math.random() * 81);
        if(bombs.indexOf(a) === -1) 
            bombs.push(a);
    }  
}



