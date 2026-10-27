use tienda_computadoras;

// Limpieza de datos previos
db.proveedores.deleteMany({});
db.clientes.deleteMany({});
db.productos.deleteMany({});
db.ventas.deleteMany({});

// 1. Insertar Proveedores
const provTech = db.proveedores.insertOne({
  nombre: "TechDistribuidora S.A.C.",
  ruc: "20123456789",
  telefono: "014567890",
  email: "contacto@techdist.pe",
  direccion: "Av. Republica de Panama 3055, Lima",
  estado: "ACTIVO"
});

const provImport = db.proveedores.insertOne({
  nombre: "Importaciones PC Global E.I.R.L.",
  ruc: "20987654321",
  telefono: "019876543",
  email: "ventas@importpc.com",
  direccion: "Av. Wilson 1250, Tienda 204, Lima",
  estado: "ACTIVO"
});

// 2. Insertar Clientes
const cli1 = db.clientes.insertOne({
  nombre: "Juan Carlos Perez Gomez",
  tipo_documento: "DNI",
  num_documento: "45879632",
  email: "juan.perez@email.com",
  telefono: "987654321",
  fecha_registro: new Date("2026-01-15")
});

const cli2 = db.clientes.insertOne({
  nombre: "Soluciones Digitales S.A.C.",
  tipo_documento: "RUC",
  num_documento: "20554433221",
  email: "compras@soldigitales.com",
  telefono: "912345678",
  fecha_registro: new Date("2026-02-01")
});

// 3. Insertar Productos con Especificaciones Tecnicas
const prod1 = db.productos.insertOne({
  sku: "LAP-INF-001",
  nombre: "Laptop Gaming ASUS ROG Strix G16",
  categoria: "Laptops",
  precio: 1850.00,
  stock: 8,
  proveedor_id: provTech.insertedId,
  especificaciones: { procesador: "Intel i7-13700HX", ram: "16GB DDR5", almacenamiento: "512GB SSD NVMe", gpu: "RTX 4060 8GB" },
  estado: "DISPONIBLE"
});

const prod2 = db.productos.insertOne({
  sku: "MON-LG-002",
  nombre: "Monitor Gaming LG UltraGear 27 IPS 180Hz",
  categoria: "Monitores",
  precio: 320.00,
  stock: 15,
  proveedor_id: provImport.insertedId,
  especificaciones: { resolucion: "2560x1440 QHD", panel: "IPS", tasa_refresco: "180Hz", tiempo_respuesta: "1ms" },
  estado: "DISPONIBLE"
});

const prod3 = db.productos.insertOne({
  sku: "PER-LOG-003",
  nombre: "Teclado Mecanico Logitech G Pro X",
  categoria: "Perifericos",
  precio: 140.00,
  stock: 25,
  proveedor_id: provTech.insertedId,
  especificaciones: { switches: "GX Blue Clicky", conectividad: "Cable USB-C Detachable", rgb: "LIGHTSYNC RGB" },
  estado: "DISPONIBLE"
});

const prod4 = db.productos.insertOne({
  sku: "ALM-KIN-004",
  nombre: "SSD NVMe Kingston KC3000 1TB",
  categoria: "Componentes",
  precio: 110.00,
  stock: 30,
  proveedor_id: provImport.insertedId,
  especificaciones: { interfaz: "PCIe 4.0 NVMe", lectura_seq: "7000 MB/s", escritura_seq: "6000 MB/s" },
  estado: "DISPONIBLE"
});

// 4. Insertar Ventas con Calculo de IGV
db.ventas.insertOne({
  numero_comprobante: "B001-000001",
  fecha: new Date(),
  cliente: {
    cliente_id: cli1.insertedId,
    nombre: "Juan Carlos Perez Gomez",
    num_documento: "45879632"
  },
  items: [
    {
      producto_id: prod1.insertedId,
      sku: "LAP-INF-001",
      nombre: "Laptop Gaming ASUS ROG Strix G16",
      cantidad: 1,
      precio_unitario: 1850.00,
      subtotal: 1850.00
    },
    {
      producto_id: prod3.insertedId,
      sku: "PER-LOG-003",
      nombre: "Teclado Mecanico Logitech G Pro X",
      cantidad: 1,
      precio_unitario: 140.00,
      subtotal: 140.00
    }
  ],
  subtotal: 1686.44,
  igv: 303.56,
  total: 1990.00,
  metodo_pago: "TARJETA"
});