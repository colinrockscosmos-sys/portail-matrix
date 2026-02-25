// Mot de passe
document.getElementById("validate").onclick = function() {
    const pass = document.getElementById("password").value;
    if(pass === "21225") {
        document.getElementById("message").innerHTML = "✔ Accès autorisé";
        document.getElementById("buttons").style.display = "block";
    } else {
        document.getElementById("message").innerHTML = "✖ Mot de passe incorrect";
    }
};

// Effet Matrix
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){
        const text = letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(text,i*fontSize,drops[i]*fontSize);
        drops[i]++;
        if(drops[i]*fontSize>height && Math.random()>0.975) drops[i]=0;
    }
}
setInterval(draw,50);

window.addEventListener("resize",()=>{
    width=canvas.width=window.innerWidth;
    height=canvas.height=window.innerHeight;
});