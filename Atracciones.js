/* 
    {
        "id" = Lo genera mongo
        "nombre_atraccion": "",         // String
        "tipo_atraccion": "",           // String
        "descripcion": "",              // String
        "altura_minima": 0,             // Integer
        "capacidad": 0,                 // Integer
        "estado": "",                   // String
        "horario_funcionamiento": "",   // String
        "tiempo_espera": 0,             // Integer

        "empleados_asignados": [{
            "nombre": "",                   // String
            "apellido": "",                 // String
            "cargo": "",                    // String
            "horario_asignado": "",         // String
        }], Relacion uno (desde Atracciones) a muchos (con Empleados)
    }
*/

// Usamos un schema embebido para facilitar las consultas al ser informacion solicitada con frecuencia.