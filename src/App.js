import './App.css';
import NavBar from './Components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Projects } from './Components/Projects';
import { Experience } from './Components/Experience';
import { Knowledge } from './Components/Knowledge';
import { NotFound } from './Components/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import theme  from './Themes/Theme'

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;