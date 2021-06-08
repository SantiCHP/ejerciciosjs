// Práctica 1

// Código de ejercicio 1 como se hizo inicialmente
// let a = 4;
// let b = 6;
// let valor_a = "a es igual a: ";
// let valor_b = "b es igual a: ";
// let resultado1="La suma de a + b es:"
// let c = a + b;
// console.log(valor_a,a);
// console.log(valor_b,b);
// console.log(resultado1,c);
// Código usando funciones
// function suma(a, b) {
//     c = a+b;
//     return c;
// }
// suma(4,8);
// console.log(`Resultado: ${c}`);

//2 - Dado un número de minutos convertirlos en segundos
// let minutos = 5;
// let segundos = Math.floor(minutos * 60);
// console.log(minutos+' minutos son '+segundos+' segundos');
//Código usando funciones
// function pasaMinutosASegundos(minutos) {
//     segundos = Math.floor(minutos * 60);
//     return segundos;
// }
// pasaMinutosASegundos(60);
// console.log(`Resultado: ${segundos} segundos`);

//3 - Calcular el área de un triángulo conociendo su base y su altura
// Fórmula del área de un triángulo A = (b*a)/2
// let base = 30;
// let altura = 45;
// console.log('Teniendo en cuenta que la base es '+base+'mm y la altura es '+altura+'mm ,el área del triángulo es: '+(base*altura)/2+'mm');
// //Código usando funciones
// function areaTriangulo(base,altura) {
//     area = (base*altura)/2;
//     return area;
// }
// areaTriangulo(45,80);
// console.log(`Resultado: ${area} mm`);

//4 - Convertir la edad de cada uno en días
// let years = 40;
// let dias = Math.floor(years*365);
// console.log('Si yo tengo '+years+'años, entonces puedo decir que ya he vivido '+dias+' días');
//Código usando funciones
// function edadEnDias(edad) {
//     dias = Math.floor(edad*365);
//     return dias;
// }
// edadEnDias(40);
// console.log(`Resultado: almenos ${dias} días vividos`);

// 5 - Calcular el perímetro de un rectángulo y asignarlo a una variable
//fórmula del perímetro de un rectángulo -- Perímetro = 2(altura+base)
// let x = 20;
// let y = 12;
// let perimetro = (2*(x+y))
// console.log('Si la base mide '+x+'mm y uno de sus lados mide '+y+'mm, el perímetro del resctángulo es de: '+perimetro+'mm');
//Código en funcion
// function perRectangulo(x,y) {
//     per = (2*(x+y));
//     return per;
// }
// perRectangulo(40,25);
// console.log(`Resultado del perímetro de un rectángulo: ${per} mm`);

// 6 - Asignar a dos variables nuestro nombre y apellidos. Crear una variable que contenga el nombre completo
// let nombre ="Santiago del Carmelo";
// let apellidos = "Castellano Hernández";
// let nombreCompleto = nombre+' '+apellidos;
// console.log('Mi nombre completo es: '+nombreCompleto);
// Código en función
// function nombreCompleto(nombre,apellidos) {
//     completo = nombre+' '+apellidos;
//     return completo;
// }

// nombreCompleto('Santiago del Carmelo','Castellano Hernández');
// console.log(`Resultado de nombre completo: ${completo}`);

//7 - Estás contando el número de puntos de un partido de baloncesto. Ya sabes cuales han sido los aciertos de 2 puntos y los de 3. Representar en una variable la puntuación final del partido
//creo la variable con el número de tiros encestados de dos puntos
// let dobles = 16;
// //creo una variable y multiplico el número de tiros dobles x2
// let totalDobles = dobles * 2;
// //creo una variable que almacena los tiros de tres puntos encestados
// let triples = 8;
// //creo una variable y multiplico los triples x3
// let totalTriples = triples * 3;
// //ahora sumo los totales de puntos dobles y triples para obtener la puntuación total
// let puntosTotales = totalDobles + totalTriples;
// console.log('Tiros de dobles encestados: '+dobles);
// console.log('Puntos dobles obtenidos: '+totalDobles);
// console.log('Tiros de triples encestados: '+triples);
// console.log('Puntos triples obtenidos: '+totalTriples);
// console.log('Puntuación total obtenida en el partido por el equipo de los Nerds: '+puntosTotales);
// Código usando funciones
// function puntosPartido(dobles,triples) {
//     total = (dobles*2) + (triples*3);
//     return total;
// }
// puntosPartido(12,10);
// console.log(`Resultado puntos totales del partido: ${total}`);

//8 - En un equipo de futbol sabemos cuales son los partidos ganados, empatados y perdidos durante 20 jornadas. Calcular la puntuación actual del equipo. Si ganas te llevas 3 puntos, si empatas 1 y si pierdes 0
//variable que almacena los partidos ganados
// let ganados = 7;
// //variable con los puntos de los partidos ganados
// let puntosGanados = ganados * 3;
// //variable que almacena los partidos ganados
// let empatados = 4;
// //variables con los puntos de los partidos empatados
// let puntosEmpatados = empatados * 1;
// //variable con los partidos perdidos
// let perdidos = 2;
// //total de jornadas de la liga
// let jornadas = 20;
// //variable que indica las jornadas jugadas de la liga hasta ahora
// let jornadasJugadas = ganados + empatados + perdidos;
// //variable de puntos ganados actualmente
// let totalPuntos = puntosGanados + puntosEmpatados;
// //variable que nos indica el número de jornadas restantes
// let jornadasRestantes = jornadas - jornadasJugadas;
// //se muestran los resultados por consola
// console.log('Partidos ganados: '+ganados);
// console.log('Puntos obtenidos por partidos ganados: '+puntosGanados);
// console.log('Partidos empatados: '+empatados);
// console.log('Puntos obtenidos por partidos empatados: '+puntosEmpatados);
// console.log('Partidos perdidos: '+perdidos);
// console.log('Jornadas que ha jugado el equipo hasta el momento: '+jornadasJugadas);
// console.log('Puntos ganados hasta el momento: '+totalPuntos);
// console.log('Jornadas restantes hasta concluir la liga: '+jornadasRestantes);
//Código con funciones
// function puntuacionActual(ganados,empatados) {
//     totalPuntos = (ganados*3) + empatados;
//     return totalPuntos;
// }
// puntuacionActual(8,3);
// console.log(`Actualmente el equipo tiene: ${totalPuntos} puntos`);

// 9.- Revisa el siguiente código y comenta lo que deduces del mismo
// const numero = 5;
// let cuadrado = numero ** 2;
// Código con función
// function elevaCuadrado(numero) {
//     cuadrado = numero ** 2;
//     return cuadrado;
// }
// elevaCuadrado(5)
// console.log(`Resultado: ${cuadrado}`);

//10 - Escribe el siguiente código y comenta lo que deduces del mismo
// nombre = "Fran Davila"; //se declara la variable nombre y se le asigna la string
// 	let puntuacion = 10; //se declara la variable puntuación y se le asigna el valor 10
// 	let salida = nombre + puntuacion; // se declara la variable salida y se concatena el valor de las variables definidas anteriormente.
// Codigo con función
// function aplicaNota(nombre,puntuacion) {
//     nota = nombre+' - '+puntuacion;
//     return nota;
// }
// aplicaNota('Santiago Castellano Hernández',11)
// console.log(`Nota aplicada: ${nota}`);

    //11 - Escribe un código que admita un número positivo y lo convierta en negativo.
// let numerillo = 45;
// console.log(numerillo);
// let numerilloNegativo= numerillo * (-1);
// console.log(numerilloNegativo);
// Código con funcion
// function invierteSigno(numerillo) {
//     invertido = numerillo * (-1);
//     return invertido;
// }
// invierteSigno(4567);
// console.log(`Resultado: ${invertido}`);