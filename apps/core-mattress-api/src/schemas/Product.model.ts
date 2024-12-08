import { Schema } from 'mongoose';
import {
	ProductMattressSize,
	ProductBedSize,
	ProductRoomType,
	ProductChairType,
	ProductDiningTableType,
	ProductMattressThickness,
	ProductSofaType,
	ProductStatus,
	ProductType,
} from '../libs/enums/product.enum';

const ProductSchema = new Schema(
	{
		productRoomType: {
			type: String,
			enum: ProductRoomType,
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
			required: false,
		},

		productBedSize: {
			type: String,
			enum: ProductBedSize,
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

ProductSchema.index({ productRoomType: 1, productType: 1, productTitle: 1, productPrice: 1 }, { unique: true });

export default ProductSchema;
