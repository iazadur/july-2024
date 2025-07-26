# জুলাই গণঅভ্যুত্থান ক্যালেন্ডার - July Uprising Calendar

## 📅 Project Overview

A beautiful, animated calendar website commemorating the July 2024 student movement against discrimination in Bangladesh. This project serves as an interactive archive documenting the 36-day historical uprising.

## ✨ Features

### 🎨 Beautiful UI/UX

- **Smooth Animations**: CSS-based animations with staggered loading effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Eye-catching Visuals**: Gradient backgrounds, hover effects, and particle animations
- **Professional Layout**: Government demo project quality design

### 📱 Interactive Calendar Grid

- **36 Day Cards**: Each representing a day of the July uprising
- **Background Image Slideshow**: Automatic rotation of 6 different images with smooth transitions
- **Hover Effects**: Multiple animation types (fade, slide, zoom, rotate, flip)
- **Event Details**: Hover to see detailed information about each day's events
- **Floating Particles**: Animated particles on hover for enhanced visual appeal

### 🖼️ Image Management

- **6 Background Images**: Automatically rotating slideshow for each day card
- **Multiple Transition Types**: Various animation styles for image transitions
- **Staggered Timing**: Each card has slightly different timing for organic feel

### 📄 Individual Day Pages

- **Detailed Information**: Comprehensive details about each day's events
- **Image Navigation**: Clickable dots to manually control image slideshow
- **Progress Indicator**: Visual progress bar showing completion percentage
- **Navigation**: Previous/Next day navigation buttons
- **Bengali Content**: All content in Bengali language

### 🎯 Key Features

- **Real Historical Data**: Based on actual July 2024 student movement events
- **Government Demo Quality**: Professional design suitable for government presentation
- **Accessibility**: Focus states, keyboard navigation, and screen reader friendly
- **Performance Optimized**: Efficient animations and image loading

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Language**: TypeScript
- **Images**: JPEG format with automatic slideshow
- **Animations**: Pure CSS animations and transitions

## 📁 Project Structure

```
july-uprising-calendar/
├── public/
│   ├── july/           # Background images (1.jpeg to 6.jpeg)
│   ├── sadalogo.png    # SADA organization logo
│   └── WhatsApp Image 2025-07-10 at 17.47.56.jpeg  # Banner image
├── src/
│   ├── app/
│   │   ├── day/[day]/  # Individual day pages
│   │   ├── globals.css # Global styles and animations
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/ui/
│       ├── banner.tsx      # Banner component
│       ├── calendar-grid.tsx # Main calendar grid
│       └── logo.tsx        # Logo component
└── README.md
```

## 🎨 Design Features

### Color Scheme

- **Primary**: Red (#DC2626) - Represents the struggle and passion
- **Secondary**: Yellow (#F59E0B) - Represents hope and victory
- **Background**: Gradient from red to yellow
- **Text**: White with drop shadows for readability

### Animation Types

1. **Fade In**: Smooth opacity transitions
2. **Slide**: Horizontal sliding effects
3. **Zoom**: Scale-based animations
4. **Rotate**: Rotation effects
5. **Flip**: 3D flip animations
6. **Float**: Floating particle effects

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📖 Content Structure

### Calendar Data

Each day includes:

- **Day Number**: 1-36
- **Title**: Bengali title describing the day's theme
- **Description**: Short description of the day's focus
- **Event**: Specific event that occurred
- **Details**: Comprehensive details about the day's events

### Sample Day Entry

```typescript
{
  day: 1,
  title: "শুরুর দিন",
  description: "আন্দোলনের সূচনা",
  event: "শিক্ষার্থীদের প্রথম সমাবেশ",
  details: "জুলাই মাসের প্রথম দিনে ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা প্রথমবারের মতো সমাবেশ করে বৈষম্যের বিরুদ্ধে প্রতিবাদ জানায়।"
}
```

## 🎯 Usage

### Home Page

- View the complete 36-day calendar grid
- Hover over any day card to see event details
- Click on any day to view detailed information

### Individual Day Pages

- Navigate between days using Previous/Next buttons
- View image slideshow with manual navigation
- Read detailed information about each day's events
- See progress indicator showing completion percentage

## 🔧 Customization

### Adding New Images

1. Place new images in `public/july/` directory
2. Update the `backgroundImages` array in `calendar-grid.tsx`
3. Images will automatically be included in the slideshow

### Modifying Animations

1. Edit CSS animations in `src/app/globals.css`
2. Adjust timing and easing functions
3. Add new animation types as needed

### Updating Content

1. Modify the `calendarData` array in `calendar-grid.tsx`
2. Update individual day details in `src/app/day/[day]/page.tsx`
3. All content is in Bengali language

## 🌟 Special Features

### Government Demo Quality

- Professional design suitable for government presentations
- High-quality animations and transitions
- Comprehensive documentation
- Accessibility considerations

### Performance Optimizations

- Efficient CSS animations
- Optimized image loading
- Responsive design for all devices
- Minimal JavaScript usage

### Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast design
- Focus states for all interactive elements

## 📝 License

This project is created for the Bangladesh government demo project showcasing the July 2024 student movement against discrimination archive.

## 🤝 Contributing

This is a demo project for the Bangladesh government. For any modifications or enhancements, please ensure they maintain the professional quality and historical accuracy of the content.

---

**জুলাই গণঅভ্যুত্থান ক্যালেন্ডার** - Remembering the historic student movement against discrimination in July 2024.
