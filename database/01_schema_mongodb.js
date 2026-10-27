// Base de Datos: tienda_computadoras
use tienda_computadoras;

// Limpieza segura de colecciones previas
['proveedores', 'clientes', 'productos', 'ventas'].forEach(col => {
  try { db[col].drop(); } catch (e) {}
});

// 1. Coleccion: Proveedores
db.createCollection("proveedores", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nombre", "ruc", "email", "estado"],
         properties: {
            nombre: { bsonType: "string" },
            ruc: { bsonType: "string", pattern: "^[0-9]{11}$" },
            telefono: { bsonType: "string" },
            email: { bsonType: "string" },
            direccion: { bsonType: "string" },
            estado: { enum: ["ACTIVO", "INACTIVO"] }
         }
      }
   }
});

// 2. Coleccion: Clientes
db.createCollection("clientes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nombre", "num_documento", "email"],
         properties: {
            nombre: { bsonType: "string" },
            tipo_documento: { enum: ["DNI", "RUC"] },
            num_documento: { bsonType: "string" },
            email: { bsonType: "string" },
            telefono: { bsonType: "string" },
            fecha_registro: { bsonType: "date" }
         }
      }
   }
});

// 3. Coleccion: Productos
db.createCollection("productos", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["sku", "nombre", "categoria", "precio", "stock", "estado"],
         properties: {
            sku: { bsonType: "string" },
            nombre: { bsonType: "string" },
            categoria: { bsonType: "string" },
            precio: { bsonType: ["double", "int", "decimal"] },
            stock: { bsonType: "int", minimum: 0 },
            proveedor_id: { bsonType: "objectId" },
            especificaciones: { bsonType: "object" },
            estado: { enum: ["DISPONIBLE", "AGOTADO", "DESCONTINUADO"] }
         }
      }
   }
});

// 4. Coleccion: Ventas
db.createCollection("ventas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["numero_comprobante", "fecha", "cliente", "items", "total", "metodo_pago"],
         properties: {
            numero_comprobante: { bsonType: "string" },
            fecha: { bsonType: "date" },
            cliente: {
               bsonType: "object",
               required: ["cliente_id", "nombre", "num_documento"],
               properties: {
                  cliente_id: { bsonType: "objectId" },
                  nombre: { bsonType: "string" },
                  num_documento: { bsonType: "string" }
               }
            },
            items: {
               bsonType: "array",
               minItems: 1,
               items: {
                  bsonType: "object",
                  required: ["producto_id", "sku", "nombre", "cantidad", "precio_unitario", "subtotal"],
                  properties: {
                     producto_id: { bsonType: "objectId" },
                     sku: { bsonType: "string" },
                     nombre: { bsonType: "string" },
                     cantidad: { bsonType: "int", minimum: 1 },
                     precio_unitario: { bsonType: ["double", "int", "decimal"] },
                     subtotal: { bsonType: ["double", "int", "decimal"] }
                  }
               }
            },
            subtotal: { bsonType: ["double", "int", "decimal"] },
            igv: { bsonType: ["double", "int", "decimal"] },
            total: { bsonType: ["double", "int", "decimal"] },
            metodo_pago: { enum: ["EFECTIVO", "TARJETA", "TRANSFERENCIA", "YAPE/PLIN"] }
         }
      }
   }
});

// INDEXACION PARA OPTIMIZACION DE CONSULTAS
db.productos.createIndex({ sku: 1 }, { unique: true });
db.productos.createIndex({ categoria: 1 });
db.clientes.createIndex({ num_documento: 1 }, { unique: true });
db.ventas.createIndex({ numero_comprobante: 1 }, { unique: true });
db.ventas.createIndex({ fecha: -1 });