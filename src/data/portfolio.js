import chordialImg from '../images/chordial.png';
import listOrganizerImg from '../images/list-organizer.png';
import amazonImg from '../images/amazon.png';

const portfolio = [
  {
    id: 1,
    image: chordialImg,
    link1: 'https://github.com/Chordial-Music',
    link2: 'https://chordial.netlify.app/',
    title: 'Chordial',
    text: "ReactJS, Redux, NodeJS, Express. Allows users to create beautiful harmonic sequences from curated collections of musical chords."
  },
  {
    id: 2,
    image: listOrganizerImg,
    link1: 'https://github.com/David-Del1/lifeOrganizer',
    link2: 'https://614b9a8b7db1885d5c910587--elegant-payne-baa9a9.netlify.app/',
    title: 'Life Organizer',
    text: "ReactJS, Redux, Firebase. A to-do app inspired by Todoist. Users can create projects, add tasks associated with projects, and organize them by time horizon."
  },
  {
    id: 3,
    image: amazonImg,
    link1: 'https://github.com/David-Del1/amazon',
    link2: 'https://amazon-lovat.vercel.app/',
    title: 'Amazon Clone',
    text: "NextJS, Redux, Firebase, Stripe, OAuth. An Amazon clone where users can sign in via Google, add items to cart, and checkout using Stripe"
  },
];

export default portfolio;