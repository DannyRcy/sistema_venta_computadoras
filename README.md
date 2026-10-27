# Sistema de Venta de Computadoras - Base de Datos

## Descripción Técnica General

Este repositorio contiene el diseño, scripts SQL y la especificación de endpoints para la base de datos de un sistema de venta de computadoras, componentes y accesorios. Incluye modelos conceptuales, lógicos y scripts de creación (DDL) e inserción (DML).

## Datos de Identificación

* **Nombre Completo:** Daniel Ricardo Cabezas Yupanqui
* **Carrera:** Ingeniería de Sistemas e Informática
* **Asignatura:** Ingeniería Web
* **Repositorio:** [https://github.com/DannyRcy/sistema_venta_computadoras.git](https://github.com/DannyRcy/sistema_venta_computadoras.git)

## Instrucciones para Ejecución o Despliegue

1. Clona este repositorio:
git clone [https://github.com/DannyRcy/sistema_venta_computadoras.git](https://github.com/DannyRcy/sistema_venta_computadoras.git)
2. Ejecuta el script DDL ubicado en `database/01_schema_ddl.sql` en tu gestor de base de datos (MySQL / MariaDB / PostgreSQL).
3. Inserta los datos iniciales de prueba ejecutando el script DML ubicado en `database/02_data_dml.sql`.
4. Revisa la documentación de las rutas en `routes/api_endpoints.md` para la integración con la API.