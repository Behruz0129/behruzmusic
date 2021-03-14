import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Peninsula',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10556',
      artist: 'Psalm Trees, Guillaume Muschalle',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-300x300.jpg',
      color: ['#EDBF83', '#F5D453'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Sleepover',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130',
      artist: 'Nymano, JK the Sage',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-300x300.jpg',
      color: ['#5A5484', '#EDA49D'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Coda',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=13001',
      artist: 'Aarigod',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-300x300.jpg',
      color: ['#57452F', '#93AC5B'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Lax Incense',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
      artist: 'Mama Aiuto, Daphné',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-300x300.jpg',
      color: ['#77302E', '#516E11'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Bookshelves',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10022',
      artist: 'Sleepy Fish',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg',
      color: ['#252A48', '#70B2C8'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Canary Forest',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      artist: 'Aso, Middle School, Aviino',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-300x300.jpg',
      color: ['#3C6E53', '#274A50'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Faces',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8554',
      artist: 'Knowmadic',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-300x300.jpg',
      color: ['#924E4F', '#826083'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
