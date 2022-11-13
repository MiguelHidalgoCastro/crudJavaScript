

export class VistaCrear {

    constructor(controlador, div) {
        this.div = div
        this.controlador = controlador

        this.inputNombre = document.getElementsByTagName('input')[0]
        this.inputMail = document.getElementsByTagName('input')[1]

        this.btnCrear = document.getElementById("btnCrear")
        this.btnCrear.onclick = this.pulsarBtnCrear.bind(this)


    }

    pulsarBtnCrear() {
        //Validar los campos
        if (this.inputNombre.value.length > 0 && this.inputMail.value.length > 0)
            //llamar al controlador
            this.controlador.aceptarInsert(this.inputNombre.value, this.inputMail.value)
        else
            alert("Rellena los campos")

    }

    
}