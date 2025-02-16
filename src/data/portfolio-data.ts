import { getS3Link } from '../lib/getS3Link';

export const portfolioData = {
  name: 'Matt Mayfield',
  title: 'Software Engineer',
  socialLinks: {
    // github: 'https://github.com/yourusername',
    // linkedin: 'https://linkedin.com/in/yourusername',
    // email: 'your.email@example.com',
  },
  projects: [
    {
      name: 'SpotifyDash',
      image: getS3Link('spotify-logo.png'),
      link: 'https://spotifydash.co/',
    },
    // {
    //   name: 'MyAnimeList',
    //   image: '/crunchyroll-logo.png',
    //   link: 'https://anime.mattmayf.me',
    // },
  ],
  work: {
    name: 'Sure',
    image: getS3Link('sure-logo.png'),
    link: 'https://www.sureapp.com/',
  },
};

export type PortfolioData = typeof portfolioData;
