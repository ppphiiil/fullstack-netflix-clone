import React, { useState, useEffect } from "react";

import "../src/App.css";


import Footer from "./components/Footer";
import Header from "./components/Navbar/Navbar";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import testData from "./components/VideoSlider/VideoSliderTestData/VideoSliderTestData"
import { Route, Switch, HashRouter } from "react-router-dom";

function App() {













  console.log("render App.js");

  const [fetchedData1, setFetchedData1] = useState(testData);


  useEffect(() => {
    console.log("fetch data now");
    fetch("http://localhost:3500/series/row/1")
      .then((res) => res.json())
      .then((data) => setFetchedData1(data))
      .catch((err) => console.log("err:", err));

  }, []);



  return (
    <HashRouter>
      <div className="App">
       
      <Header/>
        <Switch>
          <Route exact path="/">
           
            <VideoSlider
              fetchedData={fetchedData1 ? fetchedData1 : []}
              title={"Popular on Netflix"}
             
             
              className={"test1"}
            />

             <VideoSlider
              fetchedData={fetchedData1 ? fetchedData1 : []}
              title={"New on Netflix"}
             
             
              className={"test1"}
            />


          
          </Route>
         
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
