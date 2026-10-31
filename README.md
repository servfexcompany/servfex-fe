# ServFex Super Admin Web

ServFex Platform Governance & Super Admin Web Console.

## Tech Stack
- **Framework**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS
- **Data & State**: TanStack Query
- **Auth**: Firebase Web Auth
- **Icons & UI**: Lucide React

## Getting Started

### Prerequisites
- Node.js >= 18.x
- npm

### Installation
```bash
npm install
```

### Environment Variables
Copy `.env.example` to `.env` and configure:
```env
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```
