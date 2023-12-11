import { defineConfig } from '@nest-cdk/core/register';
import PubSubPlugin from '@nest-cdk/pubsub/register';
import * as cdk from 'aws-cdk-lib';

// import { RestApi } from 'aws-cdk-lib/aws-apigateway';
// import { Construct } from 'constructs';

const app = new cdk.App();

// class AppStack extends cdk.Stack {
//   constructor(scope: Construct, id: string, props?: cdk.StackProps) {
//     super(scope, id, props);a

//     // Define your API using AWS CDK constructs
//     const api = new RestApi(this, 'MyApi');

//     new NestStack(this, 'NestApplication', {
//       project: 'nest-application',
//       distPath: 'dist',
//       api: api,
//     });
//   }
// }

// new AppStack(app, 'MyAppStack');

defineConfig({
  app,
  name: 'Pubsub',
  plugins: [new PubSubPlugin()],
});
