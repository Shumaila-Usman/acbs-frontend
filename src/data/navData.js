export const NAV_DATA = [
  {
    id: 'skincare',
    name: 'Skincare',
    columns: [
      {
        title: 'By Category',
        sections: [
          {
            heading: 'Face Care',
            hasChildren: true,
            links: [
              { name: 'Cleansers', path: '/category/cleansers' },
              { name: 'Moisturizers', path: '/category/moisturizers' },
              { name: 'Serums & Treatments', path: '/category/serums' },
              { name: 'Face Masks', path: '/category/face-masks' },
              { name: 'Eye Care', path: '/category/eye-care' },
              { name: 'Sunscreen', path: '/category/sunscreen' },
            ]
          },
          {
            heading: 'Body Care',
            hasChildren: true,
            links: [
              { name: 'Body Lotions', path: '/category/body-lotions' },
              { name: 'Body Wash', path: '/category/body-wash' },
              { name: 'Hand Care', path: '/category/hand-care' },
            ]
          }
        ]
      },
      {
        title: 'By Concern',
        sections: [
          {
            heading: 'Skin Concerns',
            hasChildren: true,
            links: [
              { name: 'Acne & Blemishes', path: '/concern/acne' },
              { name: 'Anti-Aging', path: '/concern/anti-aging' },
              { name: 'Dark Spots', path: '/concern/dark-spots' },
              { name: 'Dryness', path: '/concern/dryness' },
              { name: 'Pores', path: '/concern/pores' },
              { name: 'Redness', path: '/concern/redness' },
            ]
          }
        ]
      },
      {
        title: 'By Skin Type',
        sections: [
          {
            links: [
              { name: 'Dry Skin', path: '/skin-type/dry' },
              { name: 'Oily Skin', path: '/skin-type/oily' },
              { name: 'Combination Skin', path: '/skin-type/combination' },
              { name: 'Sensitive Skin', path: '/skin-type/sensitive' },
              { name: 'Normal Skin', path: '/skin-type/normal' },
            ]
          }
        ]
      },
      {
        title: 'Featured Brands',
        sections: [
          {
            links: [
              { name: 'La Roche-Posay', path: '/brand/la-roche-posay' },
              { name: 'CeraVe', path: '/brand/cerave' },
              { name: 'The Ordinary', path: '/brand/the-ordinary' },
              { name: 'Drunk Elephant', path: '/brand/drunk-elephant' },
              { name: 'Dr. Dennis Gross', path: '/brand/dr-dennis-gross' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'spa-essentials',
    name: 'Spa Essentials',
    columns: [
      {
        title: 'Spa Products',
        sections: [
          {
            heading: 'Treatment Products',
            hasChildren: true,
            links: [
              { name: 'Massage Oils', path: '/spa/massage-oils' },
              { name: 'Aromatherapy', path: '/spa/aromatherapy' },
              { name: 'Body Wraps', path: '/spa/body-wraps' },
              { name: 'Hot Stones', path: '/spa/hot-stones' },
              { name: 'Spa Creams', path: '/spa/creams' },
            ]
          },
          {
            heading: 'Spa Accessories',
            hasChildren: true,
            links: [
              { name: 'Towels & Robes', path: '/spa/towels' },
              { name: 'Linens', path: '/spa/linens' },
              { name: 'Headbands', path: '/spa/headbands' },
              { name: 'Slippers', path: '/spa/slippers' },
            ]
          }
        ]
      },
      {
        title: 'Equipment',
        sections: [
          {
            links: [
              { name: 'Steamers', path: '/spa/steamers' },
              { name: 'Warmers', path: '/spa/warmers' },
              { name: 'Hot Towel Cabinets', path: '/spa/towel-cabinets' },
              { name: 'Spa Carts', path: '/spa/carts' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'nail-care',
    name: 'Nail Care',
    columns: [
      {
        title: 'Nail Products',
        sections: [
          {
            heading: 'Polish & Color',
            hasChildren: true,
            links: [
              { name: 'Nail Polish', path: '/nails/polish' },
              { name: 'Gel Polish', path: '/nails/gel-polish' },
              { name: 'Base & Top Coats', path: '/nails/base-top' },
              { name: 'Nail Art', path: '/nails/nail-art' },
            ]
          },
          {
            heading: 'Nail Care',
            hasChildren: true,
            links: [
              { name: 'Cuticle Care', path: '/nails/cuticle' },
              { name: 'Nail Treatments', path: '/nails/treatments' },
              { name: 'Nail Files & Buffers', path: '/nails/files' },
              { name: 'Nail Brushes', path: '/nails/brushes' },
            ]
          }
        ]
      },
      {
        title: 'Tools & Equipment',
        sections: [
          {
            links: [
              { name: 'UV/LED Lamps', path: '/nails/lamps' },
              { name: 'Drills & Bits', path: '/nails/drills' },
              { name: 'Nail Tables', path: '/nails/tables' },
              { name: 'Dust Collectors', path: '/nails/dust-collectors' },
            ]
          }
        ]
      },
      {
        title: 'Top Brands',
        sections: [
          {
            links: [
              { name: 'OPI', path: '/brand/opi' },
              { name: 'Essie', path: '/brand/essie' },
              { name: 'CND', path: '/brand/cnd' },
              { name: 'Gelish', path: '/brand/gelish' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'equipment',
    name: 'Equipment',
    columns: [
      {
        title: 'Professional Equipment',
        sections: [
          {
            heading: 'Styling Equipment',
            hasChildren: true,
            links: [
              { name: 'Hair Dryers', path: '/equipment/dryers' },
              { name: 'Flat Irons', path: '/equipment/flat-irons' },
              { name: 'Curling Irons', path: '/equipment/curling-irons' },
              { name: 'Hair Steamers', path: '/equipment/steamers' },
            ]
          },
          {
            heading: 'Facial Equipment',
            hasChildren: true,
            links: [
              { name: 'Facial Steamers', path: '/equipment/facial-steamers' },
              { name: 'Magnifying Lamps', path: '/equipment/mag-lamps' },
              { name: 'Microdermabrasion', path: '/equipment/microderm' },
              { name: 'LED Light Therapy', path: '/equipment/led-therapy' },
            ]
          }
        ]
      },
      {
        title: 'Salon Equipment',
        sections: [
          {
            links: [
              { name: 'Shampoo Bowls', path: '/equipment/shampoo-bowls' },
              { name: 'Processors', path: '/equipment/processors' },
              { name: 'Trolleys & Carts', path: '/equipment/trolleys' },
              { name: 'Sanitizers', path: '/equipment/sanitizers' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'furniture',
    name: 'Furniture',
    columns: [
      {
        title: 'Salon Furniture',
        sections: [
          {
            heading: 'Seating',
            hasChildren: true,
            links: [
              { name: 'Styling Chairs', path: '/furniture/styling-chairs' },
              { name: 'Shampoo Chairs', path: '/furniture/shampoo-chairs' },
              { name: 'Spa Chairs', path: '/furniture/spa-chairs' },
              { name: 'Pedicure Chairs', path: '/furniture/pedicure-chairs' },
              { name: 'Bar Stools', path: '/furniture/stools' },
            ]
          },
          {
            heading: 'Stations & Tables',
            hasChildren: true,
            links: [
              { name: 'Styling Stations', path: '/furniture/styling-stations' },
              { name: 'Manicure Tables', path: '/furniture/manicure-tables' },
              { name: 'Reception Desks', path: '/furniture/reception' },
              { name: 'Retail Displays', path: '/furniture/displays' },
            ]
          }
        ]
      },
      {
        title: 'Waiting Area',
        sections: [
          {
            links: [
              { name: 'Waiting Chairs', path: '/furniture/waiting-chairs' },
              { name: 'Sofas & Loveseats', path: '/furniture/sofas' },
              { name: 'Coffee Tables', path: '/furniture/coffee-tables' },
              { name: 'Magazine Racks', path: '/furniture/magazine-racks' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'implements',
    name: 'Implements',
    columns: [
      {
        title: 'Professional Tools',
        sections: [
          {
            heading: 'Hair Tools',
            hasChildren: true,
            links: [
              { name: 'Scissors & Shears', path: '/tools/scissors' },
              { name: 'Combs & Brushes', path: '/tools/combs' },
              { name: 'Clips & Pins', path: '/tools/clips' },
              { name: 'Razors', path: '/tools/razors' },
            ]
          },
          {
            heading: 'Skin Tools',
            hasChildren: true,
            links: [
              { name: 'Extraction Tools', path: '/tools/extraction' },
              { name: 'Spatulas', path: '/tools/spatulas' },
              { name: 'Brushes', path: '/tools/brushes' },
              { name: 'Bowls', path: '/tools/bowls' },
            ]
          }
        ]
      },
      {
        title: 'Disposables',
        sections: [
          {
            links: [
              { name: 'Gloves', path: '/disposables/gloves' },
              { name: 'Towels', path: '/disposables/towels' },
              { name: 'Capes', path: '/disposables/capes' },
              { name: 'Applicators', path: '/disposables/applicators' },
            ]
          }
        ]
      }
    ]
  }
];

