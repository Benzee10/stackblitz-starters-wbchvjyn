# WhatsApp Chat Simulator

## Overview

This is a React-based WhatsApp chat simulator that creates an authentic WhatsApp group conversation experience. The application displays a realistic chat interface with a scripted conversation flow, typing indicators, and interactive elements. It includes a share gate mechanism that requires users to share with Telegram groups to unlock access to a "private channel," along with location verification prompts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19.1.1 with TypeScript for type safety
- **Styling**: Tailwind CSS via CDN for responsive design and mobile-first approach
- **Build System**: Vite for fast development and optimized production builds
- **Module System**: ESNext modules with React JSX transformation

### Component Structure
The application follows a component-based architecture with clear separation of concerns:

- **App.tsx**: Main application container managing global state and orchestrating the chat flow
- **Header**: WhatsApp-style group chat header with group info and action buttons
- **ChatWindow**: Main conversation display with message rendering and join overlays
- **ChatBubble**: Individual message rendering with sender-specific styling
- **MessageInput**: WhatsApp-style input interface (non-functional, UI only)
- **TypingIndicator**: Animated typing indicator for realistic chat simulation

### State Management
Uses React's built-in state management with useState and useEffect hooks:
- Message queue management for scripted conversations
- Typing indicator state for realistic chat flow
- Share gate progress tracking
- UI overlay states for join actions and share requirements

### Mobile-First Design
- **Responsive Layout**: Tailored for mobile devices with touch-optimized interactions
- **Safe Area Support**: CSS environment variables for notched devices
- **Touch Enhancements**: Proper touch targets and gesture handling
- **Viewport Configuration**: Prevents zooming and ensures proper mobile rendering

### Animation and UX
- **Typing Simulation**: Realistic typing delays and message appearance timing
- **Progress Tracking**: Visual progress bar for share requirements
- **Smooth Transitions**: CSS transitions for interactive elements
- **Loading States**: Typing indicators and message staging

## External Dependencies

### Core Dependencies
- **React 19.1.1**: UI framework via ESM.sh CDN
- **React DOM 19.1.1**: DOM rendering library
- **Tailwind CSS**: Styling framework loaded via CDN

### Development Tools
- **TypeScript 5.8.2**: Type checking and enhanced development experience
- **Vite 6.2.0**: Build tool and development server
- **ESLint**: Code quality with Next.js core web vitals configuration

### Analytics and Tracking
- **Google Analytics (gtag.js)**: User interaction tracking with ID G-H0H97SH5HQ

### Asset Management
- **Image URLs**: External image hosting for profile pictures and avatars
- **Environment Variables**: Gemini API key configuration for potential future enhancements

### Browser APIs
- **Safe Area Insets**: CSS environment variables for mobile device compatibility
- **Touch Events**: Native browser touch handling for mobile interactions
- **Local Storage**: Browser storage for share progress persistence (implied usage)

The application is designed to work entirely in the browser without requiring a backend server, making it suitable for static hosting platforms like Replit, Vercel, or similar services.