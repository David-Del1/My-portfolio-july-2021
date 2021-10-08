import mmreVid from '../images/mmre.MP4';
import chordialVid from '../images/chordial.MP4'
import cashTrackVid from '../images/cashTrack.MP4';

const portfolio = [
  
    {
      id: 1,
      image: mmreVid,
      link1: 'https://github.com/David-Del1/memories-project',
      link2: 'https://mmre.netlify.app/',
      title: 'Mmre (Memory)',
      techStack: "ReactJS, Redux, OAuth, Bcrypt, JWT, Node, Express, MongoDB",
      text: 'Social media app that allows users to create a secure acct. and create/interact with posts known as Memories.'
    },
    {
      id: 2,
      image: cashTrackVid,
      link1: 'https://github.com/David-Del1/budget-tracker',
      link2: 'https://cashtrack.netlify.app/',
      title: 'Cash Track',
      techStack: "ReactJS, React Context, Material-UI, ChartJS, Speechly, Local Storage",
      text: 'Budget tracker that displays income and expense data, current balance, and utilizes Speechly web services to allow inputs through speech. Data persists using local'
    },
    {
    id: 3,
    image: chordialVid,
    link1: 'https://github.com/Chordial-Music',
    link2: 'https://chordial.netlify.app/',
    title: 'Chordial',
    techStack: 'ReactJS, Redux, NodeJS, Express',
    text: " Allows users to create beautiful harmonic sequences from curated collections of musical chords."
  },
  
];

export default portfolio;