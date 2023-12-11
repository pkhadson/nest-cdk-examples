import { Injectable } from '@nestjs/common';
import { On, PubSubService } from '@nest-cdk/pubsub';

@Injectable()
export class AppService {
  constructor(private readonly pubSubService: PubSubService) {
    this.onTest({ a: 5 });
  }

  async getHello() {
    await this.pubSubService.emit('test', { msg: 'Hello World!' });
    return 'Hello World!';
  }

  @On('test')
  async onTest(data: any) {
    await fetch('https://test-nest-pubsub.requestcatcher.com/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
}
