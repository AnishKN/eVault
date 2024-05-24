import { useState } from "react";

import { getFirestore,collection, addDoc, doc, setDoc } from "firebase/firestore";

import app from "../../../config/db";

const db = getFirestore(app);

function AddFile() {
  const [selectedFile, setSelectedFile] = useState();
  const [cid, setCid] = useState();
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const metadata = JSON.stringify({
        name: "File name",
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
          },
          body: formData,
        }
      );
      const resData = await res.json();
      setCid(resData.IpfsHash);
      console.log(resData);


        const userRef = doc(db, "cases", resData.IpfsHash); // Create a doc reference for the user

      // Optionally store user data in Firestore (consider security implications)
      await setDoc(userRef, {
        title:"Test Case title",
        desc:"Test Desc",
        category:"Test Category",
        uploaded_by:"laywerid",
        status:0,
        ipfsData:resData
      });
  // Create a doc reference for the user

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100">

        <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
          <div>
            <label
              htmlFor="caseid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Case ID
            </label>
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="caseid"
              id="caseid"
              // placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
            />
          </div>
          <div>
            <label
              htmlFor="caseid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Case Title
            </label>
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="caseid"
              id="caseid"
              // placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
            />
          </div>
          <div>
            <label
              htmlFor="caseid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Case Category
            </label>
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="caseid"
              id="caseid"
              // placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
            />
          </div>
          <div>
            <label
              htmlFor="caseid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Case Description
            </label>
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="textarea"
              name="caseid"
              id="caseid"
              // placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose File
            </label>
            <input
              type="file"
              onChange={changeHandler}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleSubmission}
            className="mt-4 w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
          >
            Submit
          </button>
          {cid && (
            <div className="mt-4">
              <img
                src={`https://${import.meta.env.VITE_GATEWAY_URL}/ipfs/${cid}`}
                alt="ipfs image"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddFile;
