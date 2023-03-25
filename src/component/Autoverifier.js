// APIVerifierBox.js

import React from 'react';
import './Autoverifier.css';
import { useState, useEffect, useMemo } from 'react';
import Spinner from './UI/Spinner';

const Autoverifier = () => {
  const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(35);
 

  const clientId = 'my-client-id';
  const url = 'http://97.74.94.225:8282/besstMainApi/df/videoSection';
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Client_ID': clientId,
        }
      });

      const data = await response.json();
      setVideos(data);
    
    } catch (error) {
      console.error(error);
     
    }
  };

  const memoizedFetchData = useMemo(() => fetchData, []);

  let length
  if(videos.length===0){
      memoizedFetchData();
      length=0
  }
  else{
      length=videos.Data.length
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
    
      memoizedFetchData();
      setCount(35);
    }
  }, [count, memoizedFetchData]);

  return (
    <>
       
      <section className="api-verifier-box-container">
        <div className="api-verifier-box">
          <div className="api-verifier-header">API Auto Verifier</div>
          <div className="api-verifier-body">
            <div className="api-verifier-label">Status: {videos.ResultCode === "200" ? "Active" : "Down"}</div>
            <div className="api-verifier-label">Objects: {length}</div>
          </div>
          <div className="api-verifier-footer">API to Hit: {count} sec left</div>
        </div>
      </section>
    </>
  );
};

export default Autoverifier;
