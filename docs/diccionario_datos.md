Set-Content -Path docs\diccionario_datos.md -Value '# Diccionario de Datos - Sistema Venta de Computadoras

## Tabla: `productos`
| Campo | Tipo | Nulo | Clave | Descripción |
|---|---|---|---|---|
| `id_producto` | INT | NO | PK | Identificador único del producto |
| `nombre` | VARCHAR(150) | NO | | Nombre o modelo del equipo/componente |
| `categoria` | VARCHAR(50) | SI | | Categoría (Laptops, Monitores, etc.) |
| `precio` | DECIMAL(10,2) | NO | | Precio unitario de venta |
| `stock` | INT | NO | | Cantidad disponible en inventario |
| `id_proveedor` | INT | SI | FK | Clave foránea referenciando a `proveedores` |

## Tabla: `clientes`
| Campo | Tipo | Nulo | Clave | Descripción |
|---|---|---|---|---|
| `id_cliente` | INT | NO | PK | Identificador único del cliente |
| `nombre` | VARCHAR(100) | NO | | Nombre completo o razón social |
| `dni_ruc` | VARCHAR(20) | NO | UNIQUE | Documento de identidad o RUC |
| `email` | VARCHAR(100) | SI | | Correo electrónico de contacto |
| `telefono` | VARCHAR(20) | SI | | Teléfono de contacto |

## Tabla: `ventas`
| Campo | Tipo | Nulo | Clave | Descripción |
|---|---|---|---|---|
| `id_venta` | INT | NO | PK | Identificador único de la transacción de venta |
| `fecha` | DATETIME | NO | | Fecha y hora del registro de venta |
| `id_cliente` | INT | SI | FK | Clave foránea referenciando a `clientes` |
| `total` | DECIMAL(10,2) | NO | | Monto total acumulado de la venta |' -Encoding UTF8