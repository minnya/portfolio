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

<br/>
##### Key Features

- **Chat**: Have 1-on-1 conversations with ease.  
- **User Search**: Find other users based on interests or criteria.  
- **Photo & Post Sharing**: Share your photos and posts to interact with others.  
- **Comments & Reactions**: Engage with posts through comments and reactions.  
- **User Rating System (Highlight Feature)**: Users are scored automatically on a 5-point scale.  
  Chat accessibility changes based on scores, ensuring safe and high-quality interactions.  
- **Report & Block**: Easily report or block inappropriate users.  
- **Follow & Footprint Tracking**: Follow your favorite users and see who visits your profile.

<br/>
\`Orange Chat\` is more than just a chat app — it’s a platform that **manages community quality through its system while allowing genuine interaction**.  
It provides a safe, fun, and modern online communication experience.`,
        websiteUrl: "https://revealme.hrkaz.com/",
        image: "/orange-chat.png",
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
        description: `
#### Overview
ShowMeLyrics is a mobile app that displays synchronized song lyrics while music is playing. The app listens to currently playing audio and shows real‑time lyrics on the screen, helping users follow and enjoy songs without manually searching for lyrics.

<br/>
#### Main Features
- Real‑time lyrics display synchronized with music playback
- Support for background audio and lock‑screen display
- Search and find lyrics for songs in the user’s music library
- Easy share functionality for favorite lyrics or lines
<br/>
#### Technologies Used
- Flutter (or native Android UI depending on implementation)
- Android audio APIs for detecting playback
- Local database or API integration for retrieving lyrics
- Cloud storage for lyric data updates
        `,
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.minnya.showmelyrics",
        image: "/automatic-lyrics.png",
        tags: ["Java", "Android SDK", "Gradle", "Node.js"],
      },
      {
        id: "yamada-voice",
        title: "Yamada Voice",
        description: `
#### Overview
YamadaVoice is a voice‑based utility app that offers pronunciation support and audio feedback for Japanese names and phrases. Designed to assist with pronunciation, especially for non‑native speakers, the app gives spoken examples and phonetic guidance.

<br/>
#### Main Features
- Voice playback for Japanese names and phrases
- Searchable pronunciation database
- Offline and online support for voice playback
- Bookmark favorite pronunciations for quick access

<br/>
#### Technologies Used
- Android / Flutter for UI
- Text‑to‑Speech APIs for voice playback
- Local data management for pronunciation data

        `,
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.minnya.yamadavoice",
        image: "/yamada-voice.png",
        tags: ["Java", "Android SDK", "Gradle"],
      },
      {
        id: "satake-voive",
        title: "Satake Voice",
        description: `
#### Overview
SatakeVoice is a voice playback app that provides spoken feedback for phrases and sentences, often themed around a specific character or brand. The app allows users to play back voice lines and experience audio content in a fun and engaging way.

<br/>
#### Main Features
- Playback of voice phrases in different categories
- Favorites and shuffle playback features
- Simple UI for browsing and selecting voice lines
- Optional sound effects or theming elements

<br/>
#### Technologies Used
- Android or Flutter for user interface
- Sound playback APIs
- Local resources for voice file management
        `,
        googlePlayUrl:
          "https://play.google.com/store/apps/details?id=com.FreshEngine.satake_voice",
        image: "/satake-voice.png",
        tags: ["Java", "Android SDK", "Gradle"],
      },
    ],
  },
  {
    category: "Libraries",
    items: [
      {
        id: "supabase-webrtc",
        title: "Supabase WebRTC",
        description: `
#### Overview
\`sample-supabase-webrtc\` is a sample demo project that demonstrates how to integrate **Supabase** with **WebRTC** for real-time peer-to-peer communication. The project uses **Flutter** to build cross-platform applications and showcases a simple video/audio calling functionality using Supabase as a backend for signaling and user management.

<br/>
#### Main Features
- **User Management**: Register and list users in Supabase.
- **Call Functionality**: Initiate and receive calls between users.
- **WebRTC Signaling**: Exchange SDP offers/answers and ICE candidates via Supabase Realtime.
- **Cross-Platform**: Supports multiple devices using Flutter.

<br/>
#### Technologies Used
- **Flutter**: Cross-platform UI framework for Android, iOS, web, and desktop.
- **Supabase**: Backend service for authentication, database, and real-time updates.
- **WebRTC**: Peer-to-peer communication protocol for audio and video calls.
- **PostgreSQL**: Database used by Supabase for storing users and call session data.
        `,
        image: "/supabase-webrtc.png",
        githubUrl: "https://github.com/minnya/sample-supabase-webrtc",
        websiteUrl: "http://webrtc.hrkaz.com/",
        tags: ["Supabase", "Flutter", "Dart"],
      },
      {
        id: "currency-converter",
        title: "Currency Converter Widget",
        description: `\`react-currency-converter-widget\` is a currency converter widget component that can be easily embedded in React applications.  
With this library, you can provide a user-friendly interface for converting between currencies without complex setup.  
Installation is simple via npm or yarn, and the widget works by importing the \`<CurrencyConverter />\` component and placing it in your JSX.  
<br/>
**Key features include:**

- Built with React, making it easy to integrate seamlessly into existing projects.
- Supports props like \`defaultFromCurrency\` and \`defaultToCurrency\` to set initial currencies.
- Provides a ready-to-use UI for currency conversion, requiring minimal additional implementation.

<br/>
This component is ideal for portfolios, side projects, or any application where you want to quickly offer currency conversion functionality.  

The library is open-source under the MIT license and is fully documented on [GitHub](https://github.com/minnya/react-currency-converter-widget).`,

        githubUrl: "https://github.com/minnya/react-currency-converter-widget",
        image: "/currency-converter.png",
        tags: ["React", "Typescript", "Vite"],
      },
    ],
  },
];
