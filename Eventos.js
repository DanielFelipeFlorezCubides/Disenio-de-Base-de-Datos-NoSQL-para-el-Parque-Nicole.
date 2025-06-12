/*
    {
        "id" = Lo genera mongo
        "nombre_evento": "",             // String
        "descripcion": "",              // String
        "fecha_evento": "",            // Date
        
        "empleados_asignados": [{
            "nombre": "",                   // String
            "apellido": "",                 // String
            "cargo": "",                    // String
            "horario_asignado": "",         // String
            "atracciones_asignadas": "",    // String
        }], Relacion uno (desde Eventos) a muchos (con Empleados)
    }
*/

// Usamos un schema embebido para facilitar las consultas al ser informacion solicitada con frecuencia.