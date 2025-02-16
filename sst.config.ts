/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'mattmayf-me',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          region: 'us-east-1',
          profile: 'agape-media-dev',
        },
      },
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket('MyBucket', {
      access: 'public',
    });
    new sst.aws.Function('Hono', {
      url: true,
      link: [bucket],
      handler: 'src/index.handler',
      copyFiles: [
        {
          from: 'public',
          to: 'public',
        },
      ],
    });
  },
});
