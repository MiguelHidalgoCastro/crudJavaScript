import { VistaCrear } from './vistacrear.js'
import { VistaLista } from './vistalista.js';
import { VistaNav } from './vistanav.js'
import { Modelo } from "./modelo.js";

class Controlador {
    constructor() {
        window.onload = this.iniciar.bind(this)
    }
    iniciar() {
        this.modelo = new Modelo(this, this.iniciarVistas.bind(this)) //callback
    }

    iniciarVistas() {
        //Ya crearía las vistas ya que ha cargado el modelo aqui
        this.divCrear = document.getElementById("formularioCrear")
        this.divLista = document.getElementById("divTabla")
        this.nav = document.getElementById("lista")

        this.vistaCrear = new VistaCrear(this, this.divCrear)
        this.vistaLista = new VistaLista(this, this.divLista)
        this.vistaNav = new VistaNav(this,this.divNav)
    }

    cargarDatos() {

    }
    aceptarInsert(nombre, email) {
        this.modelo.insertar(nombre, email)
    }
    getModelo() {
        return this.modelo
    }

    listar() {
        this.modelo.getLista()
    }
}

const app = new Controlador()