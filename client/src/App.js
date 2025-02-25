import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';  
import './App.css';
import FlashPage from './pages/FlashPage';
import InnerVideoPage from './pages/InnerVideoPage';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import InnerCoursePage from './pages/InnerCoursePage';

function App() {
  const videoRef = useRef(null);
  const [asset,setAsset] = useState([])

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     const videoElement = videoRef.current;

  //     try {
  
  //       const res = await axios.get('http://localhost:5000/fetch-media', {
  //         // headers: {
  //         //   'Range': 'bytes=0-1048575',  
  //         // },
  //         // responseType: 'blob', 
  //   });
  //   setAsset(res.data)

  //   console.log('Video data received:', res);

  //       // const url = URL.createObjectURL(res.url);  
  //       // videoElement.src = url;
  //     } catch (error) {
  //       console.error('Error fetching video:', error);
  //     }
  //   };

  //   fetchVideo();
  // }, []);

  return (
<>
<BrowserRouter>
<Routes>
  <Route  path="/" element={<FlashPage/>} />
  <Route path="/inner" element={<InnerVideoPage/>} />
  <Route path="/course" element={<InnerCoursePage/>} />
</Routes>
</BrowserRouter>
 {/* <div>
       {asset?.map((item,index)=>(
         <video  src={item.secure_url}
        ref={videoRef}
        controls width="400px" height="300px" />))}
     </div> */}
</>
 

  );
}

export default App;
