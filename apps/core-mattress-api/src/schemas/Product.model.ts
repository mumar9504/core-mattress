import { Schema } from 'mongoose';
import {
	ProductMattressSize,
	ProductCategory,
	ProductChairType,
	ProductDiningTableType,
	ProductMattressThickness,
	ProductSofaType,
	ProductStatus,
	ProductType,
} from '../libs/enums/product.enum';

const ProductSchema = new Schema(
	{
		productCategory: {
			type: String,
			enum: ProductCategory,
			required: true,
		},

		productType: {
			type: String,
			enum: ProductType,
			required: true,
		},

		productChairType: {
			type: String,
			enum: ProductChairType,
			required: false, 
		},

		productSofaType: {
			type: String,
			enum: ProductSofaType,
			required: false, 
		},

		productDiningTableType: {
			type: String,
			enum: ProductDiningTableType,
			required: false, 
		},

		productStatus: {
			type: String,
			enum: ProductStatus,
			default: ProductStatus.ACTIVE,
		},

		productTitle: {
			type: String,
			required: true,
		},

		productPrice: {
			type: Number,
			required: true,
		},

		productMattressThickness: {
			type: String,
			enum: ProductMattressThickness,
			required: false,
		},

		productMattressSize: {
			type: String,
			enum: ProductMattressSize,
			required: true,
		},

		productViews: {
			type: Number,
			default: 0,
		},

		productLikes: {
			type: Number,
			default: 0,
		},

		productComments: {
			type: Number,
			default: 0,
		},

		productRank: {
			type: Number,
			default: 0,
		},

		productImages: {
			type: [String],
			required: true,
		},

		productDesc: {
			type: String,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'products' },
);

ProductSchema.index({ productCategory: 1, productType: 1, productMattressSize: 1, productTitle: 1, productPrice: 1 }, { unique: true });

export default ProductSchema;
