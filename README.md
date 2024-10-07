Client
Navigate to the client folder and install the necessary packages:
cd client
npm install


Server
Navigate to the server folder and install the necessary packages
cd ../server
npm install


Environment Variables
To run the server, you need to set up environment variables. Create a .env file in the server directory and add the following:
PORT=3500
MONGODB_URI=mongodb+srv://engrfranco26:8rhnUysunor9OPOd@employee.1k1u0.mongodb.net/employee?retryWrites=true&w=majority&appName=Employee
CLIENT_URL=http://localhost:3000


Running the Application
Run the Backend (Server)
From the server directory, run the following command to start the server:
npm start

Run the Frontend (Client)
From the client directory, run the following command to start the React application:
npm start
