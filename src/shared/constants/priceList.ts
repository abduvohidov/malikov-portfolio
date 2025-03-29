interface PriceListDataType {
  title: string;
  content: string[];
  price: {
    from: number;
    to: number;
  };
}

export const priceListData: Array<PriceListDataType> = [
  {
    title: "Basic Editing",
    content: [
      "Cutting and trimming clips",
      "Merging multiple clips",
      "Adding transitions",
      "Adjusting speed (slow motion, fast motion, time remapping)",
      "Basic color correction",
    ],
    price: {
      from: 7,
      to: 10,
    },
  },
  {
    title: "Intermediate Editing  ",
    content: [
      "Adding background music and sound effects",
      "Applying smooth jump cuts",
      "Creating split-screen effects",
      "Adding text and subtitles",
      "Working with keyframes for animation",
      "Using green screen (chroma keying)",
      "Basic motion tracking",
      "Stabilizing shaky footage",
    ],
    price: {
      from: 15,
      to: 25,
    },
  },
  {
    title: "Advanced Editing",
    content: [
      "3D camera tracking",
      "Rotoscoping (cutting out subjects from background)",
      "Parallax effects",
      "Dynamic speed ramping",
      "Frame-by-frame compositing",
    ],
    price: {
      from: 35,
      to: 45,
    },
  },
];
