
import {useRef} from 'react'
import './styles/App.css';
import './libs/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Grid from './components/Grid'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import './fonts/Marcellus-Regular.ttf';
function App() {
  const containerRef = useRef(null)
  
  return (
    <>
       <Navbar/>
    <Grid/>
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Home/>
      </main>
    </LocomotiveScrollProvider>
   
    </>
  );
}

export default App;
