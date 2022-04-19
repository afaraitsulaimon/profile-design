import GlobalStyle from './globalStyles';
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'


function App() {
  return (
    <>
    <GlobalStyle/>
      <ThemeProvider theme={lightTheme}>
        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/work" element={<WorkPage/>} />
        <Route path="/skills" element={<MySkillsPage/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
