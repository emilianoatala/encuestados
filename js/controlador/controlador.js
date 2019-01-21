/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
      this.modelo.agregarPregunta(pregunta, respuestas);
  },
  alertSeleccionInvalida: function(){
    swal({
      title: "¡Upss!",
      text: "!No seleccionaste ninguna pregunta!",
      icon: "warning",
      button: true,
      dangerMode: true,
    })
  }

};
  
Controlador.prototype.borrarPregunta = function(id){
  if( isNaN(id)==false){
  this.modelo.borrarPregunta(id);
  }
  else{
    this.alertSeleccionInvalida()
  }
};

Controlador.prototype.agregarVotos = function(nombrePregunta, respuestaSeleccionada){
  this.modelo.sumarVoto(nombrePregunta, respuestaSeleccionada)
};

Controlador.prototype.editarPregunta = function(id){
  if( isNaN(id)==false){
  var texto = prompt("Escriba su pregunta");
    if((texto !== NaN) && (texto !== undefined)&&(texto !== null)&& (texto.length>0)){
      this.modelo.editarPregunta(id, texto);
    }
    else{
      swal({
        title: "¡Hey!",
        text: "!No has escrito la pregunta",
        icon: "warning",
        button: true,
        dangerMode: true,
      })
    }
  }
  else{
    this.alertSeleccionInvalida();
  }
};

Controlador.prototype.borrarTodo = function(){
  this.modelo.borrarTodasLasPreguntas();
}
