import { Module } from '@nestjs/common';
import { ConvertService } from '@app/convert/convert.service';
import { ConvertController } from '@app/convert/convert.controller';
import { RatesApiModule } from '@app/rates-api/rates-api.module';

@Module({
	providers: [ConvertService],
	controllers: [ConvertController],
	imports: [RatesApiModule]
})
export class ConvertModule {}
