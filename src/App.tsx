import './App.css'
import { Outlet } from "react-router";
import { Routes, Route } from "react-router";
import { Footer, Header } from '@/components/layout';
import { Activity, Home, NoPageFound, Package } from '@/components/pages';
import { Ads } from './components/layout/Ads';


function App() {

  return (
    <section>
      <Ads/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/things-to-do" element={<Activity/>} />
        <Route path="/plan-your-trip" element={<Package/>} />
        <Route path="/about" element={<NoPageFound/>} />
      </Routes>
      <Outlet />
      <Footer/>
    </section>
  )
}

export default App
