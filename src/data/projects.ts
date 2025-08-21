import { kebabCase } from 'es-toolkit';

type Amenity = {
  caption?: string;
  height: number;
  image: string;
  title: string;
  width: number;
};

type Specification = {
  caption?: string;
  image: string;
  title: string;
};

type Project = {
  address: string;
  amenities: Array<Amenity>;
  brochure?: string;
  city: string;
  description: string;
  exteriorImages: Array<{
    height: number;
    src: string;
    width: number;
  }>;
  featuredImage: string;
  floorPlans: Array<{
    images: Array<{
      height: number;
      src: string;
      width: number;
    }>;
    name: string;
  }>;
  interiorImages: Array<{
    height: number;
    src: string;
    width: number;
  }>;
  logo?: string;
  name: string;
  order: number;
  overviewContent: string;
  pincode: string;
  reraNumber: string;
  seo: {
    description: string;
    keywords: string;
    title: string;
  };
  slug: string;
  specificationImages: Specification[];
  status: 'draft' | 'published';
};

const slugs = {
  prakash_city: kebabCase('Prakash City'),
  prakash_county: kebabCase('Prakash County'),
  prakash_harmony: kebabCase('Prakash Harmony'),
  prakash_nilayam: kebabCase('Prakash Nilayam'),
  prakash_residency: kebabCase('Prakash Residency'),
  saural_villa_corbett: kebabCase('Saural Villa Corbett'),
  vivanta: kebabCase('Vivanta'),
};

const data: Project[] = [
  {
    address: 'Prakash Nilayam, Ramnagar Road',
    amenities: [
      {
        height: 798,
        image: '/assets/projects/amenities/prakash-nilayam/amphitheater.webp',
        title: 'Amphitheatre',
        width: 1280,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/badminton-court.webp',
        title: 'Badminton Court',
        width: 1280,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/basket-ball-court.webp',
        title: 'Basketball Court',
        width: 100,
      },
      {
        height: 1536,
        image: '/assets/projects/amenities/prakash-nilayam/conference-meeting-room.webp',
        title: 'Conference/Meeting Room',
        width: 1536,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/cricket-net.webp',
        title: 'Cricket Net',
        width: 1200,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/gym.webp',
        title: 'Gym',
        width: 1200,
      },
      {
        height: 1536,
        image: '/assets/projects/amenities/prakash-nilayam/indoor-activity-and-kids-area.webp',
        title: 'Indoor Activity & Kids Area',
        width: 1928,
      },
      {
        height: 1024,
        image: '/assets/projects/amenities/prakash-nilayam/jogging-tracks.webp',
        title: '/assets/projects/amenities/prakash-nilayam/Jogging Tracks',
        width: 1536,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/lounge.webp',
        title: 'Lounge',
        width: 1200,
      },
      {
        height: 802,
        image: '/assets/projects/amenities/prakash-nilayam/mini-golf.webp',
        title: 'Mini Golf',
        width: 1200,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/open-gym.webp',
        title: 'Open Gym',
        width: 1200,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/outdoor-kids-play-area.webp',
        title: 'Outdoor Kids Play Area',
        width: 1200,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/pickleball-court.webp',
        title: 'Pickelball Court',
        width: 1200,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/skating-rink.webp',
        title: 'Skating Rink',
        width: 1200,
      },
      {
        height: 864,
        image: '/assets/projects/amenities/prakash-nilayam/swimming-pool.webp',
        title: 'Swimming Pool',
        width: 1536,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/temple.webp',
        title: 'Temple',
        width: 800,
      },
      {
        height: 1024,
        image: '/assets/projects/amenities/prakash-nilayam/yoga-lawn.webp',
        title: 'Yoga Lawn',
        width: 1536,
      },
      {
        height: 800,
        image: '/assets/projects/amenities/prakash-nilayam/yoga-room-aerobics.webp',
        title: 'Yoga Room Aerobics',
        width: 1200,
      },
    ],
    brochure: '/assets/projects/brochure/prakash-nilayam/brochure.pdf',
    city: 'Kashipur',
    description:
      'Sprawling across 25 acres, the most spacious, densely green residential society, designed and developed by considering all necessities of a family, a small or a big. With wide roads with green belt both the side, children parks, family parks, centralized overhead water tank, club house, swimming pool etc are the merits of the society.',
    exteriorImages: [
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/1.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/2.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/3.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/4.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/5.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/6.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/7.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/8.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/9.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/10.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/11.webp',
        width: 1536,
      },
      {
        height: 1024,
        src: '/assets/projects/exterior-images/prakash-nilayam/12.webp',
        width: 1536,
      },
    ],
    featuredImage: '/assets/projects/featured-image/prakash-nilayam/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 566,
            src: '/assets/projects/floor-plans/prakash-nilayam/site-plan.webp',
            width: 800,
          },
        ],
        name: 'Site Plan',
      },
      {
        images: [
          {
            height: 1448,
            src: '/assets/projects/floor-plans/prakash-nilayam/4-br-duplex-1.webp',
            width: 2048,
          },
          {
            height: 1086,
            src: '/assets/projects/floor-plans/prakash-nilayam/4-br-duplex-2.webp',
            width: 1536,
          },
        ],
        name: '4 BR Duplex',
      },
      {
        images: [
          {
            height: 1448,
            src: '/assets/projects/floor-plans/prakash-nilayam/3-br-duplex.webp',
            width: 2048,
          },
        ],
        name: '3 BR Duplex',
      },
      {
        images: [
          {
            height: 566,
            src: '/assets/projects/floor-plans/prakash-nilayam/3-br-2-br-1.webp',
            width: 800,
          },
          {
            height: 1448,
            src: '/assets/projects/floor-plans/prakash-nilayam/3-br-2-br-2.webp',
            width: 2048,
          },
        ],
        name: '3 BR & 2 BR',
      },
    ],
    interiorImages: Array.from({ length: 12 }, (_, i) => ({
      height: 1280,
      src: `/assets/projects/interior-images/prakash-nilayam/${i + 1}.webp`,
      width: 1920,
    })),
    logo: '/assets/projects/logo/prakash-nilayam/logo.svg',
    name: 'Prakash Nilayam',
    order: 0,
    overviewContent:
      'Sprawling across 25 acres, the most spacious, densely green residential society, designed and developed by considering all necessities of a family, a small or a big. With wide roads with green belt both the side, children parks, family parks, centralized overhead water tank, club house, swimming pool etc are the merits of the society.',
    pincode: '244713',
    reraNumber: '',
    seo: {
      description:
        'New launch with sprawling across 25 acres, the most spacious, densely green residential society, designed and developed by ABD Group',
      keywords:
        'Prakash Nilayam, 2 BHK, 3 BHK, Duplex, House for Sale, House for Rent, House, Ashish Builders & Developers',
      title:
        'Prakash Nilayam | 2 BHK | 3 BHK | Duplex | House for Sale | House - Ashish Builders & Developers',
    },
    slug: slugs.prakash_nilayam,
    specificationImages: [
      {
        caption: ' Earthquake resistant R.C.C. frame structure with brick filler walls.',
        image: '/assets/projects/specifications/prakash-nilayam/structure.webp',
        title: 'Structure',
      },
      {
        caption: 'Vitrified flooring with skirting in all rooms.',
        image: '/assets/projects/specifications/prakash-nilayam/flooring.webp',
        title: 'Flooring',
      },
      {
        caption:
          'Seasoned hardwood frame for all doors. Commercial flush doors. Decorative main entrance door with safety lock.',
        image: '/assets/projects/specifications/prakash-nilayam/doors.webp',
        title: 'Doors',
      },
      {
        caption: 'Wooden frame windows with grill & glass. Fly mesh door.',
        image: '/assets/projects/specifications/prakash-nilayam/windows.webp',
        title: 'Windows',
      },
      {
        caption:
          "Granite kitchen platform with stainless steel sink. Glazed tiles upto 2' in height.",
        image: '/assets/projects/specifications/prakash-nilayam/kitchen.webp',
        title: 'Kitchen',
      },
      {
        caption:
          'Glazed/Ceremic Tiles upto door level, Hot & cold water supply system, Counter top basin, Standard make white colour EWC.',
        image: '/assets/projects/specifications/prakash-nilayam/bathroom.webp',
        title: 'Bathroom',
      },
      {
        caption:
          'Concealed copper wiring. Quality modular switches. MCB power distribution board. Provision for inverter in each Villa, AC points in all rooms. Provision for TV/Telephone points in drawing/dinning.',
        image: '/assets/projects/specifications/prakash-nilayam/electrical.webp',
        title: 'Electrical',
      },
      {
        caption: 'Weather proof paint with combination of texture paint on exterior walls.',
        image: '/assets/projects/specifications/prakash-nilayam/external-finish.webp',
        title: 'External Finish',
      },
    ],
    status: 'published',
  },
  {
    address: 'Vivanta, Near Stadium, Ramnagar Road',
    amenities: [
      {
        caption:
          'Experience a luxurious clubhouse with a refined lounge and an exclusive private party hall.',
        height: 1018,
        image: '/assets/projects/amenities/vivanta/clubhouse.webp',
        title: 'Exclusive Clubhouse',
        width: 1920,
      },
      {
        caption:
          'Immerse yourself in the luxury of a serene, resort-style swimming pool experience.',
        height: 864,
        image: '/assets/projects/amenities/vivanta/swimming-pool.webp',
        title: 'Infinity Swimming Pool',
        width: 1536,
      },
      {
        caption:
          'Experience a state-of-the-art gymnasium tailored for your fitness and wellness needs.',
        height: 816,
        image: '/assets/projects/amenities/vivanta/gymnasium.webp',
        title: 'State-of-the-Art Gymnasium',
        width: 1456,
      },
      {
        caption:
          'Beautifully landscaped gardens with serene walking trails, perfect for peaceful morning strolls.',
        height: 768,
        image: '/assets/projects/amenities/vivanta/green-garden.webp',
        title: 'Lush Landscaped Gardens',
        width: 1344,
      },
      {
        caption: 'Eco-friendly living through solar energy systems and rainwater harvesting.',
        height: 798,
        image: '/assets/projects/amenities/vivanta/eco-friendly-living.webp',
        title: 'Eco-Friendly Living',
        width: 1200,
      },
    ],
    brochure: '/assets/projects/brochure/vivanta/brochure.pdf',
    city: 'Kashipur',
    description: `Welcome to Vivanta, where sophistication meets serenity in the heart of Kashipur. Tucked near the tranquil surrounds of the stadium on Ramnagar Road, this enclave of ultra-luxury 5 BHK bungalows is designed for those who appreciate the finer things in life.

Each bungalow is a statement of refined living—featuring expansive layouts, sunlit balconies, and interiors that blend modern elegance with timeless comfort. From morning walks in your private garden to evenings spent in tastefully curated spaces, Vivanta invites you to experience a lifestyle where luxury and peace coexist beautifully.`,
    exteriorImages: [
      {
        height: 1018,
        src: `/assets/projects/exterior-images/vivanta/1.webp`,
        width: 1920,
      },
      {
        height: 1551,
        src: `/assets/projects/exterior-images/vivanta/2.webp`,
        width: 1920,
      },
      {
        height: 1561,
        src: `/assets/projects/exterior-images/vivanta/3.webp`,
        width: 1920,
      },
    ],
    featuredImage: '/assets/projects/featured-image/vivanta/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 907,
            src: '/assets/projects/floor-plans/vivanta/site-plan.webp',
            width: 1280,
          },
        ],
        name: 'Site Plan',
      },
      {
        images: [
          {
            height: 765,
            src: '/assets/projects/floor-plan/vivanta/floor-plan-1.webp',
            width: 536,
          },
          {
            height: 783,
            src: '/assets/projects/floor-plans/vivanta/floor-plan-2.webp',
            width: 538,
          },
        ],
        name: 'Floor Plan',
      },
    ],
    interiorImages: [],
    logo: '/assets/projects/logo/vivanta/logo.svg',
    name: 'Vivanta',
    order: 0,
    overviewContent: `Welcome to Vivanta, where sophistication meets serenity in the heart of Kashipur. Tucked near the tranquil surrounds of the stadium on Ramnagar Road, this enclave of ultra-luxury 5 BHK bungalows is designed for those who appreciate the finer things in life.

Each bungalow is a statement of refined living—featuring expansive layouts, sunlit balconies, and interiors that blend modern elegance with timeless comfort. From morning walks in your private garden to evenings spent in tastefully curated spaces, Vivanta invites you to experience a lifestyle where luxury and peace coexist beautifully.`,
    pincode: '244713',
    reraNumber: 'UKREP07250000660',
    seo: {
      description:
        'Welcome to Vivanta, where sophistication meets serenity in the heart of Kashipur. Tucked near the tranquil surrounds of the stadium on Ramnagar Road, this enclave of ultra-luxury 5 BHK bungalows is designed for those who appreciate the finer things in life.',
      keywords: 'Vivanta, Bungalows, Luxury Homes, Ashish Builders & Developers',
      title: `Vivanta - Ashish Builders & Developers`,
    },
    slug: slugs.vivanta,
    specificationImages: [],
    status: 'published',
  },
  {
    address: 'Prakash City, Kharagpura Devipura',
    amenities: [
      {
        caption:
          'Surveillance system enabled and 24 x 7 security guards availability at all the gates of the society',
        height: 301,
        image: '/assets/projects/amenities/prakash-city/gated-security.webp',
        title: 'Gated Entry',
        width: 450,
      },
      {
        caption:
          'Swimming Pool with facility for small kids and adults is the best in place amenity to stay fit',
        height: 301,
        image: '/assets/projects/amenities/prakash-city/swimming-pool.webp',
        title: 'Swimming Pool',
        width: 450,
      },
      {
        caption: 'Multiple parks with best landscaping is the prime attraction of the society',
        height: 301,
        image: '/assets/projects/amenities/prakash-city/lush-greens.webp',
        title: 'Lush Green Parks',
        width: 450,
      },
    ],
    brochure: '/assets/projects/brochure/prakash-city/brochure.pdf',
    city: 'Kashipur',
    description: `Sprawling across 18 acres, Prakash City, Bazpur Road is the most spacious, densely green residential society, designed and developed by considering all necessities of a family, a small or a big. Wide roads with green belt both the side, children parks, family parks, centralized overhead water tank, club house, swimming pool etc are the merits of the society.

This is one of the oldest and highly planned and designed residential society in Kashipur where more than 350 families are already residing in peaceful environment. Prakash City Magnum is the latest extension of the society. Here 2 BHK , 3 BHK Villas and apartments, 3 BHK, 4 BHK Duplex Villas are the most prime attractions for the home seekers, willing to resides or investment purpose.`,
    exteriorImages: [
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/1.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/2.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/3.webp`,
        width: 1728,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/4.webp`,
        width: 1555,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/5.webp`,
        width: 1555,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/6.webp`,
        width: 1728,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/7.webp`,
        width: 1555,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/8.webp`,
        width: 1920,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/9.webp`,
        width: 1920,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/10.webp`,
        width: 1728,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/11.webp`,
        width: 1555,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/12.webp`,
        width: 1555,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/13.webp`,
        width: 1555,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/14.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/15.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/16.webp`,
        width: 1728,
      },
      {
        height: 1037,
        src: `/assets/projects/exterior-images/prakash-city/17.webp`,
        width: 1555,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/18.webp`,
        width: 1728,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/19.webp`,
        width: 1920,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/20.webp`,
        width: 1728,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/21.webp`,
        width: 1920,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/22.webp`,
        width: 1920,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/23.webp`,
        width: 1920,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/24.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/25.webp`,
        width: 1728,
      },
      {
        height: 1152,
        src: `/assets/projects/exterior-images/prakash-city/26.webp`,
        width: 1728,
      },
      {
        height: 1280,
        src: `/assets/projects/exterior-images/prakash-city/1.webp`,
        width: 1920,
      },
    ],
    featuredImage: '/assets/projects/featured-image/prakash-city/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 1349,
            src: '/assets/projects/floor-plans/prakash-city/site-plan.webp',
            width: 986,
          },
        ],
        name: 'Site Plan',
      },
      {
        images: [
          {
            height: 658,
            src: '/assets/projects/floor-plans/prakash-city/2-bhk-villa.webp',
            width: 321,
          },
        ],
        name: '2 BHK Villa',
      },
      {
        images: [
          {
            height: 660,
            src: '/assets/projects/floor-plans/prakash-city/3-bhk-villa.webp',
            width: 273,
          },
        ],
        name: '3 BHK Villa',
      },
      {
        images: [
          {
            height: 1183,
            src: '/assets/projects/floor-plans/prakash-city/4bhk-duplex-villa.webp',
            width: 1000,
          },
        ],
        name: '4 BHK Duplex Villa',
      },
    ],
    interiorImages: Array.from({ length: 21 }, (_, i) => ({
      height: 1280,
      src: `/assets/projects/interior-images/prakash-city/${i + 1}.webp`,
      width: 1920,
    })),
    logo: '',
    name: 'Prakash City',
    order: 0,
    overviewContent: `Sprawling across 18 acres, Prakash City, Bazpur Road is the most spacious, densely green residential society, designed and developed by considering all necessities of a family, a small or a big. Wide roads with green belt both the side, children parks, family parks, centralized overhead water tank, club house, swimming pool etc are the merits of the society.

This is one of the oldest and highly planned and designed residential society in Kashipur where more than 350 families are already residing in peaceful environment. Prakash City Magnum is the latest extension of the society. Here 2 BHK , 3 BHK Villas and apartments, 3 BHK, 4 BHK Duplex Villas are the most prime attractions for the home seekers, willing to resides or investment purpose.`,
    pincode: '244713',
    reraNumber: '',
    seo: {
      description:
        'Sprawling across 18 acres, Prakash City, Kashipur is the most spacious, densely green residential society, designed and developed by ABD',
      keywords:
        'Prakash City, 2 BHK, 3 BHK, 4 BHK, Duplex, House for Sale, House, Ashish Builders & Developers',
      title:
        'Prakash City | 2 BHK | 3 BHK | 4 BHK | Duplex | House for Sale | House - Ashish Builders & Developers',
    },
    slug: slugs.prakash_city,
    specificationImages: [],
    status: 'published',
  },
  {
    address: 'Prakash Harmony, Kachnal Gosain',
    amenities: [
      {
        caption:
          'Surveillance system enabled and 24 x 7 security guards availability at all the gates of the society',
        height: 1280,
        image: '/assets/projects/amenities/prakash-harmony/gated-entry.webp',
        title: 'Gated Entry',
        width: 1920,
      },
      {
        caption: '24 x 7 water supply with overhead water tank',
        height: 2880,
        image: '/assets/projects/amenities/prakash-harmony/24-7-water-supply.webp',
        title: '24x7 Water Supply',
        width: 1920,
      },
      {
        caption: 'Lush green parks for family and children to enjoy the greenery and fresh air',
        height: 1280,
        image: '/assets/projects/amenities/prakash-harmony/lush-green-parks.webp',
        title: 'Lush Green Parks',
        width: 1920,
      },
    ],
    brochure: '/assets/projects/brochure/prakash-harmony/brochure.pdf',
    city: 'Kashipur',
    description:
      'Prakash Harmony, located at Dariyal Road, Kashipur is one of the best residential society in Kashipur developed by Ashish Builders and Developers. 2 BHK Villas, 3 BHK Villas are the best for small and medium size family to live. Ample of open space, wide road, 24 x 7 water supply, gated entry, lush green parks, peaceful environment are the USP of the society.',
    exteriorImages: Array.from({ length: 49 }, (_, i) => ({
      height: 1280,
      src: `/assets/projects/exterior-images/prakash-harmony/${i + 1}.webp`,
      width: 1920,
    })),
    featuredImage: '/assets/projects/featured-image/prakash-harmony/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 869,
            src: '/assets/projects/floor-plans/prakash-harmony/2-bhk-villa.webp',
            width: 453,
          },
        ],
        name: '2 BHK Villa',
      },
      {
        images: [
          {
            height: 888,
            src: '/assets/projects/floor-plans/prakash-harmony/3-bhk-villa.webp',
            width: 492,
          },
        ],
        name: '3 BHK Villa',
      },
    ],
    interiorImages: [
      {
        height: 500,
        src: '/assets/projects/interior-images/prakash-harmony/1.webp',
        width: 794,
      },
      {
        height: 500,
        src: '/assets/projects/interior-images/prakash-harmony/2.webp',
        width: 794,
      },
      {
        height: 500,
        src: '/assets/projects/interior-images/prakash-harmony/3.webp',
        width: 794,
      },
      {
        height: 500,
        src: '/assets/projects/interior-images/prakash-harmony/4.webp',
        width: 794,
      },
    ],
    logo: '/assets/projects/logo/prakash-harmony/logo.svg',
    name: 'Prakash Harmony',
    order: 0,
    overviewContent:
      'Prakash Harmony, located at Dariyal Road, Kashipur is one of the best residential society in Kashipur developed by Ashish Builders and Developers. 2 BHK Villas, 3 BHK Villas are the best for small and medium size family to live. Ample of open space, wide road, 24 x 7 water supply, gated entry, lush green parks, peaceful environment are the USP of the society.',
    pincode: '244713',
    reraNumber: '',
    seo: {
      description:
        'Prakash Harmony, is one of the best residential society in Kashipur developed by Ashish Builders and Developers.',
      keywords:
        'Prakash Harmony, 2 BHK, 3 BHK, Home, House for Sale, House for Rent, House, Ashish Builders & Developers',
      title:
        'Prakash Harmony | 2 BHK | 3 BHK | Home | House rent | Property for sale - Ashish Builders & Developers',
    },
    slug: slugs.prakash_harmony,
    specificationImages: [],
    status: 'published',
  },
  {
    address: 'Prakash County, Mahuakheraganj',
    amenities: [
      {
        caption:
          'Surveillance system enabled and 24 x 7 security guards availability at all the gates of the society',
        height: 1280,
        image: '/assets/projects/amenities/prakash-county/gated-entry.webp',
        title: 'Gated Entry',
        width: 1920,
      },
      {
        caption: 'Children parks with amenities fitted for Kids',
        height: 1280,
        image: '/assets/projects/amenities/prakash-county/children-park.webp',
        title: "Children's Parks",
        width: 1920,
      },
      {
        caption:
          'Stunning Gymnasium to stay fit and healthy is the prime responsibility of human being and we care for your health',
        height: 200,
        image: '/assets/projects/amenities/prakash-county/fitness-center.webp',
        title: 'Fitness Center',
        width: 300,
      },
    ],
    brochure: '',
    city: 'Kashipur',
    description:
      'Prakash County, located at Aliganj Road, is one of the best housing society in Kashipur. If you are looking for 2 BHK Villas, 3 BHK Villas, 2 BHK apartment or 3 BHK apartment, then your search is over. A very beautiful society where more than 50 happy families are already residing in peaceful environment. Wide roads with road side green belts, ample lush green parks, children parks, club house for gathering or celebrating a party, Swimming pool and Fitness center to remain fit and healthy are some features of the society to enjoy the life with peace. Amenities Prakash City brings to you the Building Revolution. It all started with realistic appraisal of your living needs.',
    exteriorImages: Array.from({ length: 50 }, (_, i) => ({
      height: 1280,
      src: `/assets/projects/exterior-images/prakash-county/${i + 1}.webp`,
      width: 1920,
    })),
    featuredImage: '/assets/projects/featured-image/prakash-county/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 1133,
            src: '/assets/projects/floor-plans/prakash-county/site-plan.webp',
            width: 703,
          },
        ],
        name: 'Site Plan',
      },
      {
        images: [
          {
            height: 886,
            src: '/assets/projects/floor-plans/prakash-county/2-bhk-villa.webp',
            width: 546,
          },
        ],
        name: '2 BHK Villa',
      },
      {
        images: [
          {
            height: 1040,
            src: '/assets/projects/floor-plans/prakash-county/3-bhk-villa.webp',
            width: 650,
          },
        ],
        name: '3 BHK Villa',
      },
      {
        images: [
          {
            height: 910,
            src: '/assets/projects/floor-plans/prakash-county/3-bhk-duplex-villa.webp',
            width: 563,
          },
        ],
        name: '3BHK Duplex Villa',
      },
    ],
    interiorImages: [],
    logo: '/assets/projects/logo/prakash-county/logo.webp',
    name: 'Prakash County',
    order: 0,
    overviewContent:
      'Prakash County, located at Aliganj Road, is one of the best housing society in Kashipur. If you are looking for 2 BHK Villas, 3 BHK Villas, 2 BHK apartment or 3 BHK apartment, then your search is over. A very beautiful society where more than 50 happy families are already residing in peaceful environment. Wide roads with road side green belts, ample lush green parks, children parks, club house for gathering or celebrating a party, Swimming pool and Fitness center to remain fit and healthy are some features of the society to enjoy the life with peace. Amenities Prakash City brings to you the Building Revolution. It all started with realistic appraisal of your living needs.',
    pincode: '244713',
    reraNumber: '',
    seo: {
      description:
        'Prakash County, is one of the best housing society having 2 BHK, 3 BHK Villas and Flats for sale in Kashipur',
      keywords:
        'Prakash County, 2 BHK, 3 BHK, Villas, Villa for Sale, Villa for Rent, Villa, Flat For Sale, Flat For Rent, Ashish Builders & Developers',
      title:
        'Prakash County | 2 BHK | 3 BHK | Villas | Flats | Home | House | Property - Ashish Builders & Developers',
    },
    slug: slugs.prakash_county,
    specificationImages: [],
    status: 'published',
  },
  {
    address: 'Prakash Residency',
    amenities: [
      {
        caption:
          'Surveillance system enabled and 24 x 7 security guards availability at all the gates of the society',
        height: 200,
        image: '/assets/projects/amenities/prakash-residency/gated-entry.webp',
        title: 'Gated Entry',
        width: 300,
      },
      {
        caption:
          'Temples are the most essential holy place to worship and Ashish Builders and Developers understand it very well',
        height: 200,
        image: '/assets/projects/amenities/prakash-residency/beautifuly-designed-temple.webp',
        title: 'Beautifully Designed Temple',
        width: 300,
      },
      {
        caption:
          'All the Roads of Ashish Builders and Developers Societies are quite wide with green belts on both sides of the roads',
        height: 200,
        image: '/assets/projects/amenities/prakash-residency/wide-roads-with-green-belts.webp',
        title: 'Wide Roads with Green Belts',
        width: 300,
      },
    ],
    brochure: '',
    city: 'Kashipur',
    description:
      'Prakash Residency is one of the oldest and most beautiful residential society, located in the heart of the city, Kashipur. in 2 BHK Villas and apartments , 3 BHK Villas and apartments are the prime attraction of home seekers. Beautifully planned and well spacious designs are the prime factors of the society that gives home buyers confidence and satisfaction about their investment in the house. Best quality material is the policy of Ashish Builders and Developers and that reflects here too.',
    exteriorImages: Array.from({ length: 33 }, (_, i) => ({
      height: 1152,
      src: `/assets/projects/exterior-images/prakash-residency/${i + 1}.webp`,
      width: 1728,
    })),
    featuredImage: '/assets/projects/featured-image/prakash-residency/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 563,
            src: '/assets/projects/floor-plans/prakash-residency/site-plan.webp',
            width: 960,
          },
        ],
        name: 'Site Plan',
      },
      {
        images: [
          {
            height: 760,
            src: '/assets/projects/floor-plans/prakash-residency/2-bhk-villa.webp',
            width: 1175,
          },
        ],
        name: '2 BHK Villa',
      },
      {
        images: [
          {
            height: 1621,
            src: '/assets/projects/floor-plans/prakash-residency/3-bhk-villa.webp',
            width: 1124,
          },
        ],
        name: '3 BHK Villa',
      },
    ],
    interiorImages: [],
    logo: '',
    name: 'Prakash Residency',
    order: 0,
    overviewContent:
      'Prakash Residency is one of the oldest and most beautiful residential society, located in the heart of the city, Kashipur. in 2 BHK Villas and apartments , 3 BHK Villas and apartments are the prime attraction of home seekers. Beautifully planned and well spacious designs are the prime factors of the society that gives home buyers confidence and satisfaction about their investment in the house. Best quality material is the policy of Ashish Builders and Developers and that reflects here too.',
    pincode: '244713',
    reraNumber: '',
    seo: {
      description:
        'Prakash Residency is one of the oldest and most beautiful residential society having 2 BHK, 3 BHK luxurious homes for sale in Kashipur',
      keywords:
        'Prakash Residency, 2 BHK, 3 BHK, Villa, Flat, Home for Sale, Home for Rent, House for Sale, House for Rent, House, Ashish Builders & Developers',
      title:
        'Prakash Residency | 2 BHK | 3 BHK | Villa | Flat | Home | House | Property - Ashish Builders & Developers',
    },
    slug: slugs.prakash_residency,
    specificationImages: [],
    status: 'published',
  },

  {
    address: 'Dabhra Saural Ranikhet Road, Almora',
    amenities: [
      {
        caption:
          'Clubhouse featuring indoor games, a fully equipped modern gymnasium, and a swimming pool with a landscaped lounging area.',
        height: 553,
        image: '/assets/projects/amenities/saural-villa-corbett/lifestyle-and-recreation.webp',
        title: 'Lifestyle & Recreation',
        width: 492,
      },
      {
        caption:
          'Eco-friendly architecture set amid lush landscaped gardens, with open spaces and abundant natural lighting.',
        height: 553,
        image: '/assets/projects/amenities/saural-villa-corbett/nature-and-wellness.webp',
        title: 'Nature & Wellness',
        width: 601,
      },
      {
        caption:
          'Gated community with advanced security systems, 24x7  CCTV surveillance, controlled access, and well-lit paved internal roads.',
        height: 553,
        image: '/assets/projects/amenities/saural-villa-corbett/security-and-infrastructure.webp',
        title: 'Security & Infrastructure',
        width: 491,
      },
      {
        caption:
          'Smart home-enabled villas with premium flooring, designer bathrooms, modular kitchens, and high-end fittings.',
        height: 553,
        image: '/assets/projects/amenities/saural-villa-corbett/home-features.webp',
        title: 'Home Features',
        width: 665,
      },
      {
        caption:
          'Solar energy systems and rainwater harvesting integrated for a truly sustainable lifestyle. Experience eco-friendly living with every home at Saural.',
        height: 553,
        image: '/assets/projects/amenities/saural-villa-corbett/live-green-live-inspired.webp',
        title: 'Live Green, Live Inspired',
        width: 492,
      },
    ],
    brochure: '/assets/projects/brochure/saural-villa-corbett/brochure.pdf',
    city: 'Kashipur',
    description: `Welcome to The Saural Villa Corbett by ABD, where the serenity of the wilderness meets the elegance of curated living. Nestled on the edge of Jim Corbett’s lush greenery, these thoughtfully designed 3 and 4 BHK villas offer a harmonious blend of rustic charm and modern sophistication.

Crafted with wooden flooring, vintage-inspired bar counters, and sun-drenched balconies, each villa is a tribute to timeless aesthetics and peaceful luxury. Whether you’re sipping your morning coffee with birdsong in the background or unwinding in the warm, heritage-inspired interiors, The Saural is where comfort meets nature — effortlessly.`,
    exteriorImages: [
      {
        height: 915,
        src: '/assets/projects/exterior-images/saural-villa-corbett/1.webp',
        width: 1920,
      },
      {
        height: 1081,
        src: '/assets/projects/exterior-images/saural-villa-corbett/2.webp',
        width: 1920,
      },
      {
        height: 1050,
        src: '/assets/projects/exterior-images/saural-villa-corbett/3.webp',
        width: 1920,
      },
      {
        height: 1245,
        src: '/assets/projects/exterior-images/saural-villa-corbett/4.webp',
        width: 1920,
      },
      {
        height: 1345,
        src: '/assets/projects/exterior-images/saural-villa-corbett/5.webp',
        width: 1920,
      },
      {
        height: 1246,
        src: '/assets/projects/exterior-images/saural-villa-corbett/6.webp',
        width: 1920,
      },
      {
        height: 886,
        src: '/assets/projects/exterior-images/saural-villa-corbett/7.webp',
        width: 1920,
      },
    ],
    featuredImage: '/assets/projects/featured-image/saural-villa-corbett/featured-image.webp',
    floorPlans: [
      {
        images: [
          {
            height: 1374,
            src: '/assets/projects/floor-plans/saural-villa-corbett/3-bhk-villa.webp',
            width: 1920,
          },
        ],
        name: '3 BHK Villa',
      },
      {
        images: [
          {
            height: 1378,
            src: '/assets/projects/floor-plans/saural-villa-corbett/4-bhk-villa.webp',
            width: 1920,
          },
        ],
        name: '4 BHK Villa',
      },
    ],
    interiorImages: [],
    logo: '/assets/projects/logo/saural-villa-corbett/logo.svg',
    name: 'Saural Villa Corbett',
    order: 0,
    overviewContent: `Welcome to The Saural Villa Corbett by ABD, where the serenity of the wilderness meets the elegance of curated living. Nestled on the edge of Jim Corbett’s lush greenery, these thoughtfully designed 3 and 4 BHK villas offer a harmonious blend of rustic charm and modern sophistication.

Crafted with wooden flooring, vintage-inspired bar counters, and sun-drenched balconies, each villa is a tribute to timeless aesthetics and peaceful luxury. Whether you’re sipping your morning coffee with birdsong in the background or unwinding in the warm, heritage-inspired interiors, The Saural is where comfort meets nature — effortlessly.`,
    pincode: '263667',
    reraNumber: '',
    seo: {
      description:
        'Welcome to The Saural Villa Corbett by ABD, where the serenity of the wilderness meets the elegance of curated living.',
      keywords: 'Saural Villa Corbett, Villas, Luxury Homes, Ashish Builders & Developers',
      title: `Saural Villa Corbett - Ashish Builders & Developers`,
    },
    slug: slugs.saural_villa_corbett,
    specificationImages: [],
    status: 'published',
  },
];

export default data;
