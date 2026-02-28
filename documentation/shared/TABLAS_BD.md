# Coffee Project - Diseño de Base de Datos y Relaciones

## Listado de tablas y descripción

### 1. usuarios
- **Descripción:** Almacena la información de los usuarios (clientes y administradores de tienda).
- **Columnas:**
  - id: UUID (PK)
  - nombre: string
  - email: string (único)
  - password: string (hash)
  - rol: enum ('cliente', 'admin_tienda')
  - fecha_creacion: timestamp
- **Dependencias:** Relaciona con pedidos, comentarios, puntuaciones, mensajes.

### 2. tiendas
- **Descripción:** Representa cada tienda física o virtual.
- **Columnas:**
  - id: UUID (PK)
  - nombre: string
  - qr: string (URL o base64)
  - direccion: string
  - fecha_creacion: timestamp
- **Dependencias:** Relaciona con mesas, productos, pedidos, archivos, descuentos.

### 3. mesas
- **Descripción:** Cada mesa de una tienda, identificada por QR.
- **Columnas:**
  - id: UUID (PK)
  - numero: int
  - qr: string (URL o base64)
  - tienda_id: UUID (FK → tiendas.id)
- **Dependencias:** Relaciona con pedidos.

### 4. productos
- **Descripción:** Productos ofrecidos por la tienda.
- **Columnas:**
  - id: UUID (PK)
  - nombre: string
  - descripcion: string
  - precio: decimal
  - stock: int
  - habilitado: boolean
  - tienda_id: UUID (FK → tiendas.id)
  - fecha_creacion: timestamp
- **Dependencias:** Relaciona con pedidos_productos, comentarios, puntuaciones, descuentos, archivos.

### 5. pedidos
- **Descripción:** Pedidos realizados por los usuarios.
- **Columnas:**
  - id: UUID (PK)
  - usuario_id: UUID (FK → usuarios.id)
  - tienda_id: UUID (FK → tiendas.id)
  - mesa_id: UUID (FK → mesas.id)
  - estado: enum ('pendiente', 'preparando', 'entregado', 'cancelado')
  - total: decimal
  - fecha: timestamp
  - fecha_cancelacion: timestamp (nullable)
- **Dependencias:** Relaciona con pedidos_productos, devoluciones, pagos.

### 6. pedidos_productos
- **Descripción:** Relación N:N entre pedidos y productos, con detalles de cada producto en el pedido.
- **Columnas:**
  - pedido_id: UUID (FK → pedidos.id)
  - producto_id: UUID (FK → productos.id)
  - cantidad: int
  - personalizacion: string (JSON o texto)
- **Dependencias:** Relaciona pedidos y productos.

### 7. comentarios
- **Descripción:** Comentarios de usuarios sobre productos.
- **Columnas:**
  - id: UUID (PK)
  - usuario_id: UUID (FK → usuarios.id)
  - producto_id: UUID (FK → productos.id)
  - texto: string
  - fecha: timestamp
- **Dependencias:** Relaciona usuarios y productos.

### 8. puntuaciones
- **Descripción:** Puntuaciones de usuarios sobre productos.
- **Columnas:**
  - id: UUID (PK)
  - usuario_id: UUID (FK → usuarios.id)
  - producto_id: UUID (FK → productos.id)
  - valor: int (1-5)
- **Dependencias:** Relaciona usuarios y productos.

### 9. descuentos
- **Descripción:** Descuentos aplicados a productos o categorías.
- **Columnas:**
  - id: UUID (PK)
  - producto_id: UUID (FK → productos.id, nullable)
  - categoria: string (nullable)
  - porcentaje: int
  - activo: boolean
  - fecha_inicio: timestamp
  - fecha_fin: timestamp
- **Dependencias:** Relaciona con productos.

### 10. mensajes
- **Descripción:** Mensajes entre usuario y tienda (consultas sobre stock, etc).
- **Columnas:**
  - id: UUID (PK)
  - usuario_id: UUID (FK → usuarios.id)
  - tienda_id: UUID (FK → tiendas.id)
  - producto_id: UUID (FK → productos.id, nullable)
  - texto: string
  - fecha: timestamp
- **Dependencias:** Relaciona usuarios, tiendas y productos.

### 11. archivos
- **Descripción:** Archivos subidos (imágenes, videos) asociados a productos o tiendas.
- **Columnas:**
  - id: UUID (PK)
  - url: string
  - tipo: string
  - producto_id: UUID (FK → productos.id, nullable)
  - tienda_id: UUID (FK → tiendas.id, nullable)
  - fecha_subida: timestamp
- **Dependencias:** Relaciona con productos y tiendas.

### 12. pagos
- **Descripción:** Registra los pagos realizados por los pedidos.
- **Columnas:**
  - id: UUID (PK)
  - pedido_id: UUID (FK → pedidos.id)
  - usuario_id: UUID (FK → usuarios.id)
  - monto: decimal
  - estado: enum('pendiente','pagado','fallido','devuelto')
  - fecha: timestamp
- **Dependencias:** Relaciona con pedidos y devoluciones.

### 13. devoluciones
- **Descripción:** Registra las devoluciones de dinero por cancelaciones.
- **Columnas:**
  - id: UUID (PK)
  - pago_id: UUID (FK → pagos.id)
  - pedido_id: UUID (FK → pedidos.id)
  - usuario_id: UUID (FK → usuarios.id)
  - monto: decimal
  - estado: enum('pendiente','procesada','fallida')
  - fecha: timestamp
- **Dependencias:** Relaciona con pagos y pedidos.

---

## Explicación de dependencias y comunicación
- **usuarios** es central: puede crear pedidos, dejar comentarios, puntuaciones y mensajes.
- **tiendas** agrupa productos, mesas y recibe pedidos.
- **mesas** pertenece a una tienda y se usa para identificar la ubicación del pedido.
- **productos** pertenece a una tienda y puede tener archivos, descuentos, comentarios y puntuaciones.
- **pedidos** une usuario, tienda, mesa y productos (a través de pedidos_productos).
- **pedidos_productos** permite personalizar cada producto dentro de un pedido.
- **comentarios** y **puntuaciones** dependen de usuarios y productos.
- **descuentos** puede aplicarse a productos o categorías.
- **mensajes** permite la comunicación entre usuario y tienda, opcionalmente sobre un producto.
- **archivos** se asocian a productos o tiendas.
- **pagos** y **devoluciones** gestionan el flujo financiero de los pedidos.

Cada tabla está diseñada para mantener la trazabilidad y la integridad referencial, permitiendo consultas eficientes y relaciones claras entre entidades.

---

¿Quieres que genere el SQL de creación de tablas o un diagrama ER visual?
