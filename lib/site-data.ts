export const HERO_IMAGE =
  'https://images.pexels.com/photos/4856519/pexels-photo-4856519.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const HELI_FORMATION =
  'https://images.pexels.com/photos/5409349/pexels-photo-5409349.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const HELI_TWILIGHT =
  'https://images.pexels.com/photos/16884780/pexels-photo-16884780.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const SOLDIER_SUNSET =
  'https://images.pexels.com/photos/11389636/pexels-photo-11389636.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const SOLDIERS_SUNSET =
  'https://images.pexels.com/photos/11452326/pexels-photo-11452326.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const BLACK_HAWK =
  'https://images.pexels.com/photos/35608720/pexels-photo-35608720.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const HELI_CAMO =
  'https://images.pexels.com/photos/9862238/pexels-photo-9862238.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const HELI_TRAINING =
  'https://images.pexels.com/photos/33203064/pexels-photo-33203064.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const SPECOPS =
  'https://images.pexels.com/photos/20258/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920';
export const CAMPFIRE =
  'https://images.pexels.com/photos/30042240/pexels-photo-30042240.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const HELI_CREW =
  'https://images.pexels.com/photos/35707173/pexels-photo-35707173.jpeg?auto=compress&cs=tinysrgb&w=1920';

export const STATS = [
  { value: '2026', label: 'Regiment Activated' },
  { value: '0', label: 'Aviators Trained' },
  { value: '48H', label: 'Sustained Operations' },
  { value: '160', label: 'SOAR Designation' },
];

export const CAPABILITIES = [
  {
    code: '01',
    title: 'Precision Rotary-Wing Insertion',
    description:
      'Deliver special operations forces to objective areas under cover of darkness with pinpoint accuracy, from low-altitude nap-of-the-earth flight profiles.',
    points: ['Low-level night flight', 'GPS / terrain-following', 'Hostile territory penetration'],
  },
  {
    code: '02',
    title: 'Aviation Support & Reinforcement',
    description:
      'Provide armed overwatch, close air support, and casualty evacuation for ground SOF elements engaged across the full spectrum of conflict.',
    points: ['Armed escort', 'Close air support', 'Medical evacuation'],
  },
  {
    code: '03',
    title: 'Special Mission Equipment',
    description:
      'Operate a fleet of heavily modified rotary-wing platforms equipped with advanced sensors, forward-looking infrared, and integrated defensive systems.',
    points: ['FLIR & night vision', 'Integrated defenses', 'Fast-rope systems'],
  },
  {
    code: '04',
    title: 'Joint & Interagency Operations',
    description:
      'Integrate with the joint special operations community, supporting multi-domain missions that demand rapid, precise, and scalable aviation capabilities.',
    points: ['JSOC integration', 'Multi-theater readiness', '24-hour deployment'],
  },
];

export const AIRCRAFT = [
  {
    designation: 'MH-6M',
    name: 'Little Bird',
    role: 'Light Assault / Insertion',
    crew: '2 + 6 operators',
    speed: '282 km/h',
    range: '574 km',
    description:
      'The MH-6 Little Bird is a light, agile observation and attack helicopter used for direct action and special operations insertion. Its compact size allows rooftop and confined-area landings.',
    image:
      'https://images.pexels.com/photos/12564476/pexels-photo-12564476.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Light attack',
  },
  {
    designation: 'AH-6M',
    name: 'Little Bird (Attack)',
    role: 'Light Attack Platform',
    crew: '2',
    speed: '282 km/h',
    range: '430 km',
    description:
      'The attack variant of the Little Bird family, configured with stub wings for rockets, missiles, and machine guns. Provides close air support in austere, urban environments.',
    image:
      'https://images.pexels.com/photos/16525960/pexels-photo-16525960.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Armed overwatch',
  },
  {
    designation: 'MH-60L',
    name: 'Black Hawk (Penetrator)',
    role: 'Medium Assault',
    crew: '4 + 11',
    speed: '295 km/h',
    range: '600 km',
    description:
      'A special operations variant of the UH-60 Black Hawk, equipped with FLIR, terrain-following radar, and in-flight refueling. The backbone of Night Stalker medium-lift assault.',
    image:
      'https://images.pexels.com/photos/27251697/pexels-photo-27251697.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Workhorse',
  },
  {
    designation: 'MH-60K',
    name: 'Black Hawk (Direct Action)',
    role: 'Medium Assault / Infiltration',
    crew: '4 + 12',
    speed: '295 km/h',
    range: '700 km',
    description:
      'The most advanced Black Hawk variant, featuring an integrated glass cockpit, forward-looking infrared, and air-to-air refueling capability for long-range deep penetration missions.',
    image:
      'https://images.pexels.com/photos/35982249/pexels-photo-35982249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Deep penetration',
  },
  {
    designation: 'MH-47G',
    name: 'Chinook (Special Ops)',
    role: 'Heavy Assault / Refuel',
    crew: '3 + 33',
    speed: '287 km/h',
    range: '740 km',
    description:
      'The heavy-lift workhorse of the regiment, the MH-47G provides long-range insertion of large SOF teams, helicopter air-to-air refueling, and extraction under extreme conditions.',
    image:
      'https://images.pexels.com/photos/16525958/pexels-photo-16525958.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlight: 'Heavy lift',
  },
];

export const TIMELINE = [
  {
    year: '1980',
    title: 'Operation Eagle Claw Aftermath',
    description:
      'Following the failed hostage rescue mission in Iran, the U.S. Army identified a critical gap: dedicated, specially trained aviation assets for special operations.',
  },
  {
    year: '1981',
    title: 'Task Force 158 Formed',
    description:
      'Colonel Jerry Boykin establishes Task Force 158 at Fort Campbell, Kentucky, drawing volunteers from the 101st Aviation Battalion to forge a new breed of night-flying aviator.',
  },
  {
    year: '1986',
    title: 'Redesignated 160th SOAR',
    description:
      'The unit is officially activated as the 160th Aviation Battalion (Special Operations), later redesignated the 160th Special Operations Aviation Regiment.',
  },
  {
    year: '1990',
    title: 'Operation Desert Storm',
    description:
      'Night Stalkers execute a battalion-sized air assault to launch the ground war, inserting special forces deep behind Iraqi lines under total darkness.',
  },
  {
    year: '1993',
    title: 'Battle of Mogadishu',
    description:
      "The regiment supports the longest sustained firefight since Vietnam. Their actions are later chronicled in Black Hawk Down — a defining moment in the unit's legacy.",
  },
  {
    year: '2001',
    title: 'War on Terror Begins',
    description:
      'Within weeks of 9/11, Night Stalkers insert SOF into Afghanistan, beginning two decades of continuous combat operations in the most demanding environments.',
  },
  {
    year: '2011',
    title: 'Operation Neptune Spear',
    description:
      'Modified MH-60 helicopters flown by 160th aviators deliver Navy SEALs to the compound in Abbottabad, Pakistan, for the mission that eliminated Osama bin Laden.',
  },
  {
    year: 'Today',
    title: 'Constant Vigilance',
    description:
      "The regiment remains the world's premier rotary-wing special operations force, training continuously to fly, fight, and win in any condition, any terrain, any hour.",
  },
];

export const LEADERSHIP = [
  {
    rank: 'Colonel',
    name: 'Commander, 160th SOAR(A)',
    role: 'Regimental Commander',
    summary:
      "Commands all aspects of the regiment's training, readiness, and employment of special operations aviation forces worldwide.",
  },
  {
    rank: 'Command Sgt. Major',
    name: 'Regimental CSM',
    role: 'Senior Enlisted Advisor',
    summary:
      'Serves as the principal advisor to the commander on all enlisted matters, standards, discipline, and Soldier welfare.',
  },
];

export const NEWS = [
  {
    tag: 'Exercise',
    date: 'OCT 12, 2026',
    title: 'Night Stalkers Complete Joint Exercise Emerald Falcon',
    excerpt:
      'Aviators from the 160th integrated with special operations forces from three partner nations in a 96-hour continuous, no-notice readiness validation.',
    image: 'https://images.pexels.com/photos/33203064/pexels-photo-33203064.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    tag: 'Training',
    date: 'SEP 28, 2026',
    title: 'Green Platoon: Class 26-09 Earns Their Wings',
    excerpt:
      'Thirty-eight new aviators completed the rigorous six-month qualification course, joining the ranks of the Night Stalkers after 200+ flight hours.',
    image: 'https://images.pexels.com/photos/35707173/pexels-photo-35707173.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    tag: 'Heritage',
    date: 'SEP 03, 2026',
    title: 'Regiment Remembers Fallen During Annual Memorial',
    excerpt:
      'The unit gathered at the Night Stalker memorial to honor those who gave their lives in defense of the nation. Their names are never forgotten.',
    image: 'https://images.pexels.com/photos/11389636/pexels-photo-11389636.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const NAV_ITEMS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Aircraft', href: '#aircraft' },
  { label: 'History', href: '#history' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Recruitment', href: '#recruitment' },
];
