/** Menu and contact sourced from WAFFU catalog (PDF). */

export const CONTACT = {
  tagline: 'Raíces en cada bocado',
  instagram: 'https://www.instagram.com/waffu.ec',
  tiktok: 'https://www.tiktok.com/@waffu.ec',
  email: 'waffu.ec@gmail.com',
  orderMessage: 'Hola quiero hacer un pedido de WAFFU',
  whatsapp: [
    {
      name: 'Belén Dávila',
      href: 'https://wa.me/593998346994?text=Hola%20quiero%20hacer%20un%20pedido%20de%20WAFFU',
    },
    {
      name: 'Antonia Abel',
      href: 'https://wa.me/593992016269?text=Hola%20quiero%20hacer%20un%20pedido%20de%20WAFFU',
    },
  ],
}

export const TOP_PICKS = [
  {
    name: 'Andino Crunch',
    sectionId: 'waffles-salados',
    label: 'Top salado',
    price: '$5.50',
    cta: 'Ver waffles salados',
    copy: 'Waffle de verde con guacamole, queso rallado, chicharrón y brotes de col morada.',
  },
  {
    name: 'Berry Kiss',
    sectionId: 'waffles-dulces',
    label: 'Top dulce',
    price: '$4.75',
    cta: 'Ver waffles dulces',
    copy: 'Yogur griego, mermelada de frutos rojos, mora silvestre y frutilla.',
  },
  {
    name: 'Carrot Cake clásico',
    sectionId: 'tortas',
    label: 'Para compartir',
    price: '$30',
    cta: 'Ver tortas',
    copy: 'Torta húmeda de zanahoria con frosting cremoso. Rinde 8–10 porciones.',
  },
]

export const ORDER_STEPS = [
  {
    step: '01',
    title: 'Elige tu antojo',
    copy: 'Explora el menú y combina waffles, cajas o tortas según la ocasión.',
  },
  {
    step: '02',
    title: 'Agenda por WhatsApp',
    copy: 'Confirma fecha, sector de entrega y detalles de alérgenos con Belén o Antonia.',
  },
  {
    step: '03',
    title: 'Reserva con abono',
    copy: 'Se confirma con 50% de abono; el saldo se cancela al recibir tu pedido.',
  },
]

export const MENU_SECTIONS = [
  {
    id: 'waffles-salados',
    title: 'Waffles salados',
    items: [
      {
        name: 'Andino Crunch',
        price: '$5.50',
        description:
          'Waffle de verde con guacamole, queso rallado, chicharrón y brotes de col morada.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Monte Verde',
        price: '$4.50',
        description:
          'Waffle de verde con pollo mechado y queso crema saborizado con limón, paprika, sal y pimienta.',
        badges: [],
      },
      {
        name: 'Andes Melt',
        price: '$4.25',
        description:
          'Waffle de choclo con pollo mechado, hummus, guacamole y ajonjolí.',
        badges: [],
      },
      {
        name: 'Honey Bacon',
        price: '$5.00',
        description:
          'Waffle de choclo con salsa de queso y perejil, bacon y miel.',
        badges: [],
      },
    ],
  },
  {
    id: 'waffles-dulces',
    title: 'Waffles dulces',
    items: [
      {
        name: 'Berry Kiss',
        price: '$4.75',
        description:
          'Yogur griego, mermelada de frutos rojos y fruta picada (mora silvestre y frutilla).',
        badges: [],
      },
      {
        name: 'Choco Crush',
        price: '$5.00',
        description:
          'Mantequilla de maní, salsa de chocolate y trocitos de maní.',
        badges: [],
      },
      {
        name: 'Mango Bliss',
        price: '$6.00',
        description:
          'Mermelada de mango con miel y fruta picada (mango y frutilla).',
        badges: [],
      },
    ],
  },
  {
    id: 'galletas',
    title: 'Galletas',
    items: [
      {
        name: 'Golden Oat',
        priceLines: ['Caja de 6 — $5.50', 'Caja de 8 — $6.00'],
        description:
          'Galletas de avena con chispas de chocolate. Textura suave por dentro y crocante por fuera.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Cloud Bites',
        priceLines: ['Caja de 10 — $4.25'],
        description:
          'Delicadas galletas de maicena que se derriten en la boca.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Yuca Bite',
        priceLines: ['Caja de 10 — $5.00'],
        description:
          'Galletas artesanales de almidón de yuca. Ligeras, crocantes y adictivas.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Golden Corn',
        priceLines: ['Caja de 6 — $5.00'],
        description:
          'Galletas de harina de maíz con sabor casero y textura crunchy.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Coco Bliss',
        priceLines: ['Caja de 10 — $4.25'],
        description: 'Galletas de coco suaves y aromáticas.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Choco Almond',
        priceLines: ['Caja de 6 — $7.00'],
        description:
          'Galletas de almendra con intenso sabor a chocolate.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
    ],
  },
  {
    id: 'tortas',
    title: 'Tortas y pasteles',
    items: [
      {
        name: 'Carrot Cake clásico',
        priceLines: ['Rinde 8–10 porciones — $30'],
        description:
          'Torta húmeda de zanahoria con frosting cremoso.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Mocha Cake',
        priceLines: ['Rinde 6–8 porciones — $20'],
        description:
          'Chocolate y café en una combinación intensa con nuez.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Chocobanana Loaf',
        priceLines: ['Rinde 6–8 porciones — $15'],
        description:
          'Pan de plátano con chispas de chocolate. Suave, húmedo y comfort food.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Apple Upside-Down Cake',
        priceLines: ['Rinde 6–8 porciones — $25'],
        description: 'Pastel invertido de manzana caramelizada.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Coco Cream',
        priceLines: ['Rinde 8–10 porciones — $25'],
        description: 'Torta de coco suave y cremosa.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Berry Bliss',
        priceLines: ['Rinde 8–10 porciones — $30'],
        description: 'Torta de arándanos fresca y delicadamente dulce.',
        badges: [],
      },
      {
        name: 'Soft Cake',
        priceLines: ['Rinde 10–12 porciones — $20'],
        description: 'Bizcochuelo clásico esponjoso y ligero.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Dark Brownie',
        priceLines: ['Bandeja de 6 porciones — $18'],
        description: 'Brownies intensos de chocolate fudgy.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
    ],
  },
  {
    id: 'muffins-donuts',
    title: 'Muffins y donuts',
    items: [
      {
        name: 'Choco Muffin',
        priceLines: ['6 unidades — $15'],
        description: 'Muffins suaves de chocolate.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Lemon Muffin',
        priceLines: ['6 unidades — $12'],
        description: 'Muffins de limón frescos y suaves.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Choco Donut',
        priceLines: ['6 unidades — $15'],
        description: 'Donuts de chocolate suaves y esponjosos.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
      {
        name: 'Vanilla Donut',
        priceLines: ['6 unidades — $18'],
        description: 'Donuts artesanales sabor vainilla.',
        badges: ['Sin gluten', 'Sin azúcares refinados'],
      },
    ],
  },
  {
    id: 'con-gluten',
    title: 'Selección con gluten',
    variant: 'contains-gluten',
    items: [
      {
        name: 'Alfajores',
        priceLines: ['Unidad — $3'],
        description:
          'Alfajores artesanales rellenos de dulce de leche 100% argentino y cubiertos con chocolate negro.',
        badges: ['Contiene gluten'],
      },
      {
        name: 'Cinnamon Rolls',
        priceLines: ['8 rollos — $20'],
        description:
          'Rollos de canela suaves y esponjosos con glaseado dulce.',
        badges: ['Contiene gluten'],
      },
    ],
  },
]
