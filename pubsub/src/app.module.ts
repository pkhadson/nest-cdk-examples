import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubModule } from '@nest-cdk/pubsub';

@Module({
  imports: [
    PubSubModule.forRoot({
      snsArn: 'arn:aws:sns:us-east-1:694685687897:SnsNestDemo',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
