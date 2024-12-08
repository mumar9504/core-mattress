import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
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
} from '../../enums/product.enum';
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class Product {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => ProductRoomType)
	productRoomType: ProductRoomType;

	@Field(() => ProductType)
	productType: ProductType;

	@Field(() => ProductChairType, { nullable: true })
	productChairType?: ProductChairType;

	@Field(() => ProductSofaType, { nullable: true })
	productSofaType?: ProductSofaType;

	@Field(() => ProductDiningTableType, { nullable: true })
	productDiningTableType?: ProductDiningTableType;

	@Field(() => ProductStatus)
	productStatus: ProductStatus;

	@Field(() => ProductMattressThickness, { nullable: true })
	productMattressThickness?: ProductMattressThickness;

	@Field(() => ProductMattressSize, { nullable: true })
	productMattressSize?: ProductMattressSize;

	@Field(() => ProductBedSize, { nullable: true })
	productBedSize?: ProductBedSize;

	@Field(() => String)
	productTitle: string;

	@Field(() => Number)
	productPrice: number;

	@Field(() => Int)
	productViews: number;

	@Field(() => Int)
	productLikes: number;

	@Field(() => Int)
	productComments: number;

	@Field(() => Int)
	productRank: number;

	@Field(() => [String])
	productImages: string[];

	@Field(() => String, { nullable: true })
	productDesc?: string;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	/** from aggregation **/
	@Field(() => [MeLiked], { nullable: true })
	meLiked?: MeLiked[];

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Products {
	@Field(() => [Product])
	list: Product[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
