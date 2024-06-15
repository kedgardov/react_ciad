class Unidad {
  constructor(
    id_unidad = null,
    id_curso = null,
    numero = null,
    nombre = null,
    objetivo = null,
    id_habilidad = null,
    id_bloom = null,
    actividad_sincro = null,
    actividad_asincro = null,
    evidencia_sincro = null,
    evidencia_asincro = null,
    horas_sesion = null
  ){
    this.id_unidad = id_unidad;
    this.id_curso = id_curso;
    this.numero = numero;
    this.nombre = nombre;
    this.objetivo = objetivo;
    this.id_habilidad = id_habilidad;
    this.id_bloom = id_bloom;
    this.actividad_sincro = actividad_sincro;
    this.actividad_asincro = actividad_asincro;
    this.evidencia_sincro = evidencia_sincro;
    this.evidencia_asincro = evidencia_asincro;
    this.horas_sesion = horas_sesion;
  }
};

export default Unidad;
