import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Subheader from './containers/Subheader';
import MainContent from './containers/MainContent';

import './App.css';

function App() {
  const [showSubheader, setShowSubheader] = useState(true);

  const handleSubheader = () => {
    setShowSubheader(false);
  };

  return (
    <div className="flex flex-col justify-items-center">
      <div className="container flex flex-col h-screen">
        <Header />
        {showSubheader ? <Subheader handleHideself={handleSubheader}/> : null}
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
