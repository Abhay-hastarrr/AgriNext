import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    commonName:{type:String,required:true},
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
    weight: { type: String, required: false },
    stock: { type: Number, default: 0 },
    outOfStock: { type: Boolean, default: false },
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel