# DAT Dashboard Web App

A comprehensive user dashboard for the DAT application built with Next.js. This web application displays detailed user information, permissions, payment history, sessions, and more.

## Features

- **User Profile**: Complete user information including account details, plan, and status
- **Permissions**: Detailed view of user permissions and platform access
- **Payment History**: Complete payment records with referral discounts
- **DAT Sessions**: Information about user's DAT sessions and cookies
- **Device Sessions**: Active and historical device login information
- **Referral System**: Referral code and bonus information

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- The DAT backend API running on `http://localhost:7017`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

The dashboard requires authentication parameters to be passed via URL query parameters:

- `token`: JWT authentication token
- `userId`: User ID to load data for

Example URL:
```
http://localhost:3000?token=YOUR_JWT_TOKEN&userId=USER_ID
```

Users should be redirected from the main DAT application with these parameters for auto-login.

## API Integration

The dashboard communicates with the DAT backend API endpoints:

- `GET /user/:id` - User profile information
- `GET /payment?userId=:id` - Payment history
- `GET /session` - DAT sessions (if user has permissions)
- `GET /device/user/:id` - Device sessions

## Development

### Project Structure

```
web/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main dashboard page
│   └── globals.css     # Global styles
├── public/             # Static assets
└── package.json        # Dependencies
```

### Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: State management and side effects

## Security Notes

- This web app relies on the backend API for authentication and data validation
- JWT tokens are passed via URL parameters for simplicity
- In production, consider using more secure token handling methods
