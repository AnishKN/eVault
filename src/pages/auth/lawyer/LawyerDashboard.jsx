import React from 'react'
import AddFile from '../blocks/AddFile'
import Storage from '../blocks/Storage'
import { collection, query, where, getFirestore,getDocs } from "firebase/firestore";

import app from "../../../config/db";
import { useEffect } from 'react';
import { useState } from 'react';

const db = getFirestore(app);


function LawyerDashboard() {

  const [caseData, setCaseData] = useState([])
  var arr = [];

  useEffect(()=> {
    const getLaywerUploadedFiles = async () => {
      const casesRef = collection(db, "cases");
  
      const q = query(casesRef);
      // console.log(q);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        // setData(doc.data())
        arr.push(doc.data());
      });
  
      // console.log(arr);
  
    }
    getLaywerUploadedFiles();
  
  },[])
  

  return (
    <>
      <AddFile />
      {arr}
      <div className='bg-gray-50 flex justify-center items-center'>
        <Storage />
      </div>
    </>
  )
}

export default LawyerDashboard
