# Coffee - Listado de Componentes y Pages (Web & Mobile)

## 1. Web App (Tienda)

### Pages
- LoginPage
- DashboardPage
- ProductsPage
- ProductDetailPage
- OrdersPage
- OrderDetailPage
- CustomersPage
- DiscountsPage
- CommentsPage
- RatingsPage
- StockManagementPage
- QRManagementPage
- FileUploadPage
- SettingsPage

### Componentes
- Navbar
- Sidebar
- ProductList
- ProductForm
- ProductCard
- OrderList
- OrderCard
- CustomerList
- DiscountForm
- CommentList
- RatingStars
- StockTable
- QRGenerator
- FileUploader
- UserProfile
- NotificationBanner

---

## 2. Mobile App (Usuario)

### Pages
- LoginPage
- HomePage
- ProductListPage
- ProductDetailPage
- CartPage
- OrderSummaryPage
- OrderStatusPage
- CommentsPage
- RatingsPage
- ProfilePage
- QRScannerPage

### Componentes
- BottomNavBar
- ProductCard
- AddToCartButton
- CartIcon
- OrderStatusTracker
- CommentForm
- RatingStars
- QRScanner
- UserProfile
- NotificationToast

---

## 3. Mobile App (Tienda - Gestión rápida de stock)

### Pages
- LoginPage
- QuickStockPage
- ProductListPage
- ProductEditPage
- QRManagementPage
- NotificationsPage

### Componentes
- ProductCard
- StockInput
- SaveButton
- QRGenerator
- NotificationToast

---

# Flujos de pantallas

## A. Web App (Tienda) - Flujo de gestión de productos
1. LoginPage → DashboardPage → ProductsPage → ProductDetailPage/ProductForm → StockManagementPage
   - Componentes: Navbar, Sidebar, ProductList, ProductCard, ProductForm, StockTable, NotificationBanner

## B. Mobile App (Usuario) - Flujo de pedido personalizado
1. LoginPage → QRScannerPage → HomePage → ProductListPage → ProductDetailPage → CartPage → OrderSummaryPage → OrderStatusPage
   - Componentes: BottomNavBar, QRScanner, ProductCard, AddToCartButton, CartIcon, OrderStatusTracker, NotificationToast

## C. Mobile App (Tienda) - Flujo de corrección rápida de stock
1. LoginPage → QuickStockPage → ProductListPage → ProductEditPage
   - Componentes: ProductCard, StockInput, SaveButton, NotificationToast

---

¿Quieres que detalle la estructura de carpetas para cada app o que avance con wireframes de los flujos?
