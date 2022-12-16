import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUs';
import Homepage from './pages/Homepage';
import MemberPage from './pages/Member';
import ProductPage from './pages/Product';
import ResearchPage from './pages/Research';
import DivisionPage from './pages/Division';
import EventPage from './pages/Event';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/research' element={<ResearchPage />} />
          <Route path='/division' element={<DivisionPage />} />
          <Route path='/event' element={<EventPage />} />
          <Route path='/member' element={<MemberPage />} />
          <Route path='/about' element={<AboutUsPage />} />
        {/* <Side /> */}
        </Routes>
        <Footer  />
      </ScrollToTop>

    </div>
  );
}

export default App;
