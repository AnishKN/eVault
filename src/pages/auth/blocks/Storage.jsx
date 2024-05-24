import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";


import app from "../../../config/db";

const db = getFirestore(app);

const Storage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.pinata.cloud/data/pinList",
          {
            headers: {
              pinata_api_key: import.meta.env.VITE_API_KEY,
              pinata_secret_api_key: import.meta.env.VITE_API_SECRET,
            },
          }
        );
        // console.log(response.data.rows);
        setData(response.data.rows.filter((item) => item && item.metadata)); // filter out deleted items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-5/6 mx-auto px-4 py-6 my-20">
        <h1 className="text-2xl font-bold mb-4 w-full text-center">Uploaded Files</h1>

        <div className="overflow-x-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sl No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    IPFS Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr 
                    key={item.ipfs_pin_hash}
                    className="bg-blue-300 border-b border-blue-400"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <a
                        target="_blank"
                        href={`https://${
                          import.meta.env.VITE_GATEWAY_URL
                        }/ipfs/${item.ipfs_pin_hash}`}
                      >
                        {item.ipfs_pin_hash}
                      </a>
                    </td>
                    <td className="py-3 px-6 text-left">
                      {new Date(item.date_pinned).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {new Date(item.date_pinned).toLocaleTimeString()}
                    </td>
                    <td>button</td>
                  </tr>

                  
                ))}

                {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Users
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Accessible to law students and the public, this module offers easy browsing and retrieval of legal documents and information. Users can access relevant legal resources.
                    </p>
                          <span
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Register here
                        </span>
                  </div>
                  </div> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storage;
