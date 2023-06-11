var l1, l2, l3, msg, image, m, m2, M, arreglo;

msg = document.getElementById("msg");
image = document.getElementById("imagen");

function Inicializacion(){
  l1 = document.getElementById('L1').value;
  l2 = document.getElementById('L2').value; 
  l3 = document.getElementById('L3').value;
  m = 0;
  m2 = 0;
  M = 0;

  arreglo = [];

  arreglo.push(parseFloat(l1));
  arreglo.push(parseFloat(l2));
  arreglo.push(parseFloat(l3));

  m = Math.min(...arreglo);
  arreglo.splice(arreglo.indexOf(m), 1);
  m2 = Math.min(...arreglo);
  arreglo.splice(arreglo.indexOf(m2), 1);
  M = Math.min(...arreglo);

  console.log(l1, l2, l3, m, m2, M) 
}

document.getElementById("L1").addEventListener("input", Inicializacion);
document.getElementById("L2").addEventListener("input", Inicializacion);
document.getElementById("L3").addEventListener("input", Inicializacion);

function Posible(value = 0) {
  if ((m + m2) > M){
    if (value == 1) {
      Area();
    } else if (value == 2) {
      Perimetro();
    } else if (value == 3) {
      Tipo();
    }
  } else {
    msg.style.visibility = "visible";
    msg.style.backgroundColor = "red";
    msg.innerHTML = "No es posible el triángulo";
  }
}

function Perimetro() {
  var perimetro = parseFloat(l1) + parseFloat(l2) + parseFloat(l3);

  console.log(l1, l2, l3, msg);
  console.log(perimetro);

  msg.style.visibility = "visible";
  msg.style.backgroundColor = "orange";
  msg.innerHTML = "El perímetro es: " + String(perimetro);
}

function Area() {
  m2 = (parseFloat(l1) + parseFloat(l2) + parseFloat(l3)) / 2;
  m2 = Math.sqrt(m2 * (m2 - parseFloat(l1)) * (m2 - parseFloat(l2)) * (m2 - parseFloat(l3)));
  msg.style.backgroundColor = "blue";
  msg.style.visibility = "visible";
  msg.innerHTML = "El Área es: " + String(m2);
}

function Tipo() {
  if (l1 == l2 && l2 == l3) {
    image.src = "assets/img/equi.png";
    msg.innerHTML = "Equilátero";
  } else if (l1 != l2 && l2 != l3) {
    image.src = "assets/img/escaleno.png";
    msg.innerHTML = "Escaleno";
  } else {
    image.src = "assets/img/isoceles.png";
    msg.innerHTML = "Isósceles";
  }
}

document.getElementById("Area").addEventListener("click", function() {
  Posible(1)
});

document.getElementById("Perimetro").addEventListener("click", function() {
  Posible(2)
});

document.getElementById("Tipo").addEventListener("click", function() {
  Posible(3)
});
