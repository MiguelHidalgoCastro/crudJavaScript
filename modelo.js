

export class Modelo {
    constructor(controlador, callback) {
        if (window.indexedDB) {
            this.controlador = controlador
            this.observadores = []

            this.db
            const peticion = window.indexedDB.open('pruebaCRUD', 1)

            peticion.onsuccess = () => { // para abrir y traer datos
                this.db = peticion.result
                console.log('OPEN', this.db)
                callback()
            }
            peticion.onupgradeneeded = (e) => { // para añadir y modificar datos
                this.db = e.target.result
                console.log('CREATE', this.db)
                const objectStore = this.db.createObjectStore('personajes', {
                    autoIncrement: true
                })
                callback()

            }
            peticion.onerror = (error) => {
                console.log('Error', error)
            }
        }
        else
            console.log("no puedo funcionar")


    }

    registrarObservador(callback) {
        this.observadores.push(callback)
    }
    avisarObservadores() {
        for (let callback of this.observadores)
            callback()
    }

    insertar(nombre, mail) {
        let objeto = {
            nombre: nombre,
            email: mail
        }
        const objectStore = this.db.transaction('personajes', 'readwrite').objectStore('personajes')
        objectStore.transaction.oncomplete = () => {			//cuando se cree el objeto
            const cosasOS = this.db.transaction('personajes', 'readwrite').objectStore('personajes')
            cosasOS.add(objeto)
        }

        this.avisarObservadores()

    }

    getLista() {
        const objectStore = this.db.transaction('personajes', 'readonly').objectStore('personajes')
        const peticion = objectStore.openCursor()
        let listaUsuario = []
        peticion.onsuccess = (e) => {
            const cursor = e.target.result
            if (cursor) {
                listaUsuario.push(cursor.value)
                //console.log(cursor.key); me devuelve el key
                cursor.continue()
            }
            else {
                console.log("he terminado de leer")
            }

        }

    }


    borrar(id) {
        const peticion = this.db.transaction('personajes', 'readwrite').objectStore('personajes').delete(id);
        // borra pero no por el del orden del array sino por el key antiguo
        peticion.onsuccess = () => {
            console.log("personaje borrado");
        }
        peticion.onerror = () => {
            console.log("falló al borrar");
        }
    }
}

