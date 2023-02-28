
import {useState,useEffect} from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid'
import './fonts/Marcellus-Regular.ttf';
/* import LoadingPage from './components/LoadingPage';
 */

import useLocoScroll from './hooks/useLocoScroll';


function App() {
 useLocoScroll(true)

  return (
    <>
   {/* <LoadingPage/> */}

    <section className='container'>
      <Navbar />
      <Grid />
    </section>
     
    </>
  );
}

export default App;
