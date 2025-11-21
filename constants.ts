
import { Product, ProductCategory, Distributor, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Quality', href: '#quality' },
  { label: 'Locate', href: '#locator' },
  { label: 'AI Concierge', href: '#ai-concierge' },
];

export const PRODUCTS: Product[] = [
  // --- BREADS (Daily Breads) ---
  {
    id: 'p1',
    name: 'Lebanese Bread',
    description: 'Classic thin, soft, and authentic Lebanese flatbread perfect for daily meals.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Lebanese+Bread',
    calories: 140
  },
  {
    id: 'p3',
    name: 'Lebanese Bread with Milk',
    description: 'Enriched Lebanese bread with a softer texture and creamy taste.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Lebanese+Bread+Milk',
    calories: 160
  },
  {
    id: 'p4',
    name: 'Sandwich Bread (White - Large)',
    description: 'Premium large white loaf, perfectly sliced for generous sandwiches.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=White+Sandwich+Bread',
    calories: 110
  },
  {
    id: 'p7',
    name: 'White Shami Bread',
    description: 'Traditional fluffy Shami bread with a golden crust.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=White+Shami+Bread',
    calories: 150
  },
  {
    id: 'p10',
    name: 'Tanoury Bread',
    description: 'Authentic clay-oven style Tanoury bread with distinctive flavor.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Tanoury+Bread',
    calories: 170
  },
  {
    id: 'p13',
    name: 'Sandwich Rolls Bread',
    description: 'Soft, pillowy rolls ideal for sliders and dinner sides.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sandwich+Rolls',
    calories: 120
  },
  {
    id: 'p15',
    name: 'Roll Bread with Butter',
    description: 'Rich, butter-infused rolls baked to a golden perfection.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Butter+Rolls',
    calories: 140
  },
  {
    id: 'p16',
    name: 'Burger Bread with Sesame',
    description: 'Classic sesame-topped burger buns, sturdy yet soft.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sesame+Burger+Bun',
    calories: 180
  },
  {
    id: 'p17',
    name: 'Burger Bread',
    description: 'Smooth, classic burger buns for the perfect grill companion.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Burger+Bread',
    calories: 170
  },
  {
    id: 'p18',
    name: 'Bashka Bread',
    description: 'Traditional savory bread with a unique, dense texture.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Bashka+Bread',
    calories: 200
  },
  {
    id: 'p19',
    name: 'Bashka Bread with Sesame & Black Seed',
    description: 'Bashka bread enhanced with aromatic sesame and black seeds.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Seeded+Bashka',
    calories: 210
  },
  {
    id: 'p22',
    name: 'Turkey Bread',
    description: 'Soft, airy bread inspired by traditional Turkish recipes.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Turkey+Bread',
    calories: 190
  },
  {
    id: 'p23',
    name: 'Ciabatta Bread',
    description: 'Italian-style artisan loaf with a crispy crust and airy crumb.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Ciabatta',
    calories: 220
  },
  {
    id: 'p24',
    name: 'Ciabatta Bread with Sesame',
    description: 'Artisan Ciabatta topped with toasted sesame seeds.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sesame+Ciabatta',
    calories: 230
  },
  {
    id: 'p25',
    name: 'Ciabatta Bread with Thyme & Olives',
    description: 'Flavorful Ciabatta infused with Mediterranean thyme and olives.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Olive+Ciabatta',
    calories: 240
  },
  {
    id: 'p26',
    name: 'Panini Bread',
    description: 'Perfectly pressed bread ready for gourmet grilled sandwiches.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Panini+Bread',
    calories: 210
  },
  {
    id: 'p27',
    name: 'Ciabatta Bread with Seed',
    description: 'Multigrain topped Ciabatta for added crunch and nutrition.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Seeded+Ciabatta',
    calories: 230
  },
  {
    id: 'p28',
    name: 'White Toast Bread',
    description: 'The quintessential breakfast toast, soft and evenly baked.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=White+Toast',
    calories: 100
  },
  {
    id: 'p31',
    name: 'Mini Toast Bread',
    description: 'Delicate, bite-sized toast slices for canapés and snacks.',
    category: ProductCategory.BREAD,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Mini+Toast',
    calories: 60
  },

  // --- HEALTH (Healthy Options) ---
  {
    id: 'p2',
    name: 'Lebanese Brown Bread',
    description: 'Whole wheat Lebanese bread, high in fiber and rich in flavor.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Lebanese',
    calories: 130
  },
  {
    id: 'p5',
    name: 'Brown Sandwich Bread (Small)',
    description: 'Nutritious brown loaf in a convenient smaller size.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Sandwich+Small',
    calories: 100
  },
  {
    id: 'p6',
    name: 'Brown Sandwich Bread (Large)',
    description: 'Large family-sized whole wheat sandwich loaf.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Sandwich+Large',
    calories: 100
  },
  {
    id: 'p8',
    name: 'Brown Shami Bread',
    description: 'Wholesome whole wheat version of our classic Shami bread.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Shami',
    calories: 140
  },
  {
    id: 'p9',
    name: 'Shami Bread with Bran & Oats',
    description: 'Fiber-rich Shami bread fortified with bran and rolled oats.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Oat+Shami',
    calories: 145
  },
  {
    id: 'p11',
    name: 'Tanoury Brown Bread',
    description: 'Whole wheat Tanoury bread, combining tradition with health.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Tanoury',
    calories: 160
  },
  {
    id: 'p12',
    name: 'Protein Bread',
    description: 'High-protein, low-carb bread designed for active lifestyles.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Protein+Bread',
    calories: 120
  },
  {
    id: 'p14',
    name: 'Brown Sandwich Rolls Bread',
    description: 'Whole grain rolls, perfect for healthy mini-sandwiches.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Rolls',
    calories: 110
  },
  {
    id: 'p29',
    name: 'Brown Toast Bread',
    description: 'Whole wheat toast bread with a nutty flavor profile.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Brown+Toast',
    calories: 95
  },
  {
    id: 'p30',
    name: 'Toast Bread with Oat',
    description: 'Hearty toast bread baked with wholesome oats.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Oat+Toast',
    calories: 105
  },
  {
    id: 'p39',
    name: 'Bran Bread',
    description: 'Dense, fiber-packed bread for maximum digestive health.',
    category: ProductCategory.HEALTH,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Bran+Bread',
    calories: 90
  },

  // --- RUSKS (Rusks & Crackers) ---
  {
    id: 'p32',
    name: 'Cheese Rusk',
    description: 'Crispy double-baked rusk infused with savory cheese flavor.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Cheese+Rusk',
    calories: 50
  },
  {
    id: 'p33',
    name: 'Thyme Rusk',
    description: 'Aromatic rusk seasoned with premium wild thyme (Zaatar).',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Thyme+Rusk',
    calories: 45
  },
  {
    id: 'p34',
    name: 'Chilli Rusk',
    description: 'Spicy rusk with a kick of chili for a bold snack.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Chilli+Rusk',
    calories: 45
  },
  {
    id: 'p35',
    name: 'Vegetable Rusk',
    description: 'Savory rusk blended with dried garden vegetables.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Veggie+Rusk',
    calories: 45
  },
  {
    id: 'p36',
    name: 'Lemon Rusk',
    description: 'Zesty lemon-infused rusk, perfect with tea.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Lemon+Rusk',
    calories: 45
  },
  {
    id: 'p37',
    name: 'Butter Rusk',
    description: 'Classic rich and buttery rusk, meltingly crisp.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Butter+Rusk',
    calories: 60
  },
  {
    id: 'p38',
    name: 'Sour Cream & Onion Rusk',
    description: 'Tangy and savory rusk with sour cream and onion seasoning.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sour+Cream+Rusk',
    calories: 55
  },
  {
    id: 'p40',
    name: 'Cumin Rusk',
    description: 'Earthy rusk spiced with ground cumin.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Cumin+Rusk',
    calories: 45
  },
  {
    id: 'p41',
    name: 'Aniseed Rusk',
    description: 'Traditional rusk flavored with aromatic aniseed.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Aniseed+Rusk',
    calories: 45
  },
  {
    id: 'p42',
    name: 'Fennel Rusk',
    description: 'Sweet and aromatic rusk with fennel seeds.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Fennel+Rusk',
    calories: 45
  },
  {
    id: 'p43',
    name: 'Black Seed Rusk',
    description: 'Health-conscious rusk topped with nutritious black seeds (Nigella).',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Black+Seed+Rusk',
    calories: 50
  },
  {
    id: 'p44',
    name: 'Sesame & Black Seed Rusk',
    description: 'A perfect blend of nutty sesame and earthy black seeds.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Mixed+Seed+Rusk',
    calories: 55
  },
  {
    id: 'p45',
    name: 'Sesame Rusk',
    description: 'Classic rusk generously coated in toasted sesame seeds.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sesame+Rusk',
    calories: 55
  },
  {
    id: 'p46',
    name: 'Plain Rusk',
    description: 'Simple, unadorned rusk highlighting our quality dough.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Plain+Rusk',
    calories: 40
  },
  {
    id: 'p47',
    name: 'Long Rusk with Sesame',
    description: 'Elongated rusk sticks coated in sesame.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Long+Sesame+Rusk',
    calories: 60
  },
  {
    id: 'p48',
    name: 'Long Rusk',
    description: 'Traditional long fermented rusk sticks.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Long+Rusk',
    calories: 55
  },
  {
    id: 'p49',
    name: 'Long Rusk with Sesame & Black Seed',
    description: 'Long rusk sticks with a duo of premium seeds.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Long+Seed+Rusk',
    calories: 65
  },
  {
    id: 'p50',
    name: 'Long Rusk with Wheat Bran',
    description: 'High-fiber long rusk made with wholesome wheat bran.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Bran+Long+Rusk',
    calories: 50
  },
  {
    id: 'p53',
    name: 'Rusk Cereals',
    description: 'Crushed rusk cereal blend for a hearty breakfast.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Rusk+Cereals',
    calories: 150
  },
  {
    id: 'p54',
    name: 'Rusk Crumbs',
    description: 'Finely ground premium rusk crumbs for breading.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Rusk+Crumbs',
    calories: 350
  },
  {
    id: 'p55',
    name: 'Rusk with Ketchup',
    description: 'Savory rusk with a tangy tomato ketchup flavor.',
    category: ProductCategory.RUSK,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Ketchup+Rusk',
    calories: 50
  },

  // --- SWEETS (Sweet Bakery) ---
  {
    id: 'p20',
    name: 'Sohaira Ma\'arook',
    description: 'Traditional sweet yeast bread, aromatic and fluffy.',
    category: ProductCategory.SWEETS,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Maarook',
    calories: 250
  },
  {
    id: 'p21',
    name: 'Shourak',
    description: 'Sweet, brioche-like pastry bread perfect for coffee.',
    category: ProductCategory.SWEETS,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Shourak',
    calories: 260
  },
  {
    id: 'p51',
    name: 'Sweet Long Rusk',
    description: 'Sugared long rusk sticks for a crunchy sweet treat.',
    category: ProductCategory.SWEETS,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sweet+Long+Rusk',
    calories: 80
  },
  {
    id: 'p52',
    name: 'Sweet Rusk',
    description: 'Classic round rusks with a hint of sweetness.',
    category: ProductCategory.SWEETS,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Sweet+Rusk',
    calories: 70
  },

  // --- HORECA (Hospitality Collection) ---
  {
    id: 'p56',
    name: 'Sandwich Bread (Single Wrapped)',
    description: 'Individually wrapped white sandwich slices for hygiene and freshness.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+White+Bread',
    calories: 110
  },
  {
    id: 'p57',
    name: 'Tanoury Bread (Long Life)',
    description: 'Special long-life packaging for Tanoury bread for food service.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Tanoury',
    calories: 170
  },
  {
    id: 'p58',
    name: 'Brown Sandwich Bread (Single Wrapped)',
    description: 'Individually wrapped brown sandwich slices.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Brown+Bread',
    calories: 100
  },
  {
    id: 'p59',
    name: 'Burger Bread (Single Wrapped)',
    description: 'Single serve burger buns, sealed for hospitality use.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Burger+Bun',
    calories: 170
  },
  {
    id: 'p60',
    name: 'Ciabatta Bread (Single Wrapped)',
    description: 'Single serve Artisan Ciabatta, sealed for freshness.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Ciabatta',
    calories: 220
  },
  {
    id: 'p61',
    name: 'Sandwich Rolls (Single Wrapped)',
    description: 'Individually wrapped dinner rolls.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Rolls',
    calories: 120
  },
  {
    id: 'p62',
    name: 'Toast Bread (Pair Wrapped)',
    description: 'Two slices of premium toast, wrapped together.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Toast+Pair',
    calories: 200
  },
  {
    id: 'p63',
    name: 'Saj Bread (Long Life)',
    description: 'Ultra-thin Saj bread in extended shelf-life packaging for hotels.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Saj',
    calories: 130
  },
  {
    id: 'p64',
    name: 'Sandwich Bread (Small - Horeca)',
    description: 'Small white sandwich loaf optimized for hospital & hotel trays.',
    category: ProductCategory.HORECA,
    imageUrl: 'https://placehold.co/600x400/04221B/C5A55D?text=Hotel+Small+Loaf',
    calories: 90
  }
];

export const DISTRIBUTORS: Distributor[] = [
  {
    id: 'd1',
    name: 'Eman Flagship Boutique',
    address: '1 Royal Avenue, Downtown',
    city: 'Dubai',
    region: 'UAE',
    phone: '+971 4 123 4567',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    type: 'Factory Outlet'
  },
  {
    id: 'd2',
    name: 'Al Safa Hypermarket',
    address: 'Sheikh Zayed Road, Exit 45',
    city: 'Dubai',
    region: 'UAE',
    phone: '+971 4 987 6543',
    coordinates: { lat: 25.1548, lng: 55.2208 },
    type: 'Retail'
  },
  {
    id: 'd3',
    name: 'Eman Distribution Center',
    address: 'Industrial Area 12',
    city: 'Sharjah',
    region: 'UAE',
    phone: '+971 6 555 1212',
    coordinates: { lat: 25.3048, lng: 55.4008 },
    type: 'Wholesale'
  },
  {
    id: 'd4',
    name: 'Riyadh Premium Foods',
    address: 'King Fahd Road',
    city: 'Riyadh',
    region: 'KSA',
    phone: '+966 11 222 3333',
    coordinates: { lat: 24.7136, lng: 46.6753 },
    type: 'Wholesale'
  },
  {
    id: 'd5',
    name: 'Jeddah Corniche Market',
    address: 'Corniche Road',
    city: 'Jeddah',
    region: 'KSA',
    phone: '+966 12 444 5555',
    coordinates: { lat: 21.4858, lng: 39.1925 },
    type: 'Retail'
  }
];
