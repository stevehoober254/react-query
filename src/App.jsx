import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/Home.Page'
import SuperHeroPage from './components/Superhero.Page'
import ReactQueryPage from './components/Rq.Page'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();



function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
     <div className="">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/super-heroes">Traditional Super Heroes </Link></li>
          <li><Link to="/rq-super-heroes">RQ Super Heroes </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/super-heroes'} element={<SuperHeroPage/>}/>
        <Route path={'/rq-super-heroes'} element={<ReactQueryPage/>}/>
      </Routes>
     </div>
    </Router>
    </QueryClientProvider>
  )
}

export default App
