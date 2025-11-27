import currentImg from "../assets/current.jpg";
import currentProject1 from "../assets/current project/1-1.jpg";
import currentProject2 from "../assets/current project/2-2.jpg";
import currentProject3 from "../assets/current project/3-3.jpg";
import currentProject4 from "../assets/current project/4-4.jpg";
import currentProject5 from "../assets/current project/5-5.jpg";
import currentProject6 from "../assets/current project/6-6.jpg";
import currentProject7 from "../assets/current project/7-7.jpg";
import currentProject8 from "../assets/current project/8-8.jpg";
import currentProject9 from "../assets/current project/9-9.jpg";
import currentProject10 from "../assets/current project/10-9a.jpg";
import currentProject11 from "../assets/current project/11-10.jpg";
import currentProject12 from "../assets/current project/12-11.jpg";
import currentProject13 from "../assets/current project/13-12.jpg";
import currentProject14 from "../assets/current project/14-13.jpg";
import currentProject15 from "../assets/current project/15-14.jpg";
import currentProject16 from "../assets/current project/16-15.jpg";
import community2Img from "../assets/community2.jpg";
import communityImg from "../assets/community.jpg";
import community3Img from "../assets/community3.jpg";
import familyImg from "../assets/family.jpg";
import family2Img from "../assets/family2.jpg";
import subdivisionImg from "../assets/27-Lot Subdivision.jpg";
import houseBackgroundImg from "../assets/houseBackground.jpg";
import playingImg from "../assets/playing.jpg";
import saffronImg from "../assets/Saffron Living - Duplexes .png";
import handshakeImg from "../assets/handshake.jpg";
import lotusImg from "../assets/Lotus Living - Townhouses.jpg";
import comingSoon1Img from "../assets/comming-soon-1.png";
import west from "../assets/west.png";
import westClayton from "../assets/westClayton.png";

export const allProjects = [
  {
    id: "latimer-Duplexes",
    project_name: "Latimer Living (Sold Out) - 14 duplexes -196 Street and 76 Avenue. Township of Langley",
    location: "Langley, BC",
    type: "Duplexes",
    status: "Current",
    image_url: currentImg,
    thumbnail_desc: "",
    gallery: [
      currentProject1,
      currentProject2,
      currentProject3,
      currentProject4,
      currentProject5,
      currentProject6,
      currentProject7,
      currentProject8,
      currentProject9,
      currentProject10,
      currentProject11,
      currentProject12,
      currentProject13,
      currentProject14,
      currentProject15,
      currentProject16,
    ],
    details: {
      description:
        "Latimer Duplexes represents the perfect blend of modern living and community connection. This exceptional development features 14 beautifully designed duplexes that offer spacious layouts, premium finishes, and thoughtful design elements that cater to contemporary lifestyles.",
      features: [
        "Modern architectural design with clean lines",
        "Spacious open-concept living areas",
        "Premium kitchen appliances and finishes",
        "Private outdoor spaces and patios",
        "Energy-efficient construction",
        "Close proximity to amenities and schools",
        "Secure parking and storage options",
        "Landscaped common areas",
      ],
      specifications: {
        "Unit Types": "2-3 Bedroom Duplexes",
        "Total Units": "14 Units",
        "Square Footage": "2300 sqft",
        Parking: "2 Spaces per Unit",
        Completion: "2024",
        Developer: "Speedway Homes",
      },
    },
  },
  {
    id: "latimer-living",
    project_name: "West Clayton Townhomes (Comming Soon) (Phase 2) - 22 ",
    location: "Langley, BC",
    type: "Duplexes",
    status: "Coming Soon",
    image_url: westClayton,
    thumbnail_desc: "Townhomes - 18757 74 Avenue, City of Surrey",
    gallery: [
   westClayton
    ],
    details: {
      description:
        "Latimer Living was our flagship development that set new standards for modern duplex living. This sold-out project featured 14 meticulously designed units that combined functionality with aesthetic appeal.",
      features: [
        "Contemporary design with premium finishes",
        "Open-concept living spaces",
        "High-end kitchen and bathroom fixtures",
        "Private outdoor living areas",
        "Energy-efficient building systems",
        "Prime location with easy access to amenities",
        "Secure parking and storage",
        "Professional property management",
      ],
      specifications: {
        "Unit Types": "2-3 Bedroom Duplexes",
        "Total Units": "14 Units",
        "Square Footage": "1,200 - 1,800 sq ft",
        Parking: "2 Spaces per Unit",
        Completion: "2022",
        Status: "Sold Out",
      },
    },
  },
  {
    id: "suncrest-estates",
    project_name: "Suncrest Estates (Sold Out) - 2740t single-family lots - 140 Street and 60 Avenue. City of Surrey",
    location: "Langley, BC",
    type: "Single-family subdivision",
    status: "Sold Out",
    image_url: subdivisionImg,
    thumbnail_desc: "",
    gallery: [
      subdivisionImg,
      houseBackgroundImg,
      family2Img,
      playingImg,
    ],
    details: {
      description:
        "Suncrest Estates represents the pinnacle of single-family living in Langley. This exclusive 27-lot subdivision offers spacious lots with custom home opportunities in a prime location.",
      features: [
        "Large, well-designed lots",
        "Custom home building opportunities",
        "Prime location with mountain views",
        "Close to schools and recreation",
        "Underground utilities",
        "Landscaped streetscapes",
        "Community amenities nearby",
        "Excellent investment potential",
      ],
      specifications: {
        "Lot Types": "Single Family Lots",
        "Total Lots": "27 Lots",
        "Lot Sizes": "6,000 - 8,000 sq ft",
        Utilities: "Underground",
        Completion: "2021",
        Status: "Sold Out",
      },
    },
  },
  {
    id: "saffron",
    project_name: "Saffron (Sold Out) - 26 Duplexes - 141 Street and 60 Avenue. Ctiy of Surrey",
    location: "Langley, BC",
    type: "Duplexes",
    status: "Sold Out",
    image_url: saffronImg,
    thumbnail_desc: "",
    gallery: [
      saffronImg,
      communityImg,
      handshakeImg,
      familyImg,
    ],
    details: {
      description:
        "Saffron brought a new level of sophistication to duplex living with its 26 beautifully crafted units. This development combined modern design with practical living solutions.",
      features: [
        "Contemporary architectural design",
        "Spacious floor plans",
        "Premium interior finishes",
        "Private outdoor spaces",
        "Energy-efficient features",
        "Prime location with amenities",
        "Secure parking facilities",
        "Professional management services",
      ],
      specifications: {
        "Unit Types": "2-3 Bedroom Duplexes",
        "Total Units": "26 Units",
        "Square Footage": "1,200 - 1,800 sq ft",
        Parking: "2 Spaces per Unit",
        Completion: "2020",
        Status: "Sold Out",
      },
    },
  },
  {
    id: "lotus-living",
    project_name: "Lotus Living (Sold Out) - 94 Townhomes - 20860 76 Avenue",
    location: "Langley, BC",
    type: "Townhomes",
    status: "Sold Out",
    image_url: lotusImg,
    thumbnail_desc: "Township of Langley",
    gallery: [
      lotusImg,
      community2Img,
      family2Img,
      playingImg,
    ],
    details: {
      description:
        "Lotus Living was our largest and most ambitious project, featuring 94 thoughtfully designed townhomes that created a vibrant community in the heart of Langley.",
      features: [
        "Modern townhome design",
        "Spacious 2-3 bedroom layouts",
        "Premium kitchen and bathroom finishes",
        "Private balconies and patios",
        "Energy-efficient construction",
        "Community amenities and green spaces",
        "Secure underground parking",
        "Professional property management",
      ],
      specifications: {
        "Unit Types": "2-3 Bedroom Townhomes",
        "Total Units": "94 Units",
        "Square Footage": "1,000 - 1,400 sq ft",
        Parking: "1-2 Spaces per Unit",
        Completion: "2019",
        Status: "Sold Out",
      },
    },
  },
  {
    id: "elmridge-central-gordon-23 k",
    project_name: "Elmridge Estates (Coming Soon) - 23 Townhomes - 7065 204 Street. Township of Langley",
    location: "7065 204 St, Langley",
    type: "Townhomes",
    status: "Coming Soon",
    image_url: comingSoon1Img,
    thumbnail_desc: "23-Unit Townhouse Project in 7065 204 St, Langley",
    gallery: [
      comingSoon1Img,
      communityImg,
      houseBackgroundImg,
      familyImg,
    ],
    details: {
      description:
        "Elmridge Estates in Central Gordon represents the future of modern townhome living. This exciting new development will feature 23 beautifully designed units in a prime location.",
      features: [
        "Contemporary townhome design",
        "Modern open-concept layouts",
        "Premium finishes and fixtures",
        "Private outdoor spaces",
        "Energy-efficient building systems",
        "Prime Central Gordon location",
        "Underground parking facilities",
        "Community amenities and green spaces",
      ],
      specifications: {
        "Unit Types": "4 Bedroom Townhomes",
        "Total Units": "23 Units",
        "Square Footage": "1600 - 2100 sq ft",
        Parking: "2 Spaces per Unit",
        "Expected Completion": "2025",
        Status: "Coming Soon",
      },
    },
  },
  
  {
    id: "elmridge-central-gordon-23",
    project_name: "West Clayton Townhomes (Comming Soon) (Phase 1) -19 Townhomes - 7420 186B St, City of Surrey",
    location: "7065 204 St, Langley",
    type: "Townhomes",
    status: "Coming Soon",
    image_url: west,
    thumbnail_desc: "",
    gallery: [
      west,
   
    ],
    details: {
      description:
        "Elmridge Estates in Central Gordon represents the future of modern townhome living. This exciting new development will feature 23 beautifully designed units in a prime location.",
      features: [
        "Contemporary townhome design",
        "Modern open-concept layouts",
        "Premium finishes and fixtures",
        "Private outdoor spaces",
        "Energy-efficient building systems",
        "Prime Central Gordon location",
        "Underground parking facilities",
        "Community amenities and green spaces",
      ],
      specifications: {
        "Unit Types": "4 Bedroom Townhomes",
        "Total Units": "23 Units",
        "Square Footage": "1600 - 2100 sq ft",
        Parking: "2 Spaces per Unit",
        "Expected Completion": "2025",
        Status: "Coming Soon",
      },
    },
  },
  
];
