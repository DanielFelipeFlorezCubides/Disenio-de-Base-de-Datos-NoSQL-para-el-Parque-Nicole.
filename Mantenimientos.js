/*
    {
        "id" = Lo genera mongo
        "fecha_mantenimiento": "",          // Date
        "descripcion": "",                  // String
        "estado": "",                       // String

        "empleados_asignados": [{
            "nombre": "",                   // String
            "apellido": "",                 // String
            "cargo": "",                    // String
            "horario_asignado": "",         // String
        }], Relacion uno (desde Mantenimiento) a muchos (con Empleados)

        "costo": 0.0,            // Integer
        "atraccion_id": ""       // String, referencia a la atraccion que esta en mantenimiento // Relacion uno (desde Mantenimiento) a muchos (con Atracciones)
    }
*/

// En esta ocasion, usamos los dos schemas. Embebido para los empleados asignados y asi facilitar sus consultas,
//  y referenciado para la atraccion ya que la coleccion de mantenimientos no suele tener un trafico de consultas alto.