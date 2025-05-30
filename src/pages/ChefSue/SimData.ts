export type MessageSimData = {
  text: string;
  delay: number;
  audioSrc?: string;
  recipe?: string;
  newLine?: boolean;
};
/* User: Stephen is a health conscious student who wants to make a dish 
from his favorite restaurant. 
He has a peanut allergy and is lactose intolerant. 
He’s struggling to identify dairy-free or lactose friendly ingredients 
and recipes while also respecting his peanut allergy. 
He wants alternatives that still maintain the flavor of his favorite dish. 
He also doesn’t have a lot of time to research on possible substitutes for his allergies. 
*/

// user: Hey, I'd like something fast and easy to make.
// chef sue: Sounds good! Would you like a specific cuisine, or should I base it on what’s available in local stores?

const msg1 =
  "Sounds good! Would you like a specific cuisine, or should I base it on what’s available in local stores?";
export const SimData1: MessageSimData[] = msg1.split(" ").map((s) => {
  return {
    text: s,
    delay: 100,
  };
});

export const SimData2: MessageSimData[] = [
  {
    text: "Got",
    delay: 100,
    audioSrc: "/v1.mp3",
  },
  {
    text: "it.",
    delay: 750,
    audioSrc: "/v1.mp3",
  },
  {
    text: "I'll",
    delay: 50,
    audioSrc: "/v1.mp3",
  },
  {
    text: "ask",
    delay: 50,
    audioSrc: "/v1.mp3",
  },
  {
    text: "you",
    delay: 150,
    audioSrc: "/v1.mp3",
  },
  {
    text: "a",
    delay: 10,
    audioSrc: "/v1.mp3",
  },
  {
    text: "couple",
    delay: 250,
    audioSrc: "/v1.mp3",
  },
  {
    text: "of",
    delay: 150,
    audioSrc: "/v1.mp3",
  },
  {
    text: "questions",
    delay: 500,
    audioSrc: "/v1.mp3",
  },
  {
    text: "to",
    delay: 10,
    audioSrc: "/v1.mp3",
  },
  {
    text: "narrow",
    delay: 250,
    audioSrc: "/v1.mp3",
  },
  {
    text: "it",
    delay: 50,
    audioSrc: "/v1.mp3",
  },
  {
    text: "down.",
    delay: 1000,
    audioSrc: "/v1.mp3",
  },
  {
    text: "What",
    delay: 300,
    audioSrc: "/v2.mp3",
    newLine: true,
  },
  {
    text: "cooking",
    delay: 300,
  },
  {
    text: "equipment",
    delay: 300,
  },
  {
    text: "do",
    delay: 150,
  },
  {
    text: "you",
    delay: 150,
  },
  {
    text: "have?",
    delay: 150,
  },
];

export const SimData3: MessageSimData[] = [
  {
    text: "Excellent.",
    delay: 1000,
    audioSrc: "/v3.mp3",
  },
  {
    text: "I",
    delay: 100,
  },
  {
    text: "noticed",
    delay: 300,
  },
  {
    text: "you",
    delay: 100,
  },
  {
    text: "didn't",
    delay: 200,
  },
  {
    text: "specify",
    delay: 550,
  },
  {
    text: "any",
    delay: 250,
  },
  {
    text: "allergens",
    delay: 550,
  },
  {
    text: "on",
    delay: 150,
  },
  {
    text: "your",
    delay: 150,
  },
  {
    text: "profile.",
    delay: 700,
  },
  {
    text: "Do",
    delay: 100,
    newLine: true,
    audioSrc: "/v3.mp3",
  },
  {
    text: "you",
    delay: 150,
  },
  {
    text: "have",
    delay: 150,
  },
  {
    text: "any",
    delay: 200,
  },
  {
    text: "allergies",
    delay: 300,
  },
  {
    text: "I",
    delay: 50,
  },
  {
    text: "should",
    delay: 150,
  },
  {
    text: "worry",
    delay: 200,
  },
  {
    text: "about?",
    delay: 200,
  },
];

export const SimData4: MessageSimData[] = [
  {
    text: "Okay.",
    delay: 600,
    audioSrc: "/v4_p.mp3",
  },
  {
    text: "I've",
    delay: 100,
  },
  {
    text: "added",
    delay: 150,
  },
  {
    text: "that",
    delay: 50,
  },
  {
    text: "information",
    delay: 600,
  },
  {
    text: "to",
    delay: 60,
  },
  {
    text: "your",
    delay: 250,
  },
  {
    text: "profile.",
    delay: 900,
  },
  {
    text: "Next",
    delay: 400,
  },
  {
    text: "question:",
    delay: 1200,
  },
  {
    text: "Are",
    delay: 150,
    newLine: true,
    audioSrc: "/v4.mp3",
  },
  {
    text: "you",
    delay: 150,
  },
  {
    text: "cooking",
    delay: 300,
  },
  {
    text: "just",
    delay: 250,
  },
  {
    text: "for",
    delay: 150,
  },
  {
    text: "one",
    delay: 200,
  },
  {
    text: "meal,",
    delay: 500,
  },
  {
    text: "or",
    delay: 100,
  },
  {
    text: "do",
    delay: 100,
  },
  {
    text: "you",
    delay: 150,
  },
  {
    text: "want",
    delay: 150,
  },
  {
    text: "leftovers",
    delay: 400,
  },
  {
    text: "for",
    delay: 100,
  },
  {
    text: "later?",
    delay: 500,
  },
];
