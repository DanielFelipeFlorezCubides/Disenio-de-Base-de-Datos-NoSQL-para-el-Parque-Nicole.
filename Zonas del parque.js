/*
    {
        "id" = Lo genera mongo
        "nombre_zona": "",      // String
        "descripcion: "",       // String
        "atraccion_id": "",     // String, referencia a la atraccion que esta en la zona // Relacion uno (desde Zonas) a muchos (con Atracciones)
        "evento_id": "",        // String, referencia al evento que esta en la zona // Relacion uno (desde Zonas) a muchos (con Eventos)
    }
*/

// Hacemos uso de un schema referenciado para las atracciones y eventos, 
// ya que no queremos duplicar datos y no queremos superar el limite de 16MB de mongo.