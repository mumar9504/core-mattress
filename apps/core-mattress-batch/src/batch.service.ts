import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from 'apps/core-mattress-api/src/libs/dto/member/member';
import { Product } from 'apps/core-mattress-api/src/libs/dto/product/product';
import { MemberType } from 'apps/core-mattress-api/src/libs/enums/member.enum';
import { ProductStatus } from 'apps/core-mattress-api/src/libs/enums/product.enum';
import { Model } from 'mongoose';

@Injectable()
export class BatchService {
	constructor(
		@InjectModel('Product') private readonly productModel: Model<Product>,
		@InjectModel('Member') private readonly memberModel: Model<Member>,
	) {}

	public async batchRollback(): Promise<void> {
		await this.productModel
			.updateMany(
				{
					productStatus: ProductStatus.ACTIVE,
				},
				{ productRank: 0 },
			)
			.exec();

		await this.memberModel
			.updateMany(
				{
					memberStatus: ProductStatus.ACTIVE,
					memberType: MemberType.AGENT,
				},
				{ memberRank: 0 },
			)
			.exec();
	}

	public async batchTopProducts(): Promise<void> {
		const products: Product[] = await this.productModel
			.find({
				productStatus: ProductStatus.ACTIVE,
				productRank: 0,
			})
			.exec();

		const promisedList = products.map(async (ele: Product) => {
			const { _id, productLikes, productViews } = ele;
			const rank = productLikes * 2 + productViews * 1;
			return await this.productModel.findByIdAndUpdate(_id, { productRank: rank }).exec();
		});
		await Promise.all(promisedList);
	}

	public async batchTopAgents(): Promise<void> {
		const agents: Member[] = await this.memberModel
			.find({
				memberStatus: ProductStatus.ACTIVE,
				memberType: MemberType.AGENT,
				memberRank: 0,
			})
			.exec();

		const promisedList = agents.map(async (ele: Member) => {
			const { _id, memberProducts, memberLikes, memberArticles, memberViews } = ele;
			const rank = memberProducts * 5 + memberArticles * 3 + memberLikes * 2 + memberViews * 1;
			return await this.memberModel.findByIdAndUpdate(_id, { memberRank: rank }).exec();
		});
		await Promise.all(promisedList);
	}

	public getHello(): string {
		return 'Welcome to Core Mattress BATCH Server!';
	}
}
