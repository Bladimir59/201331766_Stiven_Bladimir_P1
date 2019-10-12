console.log("hola");
const nombre = document.getElementById("nombre");
const listado = document.getElementById("listado");
var elemento;
var resultado;
var codigo;
var ass;
function datos(){
    elemento=nombre.value;
    console.log("datos "+elemento.charAt(0));
    if (elemento=="variable"){
        ass="palabra reservada";
    }else if(elemento=="entero"){
        ass="palabra reservada";
    }else if(elemento=="decimal"){
        ass="palabra reservada";
    }else if(elemento=="booleano"){
        ass="palabra reservada";
    }else if(elemento=="cadena"){
        ass="palabra reservada";
    }else if(elemento=="si"){
        ass="palabra reservada";
    }else if(elemento=="sino"){
        ass="palabra reservada";
    }else if(elemento=="mientras"){
        ass="palabra reservada";
    }else if(elemento=="hacer"){
        ass="palabra reservada";
    }else if(elemento=="VERDADERO"){
        ass="Booleano";
    }else if(elemento=="+"){
        ass="Operador";
    }else if(elemento=="-"){
        ass="Operador";
    }else if(elemento=="*"){
        ass="Operador";
    }else if(elemento=="/"){
        ass="Operador";
    }else if(elemento=="%"){
        ass="Operador";
    }else if(elemento=="="){
        ass="Operador";
    }else if(elemento=="=="){
        ass="Operador";
    }else if(elemento=="<"){
        ass="Operador";
    }else if(elemento==">"){
        ass="Operador";
    }else if(elemento==">="){
        ass="Operador";
    }else if(elemento=="<="){
        ass="Operador";
    }else if(elemento=="("){
        ass="Agrupacion";
    }else if(elemento==")"){
        ass="Agrupacion";
    }else if(elemento=="{"){
        ass="Agrupacion";
    }else if(elemento=="}"){
        ass="Agrupacion";
    }else if(elemento==";"){
        ass="signo";
    }


    for(var i=0;i<elemento.length;i++) {
        switch(elemento.charAt(i)){
    
            case "a": codigo="a"; case "b": codigo="a"; case "c": codigo="a"; case "d": codigo="a";
            case "e": codigo="a"; case "f": codigo="a"; case "g": codigo="a"; case "h": codigo="a";
            case "i":
            console.log("recivido");    
            codigo="a"; case "j": codigo="a"; case "k": codigo="a"; case "l": codigo="a";
            case "m": codigo="a"; case "n": codigo="a"; case "ñ": codigo="a"; case "o": codigo="a";
            case "p": codigo="a"; case "q": codigo="a"; case "r": codigo="a"; case "s": codigo="a";
            case "t": codigo="a"; case "u": codigo="a"; case "v": codigo="a"; case "w": codigo="a";
            case "x": codigo="a"; case "y": codigo="a"; case "z": codigo="a";
                 resultado="identificador";     
            break
            case "0": codigo=parseInt.codigo+1; case "1": codigo=parseInt.codigo+1; case "2": codigo=parseInt.codigo+1; 
            case "3": codigo=parseInt.codigo+1; case "4": codigo=parseInt.codigo+1; case "5": codigo=parseInt.codigo+1; 
            case "6": codigo=parseInt.codigo+1; case "7": codigo=parseInt.codigo+1; case "8": codigo=parseInt.codigo+1; 
            case "9": codigo=parseInt.codigo+1;
                resultado="numero";
            break
            case "Ç": case "ü": case"é":case"â":case"ä":case"à":case"å":case"ç":case"ê":case"ë":case"è":case"ï":case"î":
            case"ì":case"Ä":case"Å":case"É":case"æ":case"Æ":case"ô":case"ö":case"ò":case"û":case"ù":case"ÿ":case"Ö":
            case"Ü":case"¢":case"£":case"¥":case"₧":case"ƒ":case"á":case"í":case"ó":case"ú":case"ñ":case"Ñ":case"ª":
            case"º":case"¿":case"⌐":case"¬":case"½":case"¼":case"¡":case"«":case"»":case"░":case"▒":case"▓":case"│":
            case"┤":case"╡":case"╢":case"╖":case"╕":case"╣":case"║":case"╗":case"╝":case"╜":case"╛":case"┐":case"└":
            case"┴":case"┬":case"├":case"─":case"┼":case"╞":case"╟":case"╚":case"╔":case"╩":case"╦":case"╠":case"═":
            case"╬":case"╧":case"╨":case"╤":case"╥":case"╙":case"╘":case"╒":case"╓":case"╫":case"╪":case"┘":case"┌":
            case"█":case"▄":case"▌":case"▐":case"▀":case"α":case"ß":case"Γ":case"π":case"Σ":case"σ":case"µ":case"τ":
            case"Φ":case"Θ":case"Ω":case"δ":case"∞":case"φ":case"ε":case"∩":case"≡":case"±":case"≥":case"≤":case"⌠":
            case"⌡":case"÷":case"≈":case"°":case"∙":case"·":case"√":case"ⁿ":case"²":case"■":
                resultado="simbol";
            break
            default: resultado="error";
                
                 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }
    }

    listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+nombre.value+" "+resultado+" "+ass+"</li>";
	console.log(listado);
	alert("hola "+nombre.value+" "+resultado+" ");
}