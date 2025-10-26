# Prueba Tecnica


## Levantamiento de la base de datos

Para levantar la base de datos, asegúrate de tener Docker instalado en tu máquina. Luego, ejecuta el siguiente comando en la terminal:

```bash
docker-compose up -d
```
Esto iniciará un contenedor con Oracle y creará la base de datos necesaria para la aplicación.


## Scripts
Dentro del archivo `scripts,sql` se encuentra un script que trae la productividad por ejecutivo.

## Configuración del proyecto de NestJS
Antes de ejecutar la aplicación, asegúrate de configurar las variables de entorno necesarias. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
ORACLE_HOST=localhost
ORACLE_PORT=1521
ORACLE_USER=crm_user
ORACLE_PASSWORD=crm123
ORACLE_SERVICE_NAME=XEPDB1
```

## Ejecución de la aplicación

### Requisitos previos
Asegúrate de tener Node.js, npm y NestJS CLI instalados en tu máquina.

### Instalación de dependencias
Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias
```bash
npm install
```

### Inicio de la aplicación
Para ejecutar la aplicación, utiliza el siguiente comando:

```bash
npm run start:dev
```
Esto iniciará el servidor en modo de desarrollo.
La aplicación estará disponible en `http://localhost:3000`.
## Endpoints disponibles
- `GET /api/porductividad/all`: Obtiene la productividad de todos los Ejecutivos.
- `GET /api/porductividad/:ejecutivo`: Obtiene la productividad de un Ejecutivo específico.




## Modo de uso del SSIS:

Una vez abierto el proycecto de SSIS, cargar el archivo "carga ventas.siss" y ingresar las crescenciales de la base de datos:
- Usuario: crm_user
- Contraseña: crm123

Luego, ajustar la ruta del archivo CSV a cargar en el paso correspondiente del SSIS.
Finalmente, ejecutar el proceso para cargar los datos en la base de datos Oracle.

### Funcionamiento del SSIS:
El SSIS está diseñado para leer un archivo CSV que contiene datos de ventas y cargarlos en la tabla correspondiente de la base de datos Oracle. El proceso incluye los siguientes pasos:

1. **Limpieza de la tabla VENTAS_STAGING**: Antes de cargar nuevos datos, el SSIS elimina todos los registros existentes en la tabla de staging para evitar duplicados.
2. **Lectura del archivo CSV**: El SSIS lee el archivo CSV desde la ruta especificada, extrayendo los datos de ventas.
3. **Validación de datos**: Se realizan validaciones para asegurar que los datos cumplen con los requisitos antes de la inserción Mediante un `Script Component`.
4. **Inserción en la tabla STAGING**: Finalmente, los datos validados se insertan en la tabla `VENTAS_STAGING` y los datos invalidos se registran en la tabla `VENTAS_ERRORES`.
5. **Inserción en la tabla final**: Los datos correctos se transfieren desde la tabla de staging a la tabla final `VENTAS`.

