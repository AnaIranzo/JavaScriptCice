/*5. Vamos a hacer un generador de nombres de superhéroe. Pide al usuario la fecha de nacimiento, el nombre y el apellido. Muestra el nombre de superhéroe de la siguiente manera: la primera letra del nombre indicará la propiedad del objeto letraNombre que debes obtener, la última letra del apellido indicará la propiedad del objeto letraApellido que debes obtener y último número del año de la fecha de nacimiento indicará la propiedad del objeto fechaNacimiento que debes obtener. Pregúntale también al usuario si quiere el nombre masculino o femenino. Muestra el nombre conseguido.
Por ejemplo, si yo me llamo “Rucesio”, mi nombre de superhéroe empezará con el valor de la propiedad ‘r’. */

let letraNombre = {
    a: {
      letra: "a",
      masculino: "La bestia",
      femenino: "La bestia",
    },
    b: {
      letra: "b",
      masculino: "Agente",
      femenino: "Agente",
    },
    c: {
      letra: "c",
      masculino: "Gigante",
      femenino: "Gigante",
    },
    d: {
      letra: "d",
      masculino: "Pokemon",
      femenino: "Pokemon",
    },
    e: {
      letra: "e",
      masculino: "Dragón",
      femenino: "Dragón",
    },
    f: {
      letra: "f",
      masculino: "Alien",
      femenino: "Alien",
    },
    g: {
      letra: "g",
      masculino: "Fantasma",
      femenino: "Fantasma",
    },
    h: {
      letra: "h",
      masculino: "Doctor",
      femenino: "Doctora",
    },
    i: {
      letra: "i",
      masculino: "Genio",
      femenino: "Genia",
    },
    j: {
      letra: "j",
      masculino: "Chico",
      femenino: "Chica",
    },
    k: {
      letra: "k",
      masculino: "Príncipe",
      femenino: "Princesa",
    },
    l: {
      letra: "l",
      masculino: "Hombre",
      femenino: "Mujer",
    },
    m: {
      letra: "m",
      masculino: "Gatito",
      femenino: "Gatita",
    },
    n: {
      letra: "n",
      masculino: "Borracho",
      femenino: "Borracha",
    },
    o: {
      letra: "o",
      masculino: "Rey",
      femenino: "Reina",
    },
    p: {
      letra: "p",
      masculino: "Robot",
      femenino: "Robot",
    },
    q: {
      letra: "q",
      masculino: "Científico",
      femenino: "Científica",
    },
    r: {
      letra: "r",
      masculino: "Samurai",
      femenino: "Samurai",
    },
    s: {
      letra: "s",
      masculino: "Mole",
      femenino: "Mole",
    },
    t: {
      letra: "t",
      masculino: "Loco",
      femenino: "Loca",
    },
    u: {
      letra: "u",
      masculino: "Vigilante",
      femenino: "Vigilante",
    },
    v: {
      letra: "v",
      masculino: "Guerrero",
      femenino: "Guerrera",
    },
    w: {
      letra: "w",
      masculino: "León",
      femenino: "Leona",
    },
    x: {
      letra: "x",
      masculino: "Ángel",
      femenino: "Ángel",
    },
    y: {
      letra: "y",
      masculino: "Tigre",
      femenino: "Tigresa",
    },
    z: {
      letra: "z",
      masculino: "Saiyajin",
      femenino: "Saiyajin",
    },
  };
  
  let letraApellido = {
    a: {
      letra: "a",
      masculino: "indestructible",
      femenino: "indestructible",
    },
    b: {
      letra: "b",
      masculino: "maravilla",
      femenino: "maravilla",
    },
    c: {
      letra: "c",
      masculino: "radiactivo",
      femenino: "radiactiva",
    },
    d: {
      letra: "d",
      masculino: "volador",
      femenino: "voladora",
    },
    e: {
      letra: "e",
      masculino: "mágico",
      femenino: "mágica",
    },
    f: {
      letra: "f",
      masculino: "salvaje",
      femenino: "salvaje",
    },
    g: {
      letra: "g",
      masculino: "vengador",
      femenino: "vengadora",
    },
    h: {
      letra: "h",
      masculino: "letal",
      femenino: "letal",
    },
    i: {
      letra: "i",
      masculino: "poderoso",
      femenino: "poderosa",
    },
    j: {
      letra: "j",
      masculino: "amoroso",
      femenino: "amorosa",
    },
    k: {
      letra: "k",
      masculino: "oscuro",
      femenino: "oscura",
    },
    l: {
      letra: "l",
      masculino: "fantástico",
      femenino: "fantástica",
    },
    m: {
      letra: "m",
      masculino: "invencible",
      femenino: "invencible",
    },
    n: {
      letra: "n",
      masculino: "valiente",
      femenino: "valiente",
    },
    o: {
      letra: "o",
      masculino: "superveloz",
      femenino: "superveloz",
    },
    p: {
      letra: "p",
      masculino: "invisible",
      femenino: "invisible",
    },
    q: {
      letra: "q",
      masculino: "mutante",
      femenino: "mutante",
    },
    r: {
      letra: "r",
      masculino: "tóxico",
      femenino: "tóxica",
    },
    s: {
      letra: "s",
      masculino: "sexy",
      femenino: "sexy",
    },
    t: {
      letra: "t",
      masculino: "asesino",
      femenino: "asesina",
    },
    u: {
      letra: "u",
      masculino: "karateka",
      femenino: "karateka",
    },
    v: {
      letra: "v",
      masculino: "galáctico",
      femenino: "galáctica",
    },
    w: {
      letra: "w",
      masculino: "carismático",
      femenino: "carismática",
    },
    x: {
      letra: "x",
      masculino: "violento",
      femenino: "violenta",
    },
    y: {
      letra: "y",
      masculino: "nocturno",
      femenino: "nocturna",
    },
    z: {
      letra: "z",
      masculino: "venenoso",
      femenino: "venenosa",
    },
  };
  
  let fechaNacimiento = {
    num0: {
      numero: 0,
      masculino: "del espacio",
      femenino: "del espacio",
    },
    num1: {
      numero: 1,
      masculino: "de la justicia",
      femenino: "de la justicia",
    },
    num2: {
      numero: 2,
      masculino: "de Marvel",
      femenino: "de Marvel",
    },
    num3: {
      numero: 3,
      masculino: "de las tinieblas",
      femenino: "de las tinieblas",
    },
    num4: {
      numero: 4,
      masculino: "de fuego",
      femenino: "de fuego",
    },
    num5: {
      numero: 5,
      masculino: "de la noche",
      femenino: "de la noche",
    },
    num6: {
      numero: 6,
      masculino: "del futuro",
      femenino: "del futuro",
    },
    num7: {
      numero: 7,
      masculino: "de acero",
      femenino: "de acero",
    },
    num8: {
      numero: 8,
      masculino: "exterminador",
      femenino: "exterminadora",
    },
    num9: {
      numero: 9,
      masculino: "de otro planeta",
      femenino: "de otro planeta",
    },
  };

  let nombre = window.prompt("Introduce tu nombre").toLowerCase().substring(0,1)
  let apellido = window.prompt("Introduce tu apellido").toLowerCase()
  apellido = apellido.substring(apellido.length-1)
  let fecha = window.prompt("Introduce tu fecha de nacimiento")
  fecha = fecha.substring(fecha.length-1)
  let genero = window.prompt("Introduce M si quieres el nombre en masculino o F si lo quieres en femenino").toUpperCase()

  letraFinal = ""
  if (nombre === letraNombre.a.letra) {
    genero === "F"
    ? letraFinal = letraNombre.a.femenino
    : letraFinal = letraNombre.a.masculino
  } else if (nombre === letraNombre.b.letra) {
    genero === "F"
    ? letraFinal = letraNombre.b.femenino
    : letraFinal = letraNombre.b.masculino
  } else if (nombre === letraNombre.c.letra) {
    genero === "F"
    ? letraFinal = letraNombre.c.femenino
    : letraFinal = letraNombre.c.masculino
  } else if (nombre === letraNombre.d.letra) {
    genero === "F"
    ? letraFinal = letraNombre.d.femenino
    : letraFinal = letraNombre.d.masculino
  } else if (nombre === letraNombre.e.letra) {
    genero === "F"
    ? letraFinal = letraNombre.e.femenino
    : letraFinal = letraNombre.e.masculino
  } else if (nombre === letraNombre.f.letra) {
    genero === "F"
    ? letraFinal = letraNombre.f.femenino
    : letraFinal = letraNombre.f.masculino
  } else if (nombre === letraNombre.g.letra) {
    genero === "F"
    ? letraFinal = letraNombre.g.femenino
    : letraFinal = letraNombre.g.masculino
  } else if (nombre === letraNombre.h.letra) {
    genero === "F"
    ? letraFinal = letraNombre.h.femenino
    : letraFinal = letraNombre.h.masculino
  } else if (nombre === letraNombre.i.letra) {
    genero === "F"
    ? letraFinal = letraNombre.i.femenino
    : letraFinal = letraNombre.i.masculino
  } else if (nombre === letraNombre.j.letra) {
    genero === "F"
    ? letraFinal = letraNombre.j.femenino
    : letraFinal = letraNombre.j.masculino
  } else if (nombre === letraNombre.k.letra) {
    genero === "F"
    ? letraFinal = letraNombre.k.femenino
    : letraFinal = letraNombre.k.masculino
  } else if (nombre === letraNombre.l.letra) {
    genero === "F"
    ? letraFinal = letraNombre.l.femenino
    : letraFinal = letraNombre.l.masculino
  } else if (nombre === letraNombre.m.letra) {
    genero === "F"
    ? letraFinal = letraNombre.m.femenino
    : letraFinal = letraNombre.m.masculino
  } else if (nombre === letraNombre.n.letra) {
    genero === "F"
    ? letraFinal = letraNombre.n.femenino
    : letraFinal = letraNombre.n.masculino
  } else if (nombre === letraNombre.o.letra) {
    genero === "F"
    ? letraFinal = letraNombre.o.femenino
    : letraFinal = letraNombre.o.masculino
  } else if (nombre === letraNombre.p.letra) {
    genero === "F"
    ? letraFinal = letraNombre.p.femenino
    : letraFinal = letraNombre.p.masculino
  } else if (nombre === letraNombre.q.letra) {
    genero === "F"
    ? letraFinal = letraNombre.q.femenino
    : letraFinal = letraNombre.q.masculino
  } else if (nombre === letraNombre.r.letra) {
    genero === "F"
    ? letraFinal = letraNombre.r.femenino
    : letraFinal = letraNombre.r.masculino
  } else if (nombre === letraNombre.s.letra) {
    genero === "F"
    ? letraFinal = letraNombre.s.femenino
    : letraFinal = letraNombre.s.masculino
  } else if (nombre === letraNombre.t.letra) {
    genero === "F"
    ? letraFinal = letraNombre.t.femenino
    : letraFinal = letraNombre.t.masculino
  } else if (nombre === letraNombre.u.letra) {
    genero === "F"
    ? letraFinal = letraNombre.u.femenino
    : letraFinal = letraNombre.u.masculino
  } else if (nombre === letraNombre.v.letra) {
    genero === "F"
    ? letraFinal = letraNombre.v.femenino
    : letraFinal = letraNombre.v.masculino
  } else if (nombre === letraNombre.w.letra) {
    genero === "F"
    ? letraFinal = letraNombre.w.femenino
    : letraFinal = letraNombre.w.masculino
  } else if (nombre === letraNombre.x.letra) {
    genero === "F"
    ? letraFinal = letraNombre.x.femenino
    : letraFinal = letraNombre.x.masculino
  } else if (nombre === letraNombre.y.letra) {
    genero === "F"
    ? letraFinal = letraNombre.y.femenino
    : letraFinal = letraNombre.y.masculino
  } else if (nombre === letraNombre.z.letra) {
    genero === "F"
    ? letraFinal = letraNombre.z.femenino
    : letraFinal = letraNombre.z.masculino
  } 

  let apellidoFinal = ""

  if (apellido === letraApellido.a.letra){
    genero === "F"
    ? apellidoFinal = letraApellido.a.femenino
    : apellidoFinal = letraApellido.a.masculino
  } else if (apellido === letraApellido.b.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.b.femenino
    : apellidoFinal = letraApellido.b.masculino
  }else if (apellido === letraApellido.c.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.c.femenino
    : apellidoFinal = letraApellido.c.masculino
  }else if (apellido === letraApellido.d.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.d.femenino
    : apellidoFinal = letraApellido.d.masculino
  }else if (apellido === letraApellido.e.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.e.femenino
    : apellidoFinal = letraApellido.e.masculino
  }else if (apellido === letraApellido.f.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.f.femenino
    : apellidoFinal = letraApellido.f.masculino
  }else if (apellido === letraApellido.g.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.g.femenino
    : apellidoFinal = letraApellido.g.masculino
  }else if (apellido === letraApellido.h.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.h.femenino
    : apellidoFinal = letraApellido.h.masculino
  }else if (apellido === letraApellido.i.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.i.femenino
    : apellidoFinal = letraApellido.i.masculino
  }else if (apellido === letraApellido.j.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.j.femenino
    : apellidoFinal = letraApellido.j.masculino
  }else if (apellido === letraApellido.k.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.k.femenino
    : apellidoFinal = letraApellido.k.masculino
  }else if (apellido === letraApellido.l.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.l.femenino
    : apellidoFinal = letraApellido.l.masculino
  }else if (apellido === letraApellido.m.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.m.femenino
    : apellidoFinal = letraApellido.m.masculino
  }else if (apellido === letraApellido.n.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.n.femenino
    : apellidoFinal = letraApellido.n.masculino
  }else if (apellido === letraApellido.o.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.o.femenino
    : apellidoFinal = letraApellido.o.masculino
  }else if (apellido === letraApellido.p.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.p.femenino
    : apellidoFinal = letraApellido.p.masculino
  }else if (apellido === letraApellido.q.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.q.femenino
    : apellidoFinal = letraApellido.q.masculino
  }else if (apellido === letraApellido.r.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.r.femenino
    : apellidoFinal = letraApellido.r.masculino
  }else if (apellido === letraApellido.s.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.s.femenino
    : apellidoFinal = letraApellido.s.masculino
  }else if (apellido === letraApellido.t.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.t.femenino
    : apellidoFinal = letraApellido.t.masculino
  }else if (apellido === letraApellido.u.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.u.femenino
    : apellidoFinal = letraApellido.u.masculino
  }else if (apellido === letraApellido.v.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.v.femenino
    : apellidoFinal = letraApellido.v.masculino
  }else if (apellido === letraApellido.w.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.w.femenino
    : apellidoFinal = letraApellido.w.masculino
  }else if (apellido === letraApellido.x.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.x.femenino
    : apellidoFinal = letraApellido.x.masculino
  }else if (apellido === letraApellido.y.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.y.femenino
    : apellidoFinal = letraApellido.y.masculino
  }else if (apellido === letraApellido.z.letra) {
    genero === "F"
    ? apellidoFinal = letraApellido.z.femenino
    : apellidoFinal = letraApellido.z.masculino
  }

  let fechaFinal = ""

  if (fecha === fechaNacimiento.num0.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num0.femenino
    : fechaFinal = fechaNacimiento.num0.masculino
    
  } else if (fecha === fechaNacimiento.num1.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num1.femenino
    : fechaFinal = fechaNacimiento.num1.masculino
    
  } else if (fecha === fechaNacimiento.num2.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num2.femenino
    : fechaFinal = fechaNacimiento.num2.masculino
    
  } else if (fecha === fechaNacimiento.num3.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num3.femenino
    : fechaFinal = fechaNacimiento.num3.masculino
    
  } else if (fecha === fechaNacimiento.num4.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num4.femenino
    : fechaFinal = fechaNacimiento.num4.masculino
    
  } else if (fecha === fechaNacimiento.num5.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num5.femenino
    : fechaFinal = fechaNacimiento.num5.masculino
    
  } else if (fecha === fechaNacimiento.num6.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num6.femenino
    : fechaFinal = fechaNacimiento.num6.masculino
    
  } else if (fecha === fechaNacimiento.num7.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num7.femenino
    : fechaFinal = fechaNacimiento.num7.masculino
    
  } else if (fecha === fechaNacimiento.num8.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num8.femenino
    : fechaFinal = fechaNacimiento.num8.masculino
    
  } else if (fecha === fechaNacimiento.num9.numero.toString()) {
    genero === "F"
    ? fechaFinal = fechaNacimiento.num9.femenino
    : fechaFinal = fechaNacimiento.num9.masculino
    
  }

  window.alert (`Tu nombre de superhéroe es: ${letraFinal} ${apellidoFinal} ${fechaFinal}`)