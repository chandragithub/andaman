import './App.css'
import { Outlet } from "react-router";
import { Routes, Route } from "react-router";
import { Footer, Header } from '@/components/layout';
import { Home, NoPageFound } from '@/components/pages';


function App() {

  return (
    <section>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<NoPageFound/>} />
      </Routes>
      <Outlet />
      <Footer/>
    </section>
  )
}

export default App
