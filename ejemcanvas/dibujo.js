var d = document.getElementById("megumi");
var lienzo = d.getContext("2d")
console.log(lienzo)

function dibujarlinea(color , xinicial, yinicial, xfinal, yfinal)
{
            lienzo.beginPath();
            lienzo.strokeStyle = "color";
            lienzo.moveTo(xinicial, yinicial);
            lienzo.lineTo(xfinal, yfinal);
            lienzo.stroke();
            lienzo.closePath();
}
        dibujarlinea("red", 10, 300, 220, 10);
        dibujarlinea("blue", 10, 220, 300, 10);