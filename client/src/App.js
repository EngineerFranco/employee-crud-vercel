import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen flex flex-col min-w-screen bg-gray-50">
    <Toaster/>
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
  
  );
}

export default App;
