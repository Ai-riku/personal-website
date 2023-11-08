import { Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import './App.css';
import { HeaderSimple } from './components';
import { Home, Projects, Projects2 } from './pages';
import { useState } from 'react';

import ColorSchemeContext from './ColorSchemeContext';

const App = () => {
  const [colorScheme, setColorScheme] = useState('dark');

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
      <MantineProvider theme={{ colorScheme }}>
        <>
          <HeaderSimple links={[{ "link": "/Home", "label": "Home" }]}></HeaderSimple>
          <Routes>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="Projects" element={<Projects />} />
              <Route path="Projects/1" element={<Projects />} />
              <Route path="Projects/2" element={<Projects2 />} />
              <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      </MantineProvider>
    </ColorSchemeContext.Provider>
  )
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App
