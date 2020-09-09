const products = [
  {
    id: 1,
    title: "Re-Vive",
    imageSrc: require("../assets/cake.png"),
    shortDescription: `fter massive project practice and summaries, 
    Ant Design, a design language for background applications, 
    is refined by Ant UED Team, which aims touniform the user`,
    price: "100",
    description: `After massive project practice and summaries, 
      Ant Design, a design language for background applications, 
      is refined by Ant UED Team, which aims touniform the user
      interface specs for internal background projects, 
      lower the unnecessary cost ofdesign differences and 
      implementation and liberate the resources of 
      design and front-end development.`,
    benefits: [
      "Effective for Premature ejaculation",
      "Gives strong and hard erection",
      "Gives Libido",
      "Prolongs sexual act",
      "Relieves Waist Pain",
      "Promotes stamina"
    ]
  },
  {
    id: 2,
    title: "Golden Six",
    imageSrc: require("../assets/cake.png"),
    shortDescription: `fter massive project practice and summaries, 
    Ant Design, a design language for background applications, 
    is refined by Ant UED Team, which aims touniform the user`,
    price: "100",
    description: `After massive project practice and summaries, 
      Ant Design, a design language for background applications, 
      is refined by Ant UED Team, which aims touniform the user
      interface specs for internal background projects, 
      lower the unnecessary cost ofdesign differences and 
      implementation and liberate the resources of 
      design and front-end development.`,
    benefits: [
      "Effective for Female infertility",
      "Effective for Rheumatism",
      "Effective for stroke",
      "Effective for Back pain due to kidney problem",
      "Effective for Menstrual Cramps",
      "Effective for Diabetes type II",
      "Effective for Arthritis",
      "etc"
    ]
  },
  {
    id: 3,
    title: "Vigor Essential",
    imageSrc: require("../assets/cake.png"),
    shortDescription: `fter massive project practice and summaries, 
    Ant Design, a design language for background applications, 
    is refined by Ant UED Team, which aims touniform the user`,
    price: "100",
    description: `After massive project practice and summaries, 
      Ant Design, a design language for background applications, 
      is refined by Ant UED Team, which aims touniform the user
      interface specs for internal background projects, 
      lower the unnecessary cost ofdesign differences and 
      implementation and liberate the resources of 
      design and front-end development.`,
    benefits: [
      "Solves  Male Infertility",
      "Solves  Prostate Disease",
      "Solves  Anti-ageing",
      "Solves  Virility and Vi"
    ]
  },
  {
    id: 4,
    title: "Reishi",
    imageSrc: require("../assets/cake.png"),
    shortDescription: `fter massive project practice and summaries, 
    Ant Design, a design language for background applications, 
    is refined by Ant UED Team, which aims touniform the user`,
    price: "100",
    description: `After massive project practice and summaries, 
      Ant Design, a design language for background applications, 
      is refined by Ant UED Team, which aims touniform the user
      interface specs for internal background projects, 
      lower the unnecessary cost ofdesign differences and 
      implementation and liberate the resources of 
      design and front-end development.`,
    benefits: [
      "Anti-infection",
      "Anti-Virus",
      "Stable Blood Pressure",
      "Anti-HIV Allergies",
      "Treatment of Female Infertility"
    ]
  },
  {
    id: 5,
    title: "vica extras",
    imageSrc: require("../assets/cake.png"),
    shortDescription: `fter massive project practice and summaries, 
    Ant Design, a design language for background applications, 
    is refined by Ant UED Team, which aims touniform the user`,
    price: "100",
    description: `After massive project practice and summaries, 
      Ant Design, a design language for background applications, 
      is refined by Ant UED Team, which aims touniform the user
      interface specs for internal background projects, 
      lower the unnecessary cost ofdesign differences and 
      implementation and liberate the resources of 
      design and front-end development.`,
    benefits: ["V-Ca "]
  },
  {
    id: 6,
    title: "Cordy Active",
    benefits: [
      "Effective for Asthma",
      "Effective for Cardiovascular Diseases",
      "Effective for Lack of Appetite",
      "Effective for Lack of Viitalite",
      "Effective for Anti-ageing",
      "Efective for Lack of Stamina"
    ]
  },
  {
    id: 7,
    title: "Golden Hypha",
    benefits: [
      "Immune system booter",
      "Relieves side effect of treatment of cancer and tumor",
      "Relieves Hepatitis",
      "Relieves neurodematitis and general dermatitis",
      "Effective for Fibroid"
    ]
  },
  {
    id: 8,
    title: "Gastrifort",
    benefits: [
      "Effective for Stomach and liver diseases",
      "Effective for Chronic gastritis",
      "Effective for Atrophic gastritis (Ulcer)",
      "Effective for Hepatitis",
      "Effective for Dyspepsia",
      "Effective for Neurasthenic"
    ]
  },
  {
    id: 9,
    title: "Magilim",
    benefits: [
      "Weight control",
      "It burns fat",
      "It detoxifies the body",
      "It prevents Diabetes"
    ]
  },
  {
    id: 10,
    title: "Qinghao",
    benefits: [
      `Treatment of all forms of malaria,especially for treatment of plasmodium 
      falciparum malaria and multi-drug resistant malaria`
    ]
  },
  {
    id: 11,
    title: "Cordy Royal Jelly",
    benefits: [
      "For reducing blood fat",
      "Supporting healthy circulatory system",
      "Treatment of Cardiovascular diseases",
      "Improving memory"
    ]
  },

  {
    id: 12,
    title: "Constilease",
    benefits: [
      "Effective for Chronic Constipation",
      "Effective for Constipation",
      "Effective for Bacteria Infection",
      "Effective for Acne",
      "Effective for Pigmentation",
      "Effective for Halitosis",
      "Effective for Internal hemorrhoid",
      "Effective for Pile etc"
    ]
  },
  {
    id: 13,
    title: "Jointeez Capsule",
    benefits: [
      "Effective for Osteoarthritis",
      "Effective for Rhenmatism arthritis",
      "Improves joint sore such as inconvenient flexion",
      "Effective for Ankylosing spondylitis"
    ]
  },
  {
    id: 14,
    title: "Diawell Tablet",
    benefits: [
      "Effective for Diabetes type 2",
      "Effective for Chronic artrophic gastritis",
      "Regulates blood sugar",
      "Reduces Thirsty feeling"
    ]
  },
  {
    id: 15,
    title: "Cardibetter Tablet",
    benefits: [
      "Improves heart fuction",
      "Improves blood circulation",
      "Effective for angina pectoris problems",
      "Effective for choking sensation in the chest",
      "Helpful for hypertenion"
    ]
  },
  {
    id: 16,
    title: "Herbal Colon Cleansing Tea",
    benefits: [
      "It cleanses the colon and the gastro-intestinal tract",
      "It detoxifies the body",
      "It easese stomach and intestinal peristalsis",
      "It boosts appetite"
    ]
  },
  {
    id: 17,
    title: "Herbal Refresh Tea",
    benefits: [
      "It clears the throat ",
      "It  makes you lively and smart",
      "It clears internal heat and calms the body",
      "It improves the functioning of the eyes",
      "It is beneicail for computer users"
    ]
  },
  {
    id: 18,
    title: "Gynapharm",
    benefits: [
      "Cures Inflamation of ovaries",
      "Cures Inflamation of uterine tracts and appendages of the womb",
      "Cures Inflamation of endometrium",
      "Cures Pelvic Inflammatory Diseases (PIDs)"
    ]
  },
  {
    id: 19,
    title: "Eve's Comfort",
    benefits: [
      "Promotes blood circulation and regulates menstruation",
      "It  is effective for amenorrhea, dysmenorrhea and abdominal pain due to blood stasis during post-natal"
    ]
  },
  {
    id: 20,
    title: "Cello Q10",
    benefits: [
      "Neurological Diseases",
      "Aging",
      "Antioxidant",
      "Parkinson's disease",
      "Alzheimer"
    ]
  }
];
export default products;
