type Recipe = {
  title: string;
  id: string;
  image: string;
  tags: string[];
  description: string;
};

export const recipes: Record<string, Recipe> = {
  '68f45-c6ae9a0-800565-8d3a84c-7c0b371': {
    title: 'Red Ladle Inspired Fettuccine',
    id: '68f45-c6ae9a0-800565-8d3a84c-7c0b371',
    image: 'https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=',
    tags: ['lactose-free', 'nut-free'],
    description: '12 ingredients required'
  },
  '5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc': {
    id: '5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc',
      image:"https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg",
      title:"Orange Chicken",
      tags:["20 minutes", "gluten-free"],
      description:"9 Ingredients required"
  }
};

export function getRecipeById(id: string): Recipe | undefined {
  return recipes[id];
}