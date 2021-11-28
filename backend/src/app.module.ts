import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    CitiesModule,
    MongooseModule.forRoot('mongodb://localhost/city-informant'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
