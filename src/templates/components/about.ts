import { portfolioData } from '../../data/portfolio-data';

export const renderAbout = () => `
  <section class="mb-12 space-y-5 leading-7">
    <p>Hey, I am ${portfolioData.name}, a <span class="lowercase">${portfolioData.title}</span> 
    who finds beauty in transforming architectural challenges into clean, 
    efficient code.</p>

    <p>
    Working at
    ${badge(portfolioData.work)}</br>
    
    Creator of
    ${portfolioData.projects.map((item) => `${badge(item)}`).join(' ')}
    </p>

    <p>Outside of programming, I enjoy, playing pickleball, 
    lifting weights, and being outdoors. I'm a sucker for a hot bowl of bún bò huế, 
    and don't get me started on what'd I'd do for some korean bbq.</p>
    
    <p><a href="https://anime.themattmayfield.com/" class="text-white underline">Watching anime</a>, and listening to music are some of my favorite pastimes, but most 
    of all, I love spending time with my family and friends.</p>
  </section>
`;

const badge = ({
  name,
  image,
  link,
}: { name: string; image: string; link: string }) => `
  <a href="${link}" class="badge">
    <span class="badge-link-image" style="background-image: url(${image});"></span>
    ${name}</a>
`;
