import { Module } from '@nestjs/common';
import { RatesApiService } from '@app/rates-api/rates-api.service';
import { HttpModule } from '@nestjs/axios';
import { RatesApiController } from '@app/rates-api/rates-api.controller';
import { HttpModuleConfig } from '@app/configs/httpmodule.config';


@Module({
  providers: [RatesApiService],
  controllers: [RatesApiController],
  imports: [
    HttpModule.registerAsync(HttpModuleConfig)
  ],
  exports: [RatesApiService]
})
export class RatesApiModule {}
