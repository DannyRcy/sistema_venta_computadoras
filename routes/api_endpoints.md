Set-Content -Path routes\api_endpoints.md -Value '# Rutas y Endpoints - Base de Datos

## Mapeo de Rutas (API REST)

### Productos
- **`GET /api/productos`**: Obtener lista completa de productos.
- **`GET /api/productos/:id`**: Obtener detalle de un producto específico.
- **`POST /api/productos`**: Registrar un nuevo producto en inventario.
- **`PUT /api/productos/:id`**: Actualizar datos de un producto.

### Ventas
- **`GET /api/ventas`**: Listar ventas realizadas.
- **`POST /api/ventas`**: Registrar una nueva venta con sus detalles.

---

## Consultas Clave y Transacciones

### Transacción para registrar una venta y actualizar stock:
```sql
START TRANSACTION;

-- 1. Insertar cabecera de la venta
INSERT INTO ventas (id_cliente, total) VALUES (1, 1250.00);
SET @id_venta_generada = LAST_INSERT_ID();

-- 2. Insertar detalle de la venta
INSERT INTO detalle_ventas (id_venta, id_producto, cantidad, precio_unitario, subtotal)
VALUES (@id_venta_generada, 1, 1, 1250.00, 1250.00);

-- 3. Descontar el stock del producto vendido
UPDATE productos SET stock = stock - 1 WHERE id_producto = 1;

COMMIT;
```' -Encoding UTF8