import { Module } from '@nestjs/common';
import { AppController } from './controllers/main_controller';
import { AppService } from './services/main_service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
