import gorillaImage from '../assets/gorilla.png';
import lionImage from '../assets/lion.png';
import zebraImage from '../assets/zebra.png';

const animals = [
  {
    name: 'Lion',
    scientificName: 'Panthera leo',
    size: 140,
    diet: ['meat'],
    image: lionImage,
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    image: gorillaImage,
    additional: {
      notes:
        'This is the eastern gorilla. There is also a western gorilla that is a different species.',
    },
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    image: zebraImage,
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra',
    },
  },
];

export default animals;
