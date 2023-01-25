function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
      pregunta: "Las funciones cuyas graficas son lineas rectas que pasan por el origen de cordenadas reciben el nombre de:",
      ayuda: "funcion lineal",
      ayudaImg: "https://www.problemasyecuaciones.com/funciones/lineales/T2.png",
      imagen: "https://planocartesiano.net/wp-content/uploads/2016/11/como-hacer-un-plano-cartesiano.png",
      respuesta: "Funciones lineales",
      distractores: ["Funciones contaste ", "Funciones afines", "Funciones logaritmicas"],
    },
    {
      pregunta: "La funcion de proporcionalidad derecta recibe el nombre de:",
      ayuda : "se me olvido",
      imagen: "https://www.neurochispas.com/wp-content/uploads/2021/01/graficas-de-funciones-logaritmicas-resueltas-2-992x1024.png",
      respuesta: "Funcion lineal",
      distractores: ["Funcion afin","Funcion porporsional", "Funcion logaritmicas"],
      
    },
    {
      pregunta: "La funcion lineal que pasa por el punto (3,6) tiene como expresion:",
      ayuda :"tampoco me acuerdo",
      imagen : "https://ekuatio.com/wp-content/uploads/imagen-de-una-funci%C3%B3n-1.png",
      respuesta : "x2",
      distractores: ["6x-2", "3x+6", "4x.4"],
    },
    {
      pregunta: "Si la pendiente de una funcion es lineal es positiva, la funcion es",
      respuesta: "Creciente",
      distractores: ["Decreciente", "Costante", "Proporcional"],
    },
  ]