import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { RatesApiService } from '@app/rates-api/rates-api.service';

@Controller('rates')
export class RatesApiController {
	constructor(
		private readonly ratesApiService: RatesApiService,
	) {}

	@Get('latest/:currency')
	async getAllRates(@Param('currency') currency: string) {
		const rates = await this.ratesApiService.getAllRates(currency);

		if (!rates) {
			throw new HttpException('Currency not found', HttpStatus.BAD_REQUEST)
		}

		return {
			base_currency: rates.base_code,
			exchange_rates: rates.conversion_rates
		};
	}
}
