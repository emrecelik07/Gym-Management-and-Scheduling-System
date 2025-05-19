# Gym Management System (GMTS)

A full-stack web application for managing gym memberships, trainers, classes, and bookings.

## Prerequisites

- Node.js (v14+ recommended)
- MySQL (v8+ recommended)
- Git

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gmts.git
cd gmts
```

### 2. Set up the backend

```bash
cd backend
npm install
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
```

### 4. Database Setup

1. Create a MySQL database named `gmts`
2. Import the database schema from `backend/scripts/setup.js`

```bash
cd ../backend
node scripts/setup.js
```

3. Seed the database with sample data

```bash
node scripts/seedAll.js
```

## Running the Application

### Start the Backend Server

```bash
cd backend  # If not already in the backend directory
node app.js
```

The backend server will run on http://localhost:3000

### Start the Frontend Development Server

Open a new terminal window:

```bash
cd frontend  # Navigate to the frontend directory from project root
npm run dev
```

The frontend development server will run on http://localhost:5173

## Accessing the Application

1. Open your browser and navigate to http://localhost:5173
2. Log in with the following credentials:
   - Admin: username `admin`, password `admin`
   - Sample Trainer: Check the database after seeding
   - Sample Gym Member: Check the database after seeding

## Features

### Admin Dashboard
- View membership distribution
- Analyze trainer performance
- Monitor class popularity
- Track member engagement
- Identify inactive members

### Trainer Management
- Add, edit, delete trainers
- View trainer profiles and statistics

### Member Management
- Add, edit, delete gym members
- Filter and search for members
- Manage membership types

### Class Management
- Create and schedule classes
- Update class details
- Delete classes
- View bookings per class

### Booking System
- Members can book classes
- View booking history
- Cancel bookings

## API Endpoints

### Authentication
- `POST /api/login` - User login

### Classes
- `GET /api/classes` - List all classes
- `POST /api/classes` - Create a new class
- `PUT /api/classes/:id` - Update a class
- `DELETE /api/classes/:id` - Delete a class

### Trainers
- `GET /api/trainers` - List all trainers
- `POST /api/trainers` - Add a new trainer
- `PUT /api/trainers/:id` - Update a trainer
- `DELETE /api/trainers/:id` - Delete a trainer

### Members
- `GET /api/gym-members` - List all gym members
- `POST /api/gym-members` - Add a new member
- `PUT /api/gym-members/:id` - Update a member
- `DELETE /api/gym-members/:id` - Delete a member

### Bookings
- `GET /api/bookings` - List all bookings
- `POST /api/bookings` - Create a new booking
- `DELETE /api/bookings/:id` - Delete a booking

### Statistics
- `GET /api/stats/trainers` - Get trainer statistics
- `GET /api/stats/membership-distribution` - Get membership distribution
- `GET /api/stats/inactive-members` - Get inactive members
- `GET /api/stats/class-popularity` - Get class popularity
- `GET /api/stats/member-engagement` - Get member engagement

## Troubleshooting

- If you encounter database connection issues, check your MySQL configuration in `backend/database.js`
- For "module not found" errors, ensure all dependencies are installed with `npm install`
- If charts don't display on the dashboard, ensure chart.js and react-chartjs-2 are installed

## License

[MIT](LICENSE) 