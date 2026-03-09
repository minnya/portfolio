import type { ShowcaseItemModel } from "../models/ShowcaseItemModel";

type ShowcaseCategory = {
  category: string;
  items: ShowcaseItemModel[];
};

export const showcaseCategoryItems: ShowcaseCategory[] = [
  {
    category: "Web App",
    items: [
      {
        id: "orange-chat",
        title: "Orange Chat",
        description: `
\`Orange Chat\` is a next-generation chat app built with **Flutter + Supabase + Cloudflare**.  
It supports both Web and Android platforms, allowing users to communicate in real-time with a wide range of people safely and seamlessly.


##### Key Features

- **Chat**: Have 1-on-1 conversations with ease.  
- **User Search**: Find other users based on interests or criteria.  
- **Photo & Post Sharing**: Share your photos and posts to interact with others.  
- **Comments & Reactions**: Engage with posts through comments and reactions.  
- **User Rating System (Highlight Feature)**: Users are scored automatically on a 5-point scale.  
  Chat accessibility changes based on scores, ensuring safe and high-quality interactions.  
- **Report & Block**: Easily report or block inappropriate users.  
- **Follow & Footprint Tracking**: Follow your favorite users and see who visits your profile.

\`Orange Chat\` is more than just a chat app — it’s a platform that **manages community quality through its system while allowing genuine interaction**.  
It provides a safe, fun, and modern online communication experience.`,
        websiteUrl: "https://revealme.hrkaz.com/",
        image: "orange-chat.png",
        tags: [
          "Flutter",
          "Dart",
          "Supabase",
          "Cloudflare",
          "Firebase Notifications",
        ],
      },
    ],
  },
  {
    category: "Android Apps",
    items: [
      {
        id: "automatic-lyrics",
        title: "Automatic Lyrics",
        description:
          "Automatically find and display the lyrics of the song playing on your Android device without registration or settings, so you can see lyrics instantly while listening.",
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.minnya.showmelyrics",
        image: "automatic-lyrics.png",
        tags: ["Java", "Android SDK", "Gradle", "Node.js"],
      },
      {
        id: "yamada-voice",
        title: "Yamada Voice",
        description:
          "Play iconic voice clips on your Android for laughs, pranks, or sharing with friends anytime.",
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.minnya.yamadavoice",
        image: "yamada-voice.png",
        tags: ["Java", "Android SDK", "Gradle"],
      },
      {
        id: "satake-voive",
        title: "Satake Voice",
        description:
          "Play iconic voice clips on your Android for laughs, pranks, or sharing with friends anytime.",
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.FreshEngine.satake_voice",
        image: "satake-voice.png",
        tags: ["Java", "Android SDK", "Gradle"],
      },
    ],
  },
  {
    category: "React Libraries",
    items: [
      {
        id: "currency-converter",
        title: "Currency Converter Widget",
        description: `\`react-currency-converter-widget\` is a currency converter widget component that can be easily embedded in React applications.  
With this library, you can provide a user-friendly interface for converting between currencies without complex setup.  
Installation is simple via npm or yarn, and the widget works by importing the \`<CurrencyConverter />\` component and placing it in your JSX.  

**Key features include:**

- Built with React, making it easy to integrate seamlessly into existing projects.
- Supports props like \`defaultFromCurrency\` and \`defaultToCurrency\` to set initial currencies.
- Provides a ready-to-use UI for currency conversion, requiring minimal additional implementation.

This component is ideal for portfolios, side projects, or any application where you want to quickly offer currency conversion functionality.  

The library is open-source under the MIT license and is fully documented on [GitHub](https://github.com/minnya/react-currency-converter-widget).`,

        githubUrl: "https://github.com/minnya/react-currency-converter-widget",
        image: "currency-converter.png",
        tags: ["React", "Typescript", "Vite"],
      },
    ],
  },
];
