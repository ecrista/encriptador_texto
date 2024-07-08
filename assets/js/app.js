function procesar_Peticion(proceso){
    //inicializacion de variables y asignacion para los campos html
    let salida="";
    let texto=document.getElementById("textoentrada").value;
    let seccion_Salida=document.getElementById("sinrespuesta");
    let seccion_resultado=document.getElementById("respuestatexto");
    //comprobacion en caso de que el campo de texto este vacio
    if(texto!=""){  
        //seccion de procesamiento de la peticion para llamar funciones
        if(proceso=="encriptar"){
            salida=encriptar_texto(texto);
        }else if(proceso=="desencriptar"){
            salida=desencriptar_texto(texto);
        }else{

        }  
        //impresion del resultado
        document.getElementById("textosalida").innerHTML=salida;
        seccion_Salida.style.visibility="hidden";
        seccion_Salida.style.display="none";
        seccion_resultado.style.visibility="visible";
        seccion_resultado.style.display="flex";

    }else{
        //seccion de impresion de error en caso de que el campo de texto este vacio
        document.getElementById("textosalida").innerHTML="";
        seccion_Salida.style.visibility="visible";
        seccion_Salida.style.display="flex";
        seccion_resultado.style.visibility="hidden";
        seccion_resultado.style.display="none";
    }
}

function encriptar_texto(texton){
    //iniciacion de diccionario de encriptado
    let letras={"o":"ober","e":"enter","i":"imes","a":"ai","u":"ufat"};
    let encriptado="";           
    //separa cada caracter de la variable string en array
    let textochar=texton.split('');
    //recorre cada caracter del array
    for(let i=0;i<textochar.length;i++){
        //comprobacion de si el caracter esta en el diccionario
        if(textochar[i] in letras){
            //encripta el caracter y lo agrega al string
            encriptado+=letras[textochar[i]];                       
        }else{
            //agrega el caracter al string sin encriptar si no se encuentra en el json
            encriptado+=textochar[i];            
        }
    }
    return encriptado;
}

function desencriptar_texto(texto_encriptado){
    //iniciacion de diccionario de desencriptado
    let desencriptado=texto_encriptado;    
    let cifrado={"ober":"o","enter":"e","imes":"i","ai":"a","ufat":"u"};
    //recorre cada valor del diccionario para ir reemplazando todos los que concuerden con el valor del diccionario
    for(var parte_Cifrado in cifrado){
        desencriptado=desencriptado.replaceAll(parte_Cifrado, cifrado[parte_Cifrado]);        
    }
    return desencriptado;
}

function copiar_Texto(){
    //inicializacion de la variable con el texto html que tiene el cuadro de informacion de salida
    let copiar=document.getElementById("textosalida").innerHTML;
    //selecciona el texto del cuadro de informacion de salida y lo almacena en el texto en el portapapeles
    navigator.clipboard.writeText(copiar);
}

function validar_texto(textarea){
    // Expresión regular que permite solo letras minúsculas sin acentos
    const regex = /^[a-z\s]*$/;

    // Obtener el valor actual del campo de texto
    let valor = textarea.value;

    // Eliminar caracteres no válidos
    if (!regex.test(valor)) {
        textarea.value = valor.replace(/[^a-z\s]/g, '');
    }
}