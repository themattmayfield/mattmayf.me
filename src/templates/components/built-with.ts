export const renderBuiltWith = () => `
  <section class="mb-12 space-y-5 leading-7">
    <p>Site built with</p>
    ${buildWith.map((item) => `<a href="${item.link}" class="text-white underline">${item.name}</a>`).join(', ')}.
    <p>And deployed with <a href="https://sst.dev/" class="text-white underline">SST</a> using an AWS Lambda function behind a Cloudflare distribution.</p>
  </section>
`;

const buildWith = [
  {
    name: 'Hono',
    link: 'https://hono.dev/',
  },
  {
    name: 'Bun',
    link: 'https://bun.sh/',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
];
