import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatesApiModule } from './rates-api/rates-api.module';
import { ConvertModule } from './convert/convert.module';
import ormconfig from '@app/configs/ormconfig'


@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    RatesApiModule,
    ConvertModule,
  ]
})
export class AppModule {}
