import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import StartPage from './startPage';
import GoalPage from './goalPage';
import StoryPage from './storyPage';
import OnPage from './onPage';
import CodePage from './codePage';
import ElsePage from './elsePage';

/* Test Page */

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/on" element={<OnPage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/else" element={<ElsePage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;