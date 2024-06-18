class Fuente {
  constructor(
    id_fuente,
    id_curso,
    tipo,
    titulo,
    fecha_publicacion,
    editorial,
    volumen,
    numero,
    pagina,
    doi,
    url,
    fecha_consulta,
    edicion,
    editor,
    nombre_web,
    nombre_revista,
    cita
  ) {
    this.id_fuente = id_fuente;
    this.id_curso = id_curso;
    this.tipo = tipo;
    this.titulo = titulo;
    this.fecha_publicacion = fecha_publicacion;
    this.editorial = editorial;
    this.volumen = volumen;
    this.numero = numero;
    this.pagina = pagina;
    this.doi = doi;
    this.url = url;
    this.fecha_consulta = fecha_consulta;
    this.edicion = edicion;
    this.editor = editor;
    this.nombre_web = nombre_web;
    this.nombre_revista = nombre_revista;
    this.cita = cita;
  }
}

export default Fuente;
