/*
    {
        "id" = Lo genera mongo
        "nombre": "",             // String
        "apellido": "",          // String
        "fecha_nacimiento": "", // Date
        "email": "",           // String

        "historial_de_visitas":[{
            "fecha_visita": "",     // Date
            "hora_entrada": "",     // String
        }],

        "tickets": [{
            "fecha_compra": "",      // Date
            "fecha_validez": "",    // Date
            "tipo_de_ticket": "",  // String
            "precio": 0.0,        // Integer
        }], // Relacion uno (desde visitantes) a muchos (con Tickets)

        "tickets_comprados": 0  // Integer
    }
*/ 

// Escogimos el schema embebido en esta coleccion para facilitar la consulta de los tickets,
//  al ser datos que se usan/consultan con frecuencia.