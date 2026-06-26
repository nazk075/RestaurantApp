/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, SignatureDish, Testimonial, GalleryItem } from './types';

export const HERO_IMAGE =
  `${import.meta.env.BASE_URL}images/luxury_restaurant_hero_1782460143602.jpg`;

export const CHEF_IMAGE =
  `${import.meta.env.BASE_URL}images/executive_chef_1782460206535.jpg`;

export const signatureDishes: SignatureDish[] = [
  {
    id: 'sd-1',
    name: 'Symphony of the Sea',
    tagline: 'Luminous Coastal Delicacy',
    description: 'Fresh hand-harvested scallops accompanied by seawater foam, citrus infusion, and sea purslane. A delicate sensory exploration of the ocean.',
    price: '$48',
    ingredients: ['Diver Scallops', 'Ocean Emulsion', 'Finger Lime', 'Sea Purslane', 'Edible Gold'],
    image: `${import.meta.env.BASE_URL}images/signature_dish_1_1782460159166.jpg`
  },
  {
    id: 'sd-2',
    name: 'Imperial Wagyu Filet',
    tagline: 'Melt-in-the-mouth Luxury',
    description: 'A5 Miyazakigyu wagyu beef tenderly seared, finished with shaved white truffles from Alba, dark port glaze, and charred heirloom asparagus.',
    price: '$120',
    ingredients: ['A5 Miyazaki Wagyu', 'Alba White Truffle', 'Port Reduction', 'Bone Marrow Jus', 'Fleur de Sel'],
    image: `${import.meta.env.BASE_URL}images/signature_dish_2_1782460176382.jpg`
  },
  {
    id: 'sd-3',
    name: 'Aura Chocolate Dome',
    tagline: 'A Culinary Metamorphosis',
    description: 'A dark single-origin Venezuelan chocolate sphere encapsulating Madagascan vanilla gelato. Melted live at your table with rich warm salted caramel.',
    price: '$32',
    ingredients: ['72% Venezuelan Chocolate', 'Madagascan Vanilla Bean', 'Fleur de Sel Caramel', 'Gold Leaf', 'Dehydrated Raspberries'],
    image: `${import.meta.env.BASE_URL}images/signature_dish_3_1782460191606.jpg`
  }
];

export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: 'st-1',
    name: 'Oscietra Caviar Reserve',
    description: 'Served on crushed ice with traditional blinis, organic egg mimosa, and double cream.',
    price: '$145',
    category: 'starters',
    tags: ['Signature', 'Gluten-Free Available']
  },
  {
    id: 'st-2',
    name: 'Glazed Heirloom Beets',
    description: 'Textures of gold and ruby beetroot, whipped organic goat cheese, caramelized pine nuts, aged balsamic sphere.',
    price: '$26',
    category: 'starters',
    tags: ['Vegetarian', 'Organic']
  },
  {
    id: 'st-3',
    name: 'Heritage Pan-Seared Foie Gras',
    description: 'Slow-caramelized spiced pear, brioche crumble, Sauternes reduction, and fresh chervil.',
    price: '$42',
    category: 'starters',
    tags: ['Classic']
  },
  {
    id: 'st-4',
    name: 'Truffle Lobster Tartare',
    description: 'Poached Brittany lobster, shaved winter black truffles, avocado cream, yuzu dressing, crystal micro herbs.',
    price: '$38',
    category: 'starters',
    tags: ['Signature']
  },

  // MAINS
  {
    id: 'mn-1',
    name: 'Atlantic Turbot Poché',
    description: 'Slow-poached in seaweed butter, smoked oyster emulsion, baby leeks, and champagne foam.',
    price: '$64',
    category: 'mains',
    tags: ['Seafood']
  },
  {
    id: 'mn-2',
    name: 'Aurelia Signature Lamb Duet',
    description: 'Roasted herb-crusted rack and slow-braised neck, sunchoke puree, rosemary glaze, and wild garlic flowers.',
    price: '$72',
    category: 'mains',
    tags: ['Chef Special']
  },
  {
    id: 'mn-3',
    name: 'Glazed Dry-Aged Duck Breast',
    description: 'Lavender honey lacquer, parsnip velvet, sweet cherry compote, five-spice duck jus.',
    price: '$58',
    category: 'mains',
    tags: ['Aged 21 Days']
  },
  {
    id: 'mn-4',
    name: 'Forest Chanterelle Agnolotti',
    description: 'Hand-folded pasta, rich chestnut puree, pan-fried chanterelles, hazelnut brown butter, pecorino foam.',
    price: '$46',
    category: 'mains',
    tags: ['Vegetarian']
  },

  // DESSERTS
  {
    id: 'ds-1',
    name: 'Le Citron Infusion',
    description: 'Amalfi lemon curd, soft meringue shards, basil coulis, olive oil snow, verbena glass.',
    price: '$24',
    category: 'desserts',
    tags: ['Refreshing']
  },
  {
    id: 'ds-2',
    name: 'Grand Marnier Soufflé',
    description: 'Classic rising hot soufflé, infused with orange liqueur, served with orange blossom cream ice cream.',
    price: '$28',
    category: 'desserts',
    tags: ['Classic', 'Requires 15m Prep']
  },
  {
    id: 'ds-3',
    name: 'Pistachio Fig Mille-Feuille',
    description: 'Caramelized puff pastry, roasted Bronte pistachio cream, fresh black figs, wildflower honey spray.',
    price: '$26',
    category: 'desserts',
    tags: ['Delicate']
  },

  // DRINKS
  {
    id: 'dr-1',
    name: 'The Golden Aurelia',
    description: '24k gold infused bourbon, antique aromatic bitters, amber maple, cold smoked with applewood bark.',
    price: '$34',
    category: 'drinks',
    tags: ['Signature Cocktail']
  },
  {
    id: 'dr-2',
    name: 'Royal Rose Nectar',
    description: 'Wild Bulgarian rose hydrosol, raspberry essence, zero-proof botanicals, sparkling organic grape soda.',
    price: '$22',
    category: 'drinks',
    tags: ['Non-Alcoholic', 'Elixir']
  },
  {
    id: 'dr-3',
    name: 'Dom Pérignon Vintage',
    description: 'By the glass. Complex and radiant toast notes, fresh green citrus, creamy lingering finish.',
    price: '$75',
    category: 'drinks',
    tags: ['Champagne']
  },
  {
    id: 'dr-4',
    name: 'Echezeaux Grand Cru, Burgundy',
    description: 'Glass selection. Deep ruby-red hue, elegant red fruits, dark chocolate undertones, earthy complexity.',
    price: '$90',
    category: 'drinks',
    tags: ['Rare Vintage']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcelle Dubois',
    role: 'Michelin Guide Inspector',
    review: 'Aurelia elevates dining to performative art. The Symphony of the Sea was a sublime masterpiece where ocean salinity and molecular citrus met in perfect alignment. An absolute, uncompromising triumph.',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Lady Victoria Sterling',
    role: 'Elite Traveler Magazine',
    review: 'The design is breathtaking, the service is choreographed with military precision, and the Wagyu was easily the finest seared steak in Europe. Aurelia represents the peak of contemporary luxury dining.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Julian Henderson',
    role: 'Gastronomic Connoisseur',
    review: 'A sensory voyage. From the moment you step through the heavy wooden doors, you are treated to a symphony of warm lighting, pristine acoustics, and dishes that belong in a modern art gallery.',
    rating: 5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    caption: 'Choreographed culinary execution',
    category: 'Culinary'
  },
  {
    id: 'g-2',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Our dimly-lit warm golden tables',
    category: 'Ambiance'
  },
  {
    id: 'g-3',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Sensory wine and vintage pairings',
    category: 'Ambiance'
  },
  {
    id: 'g-4',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
    caption: 'Artisanal starter plating close-up',
    category: 'Culinary'
  },
  {
    id: 'g-5',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1200&auto=format&fit=crop',
    caption: 'The heart of our kitchen atelier',
    category: 'Behind the Scenes'
  },
  {
    id: 'g-6',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1200&auto=format&fit=crop',
    caption: 'Perfect luxury layout for intimate evenings',
    category: 'Ambiance'
  }
];
