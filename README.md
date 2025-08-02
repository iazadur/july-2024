# জুলাই গণঅভ্যুত্থান - July Uprising Calendar

A comprehensive digital archive documenting the historic July 2024 student movement in Bangladesh. This project preserves the memory of the 36-day uprising against discrimination through an interactive calendar, timeline, and photo gallery.

## 🇧🇩 Project Overview

The July Uprising Calendar is a digital archive that chronicles the historic student movement that took place in July 2024. The project aims to:

- Preserve the historical significance of the student uprising
- Document the struggle against discrimination
- Create educational content for future generations
- Maintain a digital record of this important historical event

## ✨ Features

### 📅 Interactive Calendar

- 36-day interactive calendar grid
- Each day shows detailed events and descriptions
- Hover effects with animated transitions
- Background image slideshow for each day
- Responsive design for all devices

### 🖼️ Photo Gallery

- Historical photos and videos from the movement
- Modal view with detailed descriptions
- Related links to external sources
- Categorized content for easy navigation

### ⏰ Timeline View

- Chronological timeline of events
- Filterable by event categories
- Interactive event cards with detailed information
- Modal view for comprehensive details

### 🔍 Search Functionality

- Search by day number, title, or description
- Real-time search results
- Quick links to important events
- Mobile-friendly search interface

### 📱 Responsive Design

- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interactions
- Optimized for mobile devices

### 🎨 Beautiful Animations

- Smooth fade-in animations
- Hover effects and transitions
- Floating particles and ripple effects
- Background animations

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS animations
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/july-uprising-calendar.git
cd july-uprising-calendar
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
july-uprising-calendar/
├── src/
│   ├── app/
│   │   ├── day/[day]/          # Individual day pages
│   │   ├── gallery/            # Photo gallery
│   │   ├── timeline/           # Timeline view
│   │   ├── about/              # About page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   └── ui/
│   │       ├── banner.tsx      # Banner component
│   │       ├── button.tsx      # Button component
│   │       ├── calendar-grid.tsx # Calendar grid
│   │       ├── logo.tsx        # Logo component
│   │       ├── navigation.tsx  # Navigation bar
│   │       └── search.tsx      # Search component
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── july/                   # Historical images
│   └── sadalogo.png           # Project logo
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### Calendar Grid

The main calendar displays all 36 days in a responsive grid. Each day card features:

- Day number prominently displayed
- Event title and description
- Hover effects with additional details
- Background image slideshow
- Smooth animations and transitions

### Individual Day Pages

Each day has its own detailed page showing:

- Comprehensive event information
- Image slideshow
- Navigation to previous/next days
- Progress indicator
- Related content links

### Timeline View

The timeline provides a chronological view of events with:

- Filterable categories
- Interactive event cards
- Detailed modal views
- Visual timeline with connecting lines

### Search Functionality

Users can search through all days by:

- Day number
- Event title
- Description text
- Event details
- Quick links to important events

## 🎨 Design System

### Colors

- **Primary**: Red (#DC2626) and Yellow (#F59E0B)
- **Background**: Gradient from red-900 to yellow-100
- **Text**: White and gray variations
- **Accents**: Various shades of red and yellow

### Typography

- **Headings**: Bold, large text with drop shadows
- **Body**: Readable text with proper line height
- **Bengali**: Proper support for Bengali text

### Animations

- **Fade In**: Smooth opacity transitions
- **Hover Effects**: Scale and color changes
- **Floating Elements**: Subtle background animations
- **Ripple Effects**: Interactive feedback

## 📱 Mobile Optimization

The project is fully optimized for mobile devices:

- Touch-friendly interactions
- Responsive grid layouts
- Mobile navigation menu
- Optimized images and animations
- Fast loading times

## 🔧 Customization

### Adding New Days

To add new days, update the `calendarData` array in the relevant components:

- `src/components/ui/calendar-grid.tsx`
- `src/app/day/[day]/page.tsx`
- `src/app/timeline/page.tsx`

### Styling Changes

Modify the Tailwind classes in the components or update the global CSS in `src/app/globals.css`.

### Content Updates

Update the Bengali text content directly in the component files.

## 🌐 Deployment

The project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy to other platforms:

- Netlify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is created for educational and historical preservation purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please contact the project maintainers.

---

**Note**: This project documents historical events and is intended for educational and archival purposes. The content reflects the historical significance of the July 2024 student movement in Bangladesh.
