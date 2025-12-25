import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import LessonDetail from './pages/LessonDetail';
import MockTester from './pages/MockTester';
import DocTutor from './pages/DocTutor';
import { AppProvider } from './context/AppContext';

function App() {
  console.log("App is mounting...");
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="syllabus/day/:dayId" element={<LessonDetail />} />
            <Route path="mock-tester" element={<MockTester />} />
            <Route path="doc-tutor" element={<DocTutor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
