# Project Setup Instructions

```bash
# Navigate to the client folder and install the necessary packages
cd client
npm install

# Navigate to the server folder and install the necessary packages
cd ../server
npm install

# Set up environment variables
# Create a .env file in the server directory with the following content
echo "PORT=3500
MONGODB_URI=mongodb+srv://engrfranco26:8rhnUysunor9OPOd@employee.1k1u0.mongodb.net/employee?retryWrites=true&w=majority&appName=Employee
CLIENT_URL=http://localhost:3000" > .env

# Run the Backend (Server)
npm start

# Run the Frontend (Client)
cd ../client
npm start
