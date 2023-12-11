# PubSub Example [Nest CDK](nestcdk.dev)

Follow these steps:

1. In your [AWS Console](https://console.aws.amazon.com/console/home) create a SNS (Simple Notification Service) Standard instance and copy your arn
2. Paste your arn in `snsArn` at `src/app.module.ts`
3. Deploy this project: `npm run deploy:all` and copy the URL output

---

Access the [HTTP console](https://test-nest-pubsub.requestcatcher.com/) to show requests
