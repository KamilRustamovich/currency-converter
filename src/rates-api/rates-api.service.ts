import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Rate } from '@app/rates-api/rates-api.interface';


@Injectable()
export class RatesApiService {
	constructor(
		private readonly httpService: HttpService,
	) {}

	async getAllRates(currency: string): Promise<Rate> {
		const rates = (await this.httpService.get(`https://v6.exchangerate-api.com/v6/6e95e26fd6c3d06ee9b628e8/latest/${currency}`, {
			headers: {
				'Accept': 'application/json'
			}
		}).toPromise()).data;

		if(!rates) {
			throw new BadRequestException('Currency exchange rates not found')
		}

		return rates;
	}
}
