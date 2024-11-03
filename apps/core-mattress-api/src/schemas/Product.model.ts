import { Schema } from 'mongoose';
import {
	ProductBadMattressSize,
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
		productType: {
			type: String,
			enum: ProductType,
			required: true,
		},

		productChairType: {
			type: String,
			enum: ProductChairType,
			required: false, // required olib tashlandi yoki false qilib belgilandi
		},

		productSofaType: {
			type: String,
			enum: ProductSofaType,
			required: false, // required olib tashlandi yoki false qilib belgilandi
		},

		productDiningTableType: {
			type: String,
			enum: ProductDiningTableType,
			required: false, // required olib tashlandi yoki false qilib belgilandi
		},

		productStatus: {
			type: String,
			enum: ProductStatus,
			default: ProductStatus.ACTIVE,
		},

		productCategory: {
			type: String,
			enum: ProductCategory,
			required: true,
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

		productBadMattressSize: {
			type: String,
			enum: ProductBadMattressSize,
			required: false,
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

ProductSchema.index({ productType: 1, productBadMattressSize: 1, productTitle: 1, productPrice: 1 }, { unique: true });

export default ProductSchema;
