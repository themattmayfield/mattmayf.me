import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import { portfolioData } from './data/portfolio-data';
import { renderPortfolio } from './templates/portfolio';

const app = new Hono();
app.use('/*', serveStatic({ root: './public' }));
app.get('/', (c) => c.html(renderPortfolio(portfolioData)));

export default app;
