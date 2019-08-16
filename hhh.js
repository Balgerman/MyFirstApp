const informacion = () => {
    let nombre = prompt("Digite su nombre")
    let edad = prompt('Digite su edad')
    for (let i = 0; i <= edad; i++) {
        if(i == edad) {
            document.write(`<h1>Mi nombre es ${nombre} y mi edad es ${i}</h1>`);
        }
    }
    if(edad >= 18){
        document.write(`<h1>Eres mayor de edad`);
    }
    else if(edad < 18){
        document.write(`<h1>Eres menor de edad`);
    }
  }
  const operaciones=()=>{
     a=prompt("Ingrese Numero 1");
     b=prompt("Ingrese Numero 2");
     var suma= a+b;
     var resta= a-b;
     var mult= a*b;
     var div= a/b;
     document.write(`<h3> suma =  ${suma}   resta = ${resta}   multiplicacion =   ${mult}  division =  ${div} </h3>`);
  }
  operaciones();
  informacion();

