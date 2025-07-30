# Cyber Awareness Hub - Interactive Cybersecurity Threat Education

## Overview

Cyber Awareness Hub is an interactive cybersecurity awareness website designed specifically for college students and educational presentations. The platform showcases real cyber threats, live attack statistics, and practical protection strategies against the most common attacks targeting people today. Built for educational demonstration and awareness rather than business or tutorial purposes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state and React hooks for local state
- **Styling**: Custom CSS variables with cybersecurity-themed color palette

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development Server**: Custom Vite integration for SSR-like experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Build System**: ESBuild for production bundling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for Neon Database (serverless PostgreSQL)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: User management with username/password authentication structure

## Key Components

### Training System
- **Interactive Modals**: Multi-step content delivery with progress tracking
- **Quiz System**: Radio-button based assessments with immediate feedback
- **Progress Management**: Local storage persistence for user advancement
- **Topic Coverage**: Two main cybersecurity areas (Phishing/Social Engineering and Password Security/MFA)

### UI Components
- **Navigation**: Sticky header with mobile-responsive menu
- **Hero Section**: Call-to-action with gradient background and feature highlights
- **Progress Tracking**: Visual progress bars and milestone indicators
- **Educational Features**: Interactive learning with real-world examples
- **Interactive Features**: Video content placeholders and knowledge checks

### Content Management
- **Multimedia Support**: Image integration with Unsplash for visual content
- **Structured Learning**: Step-by-step content delivery with facts and examples
- **Assessment Integration**: Built-in quiz functionality with scoring
- **Completion Tracking**: Local storage-based progress persistence

## Data Flow

1. **Initial Load**: React app bootstraps with Vite, loading UI components and establishing query client
2. **Progress Initialization**: Training progress hook loads saved state from localStorage
3. **Content Delivery**: Modal-based training modules deliver structured content with multimedia
4. **Assessment Flow**: Quiz components capture user responses and provide immediate feedback
5. **Progress Updates**: Completion states update localStorage and trigger UI updates
6. **State Persistence**: All user progress persists across browser sessions

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives with shadcn/ui abstractions
- **Database**: Drizzle ORM with Neon Database connector
- **Development**: Vite, TypeScript, ESBuild
- **Styling**: Tailwind CSS with PostCSS

### Content Resources
- **Images**: Unsplash for stock photography
- **Icons**: Lucide React for consistent iconography
- **Fonts**: System fonts with Tailwind typography

### Development Tools
- **Hot Reload**: Vite HMR with custom error overlay
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint configuration (implied)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Production Setup
- **Server**: Node.js production server serving static assets and API routes
- **Database**: Neon Database (serverless PostgreSQL) with connection pooling
- **Static Assets**: Served directly by Express in production mode
- **Environment**: Environment variables for database connection and configuration

### Development Workflow
- **Local Development**: Vite dev server with Express API integration
- **Database Development**: In-memory storage for rapid prototyping
- **Hot Reload**: Full-stack development with automatic reloading
- **Type Checking**: Continuous TypeScript validation across shared types

The architecture prioritizes rapid development, type safety, and educational effectiveness while maintaining a clean separation between content delivery, user progress tracking, and business logic.