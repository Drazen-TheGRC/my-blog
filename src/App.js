import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  return (
    <div className='App'>
      <h1>My Awesome Blog</h1>
      <div className='page-body'>
        <HomePage />
        <AboutPage />
        <ArticlesPage />
        <ArticlePage />
      </div>
    </div>
  );
}

export default App;
