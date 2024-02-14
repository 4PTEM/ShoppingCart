/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./cart-items/cart-item.dto"), { "CreateCartItemDto": { cart_id: { required: true, type: () => Number }, product_id: { required: true, type: () => Number }, quantity: { required: true, type: () => Number } }, "UpdateCartItemDto": { cart_id: { required: false, type: () => Number }, product_id: { required: false, type: () => Number }, quantity: { required: false, type: () => Number } } }], [import("./clients/client.dto"), { "CreateClientDto": { first_name: { required: true, type: () => String }, last_name: { required: true, type: () => String }, email: { required: true, type: () => String }, phone_number: { required: false, type: () => String } }, "UpdateClientDto": { first_name: { required: false, type: () => String }, last_name: { required: false, type: () => String }, email: { required: false, type: () => String }, phone_number: { required: false, type: () => String } } }], [import("./products/produt.dto"), { "CreateProductDto": { name: { required: true, type: () => String }, price: { required: true, type: () => Number }, description: { required: false, type: () => String } }, "UpdateProductDto": { name: { required: false, type: () => String }, price: { required: false, type: () => Number }, description: { required: false, type: () => String } } }], [import("./shopping-carts/shopping-cart.dto"), { "CreateShoppingCartDto": { client_id: { required: true, type: () => Number }, creation_date: { required: false, type: () => Date } }, "UpdateShoppingCartDto": { client_id: { required: false, type: () => Number }, creation_date: { required: false, type: () => Date } } }]], "controllers": [[import("./cart-items/cart-items.controller"), { "CartItemsController": { "findAll": {}, "findOne": {}, "create": {}, "update": {}, "remove": {} } }], [import("./clients/clients.controller"), { "ClientsController": { "findAll": {}, "findOne": {}, "create": {}, "update": {}, "remove": {} } }], [import("./products/products.controller"), { "ProductsController": { "findAll": {}, "findOne": {}, "create": {}, "update": {}, "remove": {} } }], [import("./shopping-carts/shopping-carts.controller"), { "ShoppingCartsController": { "findAll": {}, "findOne": {}, "create": {}, "update": {}, "remove": {} } }]] } };
};