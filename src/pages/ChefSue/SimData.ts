export type MessageSimData = {
  text: string;
  delay: number;
  audioSrc?: string;
  recipe?: string;
  newLine?: boolean;
};
/* 
User: Stephen is a health conscious student who wants to make a dish 
from his favorite restaurant. 
He has a peanut allergy and is lactose intolerant. 
He’s struggling to identify dairy-free or lactose friendly ingredients 
and recipes while also respecting his peanut allergy. 
He wants alternatives that still maintain the flavor of his favorite dish. 
He also doesn’t have a lot of time to research on possible substitutes for his allergies. 
*/

// user: Hey, I'd like something fast and easy to make.
// chef sue: Sounds good! Would you like a specific cuisine, or should I base it on what’s available in local stores?
// user: no, based local stores
// chef sue: cool. I noticed no mention of allergies.
// user: I actually have a peanut allergy and am lactose intolerant
// chef: got it. ADded to profile. Are you cooking one meal, or want leftovers?
// user: I'll be meal prepping. Also, I'm thinking pasta, the kind I'd have at the red ladle. It was white, I think.
// chef: You might be thinking of Fettucini Alfredo, does that sound right?
// user: Excellent. Here's a recipe based on what you can get from what's around you.

// user views recipe, and is almost perfect. Looks at nutrition and asks to make more protein rich.
// chef: ... We can achieve that by swapping out the pasta for chickpea or soy-based pasta, and adding chicken or shrimp.
// user: sounds good, let's try that.
// chef: ... Excellent. Here's recipe.

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

export const SimData5: MessageSimData[] = [
  {
    text: "Got",
    delay: 250,
    audioSrc: "/v5.mp3",
  },
  {
    text: "it.",
    delay: 450,
  },
  {
    text: "Sounds",
    delay: 250,
  },
  {
    text: "like",
    delay: 220,
  },
  {
    text: "that",
    delay: 250,
  },
  {
    text: "creamy",
    delay: 300,
  },
  {
    text: "fettuccine",
    delay: 700,
  },
  {
    text: "from",
    delay: 150,
  },
  {
    text: "The",
    delay: 100,
  },
  {
    text: "Red",
    delay: 150,
  },
  {
    text: "Ladle.",
    delay: 900,
  },
  {
    text: "I'll",
    delay: 150,
    newLine: true,
    audioSrc: "/v5.mp3",
  },
  {
    text: "pull",
    delay: 100,
  },
  {
    text: "together",
    delay: 370,
  },
  {
    text: "a",
    delay: 20,
  },
  {
    text: "version",
    delay: 300,
  },
  {
    text: "that",
    delay: 100,
  },
  {
    text: "matches",
    delay: 200,
  },
  {
    text: "your",
    delay: 200,
  },
  {
    text: "profile",
    delay: 400,
  },
  {
    text: "using",
    delay: 200,
  },
  {
    text: "what's",
    delay: 200,
  },
  {
    text: "available",
    delay: 300,
  },
  {
    text: "near",
    delay: 200,
  },
  {
    text: "you.",
    delay: 1000,
  },
  {
    text: "Here's",
    delay: 300,
    newLine: true,
    audioSrc: "/v5.mp3",
  },
  {
    text: "a",
    delay: 50,
  },
  {
    text: "quick",
    delay: 200,
  },
  {
    text: "recipe",
    delay: 350,
  },
  {
    text: "for",
    delay: 150,
  },
  {
    text: "meal",
    delay: 200,
  },
  {
    text: "prep.",
    delay: 700,
  },
  {
    text: "",
    delay: 300,
    newLine: true,
    recipe: '68f45-c6ae9a0-800565-8d3a84c-7c0b371'
  }
];
