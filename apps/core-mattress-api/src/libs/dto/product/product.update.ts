import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ProductType, ProductStatus, ProductChairType, ProductSofaType, ProductDiningTableType, ProductMattressThickness, ProductBadMattressSize, ProductCategory } from '../../enums/product.enum';
import { ObjectId } from 'mongoose';

@InputType()
export class ProductUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => ProductCategory, { nullable: true })
	productCategory?: ProductCategory;

	@IsOptional()
	@Field(() => ProductType, { nullable: true })
	productType?: ProductType;

	@IsOptional()
	@Field(() => ProductChairType, { nullable: true })
	productChairType?: ProductChairType;

	@IsOptional()
	@Field(() => ProductSofaType, { nullable: true })
	productSofaType?: ProductSofaType;

	@IsOptional()
	@Field(() => ProductDiningTableType, { nullable: true })
	productDiningTableType?: ProductDiningTableType;

	@IsOptional()
	@Field(() => ProductStatus, { nullable: true })
	productStatus?: ProductStatus;

	@IsOptional()
	@Field(() => ProductMattressThickness, { nullable: true })
	productMattressThickness?: ProductMattressThickness;

	@IsOptional()
	@Field(() => ProductBadMattressSize, { nullable: true })
	productBadMattressSize?: ProductBadMattressSize;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	productTitle?: string;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	productPrice?: number;

	@IsOptional()
	@Field(() => [String], { nullable: true })
	productImages?: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	productDesc?: string;

	soldAt?: Date;

	deletedAt?: Date;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	constructedAt?: Date;
	sort: string;
	direction: any;
	page: number;
	limit: number;
}
