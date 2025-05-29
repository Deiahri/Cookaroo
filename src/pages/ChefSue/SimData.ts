export type MessageSimData = {
  text: string;
  delay: number;
  audioSrc?: string;
  recipe?: string;
  newLine?: boolean;
}

// user: Hey, I'd like something fast and easy to make.
// chef sue: Sounds good! Would you like a specific cuisine, or should I base it on what’s available in local stores?

const msg1 = 'Sounds good! Would you like a specific cuisine, or should I base it on what’s available in local stores?';
export const SimData1: MessageSimData[] = msg1.split(' ').map((s) => {
  return {
    text: s,
    delay: 100,
  }
});

export const SimData2: MessageSimData[] = [
  {
    text: 'Got',
    delay: 100,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'it.',
    delay: 750,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'I\'ll',
    delay: 50,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'ask',
    delay: 50,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'you',
    delay: 150,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'a',
    delay: 10,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'couple',
    delay: 250,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'of',
    delay: 150,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'questions',
    delay: 500,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'to',
    delay: 10,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'narrow',
    delay: 250,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'it',
    delay: 50,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'down.',
    delay: 800,
    audioSrc: '/v1.mp3'
  },
  {
    text: 'What',
    delay: 300,
    audioSrc: '/v2.mp3',
    newLine: true
  },
  {
    text: 'cooking',
    delay: 300,
  },
  {
    text: 'equipment',
    delay: 300,
  },
  {
    text: 'do',
    delay: 150,
  },
  {
    text: 'you',
    delay: 150,
  },
  {
    text: 'have?',
    delay: 150,
  }
]
