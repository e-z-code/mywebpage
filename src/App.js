import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import StartPage from './startPage';

/* Test Page */

const GoalPage = () => <div>goal</div>;
const StoryPage = () => <div>story</div>;
const OnPage = () => <div>on</div>;
const CodePage = () => <div>code</div>;
const ElsePage = () => <div>else</div>;

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