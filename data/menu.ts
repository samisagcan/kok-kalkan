/**
 * Menu content. Kept separate from markup so it can be edited without touching
 * components, and so it can feed both the page and the Menu/MenuItem JSON-LD.
 *
 * Signature format (brand rule): every dish has a "Poetic Name" and, below it,
 * its components joined by " | ". Preserve this everywhere.
 */

export type Dietary = "vegetarian" | "vegan" | "gluten-free";

export interface Dish {
  /** Poetic name — the headline of the dish. */
  name: string;
  /** Components, shown joined with " | ". */
  components: string[];
  dietary?: Dietary[];
}

/**
 * The Chef's Journey to the Roots — a single set tasting menu served to the
 * whole table. Ordered as a vertical journey, course by course.
 */
export const tastingMenu = {
  title: "The Chef's Journey to the Roots",
  courses: [
    { name: "Lavender-Infused Olive Oil", components: ["1 month aged"] },
    { name: "Truffle Butter Cream", components: ["Handmade Kaiser Roll"] },
    { name: "Black Hummus", components: ["Green Oil", "Sumac"], dietary: ["vegetarian"] },
    { name: "Liver Paté", components: ["Cocoa", "Black Forest"] },
    { name: "White Fish Mousse", components: ["Orange Aioli", "Simit"] },
    { name: "Melon", components: ["Cheese", "Tail-on Shrimp"] },
    { name: "Glazed Smoked Beetroot", components: ["Anise", "Cherry"], dietary: ["vegetarian", "gluten-free"] },
    { name: "Seabass", components: ["White Chocolate", "Garlic Crisp"] },
    { name: "Slow-Cooked Beef Cheek", components: ["Chickpea Cream", "Molasses"] },
    { name: "Baklava", components: ["Milky Cream", "Pistachio"] },
    { name: "Turkish Coffee", components: [] },
  ] as Dish[],
  notes: [
    "Served to the whole table as one shared journey.",
    "Allergies and dietary needs must be shared in advance.",
  ],
};

/**
 * À la carte — poetic names with their components and dietary markers.
 */
export const aLaCarte: Dish[] = [
  { name: "Sweetness of the Sea", components: ["Seabass Goujon", "White Chocolate"] },
  { name: "Umami", components: ["Beef", "Egg", "Molasses"] },
  { name: "A Distant Summer Taste", components: ["Mom's Köfte", "Heirloom Tomato", "Basil"] },
  { name: "Tranquility of the Forest", components: ["Village Chicken", "Truffle", "Caviar"] },
  { name: "Hunter & Prey", components: ["Steamed Grouper", "Yuzu", "Shrimps"] },
  { name: "Half Moon", components: ["Lamb", "Chickpea", "Cabbage"] },
  { name: "Gentle Clarity", components: ["Rice Pudding", "Cinnamon", "Nut"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Memory of the Dough", components: ["Baklava Cannoli"], dietary: ["vegetarian"] },
  { name: "Midnight", components: ["Chocolate Mousse", "Pear"], dietary: ["vegetarian", "gluten-free"] },
  { name: "The Last Sip", components: ["Turkish Coffee"], dietary: ["vegan", "gluten-free"] },
];
