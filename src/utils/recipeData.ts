export type IngredientItem = {
  name: string;
  quantity: string;
  price: number; // in dollars
};

export type IngredientPart = {
  name: string;
  ingredients: IngredientItem[];
};

type Nutrition = {
  calories: number;
  totalFat: number; // grams
  saturatedFat: number; // grams
  transFat: number; // grams
  cholesterol: number; // mg
  sodium: number; // mg
  totalCarbohydrates: number; // grams
  dietaryFiber: number; // grams
  totalSugars: number; // grams
  addedSugars: number; // grams
  protein: number; // grams
  vitaminD: number; // mcg
  calcium: number; // mg
  iron: number; // mg
  potassium: number; // mg
};

export type InstructionStep = {
  text: string;
  image?: string;
};

export type InstructionGroup = {
  name: string;
  steps: InstructionStep[];
};

type Recipe = {
  title: string;
  id: string;
  image: string;
  tags: string[];
  description: string;
  fullDescription: string;
  time: number; // in minutes
  cost: number; // in dollars
  servings: number;
  nutrition: Nutrition;
  ingredients: IngredientPart[];
  instructions: InstructionGroup[];
};

export const recipes: Record<string, Recipe> = {
  "68f45-c6ae9a0-800565-8d3a84c-7c0b371": {
    title: "Red Ladle Inspired Fettuccine",
    id: "68f45-c6ae9a0-800565-8d3a84c-7c0b371",
    image:
      "https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=",
    tags: ["lactose-free", "nut-free"],
    description: "12 ingredients required",
    fullDescription:
      "Creamy fettuccine in a rich Alfredo sauce with a touch of black pepper, tender chicken, and fresh parsley — classic comfort, allergy-friendly.",
    time: 30,
    cost: 11.15,
    servings: 4,
    nutrition: {
      calories: 520,
      totalFat: 14,
      saturatedFat: 3,
      transFat: 0,
      cholesterol: 55,
      sodium: 480,
      totalCarbohydrates: 72,
      dietaryFiber: 4,
      totalSugars: 5,
      addedSugars: 1,
      protein: 22,
      vitaminD: 0.8,
      calcium: 110,
      iron: 2.5,
      potassium: 320,
    },
    ingredients: [
      {
        name: "Fettuccine",
        ingredients: [
          {
            name: "Box of fettuccine pasta",
            quantity: "1 (16 oz)",
            price: 2.5,
          },
          { name: "Salt", quantity: "1 tbsp", price: 0.05 },
        ],
      },
      {
        name: "Alfredo Sauce",
        ingredients: [
          { name: "Olive oil", quantity: "2 tbsp", price: 0.4 },
          { name: "Garlic", quantity: "3 cloves, minced", price: 0.3 },
          { name: "Chicken broth", quantity: "1 cup", price: 0.6 },
          { name: "Lactose-free cream", quantity: "1 cup", price: 1.5 },
          {
            name: "Lactose-free parmesan cheese",
            quantity: "1/2 cup, grated",
            price: 1.2,
          },
          { name: "Black pepper", quantity: "1/2 tsp", price: 0.05 },
        ],
      },
      {
        name: "Chicken",
        ingredients: [
          {
            name: "Chicken breast",
            quantity: "2 (about 1 lb), sliced",
            price: 4.0,
          },
          { name: "Olive oil", quantity: "1 tbsp", price: 0.2 },
          { name: "Salt", quantity: "1/2 tsp", price: 0.02 },
          { name: "Black pepper", quantity: "1/4 tsp", price: 0.03 },
        ],
      },
      {
        name: "Garnish",
        ingredients: [
          { name: "Fresh parsley", quantity: "2 tbsp, chopped", price: 0.3 },
        ],
      },
    ],
    instructions: [
      {
        name: "Preparation",
        steps: [
          {
            text: "Slice the chicken breasts into thin strips.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          { text: "Mince the garlic and chop the parsley." },
        ],
      },
      {
        name: "Cooking the Fettuccine",
        steps: [
          {
            text: "Bring a large pot of salted water to a boil.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Add fettuccine pasta and cook according to package instructions until al dente.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Drain and set aside.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
        ],
      },
      {
        name: "Cooking the Chicken",
        steps: [
          { text: "Heat olive oil in a skillet over medium-high heat." },
          {
            text: "Season chicken strips with salt and black pepper.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Add chicken to the skillet and cook until golden and cooked through, about 5-7 minutes.",
          },
          { text: "Remove chicken from skillet and set aside." },
        ],
      },
      {
        name: "Making Alfredo Sauce",
        steps: [
          {
            text: "In the same skillet, add olive oil and minced garlic. Sauté for 1 minute.",
          },
          { text: "Pour in chicken broth and bring to a simmer." },
          { text: "Add lactose-free cream and stir well." },
          {
            text: "Mix in grated lactose-free parmesan cheese and black pepper. Stir until sauce thickens.",
          },
        ],
      },
      {
        name: "Combining",
        steps: [
          {
            text: "Add cooked fettuccine and chicken to the sauce. Toss to coat evenly.",
          },
        ],
      },
      {
        name: "Serving",
        steps: [{ text: "Serve hot, garnished with chopped fresh parsley." }],
      },
    ],
  },

  // with cayenne
  "68f45-c6ae9a0-800565-8d3a84c-7d0b008": {
    title: "Red Ladle Inspired Fettuccine",
    id: "68f45-c6ae9a0-800565-8d3a84c-7d0b008",
    image:
      "https://media.istockphoto.com/id/612246764/photo/pasta-with-chicken.jpg?s=612x612&w=0&k=20&c=c_gZbA4DXcLGWLng58D2B9Od_do4xpGe1JXyUjstz0A=",
    tags: ["lactose-free", "nut-free"],
    description: "12 ingredients required",
    fullDescription:
      "A spicy twist on the classic — creamy fettuccine with cayenne-kissed Alfredo, juicy chicken, and fresh parsley.",
    time: 30,
    cost: 11.15,
    servings: 4,
    nutrition: {
      calories: 520,
      totalFat: 14,
      saturatedFat: 3,
      transFat: 0,
      cholesterol: 55,
      sodium: 480,
      totalCarbohydrates: 72,
      dietaryFiber: 4,
      totalSugars: 5,
      addedSugars: 1,
      protein: 22,
      vitaminD: 0.8,
      calcium: 110,
      iron: 2.5,
      potassium: 320,
    },
    ingredients: [
      {
        name: "Fettuccine",
        ingredients: [
          {
            name: "Box of fettuccine pasta",
            quantity: "1 (16 oz)",
            price: 2.5,
          },
          { name: "Salt", quantity: "1 tbsp", price: 0.05 },
        ],
      },
      {
        name: "Alfredo Sauce",
        ingredients: [
          { name: "Olive oil", quantity: "2 tbsp", price: 0.4 },
          { name: "Garlic", quantity: "3 cloves, minced", price: 0.3 },
          { name: "Chicken broth", quantity: "1 cup", price: 0.6 },
          { name: "Lactose-free cream", quantity: "1 cup", price: 1.5 },
          {
            name: "Lactose-free parmesan cheese",
            quantity: "1/2 cup, grated",
            price: 1.2,
          },
          { name: "Cayenne pepper", quantity: "1/2 tsp", price: 0.05 },
        ],
      },
      {
        name: "Chicken",
        ingredients: [
          {
            name: "Chicken breast",
            quantity: "2 (about 1 lb), sliced",
            price: 4.0,
          },
          { name: "Olive oil", quantity: "1 tbsp", price: 0.2 },
          { name: "Salt", quantity: "1/2 tsp", price: 0.02 },
          { name: "Cayenne pepper", quantity: "1/4 tsp", price: 0.03 },
        ],
      },
      {
        name: "Garnish",
        ingredients: [
          { name: "Fresh parsley", quantity: "2 tbsp, chopped", price: 0.3 },
        ],
      },
    ],
    instructions: [
      {
        name: "Preparation",
        steps: [
          {
            text: "Slice the chicken breasts into thin strips.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          { text: "Mince the garlic and chop the parsley." },
        ],
      },
      {
        name: "Cooking the Fettuccine",
        steps: [
          {
            text: "Bring a large pot of salted water to a boil.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Add fettuccine pasta and cook according to package instructions until al dente.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Drain and set aside.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
        ],
      },
      {
        name: "Cooking the Chicken",
        steps: [
          { text: "Heat olive oil in a skillet over medium-high heat." },
          {
            text: "Season chicken strips with salt and cayenne pepper.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Add chicken to the skillet and cook until golden and cooked through, about 5-7 minutes.",
          },
          { text: "Remove chicken from skillet and set aside." },
        ],
      },
      {
        name: "Making Alfredo Sauce",
        steps: [
          {
            text: "In the same skillet, add olive oil and minced garlic. Sauté for 1 minute.",
          },
          { text: "Pour in chicken broth and bring to a simmer." },
          { text: "Add lactose-free cream and stir well." },
          {
            text: "Mix in grated lactose-free parmesan cheese and cayenne pepper. Stir until sauce thickens.",
          },
        ],
      },
      {
        name: "Combining",
        steps: [
          {
            text: "Add cooked fettuccine and chicken to the sauce. Toss to coat evenly.",
          },
        ],
      },
      {
        name: "Serving",
        steps: [{ text: "Serve hot, garnished with chopped fresh parsley." }],
      },
    ],
  },

  // with protein
  "68f45-c6ae9a0-800565-8d3a84c-7d0b44A": {
    title: "Red Ladle Inspired Fettuccine (Extra Chicken)",
    image:
      "https://www.gimmesomeoven.com/wp-content/uploads/2024/11/Chicken-Fettuccine-Alfredo-10.jpg",
    id: "68f45-c6ae9a0-800565-8d3a84c-7d0b44A",
    tags: ["lactose-free", "nut-free", "high-protein"],
    description: "12 ingredients required",
    fullDescription:
      "A spicy twist on the classic — creamy fettuccine with cayenne-kissed Alfredo and extra juicy chicken.",
    time: 30,
    cost: 13.15,
    servings: 4,
    nutrition: {
      calories: 600,
      totalFat: 16,
      saturatedFat: 3.5,
      transFat: 0,
      cholesterol: 80,
      sodium: 500,
      totalCarbohydrates: 72,
      dietaryFiber: 4,
      totalSugars: 5,
      addedSugars: 1,
      protein: 36,
      vitaminD: 0.8,
      calcium: 110,
      iron: 2.5,
      potassium: 420,
    },
    ingredients: [
      {
        name: "Fettuccine",
        ingredients: [
          {
            name: "Box of fettuccine pasta",
            quantity: "1 (16 oz)",
            price: 2.5,
          },
          { name: "Salt", quantity: "1 tbsp", price: 0.05 },
        ],
      },
      {
        name: "Alfredo Sauce",
        ingredients: [
          { name: "Olive oil", quantity: "2 tbsp", price: 0.4 },
          { name: "Garlic", quantity: "3 cloves, minced", price: 0.3 },
          { name: "Chicken broth", quantity: "1 cup", price: 0.6 },
          { name: "Lactose-free cream", quantity: "1 cup", price: 1.5 },
          {
            name: "Lactose-free parmesan cheese",
            quantity: "1/2 cup, grated",
            price: 1.2,
          },
          { name: "Cayenne pepper", quantity: "1/2 tsp", price: 0.05 },
        ],
      },
      {
        name: "Chicken",
        ingredients: [
          {
            name: "Chicken breast",
            quantity: "4 (about 2 lb), sliced",
            price: 8.0,
          },
          { name: "Olive oil", quantity: "1 tbsp", price: 0.2 },
          { name: "Salt", quantity: "1/2 tsp", price: 0.02 },
          { name: "Cayenne pepper", quantity: "1/4 tsp", price: 0.03 },
        ],
      },
      {
        name: "Garnish",
        ingredients: [
          { name: "Fresh parsley", quantity: "2 tbsp, chopped", price: 0.3 },
        ],
      },
    ],
    instructions: [
      {
        name: "Preparation",
        steps: [
          { text: "Slice the chicken breasts into thin strips." },
          { text: "Mince the garlic and chop the parsley." },
        ],
      },
      {
        name: "Cooking the Fettuccine",
        steps: [
          { text: "Bring a large pot of salted water to a boil." },
          {
            text: "Add fettuccine pasta and cook according to package instructions until al dente.",
          },
          { text: "Drain in a colander and set aside." },
        ],
      },
      {
        name: "Cooking the Chicken",
        steps: [
          { text: "Heat olive oil in a skillet over medium-high heat." },
          { text: "Season chicken strips with salt and cayenne pepper." },
          {
            text: "Add chicken to the skillet and cook until golden and cooked through, about 5–7 minutes.",
          },
          { text: "Remove chicken from skillet and set aside." },
        ],
      },
      {
        name: "Making Alfredo Sauce",
        steps: [
          {
            text: "In the same skillet, add olive oil and minced garlic. Sauté for 1 minute.",
          },
          { text: "Pour in chicken broth and bring to a simmer." },
          { text: "Add lactose-free cream and stir well." },
          {
            text: "Mix in grated lactose-free parmesan cheese and cayenne pepper. Stir until sauce thickens.",
          },
        ],
      },
      {
        name: "Combining",
        steps: [
          {
            text: "Add cooked fettuccine and chicken to the sauce. Toss to coat evenly.",
          },
        ],
      },
      {
        name: "Serving",
        steps: [{ text: "Serve hot, garnished with chopped fresh parsley." }],
      },
    ],
  },

  "5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc": {
    id: "5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc",
    image:
      "https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg",
    title: "Orange Chicken",
    tags: ["gluten-free"],
    description: "9 Ingredients required",
    fullDescription:
      "A simple and flavorful gluten-free dish with a tangy citrus twist. Quick to prepare and perfect for busy days or a tasty dinner any night of the week.",
    time: 20,
    cost: 12,
    servings: 3,
    nutrition: {
      calories: 410,
      totalFat: 11,
      saturatedFat: 2,
      transFat: 0,
      cholesterol: 70,
      sodium: 650,
      totalCarbohydrates: 49,
      dietaryFiber: 2,
      totalSugars: 18,
      addedSugars: 10,
      protein: 28,
      vitaminD: 0.5,
      calcium: 40,
      iron: 1.2,
      potassium: 410,
    },
    ingredients: [
      {
        name: "Chicken",
        ingredients: [
          {
            name: "Boneless skinless chicken thighs",
            quantity: "1 lb",
            price: 3.5,
          },
          { name: "Cornstarch", quantity: "1/3 cup", price: 0.2 },
          { name: "Salt", quantity: "1/2 tsp", price: 0.02 },
          { name: "Black pepper", quantity: "1/4 tsp", price: 0.03 },
        ],
      },
      {
        name: "Orange Sauce",
        ingredients: [
          { name: "Orange juice", quantity: "1/2 cup, fresh", price: 0.5 },
          { name: "Orange zest", quantity: "1 tbsp", price: 0.1 },
          { name: "Gluten-free soy sauce", quantity: "2 tbsp", price: 0.3 },
          { name: "Rice vinegar", quantity: "1 tbsp", price: 0.1 },
          { name: "Brown sugar", quantity: "2 tbsp", price: 0.1 },
          { name: "Garlic", quantity: "2 cloves, minced", price: 0.2 },
          { name: "Ginger", quantity: "1 tsp, grated", price: 0.1 },
          { name: "Cornstarch", quantity: "1 tbsp", price: 0.05 },
        ],
      },
      {
        name: "For Frying",
        ingredients: [
          { name: "Vegetable oil", quantity: "for frying", price: 0.5 },
        ],
      },
      {
        name: "Garnish",
        ingredients: [
          { name: "Green onions", quantity: "2, sliced", price: 0.3 },
          { name: "Sesame seeds", quantity: "1 tsp", price: 0.05 },
        ],
      },
    ],
    instructions: [
      {
        name: "Preparation",
        steps: [
          { text: "Cut chicken thighs into bite-sized pieces." },
          { text: "Mince garlic and grate ginger." },
          { text: "Zest and juice the orange." },
        ],
      },
      {
        name: "Coating the Chicken",
        steps: [
          {
            text: "In a bowl, toss chicken pieces with cornstarch, salt, and black pepper until evenly coated.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
        ],
      },
      {
        name: "Frying the Chicken",
        steps: [
          {
            text: "Heat vegetable oil in a deep pan over medium-high heat.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Fry chicken pieces in batches until golden and crispy, about 4-5 minutes per batch.",
          },
          { text: "Remove and drain on paper towels." },
        ],
      },
      {
        name: "Making the Orange Sauce",
        steps: [
          {
            text: "In a saucepan, combine orange juice, orange zest, gluten-free soy sauce, rice vinegar, brown sugar, garlic, and ginger.",
          },
          {
            text: "Bring to a simmer over medium heat.",
            image:
              "https://www.datocms-assets.com/22695/1706209257-personalized-nutrition-app-design-concept.webp",
          },
          {
            text: "Mix cornstarch with a little water to make a slurry, then stir into the sauce.",
          },
          { text: "Cook until the sauce thickens, about 2 minutes." },
        ],
      },
      {
        name: "Combining",
        steps: [
          { text: "Add fried chicken to the sauce and toss to coat evenly." },
        ],
      },
      {
        name: "Serving",
        steps: [
          {
            text: "Serve hot, garnished with sliced green onions and sesame seeds.",
          },
        ],
      },
    ],
  },
};

export function getRecipeById(id: string): Recipe | undefined {
  return recipes[id];
}
