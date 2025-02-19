/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: 'mattmayf-me',
      removal: input?.stage === 'main' ? 'retain' : 'remove',
      protect: ['main'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          region: 'us-east-1',
          profile: 'agape-media-dev',
        },
        cloudflare: '5.49.0',
      },
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket('MyBucket', {
      access: 'public',
    });
    const hono = new sst.aws.Function('Hono', {
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
    new sst.aws.Router('MyRouter', {
      domain: {
        name:
          process.env.SST_STAGE === 'matthewmayfield'
            ? 'test.themattmayfield.com'
            : 'themattmayfield.com',
        dns: sst.cloudflare.dns(),
      },
      routes: {
        '/*': hono.url,
      },
    });
  },
});
