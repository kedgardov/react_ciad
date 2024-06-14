class Seriacion {
  constructor(
    id_seriacion = null,
    id_curso = null,
    id_requisito = null,
    clave_requisito = null,
    nombre_requisito = null
  ){
    this.id_seriacion = id_seriacion;
    this.id_curso = id_curso;
    this.id_requisito = id_requisito;
    this.clave_requisito = clave_requisito;
    this.nombre_requisito = nombre_requisito;
  }
}

export default Seriacion;
