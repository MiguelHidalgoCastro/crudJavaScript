

export class VistaNav{
    constructor(controlador, div){
        this.controlador = controlador
        this.div = div
        //registro eventos
        this.btnListar = document.getElementsByTagName('button')[1]
        this.btnListar.onclick = this.listar.bind(this)
    }
    listar(){
        this.controlador.listar()
        console.log("aqui, lsitando");
    }
}