# AI Proposal Generator

> 🚀 An AI-powered web application that generates professional Upwork proposals in seconds.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933)](https://nodejs.org/)

---

## 📖 Overview

AI Proposal Generator helps Upwork freelancers create personalized, professional project proposals quickly and efficiently. Simply paste a job description, add your skills, and let AI craft a winning proposal for you.

### ✨ Key Features

- **AI-Powered Generation**: Leverages OpenAI GPT-4 to create tailored proposals
- **Time-Saving**: Generate proposals in 3-5 seconds instead of 30+ minutes
- **Customizable**: Edit generated proposals directly in the interface
- **One-Click Copy**: Copy proposals to clipboard with a single click
- **Example Templates**: Pre-loaded job examples for quick testing
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **tRPC** - End-to-end type-safe APIs
- **Vite** - Fast build tool

### Backend
- **Node.js 22** - Runtime environment
- **Express 4** - Web framework
- **tRPC 11** - Type-safe API layer
- **Drizzle ORM** - Database toolkit
- **MySQL/TiDB** - Database

### AI Integration
- **OpenAI GPT-4.1-mini** - Proposal generation

---

## 📦 Installation

### Prerequisites

- Node.js 22+ installed
- pnpm package manager
- MySQL database (or compatible service)
- OpenAI API key

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-proposal-generator.git
   cd ai-proposal-generator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env` and fill in the required values:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   # Database
   DATABASE_URL=mysql://username:password@host:port/database
   
   # OpenAI
   BUILT_IN_FORGE_API_KEY=sk-...
   BUILT_IN_FORGE_API_URL=https://api.openai.com/v1
   
   # JWT Secret (generate with: openssl rand -base64 32)
   JWT_SECRET=your_random_secret_key
   
   # Node Version
   NODE_VERSION=22
   ```

4. **Initialize database**
   ```bash
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 🚀 Deployment

See **DEPLOYMENT_GUIDE.md** (in the parent directory) for detailed instructions on deploying to Vercel.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy!

---

## 📁 Project Structure

```
ai-proposal-generator/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and tRPC client
│   │   ├── contexts/      # React contexts
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML entry point
├── server/                # Backend application
│   ├── routers.ts         # tRPC route definitions
│   ├── db.ts              # Database query helpers
│   └── _core/             # Core server utilities
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Database table definitions
├── shared/                # Shared types and constants
├── .env.example           # Environment variables template
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

---

## 🎯 Usage

### 1. Navigate to Generator Page

Click "Try it Free" or "Start Generating" button on the homepage.

### 2. Input Job Description

Paste the Upwork job posting URL or description into the "Job Description" textarea.

**Or** click one of the example buttons to auto-fill a sample job.

### 3. Add Your Skills (Optional)

Describe your relevant skills and experience in the "Your Skills & Experience" field.

### 4. Generate Proposal

Click the "Generate Proposal" button and wait 3-5 seconds.

### 5. Review and Edit

- Review the AI-generated proposal
- Edit directly in the output textarea if needed
- Click "Copy All" to copy to clipboard
- Click "Regenerate" to create a new version

### 6. Submit to Upwork

Paste the proposal into your Upwork application and submit!

---

## 🔧 Available Scripts

```bash
# Development
pnpm dev              # Start dev server (frontend + backend)

# Build
pnpm build            # Build for production

# Database
pnpm db:push          # Push schema changes to database
pnpm db:studio        # Open Drizzle Studio (database GUI)

# Type Checking
pnpm type-check       # Run TypeScript type checking

# Linting
pnpm lint             # Run ESLint
```

---

## 🌐 API Endpoints

### tRPC Procedures

#### `proposal.generate`
- **Type**: Mutation
- **Input**: 
  ```typescript
  {
    jobDescription: string;
    userSkills?: string;
  }
  ```
- **Output**: 
  ```typescript
  {
    proposal: string;
  }
  ```
- **Description**: Generates a proposal using OpenAI GPT-4

---

## 🎨 Customization

### Theme Colors

Edit `client/src/index.css` to customize the color scheme:

```css
:root {
  --primary: 262 83% 58%;        /* Purple */
  --primary-foreground: 0 0% 100%;
  --accent: 25 95% 53%;          /* Orange */
  /* ... other colors */
}
```

### Fonts

Fonts are loaded from Google Fonts in `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Build fails with "Module not found"
- **Solution**: Run `pnpm install` to ensure all dependencies are installed

**Issue**: Database connection error
- **Solution**: Check `DATABASE_URL` in `.env` file and ensure database is running

**Issue**: OpenAI API error
- **Solution**: Verify `BUILT_IN_FORGE_API_KEY` is valid and has sufficient credits

**Issue**: Port 3000 already in use
- **Solution**: Change port in `package.json` dev script or kill the process using port 3000

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the GPT-4 API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting platform
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

---

**Built with ❤️ for Upwork freelancers**
