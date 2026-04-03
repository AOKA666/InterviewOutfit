export const siteConfig = {
  name: "Interview Outfit",
  title: "Interview Outfit Generator",
  description:
    "Interview outfit ideas, job interview style guides, and a free interview outfit generator for business formal, business casual, and tech interviews.",
  url: "https://www.outfitguide.online",
  ogImage:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
};

type BlogSection = {
  title: string;
  body: string;
};

type BlogFaq = {
  question: string;
  answer: string;
};

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedTime: string;
  updatedTime: string;
  intro?: string;
  sections?: BlogSection[];
  faq?: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "interview-outfit-women",
    title: "Best Interview Outfits for Women in 2025",
    description:
      "A practical guide to interview outfit women ideas, business casual formulas, formal looks, shoes, layering, and common interview style mistakes.",
    category: "By audience",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-03-20T00:00:00.000Z",
    updatedTime: "2026-03-28T00:00:00.000Z"
  },
  {
    slug: "interview-outfit-men",
    title: "Best Interview Outfits for Men",
    description:
      "Reliable interview outfit men combinations for finance, consulting, startup, and business casual interviews, with shoe, fit, and color advice.",
    category: "By audience",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-03-20T00:00:00.000Z",
    updatedTime: "2026-03-28T00:00:00.000Z"
  },
  {
    slug: "what-to-wear-to-an-interview",
    title: "What to Wear to a Job Interview (Complete Guide)",
    description:
      "Learn what to wear to a job interview with practical advice on dress code, color palette, shoes, seasonal layers, and interview outfit mistakes.",
    category: "Fundamentals",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-03-20T00:00:00.000Z",
    updatedTime: "2026-03-28T00:00:00.000Z"
  },
  {
    slug: "tech-interview-outfit",
    title: "What to Wear to a Tech Interview",
    description:
      "Tech interview outfit guidance for software engineers, product managers, designers, and startup candidates who want a polished but natural look.",
    category: "By industry",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-03-20T00:00:00.000Z",
    updatedTime: "2026-03-28T00:00:00.000Z"
  },
  {
    slug: "business-casual-interview-outfit",
    title: "Business Casual Interview Outfit Guide",
    description:
      "Learn how to build a safe business casual interview outfit with practical advice on blazers, shirts, shoes, fit, and dress code balance.",
    category: "By dress code",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Business casual is the most common interview dress code, but it is also the one candidates misread most often. Too formal can feel stiff. Too casual can make you look careless. The goal is a polished, low-risk middle ground that matches office culture without making you second-guess yourself.",
    sections: [
      {
        title: "What business casual means in interviews",
        body: "For interviews, business casual usually means structured pieces without the full formality of a suit. Tailored pants, chinos, blouses, button-down shirts, knit tops, loafers, and clean leather shoes all fit the category. The safest interpretation is slightly more polished than the company’s normal day-to-day office wear."
      },
      {
        title: "The safest outfit formulas",
        body: "For women, a blouse or knit with tailored trousers, loafers, and an optional blazer is usually a strong baseline. For men, a button-down shirt, chinos or wool trousers, and smart shoes works well. In cooler weather, a blazer or light jacket adds structure without pushing the look into full business formal territory."
      },
      {
        title: "Common mistakes",
        body: "Candidates often mistake business casual for casual. Hoodies, distressed jeans, loud sneakers, wrinkled shirts, and overly trendy pieces usually undercut credibility. The other mistake is overcorrecting with a full formal suit when the company is clearly relaxed. Business casual is about balance, not indecision."
      },
      {
        title: "When to dress one step more formal",
        body: "If you are unsure whether business casual is enough, go one level sharper. Add a blazer, choose more structured shoes, and tighten the color palette. That is especially useful for final-round interviews, client-facing roles, and companies that sit somewhere between startup and corporate."
      }
    ],
    faq: [
      {
        question: "Is business casual the safest interview dress code?",
        answer: "For many office roles, yes. It is usually the safest middle ground when a company is not clearly formal and not clearly casual."
      },
      {
        question: "Can I wear jeans for a business casual interview?",
        answer: "Usually no unless the company is clearly relaxed. Dark jeans can work in some startup settings, but tailored trousers are safer for most interviews."
      }
    ]
  },
  {
    slug: "startup-interview-outfit",
    title: "What to Wear to a Startup Interview",
    description:
      "Startup interview outfit advice for candidates who want to look polished, adaptable, and aligned with startup culture without overdressing.",
    category: "By industry",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Startup interviews confuse people because the dress code often looks casual from the outside, but that does not mean anything goes. The best startup interview outfit usually looks clean, sharp, and slightly more intentional than the company’s daily dress. You want to seem comfortable in the environment without looking sloppy or like you misunderstood the stakes.",
    sections: [
      {
        title: "How startup dress codes usually work",
        body: "Most startups lean toward polished business casual or smart casual. Candidates can often skip the suit, but they still need fit, grooming, and condition to look strong. Dark jeans, clean trousers, knitwear, polos, button-downs, loafers, and minimal sneakers can work depending on the company."
      },
      {
        title: "Good startup outfit formulas",
        body: "For men, dark jeans or trousers with a crisp shirt or knit and clean shoes usually works well. For women, tailored pants, a structured top, and loafers or sleek flats is a safe baseline. If the company is more polished, add a blazer. If the company is very relaxed, keep the outfit simple rather than trendy."
      },
      {
        title: "What to avoid",
        body: "Avoid anything that looks lazy: hoodies with visible wear, athletic shorts, loud graphic tees, distressed denim, and beat-up sneakers. Startup does not mean careless. It usually means cleaner lines, comfortable pieces, and less ceremony than consulting or finance."
      },
      {
        title: "How to read the company correctly",
        body: "Look at LinkedIn team photos, founder interviews, conference photos, and career pages. If everyone dresses casually, aim one level above that. The winning outfit is rarely the most formal one. It is the one that looks aligned, considered, and easy to move in during a long interview loop."
      }
    ],
    faq: [
      {
        question: "Can I wear sneakers to a startup interview?",
        answer: "Yes, sometimes, but only if they are minimal, clean, and clearly intentional. When in doubt, loafers or smart casual shoes are safer."
      },
      {
        question: "Should I wear a blazer to a startup interview?",
        answer: "A blazer can work well if the company is polished or if the role is senior. For early-stage casual teams, a clean knit or structured shirt may feel more natural."
      }
    ]
  },
  {
    slug: "interview-outfit-summer",
    title: "What to Wear to an Interview in Summer",
    description:
      "Summer interview outfit advice with breathable fabrics, heat-friendly layering, and practical ways to stay polished in hot weather.",
    category: "By season",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Summer interview outfits are tricky because heat changes comfort, commute stress, and fabric performance. But summer does not lower the professionalism bar. The smartest move is to keep the same interview standards while swapping in lighter fabrics, less bulk, and better temperature management.",
    sections: [
      {
        title: "Use lighter fabrics, not sloppier outfits",
        body: "Breathable cotton, linen blends, tropical wool, and lightweight knits usually work better than heavy synthetic fabrics. Summer professionalism is about managing heat while still looking deliberate. Wrinkles, clingy fabric, and sweat marks create more damage than the season itself."
      },
      {
        title: "Safe summer outfit formulas",
        body: "Women can use a light blouse with tailored trousers or a structured midi skirt and simple flats or loafers. Men can use lightweight dress shirts, smart trousers, loafers, and an optional unstructured blazer. Neutral colors and sharp fit matter more than adding lots of layers."
      },
      {
        title: "What to avoid in hot weather interviews",
        body: "Avoid flip-flops, very casual sandals, shorts, thin clingy fabrics, and overly loud prints. Even if the weather is hot, interviewers still expect clean professional choices. Save beach logic for the weekend."
      },
      {
        title: "How to prepare for the commute",
        body: "Summer interview success often depends on preparation more than outfit theory. Leave early, carry water, use a lint roller, and if necessary bring a blazer separately so you do not arrive overheated. Comfort affects composure more than people admit."
      }
    ],
    faq: [
      {
        question: "Can I wear short sleeves to a summer interview?",
        answer: "Yes, sometimes, especially in business casual or startup settings. The shirt should still look structured and polished."
      },
      {
        question: "Are linen clothes okay for interviews?",
        answer: "Linen blends can work well, but pure linen wrinkles fast. Choose versions that still hold shape and look intentional."
      }
    ]
  },
  {
    slug: "interview-outfit-winter",
    title: "What to Wear to an Interview in Winter",
    description:
      "Winter interview outfit ideas with layering advice, coat choices, and practical ways to stay warm without looking bulky or overdone.",
    category: "By season",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Winter interviews are less about inventing a whole new dress code and more about layering well. The best winter interview outfit keeps you warm during the commute while still looking streamlined and professional when you walk into the room.",
    sections: [
      {
        title: "Keep the interview outfit underneath simple",
        body: "The core interview outfit should still follow the same rules as any season: tailored layers, clean shoes, and a controlled color palette. Winter should change warmth strategy, not professionalism."
      },
      {
        title: "Use outerwear that matches the outfit",
        body: "A structured wool coat, clean trench, or tailored overcoat looks far more interview-ready than an oversized puffer. You do not need fashion drama. You need a coat that supports the same level of polish as the outfit underneath."
      },
      {
        title: "Add warmth without adding bulk",
        body: "Thin knit layers, thermal undershirts, tights, and lined trousers help more than heavy, bulky sweaters. You want to stay warm on the way there but still sit comfortably and move easily once the interview begins."
      },
      {
        title: "Watch your shoes and weather damage",
        body: "Winter means slush, rain, salt, and mud. Choose shoes that still look clean on arrival, and bring a cloth if needed. Interview outfits get undercut fast when otherwise polished clothing is paired with dirty winter footwear."
      }
    ],
    faq: [
      {
        question: "Can I wear boots to a winter interview?",
        answer: "Yes, if they are clean, minimal, and polished. Sleek ankle boots often work better than bulky weather boots."
      },
      {
        question: "Do I need to wear a blazer under my coat?",
        answer: "Not always. In many business casual settings, a fine knit or structured top is enough. Add a blazer if the role or company is more formal."
      }
    ]
  },
  {
    slug: "best-shoes-for-an-interview",
    title: "Best Shoes for an Interview",
    description:
      "Learn which interview shoes are safest for business formal, business casual, startup, and tech interview settings for women and men.",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Shoes quietly decide whether an interview outfit feels polished or unfinished. Candidates often spend too much time choosing shirts and jackets while ignoring the part of the outfit that instantly signals formality, care, and confidence.",
    sections: [
      {
        title: "The safest interview shoes",
        body: "Loafers, oxfords, derbies, minimal flats, clean ankle boots, and modest heels are usually the safest interview choices. They work because they are structured, professional, and easy to match with common interview outfits."
      },
      {
        title: "Shoes by dress code",
        body: "Business formal usually calls for leather shoes or polished heels. Business casual allows loafers, smart flats, and refined ankle boots. Tech and startup roles may allow minimal sneakers, but only if they are clearly clean and intentional."
      },
      {
        title: "What to avoid",
        body: "Avoid worn athletic shoes, flip-flops, casual sandals, sky-high heels, and anything visibly scuffed. Shoes do not need to be expensive, but they do need to look deliberate."
      },
      {
        title: "Comfort matters more than trend",
        body: "If shoes pinch, slip, or force you to think about every step, they weaken your interview. The best interview shoes support posture, movement, and calm body language. That matters more than chasing a stylish but impractical pair."
      }
    ],
    faq: [
      {
        question: "Can I wear sneakers to an interview?",
        answer: "Sometimes in startup or tech environments, but they must be clean, minimal, and clearly intentional."
      },
      {
        question: "Are heels required for interview outfits?",
        answer: "No. Flats, loafers, and ankle boots can look just as polished when they match the dress code."
      }
    ]
  },
  {
    slug: "can-you-wear-jeans-to-an-interview",
    title: "Can You Wear Jeans to an Interview?",
    description:
      "Find out when jeans can work for an interview, when they fail, and how to style them safely for startup or casual office settings.",
    category: "Fundamentals",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Yes, you can sometimes wear jeans to an interview, but only in the right context. This is one of the most searched job interview style questions because people know jeans can either look smart and modern or immediately read as too casual.",
    sections: [
      {
        title: "When jeans can work",
        body: "Jeans can work in startup, software, product, and some creative environments where smart casual is normal. The jeans should be dark, clean, non-distressed, and paired with sharper pieces like a structured shirt, knit, blazer, or polished shoes."
      },
      {
        title: "When jeans are a bad idea",
        body: "Do not wear jeans for finance, consulting, law, traditional corporate roles, or unclear company cultures where you have no strong signal that casual is acceptable. If you are guessing, trousers are safer."
      },
      {
        title: "How to make jeans look interview-ready",
        body: "The trick is contrast. Jeans only work when the rest of the outfit pulls upward in polish. Think dark denim, clean top, sharp shoes, and no visible wear. A blazer or structured jacket makes jeans much easier to justify."
      },
      {
        title: "The safest alternative",
        body: "If you are debating jeans, the safer move is usually chinos or tailored trousers. They offer the same comfort and flexibility while removing uncertainty. Interviews are not the best place to gamble on a dress code guess."
      }
    ],
    faq: [
      {
        question: "Are black jeans better than blue jeans for an interview?",
        answer: "Usually yes. Dark black or deep indigo jeans tend to look sharper and easier to dress up."
      },
      {
        question: "Can I wear ripped jeans to an interview?",
        answer: "No. Distressed denim nearly always looks too casual for an interview setting."
      }
    ]
  },
  {
    slug: "finance-interview-outfit",
    title: "What to Wear to a Finance Interview",
    description:
      "Finance interview outfit advice for candidates who need to look polished, conservative, and credible in banking, consulting, and corporate finance settings.",
    category: "By industry",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "Finance interviews usually reward formality, restraint, and attention to detail. If startup interviews let you be a little looser, finance interviews do the opposite. The safest outfit is one that looks conservative, clean, and completely under control.",
    sections: [
      {
        title: "Why finance dress code is stricter",
        body: "Finance roles often involve client trust, hierarchy, and traditional office expectations. That means interview clothing is read as a signal of judgment and professionalism, not just fashion awareness."
      },
      {
        title: "The safest finance interview outfit",
        body: "For men, think navy or charcoal suit, light dress shirt, conservative tie, and polished leather shoes. For women, a tailored suit, structured dress with blazer, or sharply coordinated separates usually works well. Neutral colors outperform creative experimentation."
      },
      {
        title: "What to avoid",
        body: "Avoid loud colors, trendy fashion statements, casual shoes, flashy accessories, and anything that looks like startup casual. Finance interviews reward discipline and consistency more than personality dressing."
      },
      {
        title: "How formal to go when unsure",
        body: "If you are not sure how formal the company is, choose the more formal option. In finance, being slightly overdressed is usually safer than being slightly underdressed."
      }
    ],
    faq: [
      {
        question: "Do I need a full suit for a finance interview?",
        answer: "In many finance settings, yes. A full suit is often the safest choice, especially for front-office, client-facing, or traditional firms."
      },
      {
        question: "Can I skip the tie for a finance interview?",
        answer: "Usually no unless you have a very strong signal that the office is more relaxed. Finance generally leans conservative."
      }
    ]
  },
  {
    slug: "interview-outfit-for-college-students",
    title: "Best Interview Outfit for College Students",
    description:
      "Interview outfit advice for college students with simple, affordable, low-risk outfit formulas for internships, first jobs, and campus recruiting.",
    category: "By audience",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    publishedTime: "2026-04-03T00:00:00.000Z",
    updatedTime: "2026-04-03T00:00:00.000Z",
    intro:
      "College students often overcomplicate interview clothes because they think they need a whole new wardrobe. Usually they do not. The goal is to build one clean, reliable interview outfit that works for internships, first jobs, and campus recruiting events without spending stupid money.",
    sections: [
      {
        title: "The best starting point for students",
        body: "For most students, polished business casual is the smartest default. That means tailored pants or simple trousers, a clean shirt or blouse, and shoes that look professional rather than casual. One blazer can upgrade the whole outfit if the role is more formal."
      },
      {
        title: "Affordable outfit formulas",
        body: "Students do not need expensive brands. They need fit, clean condition, and neutral colors. One white or light blue shirt, one dark trouser, one pair of polished shoes, and one layer like a blazer or cardigan can go a long way."
      },
      {
        title: "What students should avoid",
        body: "Avoid campus-casual habits that do not translate well to interviews: hoodies, athletic leggings, worn sneakers, graphic tees, and overly trendy pieces. You want to look ready for work, not ready for class."
      },
      {
        title: "How to adapt for internships and first jobs",
        body: "Internship interviews still deserve professional effort, but the formality depends on industry. Finance and consulting are stricter. Tech and startups may be more relaxed. If you are unsure, start with business casual and sharpen it slightly."
      }
    ],
    faq: [
      {
        question: "Do college students need a suit for interviews?",
        answer: "Not always. A suit is helpful for finance, consulting, and more formal roles, but polished business casual is enough for many internships and entry-level interviews."
      },
      {
        question: "What if I cannot afford a full interview wardrobe?",
        answer: "Focus on one versatile outfit formula with clean, neutral basics. Fit and condition matter more than owning lots of pieces."
      }
    ]
  }
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function pageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function buildBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(
  items: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildBlogPostingSchema({
  title,
  description,
  path,
  publishedTime,
  updatedTime,
  keywords
}: {
  title: string;
  description: string;
  path: string;
  publishedTime: string;
  updatedTime?: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: updatedTime ?? publishedTime,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntityOfPage: absoluteUrl(path),
    keywords: keywords.join(", ")
  };
}
