import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';
import { serveStatic } from 'hono/bun';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';

const app = new Hono();

app.use(
  '/*',
  serveStatic({
    root: './public',

    onNotFound: (path, c) => {
      console.error(
        new Error(`${path} is not found, you access ${c.req.path}`)
      );
    },
  })
);

app.get('/', async (c) => {
  return c.html(renderPortfolio(portfolioData));
});

export const handler = handle(app);
