type Gender = "female" | "male";
type Industry = "tech" | "finance" | "marketing" | "startup" | "general";
type Formality = "business-formal" | "business-casual" | "casual";
type Season = "spring" | "summer" | "autumn" | "winter";

type OutfitImageMap = Record<`${Gender}-${Industry}-${Formality}`, string[]>;

export const seasonOffsets: Record<Season, number> = {
  spring: 0,
  summer: 1,
  autumn: 2,
  winter: 0
};

export const outfitImages: OutfitImageMap = {
  "female-tech-business-formal": [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
  ],
  "female-tech-business-casual": [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-tech-casual": [
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-finance-business-formal": [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-finance-business-casual": [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-finance-casual": [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  ],
  "female-marketing-business-formal": [
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
  ],
  "female-marketing-business-casual": [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-marketing-casual": [
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-startup-business-formal": [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80"
  ],
  "female-startup-business-casual": [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-startup-casual": [
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-general-business-formal": [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-general-business-casual": [
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "female-general-casual": [
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
  ],
  "male-tech-business-formal": [
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80"
  ],
  "male-tech-business-casual": [
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-tech-casual": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-finance-business-formal": [
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
  ],
  "male-finance-business-casual": [
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-finance-casual": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-marketing-business-formal": [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80"
  ],
  "male-marketing-business-casual": [
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-marketing-casual": [
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-startup-business-formal": [
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80"
  ],
  "male-startup-business-casual": [
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
  ],
  "male-startup-casual": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-general-business-formal": [
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80"
  ],
  "male-general-business-casual": [
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ],
  "male-general-casual": [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  ]
};
