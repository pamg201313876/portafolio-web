import './App.css';
import NavBar from './Components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Skills } from './Components/Skills';
import { NotFound } from './Components/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Themes/Theme'
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <HashRouter>
      <AnimatePresence initial={true}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;