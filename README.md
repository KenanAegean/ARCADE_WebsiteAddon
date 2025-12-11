# Kenan EGE - Portfolio Website

## 📁 Folder Structure

```
portfolio-site/
│
├── 📄 index.html                    # Main entry point
│
├── 📁 assets/
│   │
│   ├── 📁 css/
│   │   └── 📄 styles.css            # Main stylesheet
│   │
│   ├── 📁 js/
│   │   └── 📄 main.js               # Main JavaScript (all logic)
│   │
│   ├── 📁 data/
│   │   └── 📄 data.json             # All site data (portfolio, experience, etc.)
│   │
│   ├── 📁 images/
│   │   ├── 📁 Portfolio/            # Project screenshots & thumbnails
│   │   │   └── 📁 gifs/             # Animated GIFs for projects
│   │   ├── 📁 PlayableGames/        # Game showcase images
│   │   ├── 📁 logos/                # Company/institution logos
│   │   │   ├── orion.png
│   │   │   ├── bdh.png
│   │   │   ├── biltek.png
│   │   │   ├── futuregames.png
│   │   │   ├── lodz.png
│   │   │   └── dogus.png
│   │   ├── 📁 insta/                # Instagram posts
│   │   │   ├── profile.jpg
│   │   │   ├── p1.png
│   │   │   ├── p2.png
│   │   │   ├── p3.png
│   │   │   └── p4.png
│   │   └── 📄 avatar4.gif           # Profile avatar
│   │
│   └── 📁 pdf/
│       ├── 📄 KenanEGE_CV_PL.pdf    # CV (Default/Poland)
│       └── 📄 KenanEGE_CV_TR.pdf    # CV (Turkey)
│
└── 📁 projects/
    └── 📄 project-detail.html       # Individual project detail page template
```

## 🎨 Theme Colors (by Section)

| Section    | Color Code | Name        |
|------------|------------|-------------|
| Overview   | `#00f3ff`  | Cyan        |
| Arcade     | `#ff0055`  | Red/Pink    |
| Inventory  | `#bc13fe`  | Purple      |
| Log        | `#ffd700`  | Gold        |
| Stats      | `#0051ff`  | Blue        |
| More       | `#39ff14`  | Neon Green  |

## 📄 data.json Structure

```json
{
  "siteConfig": {
    "versions": {},
    "personal": { "name", "avatar", "titles", "birthday", "location", "about" },
    "external": { "steamUsername", "spotifyArtistId", "githubUsername" },
    "cv": { "default", "turkey" }
  },
  "themes": { "about", "games", "portfolio", "experience", "education", "more" },
  "socialLinks": [ { "platform", "icon", "url", "visible" } ],
  "portfolioItems": [ { "title", "category", "description", "highlighted", "image", "link", "tags", "iconType", "visible" } ],
  "experience": [ { "company", "logo", "url", "positions": [ { "title", "startDate", "endDate", "responsibilities" } ] } ],
  "education": [ { "institution", "logo", "url", "degrees": [ { "title", "startDate", "endDate" } ] } ],
  "gamesShowcase": { "highlighted": [], "inDevelopment": [] },
  "footer": {},
  "instagram": { "username", "profileUrl", "posts": [] },
  "projectDetails": {}
}
```

## 🚀 Features

- **Dynamic Theming** - Color changes based on active section
- **Portfolio Filtering** - All, Highlighted, Games, Web, Apps
- **CV Localization** - Auto-detects Turkey users
- **Responsive Design** - Mobile sidebar toggle
- **Interactive Background** - Mouse-reactive dot grid + 3D shapes
- **External Integrations** - Spotify, Steam, GitHub, Instagram

## 🛠️ Technologies

- Tailwind CSS (CDN)
- Lucide Icons
- Vanilla JavaScript (ES6+)
- Google Fonts (Archivo Black, Chakra Petch, Space Mono)

## 📝 Default Behavior

- **Default Section**: Inventory (Portfolio)
- **Default Filter**: Highlighted Projects
- **Default Theme**: Purple (`#bc13fe`)
