import { ProductDTO } from "api";
import Product from "../models/product";

function mapProduct(product: Product): ProductDTO {
    return {
        id: product._id.toString(),
        name: product.name
    };
}

export default mapProduct;