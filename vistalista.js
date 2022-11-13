
export class VistaLista {
    constructor(controlador, div) {
        this.div = div
        this.controlador = controlador
        this.modeloVista = this.controlador.getModelo()
        this.modeloVista.registrarObservador(this.actualizarLista.bind(this))

        this.tbody = document.getElementsByTagName('tbody')[0]
      
    }

    actualizarLista() { //Aqui lleno la tabla para mostrar los datos
        console.log("estoy aqui, actualizar lista");
    }


    borrarTodo(){
        console.log("borrando todo");
    }
}