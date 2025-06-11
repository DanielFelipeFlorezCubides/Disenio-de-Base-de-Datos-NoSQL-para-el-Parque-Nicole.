# Parque de diversiones

## Taller de Diseño de Base de Datos NoSQL

### **Objetivo:**

Diseñar una base de datos NoSQL utilizando MongoDB para un parque de diversiones, aplicando los conceptos de incrustación (embedding) y referencia (referencing) para modelar las relaciones entre las entidades. Se deberán justificar sus decisiones y representar el esquema de la base de datos.

### **Introducción:**

Un parque de diversiones necesita gestionar información sobre sus atracciones, visitantes, empleados, horarios, eventos y más. A diferencia de las bases de datos relacionales, MongoDB ofrece flexibilidad en la forma de estructurar y relacionar los datos. 

### **Escenario:**

El "Parque Nicole" es un nuevo parque de diversiones que busca modernizar su sistema de gestión de información. Necesitan una base de datos NoSQL que sea capaz de almacenar y gestionar los siguientes aspectos:

- **Atracciones:** Nombre, tipo (montaña rusa, carrusel, show, etc.), descripción, altura mínima requerida, capacidad, estado (operativa, en mantenimiento), tiempo de espera promedio.
- **Zonas del Parque:** Nombre, descripción, lista de atracciones que contiene.
- **Visitantes:** Información personal (nombre, apellido, fecha de nacimiento, email), historial de visitas, tickets comprados.
- **Tickets:** Tipo de ticket (diario, anual, VIP), precio, fecha de compra, fecha de validez, visitante asociado.
- **Empleados:** Información personal (nombre, apellido, cargo, horario de trabajo), atracción(es) asignada(s).
- **Eventos/Espectáculos:** Nombre del evento, descripción, horario, ubicación (atracción o zona específica), empleados responsables.
- **Mantenimiento:** Registros de mantenimiento para cada atracción (fecha, descripción del trabajo, empleado(s) que lo realizaron, costo).

### **Actividad a Realizar:**

Para cada una de las entidades mencionadas (y cualquier otra que consideren relevante), se deberá:

1. **Identificar las entidades clave:** Determinar cuáles son las entidades principales y sus atributos importantes.
2. **Proponer las relaciones:** Para cada par de entidades relacionadas, decidir si la relación se establecerá mediante **incrustación (embedding)** o **referencia (referencing)**.
3. **Justificar la elección:** Explicar detalladamente por qué se eligió la incrustación o la referencia para esa relación específica, basándose en los principios de diseño de MongoDB.
4. **Proponer la representación del esquema:** Mostrar cómo se verían los documentos de cada colección. Esto puede ser:
    - **JSON de ejemplo:** Un ejemplo de documento JSON para cada colección, mostrando cómo se implementarían los atributos y las relaciones.
    - **Esquema más formal:** Una descripción de la estructura de cada documento.
    - **Se permite la combinación de ambos:** Un ejemplo JSON y una descripción del esquema para mayor claridad.
5. **Consideraciones Adicionales:** Si hay alguna situación donde la elección entre incrustar o referenciar es ambigua o presenta un desafío particular, deben discutirlo y proponer una solución.

### **Formato de Entrega:**

Se deberá presentar un repositorio donde su Readme contenga:

1. **Título del Proyecto:** Diseño de Base de Datos NoSQL para el Parque Nicole.
2. **Nombres de los Integrantes (mínimo 2, máximo 3).**
3. **Introducción:** Breve descripción del enfoque general de diseño.
4. **Análisis de Entidades y Propuesta de Modelo de Datos:**
    - Para cada entidad (Atracción, Zona, Visitante, Ticket, Empleado, Evento, Mantenimiento, etc.):
        - **Nombre de la Colección:** (Ej: `atracciones`)
        - **Atributos Propuestos:** Listar los campos y sus tipos (ej: `nombre: String`, `capacidad: Number`, `estado: String`).
        - **Relaciones:** Para cada relación con otra entidad, indicar:
            - Entidad Relacionada: (Ej: `Zonas`)
            - Tipo de Relación: (Ej: Atracción -> Zona: *Uno a Muchos*)
            - Estrategia de Modelado: (Ej: Incrustación de `_id` de Atracción en el documento de Zona / Referencia de `_id` de Zona en el documento de Atracción).
            - **Justificación:** Argumentar por qué se eligió esa estrategia específica para esa relación.
        - **Representación del Esquema:** Mostrar un ejemplo JSON o un esquema formal de cómo se vería un documento en esa colección.
5. **Conclusiones y Desafíos:** Resumen de las decisiones clave y cualquier desafío de diseño encontrado.

### **Recursos Recomendados:**

- Documentación oficial de MongoDB sobre Modelado de Datos:
    - [Data Model Design](https://www.mongodb.com/docs/manual/core/data-model-design/)
    - [Data Model Examples](https://www.mongodb.com/docs/manual/applications/data-models/)

**Plazo de entrega 11 de junio a las 11:59 pm**