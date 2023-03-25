// APIVerifierBox.js

import React from 'react';
import './Manualverifier.css';
import { useNavigate } from 'react-router-dom';

const Manualverifier = () => {
  const navigate=useNavigate()

    function showdatahandler(){

        const clientId = 'my-client-id';
        const url = 'http://97.74.94.225:8282/besstMainApi/df/videoSection';
        const fetchData = async () => {

          console.log("api call")

           
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Client_ID': clientId,
                }
              });
      
              const data = await response.json();
              
             
              sessionStorage.setItem('videosData', JSON.stringify(data));
              navigate("./showdata")

            } catch (error) {
              console.error(error);
            }
          };

          let showdata = sessionStorage.getItem("videosData")
         

          if(!showdata) {
            fetchData()
          }
          else{
            navigate("./showdata")
          }

         

    }

    function cleardatahandler(){
      sessionStorage.removeItem("videosData")
    }


  return (
    <section  className="api-verifier-box-container">
      <div className="api-verifier-box">
      <div className="api-verifier-header">Manual Verifier</div>
     
      <div className="api-manualverifier-footer">
      <div className="button-container">
  <button className="button button-clear" onClick={cleardatahandler}>Clear</button>
  <button className="button button-view" onClick={showdatahandler}>View</button>
</div>

      </div>
    </div>
    </section>
  );
};

export default Manualverifier;
