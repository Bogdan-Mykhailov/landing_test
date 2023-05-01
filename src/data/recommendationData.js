import russel from '../assets/images/girl2.jpg';
import house from '../assets/images/house4.jpg';
import house1 from '../assets/images/house1.jpg';
import house2 from '../assets/images/house2.jpg';
import house3 from '../assets/images/house3.jpg';
import popular from '../assets/icons/popular.svg';
import man2 from '../assets/images/man2.jpg';
import man3 from '../assets/images/man3.jpg';
import girl4 from '../assets/images/girl4.jpg';
import wallet from '../assets/icons/walet.svg'
import home from '../assets/icons/newHome.svg'

export const featuredHouse = [
  {
    id: 1,
    card: {
      cover: house,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
    },
    title: 'Roselands House',
    subtitle: '$ 35.000.000',
    personalInfo: {
      image: russel,
      name: 'Dianne Russell',
      address: 'Manchester, Kentucky',
    },
  },

  {
    id: 2,
    card: {
      cover: house1,
      tagTitle: 'New house',
      tagIcon: home,
      tagType: 'newHouse',
    },
    title: 'Woodlandside',
    subtitle: '$ 20.000.000',
    personalInfo: {
      image: man3,
      name: 'Robert Fox',
      address: 'Dr. San Jose, South Dakota',
    },
  },

  {
    id: 3,
    card: {
      cover: house2,
      tagTitle: 'Best Deals',
      tagIcon: wallet,
      tagType: 'bestDeals',
    },
    title: 'The Old Lighthouse',
    subtitle: '$ 44.000.000',
    personalInfo: {
      image: man2,
      name: 'Ronald Richards',
      address: 'Santa Ana, Illinois',
    },
  },

  {
    id: 4,
    card: {
      cover: house3,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
    },
    title: 'Cosmo\'s House',
    subtitle: '$ 22.000.000',
    personalInfo: {
      image: girl4,
      name: 'Jenny Wilson',
      address: 'Preston Rd. Inglewood, Maine 98380',
    },
  },

  {
    id: 5,
    card: {
      cover: house,
      tagTitle: 'Popular',
      tagIcon: popular,
      tagType: 'popular',
    },
    title: 'Roselands House',
    subtitle: '$ 35.000.000',
    personalInfo: {
      image: russel,
      name: 'Dianne Russell',
      address: 'Manchester, Kentucky',
    },
  },

  {
    id: 6,
    card: {
      cover: house1,
      tagTitle: 'New house',
      tagIcon: home,
      tagType: 'newHouse',
    },
    title: 'Woodlandside',
    subtitle: '$ 20.000.000',
    personalInfo: {
      image: man3,
      name: 'Robert Fox',
      address: 'Dr. San Jose, South Dakota',
    },
  },
]
