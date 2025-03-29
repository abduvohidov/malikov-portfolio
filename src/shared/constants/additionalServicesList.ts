interface AdditionalServicesListType {
  category: string;
  services: string[];
}

export const additionalServicesList: AdditionalServicesListType[] = [
  {
    category: "Sound Design & Audio Editing",
    services: [
      "Noise reduction and audio cleanup (depends on noise level in original video)",
      "Creating cinematic soundscapes",
      "Synching audio with visuals",
    ],
  },
  {
    category: "Creative Effects",
    services: [
      "Glitch effects",
      "Light leaks & lens flares",
      "3D text animation",
      "Double exposure effects",
      "VHS or retro film looks",
      "AI-powered text-to-video transitions",
    ],
  },
  {
    category: "Social Media & Short-Form Video Editing",
    services: [
      "Optimizing vertical video for Instagram Reels, TikTok, and YouTube Shorts",
      "Captions with auto-sync",
      "High-energy cuts & beat syncing with music",
      "Meme-style editing (zoom-ins, text overlays, reaction edits)",
      "Loop-friendly edits for engagement",
    ],
  },
  {
    category: "AI & Automation-Based Editing",
    services: [
      "AI-based auto-cutting and summarization",
      "Speech-to-text auto-captioning",
      "AI background removal (without green screen)",
      "AI-driven object tracking and replacement",
    ],
  },
  {
    category: "Freelance & Commercial Editing",
    services: [
      "Editing wedding videos",
      "Corporate videos and advertisements",
      "YouTube video editing for influencers",
      "Podcast video production",
      "Documentary-style editing",
      "Real estate and travel videos",
    ],
  },
];
