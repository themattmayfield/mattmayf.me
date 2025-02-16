import { github } from '../../public/icons/github';
import type { PortfolioData } from '../data/portfolio-data';
import { renderAbout } from './components/about';
import { renderHeader } from './components/header';

export function renderPortfolio(data: PortfolioData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/hand.png">
    <title>${data.name}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            },
          },
        },
      }
    </script>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body class="bg-black min-h-screen antialiased text-[#BBBBBB]">
 <div class="h-[88px] flex justify-between items-center px-7">
   <div class="typing-container">
    <span id="typing-text"></span>
    <span class="cursor"></span>
   </div>
   <a href="https://github.com/themattmayfield">
   ${github()}
   </a>
 </div>
</div>
    <div class="px-7 py-10">
     <main class="max-w-2xl mx-auto">
           ${renderHeader()}
       
                ${renderAbout()}
        </main>
    </div>
    <script src="/typing-effect.js"></script>
</body>
</html>
`;
}
