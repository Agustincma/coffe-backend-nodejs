# Coffee BFF - Tareas y Responsabilidades

## Rol del BFF (Backend For Frontend)
El BFF actúa como intermediario entre el frontend (web y mobile) y los microservicios/backend, adaptando y orquestando la información según las necesidades de cada cliente.

---

## Tareas principales del BFF

1. **Cálculo de descuentos**
   - Obtener los productos y sus descuentos desde el backend.
   - Calcular el precio final de cada producto aplicando el porcentaje de descuento definido por la tienda.
   - Ejemplo: Si un producto cuesta $100 y tiene un 20% de descuento, el BFF retorna $80 como precio final.

2. **Agregación y adaptación de datos**
   - Unificar y transformar respuestas de múltiples endpoints del backend para simplificar el consumo en el frontend.
   - Ejemplo: Combinar información de productos, stock y descuentos en una sola respuesta.

3. **Gestión de sesión y autenticación**
   - Validar y refrescar tokens JWT.
   - Adaptar la información de usuario para los distintos clientes (web/mobile).

4. **Orquestación de pedidos**
   - Recibir pedidos personalizados del frontend y enviarlos al backend con el formato adecuado.
   - Validar reglas de negocio antes de enviar el pedido (stock, horarios, etc).

5. **Gestión de cambios de mesa y cancelaciones**
   - Procesar solicitudes de cambio de mesa y cancelación de pedidos, asegurando la consistencia de los datos y la experiencia de usuario.

6. **Manejo de devoluciones y pagos**
   - Coordinar la devolución de dinero con el backend y la pasarela de pagos.
   - Notificar al frontend sobre el estado de la devolución.

7. **Optimización de consultas**
   - Cachear respuestas frecuentes (productos, menús, descuentos) para mejorar la velocidad de respuesta.

8. **Adaptación de mensajes y notificaciones**
   - Unificar y adaptar mensajes del backend para mostrar notificaciones claras y útiles al usuario final.

---

## Ejemplo de flujo de cálculo de descuento

1. El frontend solicita el listado de productos al BFF.
2. El BFF consulta los productos y descuentos al backend.
3. El BFF calcula el precio final de cada producto:
   - `precio_final = precio_base - (precio_base * porcentaje_descuento / 100)`
4. El BFF retorna al frontend el listado de productos con el precio final ya calculado.

---

## Endpoints, funcionalidades, validaciones y vinculación al backend

### 1. Productos y descuentos
- **GET /bff/products**
  - Funcionalidad: Devuelve el listado de productos con el precio final calculado (aplicando descuentos).
  - Vinculación backend:
    - GET /api/shops/:shopId/products (para obtener productos)
    - GET /api/shops/:shopId/discounts (para obtener descuentos)
  - Validaciones:
    - Verificar que los productos existan y estén habilitados.
    - Calcular correctamente el descuento según el porcentaje definido por la tienda.
    - Excluir productos sin stock.

### 2. Pedidos personalizados
- **POST /bff/orders**
  - Funcionalidad: Recibe un pedido personalizado, valida reglas de negocio y lo envía al backend.
  - Vinculación backend:
    - POST /api/orders (crear pedido)
    - GET /api/shops/:shopId/products (validar stock y productos)
    - GET /api/shops/:shopId/tables (validar mesa)
  - Validaciones:
    - Validar stock disponible para cada producto.
    - Validar formato y datos requeridos (mesa, tienda, usuario, personalización).
    - Validar horarios de atención de la tienda.

### 3. Cancelación de pedido
- **POST /bff/orders/:orderId/cancel**
  - Funcionalidad: Solicita la cancelación de un pedido.
  - Vinculación backend:
    - POST /api/orders/:orderId/cancel
  - Validaciones:
    - Verificar que el pedido esté en estado cancelable.
    - Validar que el usuario sea el dueño del pedido.

### 4. Devolución de dinero
- **POST /bff/orders/:orderId/refund**
  - Funcionalidad: Inicia el proceso de devolución de dinero.
  - Vinculación backend:
    - POST /api/orders/:orderId/refund
    - POST /api/payments/refund (si existe endpoint específico de pagos)
  - Validaciones:
    - Verificar que el pedido haya sido pagado y luego cancelado.
    - Validar que la devolución no haya sido procesada previamente.

### 5. Cambio de mesa
- **PATCH /bff/orders/:orderId/change-table**
  - Funcionalidad: Permite al usuario cambiar de mesa para un pedido activo.
  - Vinculación backend:
    - PATCH /api/orders/:orderId/change-table
    - GET /api/shops/:shopId/tables (validar nueva mesa)
  - Validaciones:
    - Verificar que el pedido no haya sido entregado.
    - Validar que la nueva mesa pertenezca a la misma tienda y esté disponible.

### 6. Autenticación y sesión
- **POST /bff/auth/login**
- **POST /bff/auth/refresh-token**
  - Funcionalidad: Gestiona login y refresco de sesión.
  - Vinculación backend:
    - POST /api/users/login
    - POST /api/users/refresh-token (si existe)
  - Validaciones:
    - Validar credenciales y tokens.
    - Proteger rutas con middleware de autenticación.

### 7. Agregación de datos y optimización
- **GET /bff/dashboard**
  - Funcionalidad: Devuelve datos agregados (ventas, stock, puntuaciones, etc) para el dashboard del usuario o tienda.
  - Vinculación backend:
    - GET /api/shops/:shopId/products
    - GET /api/shops/:shopId/orders
    - GET /api/products/:productId/ratings
    - GET /api/products/:productId/comments
  - Validaciones:
    - Validar permisos de acceso.
    - Unificar datos de múltiples fuentes del backend.

### 8. Archivos y QRs
- **POST /bff/files/upload**
  - Vinculación backend: POST /api/files/upload
- **GET /bff/shops/:shopId/qr**
  - Vinculación backend: GET /api/shops/:shopId/qr
- **GET /bff/shops/:shopId/tables/:tableId/qr**
  - Vinculación backend: GET /api/shops/:shopId/tables/:tableId/qr
  - Validaciones:
    - Validar tipo y tamaño de archivo.
    - Validar existencia de tienda/mesa para QRs.

### 9. Comentarios y puntuaciones
- **POST /bff/products/:productId/comments**
  - Vinculación backend: POST /api/products/:productId/comments
- **POST /bff/products/:productId/ratings**
  - Vinculación backend: POST /api/products/:productId/ratings
  - Validaciones:
    - Validar que el usuario haya realizado un pedido del producto.
    - Validar formato y longitud de los comentarios.

---

Cada endpoint del BFF debe validar los datos de entrada, proteger la información sensible, adaptar la respuesta para el frontend y orquestar las llamadas a los endpoints del backend según corresponda.

---

¿Quieres que agregue ejemplos de endpoints del BFF o alguna lógica específica?
