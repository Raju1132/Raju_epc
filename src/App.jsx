
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Retailer/Home'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import ModelSearch from './Pages/Retailer/ModelSearch';
import VinSearch from './Pages/VinSearch';
import Parts from './Pages/Parts';
import My404Component from './Pages/My404Component'

import DetailedParts from './Pages/DetailedParts';
function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login';

  return (
    <>
    <div className='flex flex-col min-h-[100dvh] justify-between'>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/model-search" element={<ModelSearch />} />
          <Route path="/vin-search" element={<VinSearch/>}/>
          <Route path="/parts" element={<Parts/>}/>
          <Route path='*' exact={true} element={<My404Component/>} />
          <Route path="/parts/details" element={<DetailedParts/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
