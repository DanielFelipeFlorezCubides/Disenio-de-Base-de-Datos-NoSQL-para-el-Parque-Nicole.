# Parque de diversiones

## Taller de Diseño de Base de Datos NoSQL

### **Objetivo:**

Diseñar una base de datos NoSQL utilizando MongoDB para un parque de diversiones, aplicando los conceptos de incrustación (embedding) y referencia (referencing) para modelar las relaciones entre las entidades. Se deberán justificar sus decisiones y representar el esquema de la base de datos.

### **Introducción:**

Un parque de diversiones necesita gestionar información sobre sus atracciones, visitantes, empleados, horarios, eventos y más. A diferencia de las bases de datos relacionales, MongoDB ofrece flexibilidad en la forma de estructurar y relacionar los datos.

### **Escenario:**

El "Parque Nicole" es un nuevo parque de diversiones que busca modernizar su sistema de gestión de información. Necesitan una base de datos NoSQL que sea capaz de almacenar y gestionar los siguientes aspectos:

- **Atracciones:** Nombre, tipo (montaña rusa, carrusel, show, etc.), descripción, altura mínima requerida, capacidad, estado (operativa, en mantenimiento), tiempo de espera promedio.
- **Zonas del Parque:** Nombre, descripción, lista de atracciones que contiene.
- **Visitantes:** Información personal (nombre, apellido, fecha de nacimiento, email), historial de visitas, tickets comprados.
- **Tickets:** Tipo de ticket (diario, anual, VIP), precio, fecha de compra, fecha de validez, visitante asociado.
- **Empleados:** Información personal (nombre, apellido, cargo, horario de trabajo), atracción(es) asignada(s).
- **Eventos/Espectáculos:** Nombre del evento, descripción, horario, ubicación (atracción o zona específica), empleados responsables.
- **Mantenimiento:** Registros de mantenimiento para cada atracción (fecha, descripción del trabajo, empleado(s) que lo realizaron, costo).

### **Actividad a Realizar:**

Para cada una de las entidades mencionadas (y cualquier otra que consideren relevante), se deberá:

1. **Identificar las entidades clave:** Determinar cuáles son las entidades principales y sus atributos importantes.
2. **Proponer las relaciones:** Para cada par de entidades relacionadas, decidir si la relación se establecerá mediante **incrustación (embedding)** o **referencia (referencing)**.
3. **Justificar la elección:** Explicar detalladamente por qué se eligió la incrustación o la referencia para esa relación específica, basándose en los principios de diseño de MongoDB.
4. **Proponer la representación del esquema:** Mostrar cómo se verían los documentos de cada colección. Esto puede ser:
   - **JSON de ejemplo:** Un ejemplo de documento JSON para cada colección, mostrando cómo se implementarían los atributos y las relaciones.
   - **Esquema más formal:** Una descripción de la estructura de cada documento.
   - **Se permite la combinación de ambos:** Un ejemplo JSON y una descripción del esquema para mayor claridad.
5. **Consideraciones Adicionales:** Si hay alguna situación donde la elección entre incrustar o referenciar es ambigua o presenta un desafío particular, deben discutirlo y proponer una solución.

### **Análisis de Entidades y Propuesta de Modelo de Datos**

#### 📁 **Visitantes: **``

- **Atributos Propuestos:**

  - `nombre: String`
  - `apellido: String`
  - `fecha_nacimiento: Date`
  - `email: String`
  - `historial_de_visitas: [ { fecha_visita: Date, hora_entrada: String } ]`
  - `tickets: [ { fecha_compra: Date, fecha_validez: Date, tipo_de_ticket: String, precio: Number } ]`
  - `tickets_comprados: Number`

- **Relaciones:**

  - **Entidad Relacionada:** Tickets (embebida)
  - **Tipo de Relación:** Uno (Visitante) a Muchos (Tickets)
  - **Estrategia de Modelado:** **Incrustación**
  - **Justificación:** Se optó por incrustar la información de los tickets dentro del documento del visitante para facilitar la consulta frecuente de este dato sin necesidad de realizar múltiples búsquedas cruzadas.

- **Ejemplo de Documento:**

```json
{
  "nombre": "Ana",
  "apellido": "López",
  "fecha_nacimiento": "1998-05-12",
  "email": "ana.lopez@example.com",
  "historial_de_visitas": [
    {
      "fecha_visita": "2025-05-01",
      "hora_entrada": "10:00"
    }
  ],
  "tickets": [
    {
      "fecha_compra": "2025-04-30",
      "fecha_validez": "2025-05-01",
      "tipo_de_ticket": "VIP",
      "precio": 150.00
    }
  ],
  "tickets_comprados": 1
}
```

---

#### 📁 **Zonas del parque: **``

- **Atributos Propuestos:**

  - `nombre_zona: String`
  - `descripcion: String`
  - `atraccion_id: String`
  - `evento_id: String`

- **Relaciones:**

  - **Entidad Relacionada:** Atracciones, Eventos
  - **Tipo de Relación:** Uno (Zona) a Muchos (Atracciones/Eventos)
  - **Estrategia de Modelado:** **Referencia**
  - **Justificación:** Para evitar la duplicación de datos y respetar el límite de 16MB por documento en MongoDB, se prefirió usar referencias a los `_id` de atracciones y eventos.

- **Ejemplo de Documento:**

```json
{
  "nombre_zona": "Zona Aventura",
  "descripcion": "Área con las atracciones más extremas.",
  "atraccion_id": "6634a01c8d9fa12345678901",
  "evento_id": "6634b11d8d9fa12345678902"
}
```

---

#### 📁 **Atracciones: **``

- **Atributos Propuestos:**

  - `nombre_atraccion: String`
  - `tipo_atraccion: String`
  - `descripcion: String`
  - `altura_minima: Number`
  - `capacidad: Number`
  - `estado: String`
  - `horario_funcionamiento: String`
  - `tiempo_espera: Number`
  - `empleados_asignados: [ { nombre, apellido, cargo, horario_asignado } ]`

- **Relaciones:**

  - **Entidad Relacionada:** Empleados (embebida)
  - **Tipo de Relación:** Uno (Atracción) a Muchos (Empleados)
  - **Estrategia de Modelado:** **Incrustación**
  - **Justificación:** Los datos de empleados asignados se consultan frecuentemente junto con la atracción, por lo que se incrustan para mejorar el rendimiento de las consultas.

- **Ejemplo de Documento:**

```json
{
  "nombre_atraccion": "Montaña Rusa Extrema",
  "tipo_atraccion": "Montaña Rusa",
  "descripcion": "Recorrido de alta velocidad con varios loopings.",
  "altura_minima": 140,
  "capacidad": 24,
  "estado": "Operativa",
  "horario_funcionamiento": "10:00 - 18:00",
  "tiempo_espera": 45,
  "empleados_asignados": [
    {
      "nombre": "Carlos",
      "apellido": "Ramírez",
      "cargo": "Operador",
      "horario_asignado": "09:30 - 17:30"
    }
  ]
}
```

---

#### 📁 **Eventos: **``

- **Atributos Propuestos:**

  - `nombre_evento: String`
  - `descripcion: String`
  - `fecha_evento: Date`
  - `empleados_asignados: [ { nombre, apellido, cargo, horario_asignado, atracciones_asignadas } ]`

- **Relaciones:**

  - **Entidad Relacionada:** Empleados (embebida)
  - **Tipo de Relación:** Uno (Evento) a Muchos (Empleados)
  - **Estrategia de Modelado:** **Incrustación**
  - **Justificación:** Como los eventos suelen tener personal específico y es común consultar todo el detalle junto, se decidió incrustar la información.

- **Ejemplo de Documento:**

```json
{
  "nombre_evento": "Show de Magia",
  "descripcion": "Espectáculo familiar con ilusionismo.",
  "fecha_evento": "2025-06-20",
  "empleados_asignados": [
    {
      "nombre": "Laura",
      "apellido": "Mendoza",
      "cargo": "Presentadora",
      "horario_asignado": "16:00 - 17:00",
      "atracciones_asignadas": "Teatro Central"
    }
  ]
}
```

---

#### 📁 **Mantenimientos: **``

- **Atributos Propuestos:**

  - `fecha_mantenimiento: Date`
  - `descripcion: String`
  - `estado: String`
  - `empleados_asignados: [ { nombre, apellido, cargo, horario_asignado } ]`
  - `costo: Number`
  - `atraccion_id: String`

- **Relaciones:**

  - **Entidad Relacionada:** Empleados (embebida), Atracciones (referencia)
  - **Tipo de Relación:** Uno (Mantenimiento) a Muchos (Empleados); Uno (Atracción) a Muchos (Mantenimientos)
  - **Estrategia de Modelado:** **Mixto**
  - **Justificación:** Se incrustan los empleados para facilitar el acceso frecuente a su información, pero se referencia la atracción para mantener la colección liviana y evitar redundancia en datos poco consultados.

- **Ejemplo de Documento:**

```json
{
  "fecha_mantenimiento": "2025-06-10",
  "descripcion": "Revisión de frenos y rieles.",
  "estado": "Completado",
  "empleados_asignados": [
    {
      "nombre": "Mario",
      "apellido": "Fernández",
      "cargo": "Técnico",
      "horario_asignado": "08:00 - 10:00"
    }
  ],
  "costo": 500.00,
  "atraccion_id": "6634a01c8d9fa12345678901"
}
```

### **Conclusiones y Desafíos:

Se aplicaron criterios de eficiencia y escalabilidad al momento de decidir entre incrustar o referenciar datos. En general, se priorizó la incrustación para entidades que se consultan frecuentemente en conjunto, como los empleados dentro de atracciones o eventos. Se usó la referencia cuando era importante evitar duplicación o cuando los documentos podrían crecer mucho. Un desafío clave fue balancear el rendimiento con la integridad del diseño, especialmente en el caso del mantenimiento, donde se usó una combinación de ambas estrategias.

### **Recursos Recomendados:

- Documentación oficial de MongoDB sobre Modelado de Datos:
  - [Data Model Design](https://www.mongodb.com/docs/manual/core/data-model-design/)
  - [Data Model Examples](https://www.mongodb.com/docs/manual/applications/data-models/)

**Plazo de entrega 11 de junio a las 11:59 pm**

### Authors
- Daniel Felipe Florez Cubides
- Mateo Paternina Mercado