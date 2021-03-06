import { Body, Controller, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertDto } from './dto/convert.dto';

@Controller('convert')
export class ConvertController {
	constructor(
		private readonly convertService: ConvertService,
	) {}

	@Post()
	async convert(@Body() convertDto: ConvertDto) {
		return this.convertService.convertAmount(convertDto)
	}
}
