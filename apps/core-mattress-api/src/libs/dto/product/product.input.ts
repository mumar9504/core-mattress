import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import { ProductBadMattressSize, ProductCategory, ProductChairType, ProductDiningTableType, ProductMattressThickness, ProductSofaType, ProductStatus, ProductType } from '../../enums/product.enum';
import { ObjectId } from 'mongoose';
import { availableProductSorts } from '../../config';
import { Direction } from '../../enums/common.enum';

@InputType()
export class ProductInput {
	@IsNotEmpty()
	@Field(() => ProductCategory)
	productCategory: ProductCategory;

	@IsNotEmpty()
	@Field(() => ProductType)
	productType: ProductType;

	@IsOptional() 
	@Field(() => ProductChairType, { nullable: true }) 
	productChairType?: ProductChairType;

	@IsOptional() 
	@Field(() => ProductSofaType, { nullable: true }) 
	productSofaType?: ProductSofaType;

	@IsOptional() 
	@Field(() => ProductDiningTableType, { nullable: true }) 
	productDiningTableType?: ProductDiningTableType;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	productTitle: string;

	@IsNotEmpty()
	@Field(() => Number)
	productPrice: number;

	@IsOptional()
	@Field(() => ProductMattressThickness, { nullable: true })
	productMattressThickness?: ProductMattressThickness;

	@IsOptional()
	@Field(() => ProductBadMattressSize, { nullable: true })
	productBadMattressSize?: ProductBadMattressSize;

	@IsNotEmpty()
	@Field(() => [String])
	productImages: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	productDesc?: string;

	memberId?: ObjectId;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}


@InputType()
export class PricesRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
    end: number;
 }

@InputType()
export class PeriodsRange {
	@Field(() => Date)
	start: Date;

	@Field(() => Date)
    end: Date;
 }

@InputType()
class PISearch { 
	@IsOptional()
	@Field(() => String, { nullable: true })
	memberId?: ObjectId;

	@IsOptional()
  @Field(() => [ProductCategory], { nullable: true })
	productCategoryList?: ProductCategory[];
	
  @IsOptional()
  @Field(() => [ProductType], { nullable: true })
	productTypeList?: ProductType[];

	@IsOptional()
	@Field(() => [ProductChairType], { nullable: true })
	productChairTypeList?: ProductChairType[];

	@IsOptional()
	@Field(() => [ProductSofaType], { nullable: true })
	productSofaTypeList?: ProductSofaType[];

	@IsOptional()
	@Field(() => [ProductDiningTableType], { nullable: true })
	productDiningTableTypeList?: ProductDiningTableType[];

	@IsOptional()
	@Field(() => [ProductMattressThickness], { nullable: true })
	productMattressThickness?: ProductMattressThickness[];

	@IsOptional()
	@Field(() => [ProductBadMattressSize], { nullable: true })
	productBadMattressSize?: ProductBadMattressSize[];

	@IsOptional()
    @Field(() => PricesRange, { nullable: true })
	pricesRange?: PricesRange;

	@IsOptional()
    @Field(() => PeriodsRange, { nullable: true })
	periodsRange?: PeriodsRange;

	@IsOptional()
    @Field(() => String, { nullable: true })
	text?: string;
}


@InputType()
export class ProductsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableProductSorts)
	@Field(() => String, {nullable: true})
	sort?: string;

	@IsOptional()
	@Field(() => Direction, {nullable: true})
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => PISearch)
	search: PISearch;
}

@InputType()
class APISearch {
	@IsOptional()
	@Field(() => ProductStatus, { nullable: true })
	productStatus?: ProductStatus;
}

@InputType()
export class AgentProductsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableProductSorts)
	@Field(() => String, {nullable: true})
	sort?: string;

	@IsOptional()
	@Field(() => Direction, {nullable: true})
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => APISearch)
	search: APISearch;
}

@InputType()
class ALPISearch {
	@IsOptional()
	@Field(() => ProductStatus, { nullable: true })
	productStatus?: ProductStatus;

	// @IsOptional()
	// @Field(() => [ProductLocation], { nullable: true })
	// productLocationList?: ProductLocation[];
}

@InputType()
export class AllProductsInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availableProductSorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => ALPISearch)
	search: ALPISearch;
}

@InputType()
export class OrdinaryInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;
}
