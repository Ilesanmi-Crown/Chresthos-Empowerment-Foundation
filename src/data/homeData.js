export const NAV_LINKS = [
  { label: 'Home', href: '.', hasDropdown: false },
  { label: 'About us', href: '.#foundation', hasDropdown: false },
  { label: 'Get involved', href: '.#outreaches', hasDropdown: false },
  { label: 'TNTS', href: '/the-next-teen-star', hasDropdown: false },
];

export const FUN_FACTS = [
  {
    prefix: 'Over',
    stat: '200+',
    label: 'children supported in 5 orphanages.',
    maxW: 303
  },
  {
    prefix: 'Over',
    stat: '80%',
    label: 'children in our programs now attend school regularly.',
    maxW: 347
  },
  {
    prefix: 'Over',
    stat: '100+',
    label: 'volunteers actively engaged in our programs.',
    maxW: 347
  }
];

export const HERO_CHILDREN = [
  {
    id: 'child-left',
    image: '/assets/child2.png', // Black & white smiling boy
    alt: 'Smiling child supported by Chresthos Foundation',
    rotation: -8,
    role: 'left'
  },
  {
    id: 'child-center',
    image: '/assets/child3.png', // Young man in green beanie
    alt: 'Young individual empowered through education',
    rotation: 0,
    role: 'center'
  },
  {
    id: 'child-right',
    image: '/assets/child1.png', // Child with arms raised above head
    alt: 'Child beneficiary with bright smile',
    rotation: 8,
    role: 'right'
  }
];

export const OUTREACHES = [
  {
    id: 1,
    title: 'Education & Learning Support',
    description: 'Providing comprehensive school supplies, tuition support, and structured tutoring to keep children in classrooms.',
    image: '/assets/outreach-media-1.png'
  },
  {
    id: 2,
    title: 'Community Mentorship & Relief',
    description: 'Compassionate outreach providing essential food, healthcare assistance, and life skills mentorship.',
    image: '/assets/outreach-media-2.png'
  }
];

// Exact Partners from Figma Design (Wireframe 30 / Wireframes 10, 11, 13 / website design)
export const PARTNERS = [
  {
    id: 'partner-1',
    name: 'Mr. Ezenwa Tee Nzekwe',
    role: 'HEALTHCARE PROFESSIONAL AND COMMUNITY LEADER',
    image: '/assets/partner-mr-tee.png',
    pattern: 'stripes',
    isCutout: true,
    bio: ["Ezenwa Tee Nzekwe has over 15 years' experience as a Senior Specialist Nurse with NHS Continuing Healthcare.","Beyond healthcare, he serves as Trustee of the LODO Foundation, Patron of the Owerri Women's Association UK, and former President of the Rotary Club of Hendon.","He also spent 8 years on the Executive Board of Imo State Union, UK. A dedicated leader and activist, Tee continues to uplift lives and strengthen communities in the UK and beyond."]
  },
  {
    id: 'partner-2',
    name: 'Ms. Ogechi Ejimofor',
    role: 'MD/CEO, FOUNDER - THE TRAVELCLUB & DECORATING DELIGHTS',
    image: '/assets/partner-ms-ogechi.png',
    pattern: 'prisms',
    isCutout: true,
    bio: ["With two decades of experience in the NHS, she also built her career around leadership in governance, specialist hospitals, community, and mental health services.", "Ms. Ogechi is currently pursuing a PhD in healthcare which reflects her commitment to driving positive change, within inclusive environments.", "Alongside her healthcare career, her work and passions are guided by the same values which are dedicated to creating positive experiences, and tremendous milestones in all directions of youth activism."]
  },
  {
    id: 'partner-3',
    name: 'Mr. Chibueze Francis',
    role: 'MEMBER OF THE BRITISH ARMED FORCES, WAR VETERAN',
    image: '/assets/partner-mr-francis.png',
    pattern: 'stripes',
    isCutout: true,
    bio:[ "Chibueze brings extensive international experience through military operational tours and adventure training missions worldwide.", "An accomplished sportsman, he has represented his Unit and the British Armed Forces in various sports, earning numerous medals and accolades.", "He is CEO and Director of CFRAN6 Production and Entertainment Ltd, operating in the UK and Nigeria, where he champions creative expression and humanitarian initiatives. "]
  },
  {
    id: 'partner-4',
    name: 'Mrs. Grace Evaly',
    role: 'CEO OF GLOBALVARA NIGERIA LTD',
    image: '/assets/partner-mrs-grace.png',
    pattern: 'circles',
    isCutout: true,
    bio: ["Grace Evaly is a passionate humanitarian ambassador, social worker, and global organizer dedicated to driving meaningful change.", "As the CEO of GlobalVara Nigeria Limited and founder of Nollywood Germany, she champions creativity and cultural exchange as tools for empowerment and community connection.", "Her international journey fuels her mission to build bridges across cultures, advocate for human dignity, and inspire others to take action."]
  },
  {
    id: 'partner-5',
    name: 'Mrs. Rachel Nana',
    role: 'YOUTH EMPOWERMENT ADVOCATE, ENTREPRENEUR',
    image: '/assets/partner-mrs-rachel.png',
    pattern: 'circles',
    isCutout: true,
    bio: ["Rachel Nana Kwesuah Lomotey is an experienced educator, humanitarian, and community leader dedicated to education, cultural awareness, and charitable service.","She is the founder and leader of United Jews of Africa (UJA), supporting Black African Jewish communities through educational resources, cultural engagement, and humanitarian assistance.", "Through her volunteering with the Jewish Volunteering Network and Norwood, alongside her participation in Reggae Choir UK, Rachel continues to promote diversity, unity, and community wellbeing."]
  },
   {
    id: 'partner-6',
    name: 'Ms. Princess Chukwufumnanya Okoh',
    role: 'LAGOS ASSISTANT COORDINATOR, FASHION DESIGNER',
    image: '/assets/partner-mrs-princess.png',
    pattern: 'diamonds',
    isCutout: true,
    bio: ["Princess Abiye is a UK-based actor, presenter, and film producer with experience across the British and African screen industries.","A Middlesex University graduate, she combines acting, presenting, and independent film production, championing storytelling and representation.", "She is the founder and CEO of Spoton Media, a London-based production company. Beyond entertainment, Princess is an educator and humanitarian dedicated to empowering young people through education, storytelling, and charitable service."]
  },
  {
    id: 'partner-7',
    name: 'Osita Iheme Foundation',
    role: 'FOUNDING PARTNER, NON-PROFIT ORGANISATION',
    image: '/assets/partner-osita-iheme.png',
    pattern: 'circles',
    isLogo: true,
    externalUrl: 'https://ositaiheme.org/',
    bio: ["The Osita Iheme Foundation is a Nigerian non-profit organization founded by actor Osita Iheme, popularly known as “Paw Paw,” dedicated to empowering underprivileged children and young people.", "The foundation supports access to education, shelter, healthcare, and technology-driven opportunities, helping young people build brighter futures.", "Headquartered in Owerri, Imo State, the foundation has reportedly supported over 2,400 projects across Africa, reflecting its commitment to improving lives and strengthening communities."]
  },
  {
    id: 'partner-8',
    name: 'Pistos Pictures International',
    role: 'FOUNDING PARTNER, FILM PRODUCTION COMPANY',
    image: '/assets/partner-pistos-pictures.png',
    pattern: 'prisms',
    isLogo: true,
    bio: ["Pistos Pictures International Limited (PPIL) is a Nigerian film production, entertainment, and marketing company founded in April 2008. ", "The company operates across various areas of the entertainment industry, including feature films, television programmes, documentaries, music production, and advertising. ", "PPIL also produces concerts and live events, creating compelling stories and delivering high-quality entertainment to audiences in Nigeria and around the world."]
  }
];

// Exact Team Members from Figma Design (Wireframe 30 / Wireframes 12, 14, 15, 16, 17, 18)
export const TEAM_MEMBERS = [
  {
    id: 'team-1',
    name: 'Mr. Emmanuel Onyekachi Olabode',
    role: 'PRESIDENT, CHRESTHOS EMPOWERMENT FOUNDATION',
    image: '/assets/team-emmanuel-olabode.png',
    pattern: 'prisms',
    isCutout: true,
    bio: ["Emmanuel Onyekachi Olabode is a Nigerian filmmaker, cinematographer, director, producer, and creative entrepreneur with over 25 years of experience in the film industry. He began his professional journey in 1998 and is the Founder and CEO of Pistos Pictures International Limited.", "A graduate of AFDA, Johannesburg, where he studied Motion Picture Production and Cinematography, Emmanuel has contributed to numerous film productions and earned industry recognition for his work.", "He also founded CHRESTHOS Empowerment Foundation and Pistos Film & Drama Ministry, using storytelling and filmmaking to promote youth empowerment, community development, cultural expression, and positive social change."]
  },
  {
    id: 'team-2',
    name: 'Mrs. Akachukwu Purity',
    role: 'FOUNDER, PURITY NEEDLES',
    image: '/assets/team-akachukwu-chinazam.png',
    pattern: 'stripes',
    isCutout: true,
    bio: ["Akachukwu Chinazam Purity is a fashion designer from Abia State, based in Enugu, Nigeria.", "She specialises in creating outfits for women and children, including wedding dresses. She is the founder of Purityneedles Seaming, a fashion brand built on creativity, craftsmanship, and style.", "Beyond fashion, Akachukwu is passionate about SDG 1 (No Poverty) and supporting underprivileged individuals, reflecting her commitment to making a positive difference in her community."]
  },
  {
    id: 'team-3',
    name: 'Mr. Raphael Okoye',
    role: 'MD/CEO D&D GLOBAL CONCEPT & ENUGU STATE COORDINATOR',
    image: '/assets/team-raphael-okoye.png',
    pattern: 'circles',
    isCutout: true,
    bio: ["Chaplain Raphael Chimaobim Okoye (Duke) is the MD/CEO of D&D Agro Trade Enterprise and D&D Global Concept.", "He is dedicated to empowering young people, building their capacity, and redirecting them towards positive developmental initiatives. He was appointed Special Adviser on Security and Rescue of the National Youth Council of Nigeria, South-East Zone.", "Passionate about community service and social development, Raphael spearheads youth programmes and champions positive change, working tirelessly to build stronger communities and create opportunities for young people."]
  },
  {
    id: 'team-4',
    name: 'Ms. Onumajuru Angel Amarachi',
    role: 'GENERAL SECRETARY, CHRESTHOS EMPOWERMENT FOUNDATION',
    image: '/assets/team-amarachi.png',
    pattern: 'diamonds',
    isCutout: true,
    bio: "General Secretary of Chresthos Empowerment Foundation. Anatomy scholar at university and youth motivator passionate about inspiring, influencing, and teaching youth to reach their full potential."
  },
  {
    id: 'team-5',
    name: 'Ms. Chinaza Nwabueze',
    role: 'MD/CEO OF ANA’S EMPIRE',
    image: '/assets/team-christiana-nwabueze.png',
    pattern: 'stripes',
    isCutout: true,
    bio: ["Ms Christiana Chinaza Nwabueze is from Ugbawka, Nkanu East Local Government Area of Enugu State. She is a certified makeup artist and beautician with a deep passion for humanity and spreading kindness around the world.", "She is the founder of Ana’s empire and she is dedicated to inspiring and positively impacting young people, working towards a society where love, kindness, and compassion thrive.", "Guided by her commitment to humanity, she champions the message: #WeAreCalledForHumanity."]
  },
 
  {
    id: 'team-6',
    name: 'Mrs. Esther Chinaza',
    role: 'YOUTH EMPOWERMENT ADVOCATE, ENTREPRENEUR',
    image: '/assets/team-esther-chinaza.png',
    pattern: 'prisms',
    isCutout: true,
    bio: ["Mrs. Esther Chinaza Emmanuel is a fashion icon and entrepreneur known for her creativity, innovation, and leadership in the fashion industry.", "She is passionate about inspiring young people, especially women, to pursue their dreams and reach their full potential.", "As the Abia State Assistant Coordinator of the foundation, she helps drive initiatives, coordinate programmes, and promote community development, advancing the foundation’s mission of youth empowerment and social impact."]
  },
  {
    id: 'team-7',
    name: 'Mr. David Olorunmuyiwa',
    role: 'SDG ADVOCATE, TECHNOLOGY ENTHUSIAST',
    image: '/assets/team-david-olorunmuyiwa.png',
    pattern: 'diamonds',
    isCutout: true,
    bio: ["David Olorunmuyiwa is a young Nigerian passionate about technology, leadership, and community development. With skills in web development and digital marketing, he hopes to use technology to create opportunities and improve lives.", "Through his involvement in youth programmes and community projects, David continues to develop his skills and inspire others. He believes every young person deserves the support and opportunities needed to reach their full potential.", "His vision is to help build an Africa where young people can discover their talents, develop their abilities, and contribute to a better future."]
  }
];

export const TESTIMONIAL = {
  quote: `“Working alongside the Chresthos Empowerment Foundation has shown me firsthand the incredible dedication they bring to vulnerable children and young people.\n\nTheir holistic approach—from regular school attendance support to mentorship programs—truly transforms communities from the ground up. It’s an organization with real heart and undeniable impact.”`,
  author: 'Dr. Chinedu Arinze',
  role: 'Child Psychologist & Advocate',
  image: '/assets/testimonial-doctor.png',
  rating: 5
};

export const CONTACT_INFO = {
  address: 'Sparklight estate, Block H, Plot 2, Ibafo. Opposite MFM Ibadan expressway, Ogun State, Nigeria.',
  email: 'chesthosef@gmail.com',
  phones: ['+447506417508', '+2348154101478', '+2348143852409'],
  website: 'WWW.CHRESTHOSEMPOWERMENTFOUNDATION.COM',
  copyright: '2026 Chresthos. All rights reserved'
};
