import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { MemberInput } from '../../libs/dto/member/member.input';

@Injectable()
export class MemberService {
  constructor(@InjectModel('Member') private readonly memberModel: Model<Member>) {}

  public async signup(input: MemberInput): Promise<Member> {
		// hASH PASSWORD
		//input.memberPassword = await this.authService.hashPassword(input.memberPassword);
		try {
			const result = await this.memberModel.create(input);
			// Authentification via Token
			//result.accessToken = await this.authService.createToken(result);
			return result;
		} catch (err) {
			console.log('Error, Service.model:', err);
      throw new BadRequestException(err);
			//console.log('Error, Service.model:', err.message);
			//throw new BadRequestException(Message.USED_MEMBER_NICK_OR_PHONE);
		}
	}

  public async login(): Promise<string> {
    return 'login executed!';
  }

  public async updateMember(): Promise<string> {
    return 'updateMember executed!';
  }

  public async getMember(): Promise<string> {
    return 'getMember executed!';
  }
}
