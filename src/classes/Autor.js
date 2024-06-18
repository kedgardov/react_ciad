class Autor {
  constructor(id_autor = null, id_fuente = null, nombre = '', apellido = '', principal = false) {
    this.id_autor = id_autor;
    this.id_fuente = id_fuente;
    this.nombre = nombre;
    this.apellido = apellido;
    this.principal = principal;
  }
}

export default Autor;
