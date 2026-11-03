export const business = {
  name: 'Brightline Electric',
  tagline: 'Licensed electricians keeping Oakridge and surrounding towns powered, safe, and up to code.',
  phone: '(555) 214-7830',
  phoneHref: 'tel:+15552147830',
  email: 'hello@brightlineelectric.com',
  address: '412 Commerce Way, Oakridge, OR 97401',
  license: 'Lic. #EC-88214 | Bonded & Insured',
  emergencyLine: '(555) 214-7899',
  hours: [
    { label: 'Monday - Friday', value: '7:00 AM - 6:00 PM' },
    { label: 'Saturday', value: '8:00 AM - 2:00 PM' },
    { label: 'Sunday', value: 'Emergency calls only' },
  ],
  founded: 2009,
};

export const stats = [
  { value: '15+', label: 'Years serving the region' },
  { value: '4,800+', label: 'Projects completed' },
  { value: '4.9', label: 'Average customer rating' },
  { value: '24/7', label: 'Emergency response' },
];

export const serviceTypes = [
  'Electrical repair',
  'Panel upgrade',
  'Lighting installation',
  'Wiring & rewiring',
  'EV charger installation',
  'Generator & backup power',
  'Commercial electrical',
  'Emergency service',
  'Other',
] as const;

export const services = [
  {
    title: 'Residential Electrical',
    description: 'Outlets, switches, ceiling fans, and whole-home repairs handled cleanly and safely.',
    icon: 'Home' as const,
    highlights: ['Outlet & switch repair', 'Ceiling fan installation', 'GFCI & AFCI protection'],
  },
  {
    title: 'Panel Upgrades',
    description: 'Modernize aging electrical panels to support heat pumps, EV chargers, and added load.',
    icon: 'Zap' as const,
    highlights: ['100A to 200A upgrades', 'Breaker replacement', 'Permit & inspection handling'],
  },
  {
    title: 'Lighting Design',
    description: 'Recessed, under-cabinet, landscape, and smart lighting that makes spaces feel finished.',
    icon: 'Lightbulb' as const,
    highlights: ['Recessed lighting', 'Smart dimmers & controls', 'Outdoor & landscape lighting'],
  },
  {
    title: 'Rewiring & Inspections',
    description: 'Full or partial rewiring for older homes, plus pre-purchase and safety inspections.',
    icon: 'Cable' as const,
    highlights: ['Knob & tube replacement', 'Pre-sale inspections', 'Code compliance reports'],
  },
  {
    title: 'EV Charging',
    description: 'Level 2 home charger installs sized to your vehicle and your existing electrical service.',
    icon: 'BatteryCharging' as const,
    highlights: ['Level 2 charger install', 'Load calculations', 'Smart charger setup'],
  },
  {
    title: 'Backup Power',
    description: 'Standby generators and transfer switches that keep your home running through outages.',
    icon: 'PlugZap' as const,
    highlights: ['Standby generator install', 'Automatic transfer switches', 'Annual maintenance plans'],
  },
  {
    title: 'Commercial & Industrial',
    description: 'Tenant improvements, retail build-outs, and maintenance contracts for local businesses.',
    icon: 'Building2' as const,
    highlights: ['Tenant improvements', 'Service contracts', 'After-hours work available'],
  },
  {
    title: 'Emergency Repairs',
    description: 'Power outages, burning smells, sparking outlets. Our on-call team responds around the clock.',
    icon: 'Siren' as const,
    highlights: ['24/7 on-call crew', 'Same-day dispatch', 'Fault diagnosis & repair'],
  },
];

export const processSteps = [
  {
    title: 'Tell us what you need',
    description: 'Call, fill out the form, or send photos. We listen first and ask the right questions.',
  },
  {
    title: 'Get a clear quote',
    description: 'We inspect the work and send an itemized, upfront estimate with no surprise fees.',
  },
  {
    title: 'We schedule the work',
    description: 'Choose a time that fits your week. Permits are pulled and handled when required.',
  },
  {
    title: 'Done right, then tested',
    description: 'Our licensed electricians complete the job, test every circuit, and walk you through the results.',
  },
];

export const serviceArea = {
  headline: 'Proudly serving Oakridge and the towns around it',
  description:
    'Our crews are based in Oakridge and dispatch across Lane County. Most service calls arrive within 60 minutes of booking.',
  towns: [
    { name: 'Oakridge', drive: '0-15 min', distance: 'Home base' },
    { name: 'Maple Valley', drive: '20 min', distance: '9 miles' },
    { name: 'Lake Haven', drive: '25 min', distance: '12 miles' },
    { name: 'Pine Hollow', drive: '30 min', distance: '15 miles' },
    { name: 'Westfield Heights', drive: '35 min', distance: '18 miles' },
    { name: 'Cedar Ridge', drive: '40 min', distance: '22 miles' },
  ],
};

export const galleryItems = [
  {
    src: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician inspecting a residential fuse box',
    title: 'Fuse box inspection',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Technician in safety gear inspecting electrical panels',
    title: 'Industrial panel service',
    category: 'Commercial',
  },
  {
    src: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Organized circuit breaker panel with color-coded wiring',
    title: 'Panel upgrade',
    category: 'Panel upgrades',
  },
  {
    src: 'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician using a multimeter on control panel wiring',
    title: 'Control panel diagnostics',
    category: 'Commercial',
  },
  {
    src: 'https://images.pexels.com/photos/40242720/pexels-photo-40242720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Glass pendant lights glowing in a dark room',
    title: 'Pendant lighting install',
    category: 'Lighting',
  },
  {
    src: 'https://images.pexels.com/photos/7587287/pexels-photo-7587287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Open plan modern apartment with sleek kitchen and living area',
    title: 'Whole-home lighting refresh',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Electrician working on an outdoor fuse box',
    title: 'Outdoor service upgrade',
    category: 'Residential',
  },
  {
    src: 'https://images.pexels.com/photos/28456460/pexels-photo-28456460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious modern home interior with open balcony view',
    title: 'Modern home electrical',
    category: 'Residential',
  },
];

export const testimonials = [
  {
    quote:
      'Brightline replaced our 100-amp panel in a single day and cleaned up completely before they left. The crew explained every step and the price matched the quote exactly.',
    name: 'Megan Carter',
    location: 'Maple Valley',
    service: 'Panel upgrade',
    rating: 5,
  },
  {
    quote:
      'Our power went out on a Sunday night and someone was at the house within the hour. They found a failed breaker, fixed it, and had us back up before midnight.',
    name: 'David Okafor',
    location: 'Oakridge',
    service: 'Emergency repair',
    rating: 5,
  },
  {
    quote:
      'We had six recessed lights and a new smart dimmer system installed in the living room. The lighting makes the room feel like a different house. Highly recommend.',
    name: 'Jessica & Tom Reyes',
    location: 'Lake Haven',
    service: 'Lighting installation',
    rating: 5,
  },
  {
    quote:
      'As a property manager I need reliable contractors who respond fast. Brightline has handled turnovers, tenant repairs, and two tenant improvement builds for us without a single missed deadline.',
    name: 'Priya Natarajan',
    location: 'Westfield Heights',
    service: 'Commercial contract',
    rating: 5,
  },
  {
    quote:
      'They installed our Level 2 EV charger and upgraded the circuit it needed. The load calculation they did saved us from a much more expensive service upgrade.',
    name: 'Ryan Whitfield',
    location: 'Pine Hollow',
    service: 'EV charger installation',
    rating: 5,
  },
  {
    quote:
      'Honest, on time, and tidy. They told me my 1960s wiring needed work but did not oversell it. Rewiring took four days and the inspector passed it first try.',
    name: 'Linda Haverford',
    location: 'Cedar Ridge',
    service: 'Rewiring',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Every job is performed by a state-licensed electrician, and we carry general liability and workers compensation insurance. Our license number is listed in the footer of this site.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Absolutely. Estimates are free for residential jobs within our service area. Commercial projects are quoted after an on-site walkthrough, which is also free.',
  },
  {
    question: 'Do you pull permits and handle inspections?',
    answer:
      'Yes. When a project requires a permit we pull it, schedule the inspection, and make any corrections the inspector requests at no extra charge.',
  },
  {
    question: 'How quickly can you respond to an emergency?',
    answer:
      'Our on-call electricians respond around the clock. Most emergency calls within Oakridge are answered within an hour, and surrounding towns are typically within two hours.',
  },
  {
    question: 'Do you work on older homes?',
    answer:
      'We do. Many of our projects are in homes built before 1980. We are experienced with knob-and-tube, aluminum wiring, and legacy panels, and we will tell you what needs attention first.',
  },
  {
    question: 'Do you offer warranties?',
    answer:
      'All labor is guaranteed for two years. Equipment such as panels, breakers, and chargers carries the manufacturer warranty, and we handle any warranty claims for you.',
  },
];
