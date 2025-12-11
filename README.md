# Test Your Knowledge - Interactive Quiz App

A pixel-perfect implementation of a quiz application based on the provided Figma design, built as a Frontend Developer Intern assignment.

## 🚀 Live Demo

[View Live Demo](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)

## 📋 Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Vite** for fast development and build

## ✨ Key Features Implemented

### Core Functionality
- **Start Screen**: Welcome page with quiz overview and total question count
- **Question Flow**: Sequential question display with multiple choice answers
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Results Screen**: Final score display with percentage and restart option

### Design Accuracy
- Pixel-perfect matching of Figma specifications
- Custom color palette (teal primary, golden accents)
- Elegant typography using Libre Baskerville (serif) and Poppins (sans-serif)
- Responsive card-based layout

### Animations & Interactions
- Smooth page transitions using Framer Motion
- Hover effects on answer options with subtle lift
- Selected state styling with golden border
- Score reveal animation on results page
- Scale and fade animations throughout

### Accessibility (WCAG 2.1)
- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles for interactive elements
- Keyboard navigation support
- Focus management
- Screen reader compatible progress indicators

## 🎨 Design System

### Colors
- **Primary (Teal)**: `hsl(197, 54%, 23%)` - Main brand color
- **Background**: `hsl(187, 33%, 94%)` - Light icy blue
- **Accent (Gold)**: `hsl(45, 100%, 51%)` - Selection highlights
- **Card**: Pure white with subtle shadows

### Typography
- **Headers**: Libre Baskerville (serif with italic variant)
- **Body**: Poppins (clean sans-serif)

## 🛠 Setup Instructions

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd <project-folder>
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📁 Project Structure

\`\`\`
src/
├── components/
│   └── quiz/
│       ├── Quiz.tsx           # Main quiz container with state management
│       ├── StartScreen.tsx    # Welcome/start screen
│       ├── QuestionScreen.tsx # Question display with options
│       └── ResultScreen.tsx   # Final score display
├── data/
│   └── quizData.ts           # Quiz questions and answers
├── pages/
│   └── Index.tsx             # Main page component
├── index.css                 # Global styles and design system
└── App.tsx                   # App router configuration
\`\`\`

## 💡 Assumptions Made

1. **Question Data**: Created sample general knowledge questions for demonstration
2. **Single Answer**: Each question has only one correct answer
3. **Desktop Focus**: Optimized for desktop as per assignment requirements
4. **No Backend**: Quiz data is stored locally (no persistence)

## ⏱ Time Spent

- Design system setup: ~30 minutes
- Component development: ~1.5 hours
- Animations & polish: ~45 minutes
- Accessibility improvements: ~30 minutes
- Testing & refinements: ~15 minutes


