import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/Global";
import { Navbar } from "./components/Navbar";
import { Home } from './components/Home';
import { About } from './components/About';
import { Results } from './components/Results';

const theme = {

}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
          <GlobalStyle />
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/results' element={<Results />} />
            </Routes>
          </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
