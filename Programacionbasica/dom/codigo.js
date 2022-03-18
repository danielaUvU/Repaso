var ruta = window.location;
            console.log("Texto secreto");
            document.write("Hola estudiantes" + ruta);
            lienzo.beginPath();
            lienzo.strokeStyle = "blue";
            lienzo.moveTo(100,100);
            lienzo.lineTo(200,200);
            lienzo.stroke();
            lienzo.closepath();