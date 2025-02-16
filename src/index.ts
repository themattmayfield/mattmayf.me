import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';

const app = new Hono();

app.use(
  '/*',
  serveStatic({
    root: './public',
  })
);

app.get('/', async (c) => {
  return c.html(renderPortfolio(portfolioData));
});

export const handler = handle(app);
export default app;
