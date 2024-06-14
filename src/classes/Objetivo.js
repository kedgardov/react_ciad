class Objetivo {
  constructor(
    id_objetivo = null,
    id_curso,
    tipo,
    numero=null,
    objetivo=null
  ){
    this.id_objetivo = id_objetivo;
    this.id_curso = id_curso;
    this.tipo = tipo;
    this.numero = numero;
    this.objetivo = objetivo;
  }
}

export default Objetivo;
