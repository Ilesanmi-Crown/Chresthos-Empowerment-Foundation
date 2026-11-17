export const NAV_LINKS = [
  { label: 'Home', href: '/', hasDropdown: false },
  { label: 'About Us', href: '/#foundation', hasDropdown: false },
  { label: 'Get Involved', href: '/#outreaches', hasDropdown: false },
  { label: 'Gallery', href: '/gallery', hasDropdown: false },
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

    video: 'https://www.youtube.com/embed/tEz7_mxkXLo?si=OgNnSx-hfhuDLAjC'
  },
  {
    id: 2,

    video: 'https://www.youtube.com/embed/g-40aZDF4WM?si=5H6fWa9gM4MntW7a'
  }
];

// The Next Teen Star featured spotlight (The Next Teen Star page hero)
// Update this object when the next Teen Star winner has been chosen
export const NEXT_TEEN_STAR = {
  name: "Winner's Name", // e.g. 'Jane Doe' (leave empty string if not yet chosen)
  title: 'WINNER TNTS,2026', // e.g. '2026 Winner' (leave empty string if not yet chosen)
  role: '', // alternative alias for title
  image: '/assets/Subtract-teen-star.png', // Silhouette placeholder or winner photo cutout
  alt: 'The Next Teen Star'
};

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
    role: 'MD/CEO, FOUNDER - LAVISH DESIGN & DECORATING DELIGHTS',
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
    name: 'Miss Grace Evaly',
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
    name: 'Princess Abiye',
    role: 'CEO/FOUNDER OF SPOTON, FILM PRODUCER',
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
    bio: ["The Osita Iheme Foundation is a Nigerian non-profit organisation founded by actor Osita Iheme, popularly known as “Paw Paw,” dedicated to empowering underprivileged children and young people.", "The foundation supports access to education, shelter, healthcare, and technology-driven opportunities, helping young people build brighter futures.", "Headquartered in Owerri, Imo State, the foundation has reportedly supported over 2,400 projects across Africa, reflecting its commitment to improving lives and strengthening communities."]
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
    name: 'Miss Akachukwu Purity',
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
  quote: `“I am pleased to testify to the impactful work of CHRESTHOS FOUNDATION. Their dedication to empowering lives, supporting the vulnerable and serving the community with integrity and compassion - truly commendable. My encounter with the foundation was marked by professionalism, transparency and genuine care. I highly recommend their work to anyone seeking to partner with an organisation that truly makes a difference.”`,
  author: 'Miss Nwachukwu Chioma ',
  role: 'Nurse Assistance, Health Care Personnel',
  image: '/assets/Miss-Nwanchukwu-Chioma.png',
  rating: 5
};

export const CONTACT_INFO = {
  address: 'Sparklight estate, Block H, Plot 2, Ibafo. Opposite MFM Ibadan expressway, Ogun State, Nigeria.',
  email: 'chresthosef@gmail.com',
  phones: ['+2348110603135'],
  whatsapp: ['+447506417508', '+2348154101478'],
  website: 'WWW.CHRESTHOSEMPOWERMENTFOUNDATION.COM',
  copyright: '2026 Chresthos. All rights reserved'
};

export const SOCIAL_LINKS = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@CHRESTHOSTV',
    icon: '/assets/social-media-icons/youtube-icon.png'
  },
  {
    name: 'Facebook',
    url: 'https://web.facebook.com/people/Chresthos-Empowerment-tv/61581422525501/?name=xhp_nt__fb__action__open_user',
    icon: '/assets/social-media-icons/facebook-icon.png'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@chresthos',
    icon: '/assets/social-media-icons/tiktok-icon.png'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chresthostv',
    icon: '/assets/social-media-icons/instagram-icon.png'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/2348154101478',
    icon: '/assets/social-media-icons/whatsapp-icon.png'
  }
];

// All 35 gallery images from /public/assets/gallery-images in the exact design screenshot order
export const GALLERY_IMAGES = [
  // Screenshot 1 (2x2 grid)
  {
    id: 'gallery-1',
    image: '/assets/gallery-images/photo_6041918426332205637_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205637_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 1'
  },
  {
    id: 'gallery-2',
    image: '/assets/gallery-images/photo_6041918426332205638_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205638_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 2'
  },
  {
    id: 'gallery-3',
    image: '/assets/gallery-images/photo_6041918426332205639_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205639_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 3'
  },
  {
    id: 'gallery-4',
    image: '/assets/gallery-images/photo_6041918426332205640_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205640_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 4'
  },

  // Screenshot 2 (3x2 grid)
  {
    id: 'gallery-5',
    image: '/assets/gallery-images/photo_6041918426332205641_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205641_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 5'
  },
  {
    id: 'gallery-6',
    image: '/assets/gallery-images/photo_6041918426332205642_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205642_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 6'
  },
  {
    id: 'gallery-7',
    image: '/assets/gallery-images/photo_6041918426332205620_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205620_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 7'
  },
  {
    id: 'gallery-8',
    image: '/assets/gallery-images/photo_6041918426332205621_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205621_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 8'
  },
  {
    id: 'gallery-9',
    image: '/assets/gallery-images/photo_6041918426332205622_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205622_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 9'
  },
  {
    id: 'gallery-10',
    image: '/assets/gallery-images/photo_6041918426332205623_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205623_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 10'
  },

  // Screenshot 3 (3x2 grid)
  {
    id: 'gallery-11',
    image: '/assets/gallery-images/photo_6041918426332205624_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205624_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 11'
  },
  {
    id: 'gallery-12',
    image: '/assets/gallery-images/photo_6041918426332205625_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205625_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 12'
  },
  {
    id: 'gallery-13',
    image: '/assets/gallery-images/photo_6041918426332205626_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205626_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 13'
  },
  {
    id: 'gallery-14',
    image: '/assets/gallery-images/photo_6041918426332205632_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205632_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 14'
  },
  {
    id: 'gallery-15',
    image: '/assets/gallery-images/photo_6041918426332205627_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205627_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 15'
  },
  {
    id: 'gallery-16',
    image: '/assets/gallery-images/photo_6041918426332205628_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205628_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 16'
  },

  // Screenshot 4 (3x2 grid)
  {
    id: 'gallery-17',
    image: '/assets/gallery-images/photo_6041918426332205629_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205629_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 17'
  },
  {
    id: 'gallery-18',
    image: '/assets/gallery-images/photo_6041918426332205630_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205630_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 18'
  },
  {
    id: 'gallery-19',
    image: '/assets/gallery-images/photo_6041918426332205631_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205631_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 19'
  },
  {
    id: 'gallery-20',
    image: '/assets/gallery-images/photo_6041918426332205634_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205634_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 20'
  },
  {
    id: 'gallery-21',
    image: '/assets/gallery-images/photo_6041918426332205635_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205635_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 21'
  },
  {
    id: 'gallery-22',
    image: '/assets/gallery-images/photo_6041918426332205636_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205636_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 22'
  },

  // Screenshot 5 (3x2 grid)
  {
    id: 'gallery-23',
    image: '/assets/gallery-images/photo_6041918426332205618_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205618_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 23'
  },
  {
    id: 'gallery-24',
    image: '/assets/gallery-images/photo_6041918426332205619_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205619_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 24'
  },
  {
    id: 'gallery-25',
    image: '/assets/gallery-images/photo_6041918426332205615_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205615_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 25'
  },
  {
    id: 'gallery-26',
    image: '/assets/gallery-images/photo_6041918426332205616_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205616_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 26'
  },
  {
    id: 'gallery-27',
    image: '/assets/gallery-images/photo_6041918426332205617_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205617_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 27'
  },
  {
    id: 'gallery-28',
    image: '/assets/gallery-images/photo_6041918426332205613_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205613_y 1.png',
    alt: 'Chresthos Foundation community outreach photo 28'
  },

  // Screenshot 6 (Row 1: 4 portraits, Row 2: 3 posters/events)
  {
    id: 'gallery-29',
    image: '/assets/gallery-images/photo_6041918426332205614_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205614_y 1.png',
    alt: 'Chresthos Foundation team portrait 1'
  },
  {
    id: 'gallery-30',
    image: '/assets/gallery-images/photo_6041918426332205611_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205611_y 1.png',
    alt: 'Chresthos Foundation team portrait 2'
  },
  {
    id: 'gallery-31',
    image: '/assets/gallery-images/photo_6041918426332205633_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205633_y 1.png',
    alt: 'Chresthos Foundation mentorship photo'
  },
  {
    id: 'gallery-32',
    image: '/assets/gallery-images/photo_6041918426332205612_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205612_y 1.png',
    alt: 'Chresthos Foundation medical healthcare team'
  },
  {
    id: 'gallery-33',
    image: '/assets/gallery-images/photo_6041918426332205610_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205610_y 1.png',
    alt: 'The Next Teen Star competition requirements poster'
  },
  {
    id: 'gallery-34',
    image: '/assets/gallery-images/photo_6041918426332205609_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205609_y 1.png',
    alt: 'The Next Teen Star about us poster'
  },
  {
    id: 'gallery-35',
    image: '/assets/gallery-images/photo_6041918426332205608_y 1.png',
    src: '/assets/gallery-images/photo_6041918426332205608_y 1.png',
    alt: 'The Next Teen Star concert event'
  }
];
