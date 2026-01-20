# Buddha Says

A full-stack AI-powered web application that provides Buddhist wisdom and guidance through conversational AI. Users can ask questions and receive thoughtful responses in the voice of Siddhartha Gautama (the Buddha).

## Technical Overview

This project demonstrates proficiency in:

- **Full-Stack Development**: Next.js application with React frontend and serverless API routes
- **AI Integration**: OpenAI GPT-3.5-turbo API implementation with custom system prompts
- **Modern React Patterns**: Hooks-based state management (useState), async/await patterns, and controlled form inputs
- **API Design**: RESTful API endpoint with proper error handling and JSON response formatting
- **User Experience**: Loading states, error handling, and responsive feedback
- **Environment Configuration**: Secure API key management using environment variables

## Architecture

### Frontend (`pages/index.js`)
- React functional component with hooks for state management
- Form handling with loading states to improve user experience
- Clean, minimal UI with Buddha-themed styling

### Backend (`pages/api/generate.js`)
- Next.js API route serving as a serverless function
- OpenAI Chat Completions API integration
- Custom system prompt to roleplay as Buddha in 400 B.C.E.
- Comprehensive error handling with detailed logging
- Token limiting (200 max tokens) for optimal response length

### Key Features
- **Context-Aware Responses**: System prompt establishes Buddha persona for consistent, themed responses
- **Error Handling**: Try-catch blocks with detailed error logging and user-friendly error messages
- **Loading States**: Visual feedback during API calls to enhance UX
- **Secure Configuration**: API keys stored in environment variables, not committed to repository

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mattleesounds/buddhasays.git
   cd buddhasays
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**

   Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing the Application

1. Enter a question or concern in the input field (e.g., "How can I find inner peace?")
2. Click "Generate response"
3. Observe the loading state while the AI processes your request
4. Read Buddha's response in the styled result area below

### Available Scripts

- `npm run dev` - Starts the development server on port 3000
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server (requires `npm run build` first)

## Tech Stack

- **Framework**: Next.js 12.1.6
- **Frontend**: React 17.0.2
- **AI API**: OpenAI GPT-3.5-turbo
- **Styling**: CSS Modules
- **Runtime**: Node.js

## Project Structure

```
buddhasays/
├── pages/
│   ├── api/
│   │   └── generate.js      # API endpoint for OpenAI integration
│   ├── index.js              # Main React component
│   └── index.module.css      # Component styles
├── public/
│   └── buddha.png            # Buddha icon/favicon
├── .env.example              # Environment variables template
└── package.json              # Dependencies and scripts
```

## Future Enhancements

Potential improvements to demonstrate additional skills:
- Add conversation history/context for multi-turn dialogues
- Implement rate limiting and request validation
- Add unit and integration tests (Jest, React Testing Library)
- Deploy to Vercel/Netlify with CI/CD pipeline
- Add analytics to track usage patterns
- Implement caching layer for common questions
