class ProductManager {
    #products
    constructor() {
        this.#products = [];

    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const index = this.#products.findIndex((p) => p.code === code);
        if (index >= 0) {
            console.error("This product code already exist");
            return;
        }

        if (!title) {
            console.error("Title is required");
            return
        }
        if (!description) {
            console.error("Description is required");
            return;
        }
        if (!price) {
            console.error("Price is required");
            return;
        }
        if (!thumbnail) {
            console.error("Thumbnail is required");
            return;
        }
        if (!code) {
            console.error("Code is required");
            return;
        }
        if (!stock) {
            console.error("Stock is required");
            return;
        }

        const product = {
            id: this.#products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.#products.push(product);
        return;
    }

    getProducts = () => {
        return this.#products;
    }

    getProductById = (ProductId) => {
        const product = this.#products.find((p) => p.id === ProductId);

        if (!product) {
            console.error("Not Found");
            return null;
        }

        return product;
    }
}

//Prueba 1
console.log("***Prueba 1***")
const productManager = new ProductManager();
console.table(productManager.getProducts());

//Prueba 2
console.log("***Prueba 2***")
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.table(productManager.getProducts());

//Prueba 3
console.log("***Prueba 3***")
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

//Prueba 4
console.log("***Prueba 4***")
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));