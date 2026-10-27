Set-Content -Path database\02_data_dml.sql -Value 'USE tienda_computadoras;

-- Insercion de Proveedores
INSERT INTO proveedores (nombre, telefono, email) VALUES
("TechDistribuidora S.A.", "987654321", "contacto@techdist.com"),
("Importaciones PC", "912345678", "ventas@importpc.com");

-- Insercion de Clientes
INSERT INTO clientes (nombre, dni_ruc, email, telefono) VALUES
("Juan Perez", "12345678", "juan.perez@email.com", "999888777"),
("Empresa Tech SRL", "20123456789", "admin@techsrl.com", "988776655");

-- Insercion de Productos
INSERT INTO productos (nombre, categoria, precio, stock, id_proveedor) VALUES
("Laptop Gaming Intel i7 16GB RAM", "Laptops", 1250.00, 10, 1),
("Monitor 27'' 144Hz IPS", "Monitores", 280.00, 15, 2),
("Teclado Mecanico RGB", "Perifericos", 65.00, 30, 1);' -Encoding UTF8