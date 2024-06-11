class Curso {
  constructor(
    id_curso = null,
    clave = null,
    nombre = null,
    nombre_ingles = null,
    horas_teoricas = null,
    horas_practicas = null,
    horas_independientes = null,
    horas_semana = null,
    horas_semestre = null,
    vinculo_objetivos_posgrado = null
  ) {
    this.id_curso = id_curso;
    this.clave = clave;
    this.nombre = nombre;
    this.nombre_ingles = nombre_ingles;
    this.horas_teoricas = horas_teoricas;
    this.horas_practicas = horas_practicas;
    this.horas_independientes = horas_independientes;
    this.horas_semana = horas_semana;
    this.horas_semestre = horas_semestre;
    this.vinculo_objetivos_posgrado = vinculo_objetivos_posgrado;
  }

  update(updates) {
    for (const key in updates) {
      if (this.hasOwnProperty(key)) {
        this[key] = updates[key];
      }
    }
  }

  displayInfo() {
    return `
      Curso: ${this.nombre} (${this.nombre_ingles})
      Clave: ${this.clave}
      Horas Teóricas: ${this.horas_teoricas}
      Horas Prácticas: ${this.horas_practicas}
      Horas Independientes: ${this.horas_independientes}
      Horas por Semana: ${this.horas_semana}
      Horas por Semestre: ${this.horas_semestre}
      Vinculo Objetivos Posgrado: ${this.vinculo_objetivos_posgrado}
    `;
  }
}

export default Curso;
