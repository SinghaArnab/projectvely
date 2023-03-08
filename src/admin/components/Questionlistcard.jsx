import React, { useState } from 'react'
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import { app } from '../../Firebase/FirebaseAuth';
import UpdateQuestion from './UpdateQuestion';

const fireStore = getFirestore(app);

const Questionlistcard = ({ x, queId, index}) => {

  const [updateModal, setupdateModal] = useState(false);

  const deleteData = async (queId) => {
    await deleteDoc(doc(fireStore, "Question", queId));
  }

  const UpdateData = async (queId) => {
    setupdateModal(true);
  };


  return (

    <>
      <tr key={index}>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md font-mono whitespace-nowrap p-4">
          {index + 1}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4">
          <i className="fas fa-circle text-orange-500 mr-2"></i>{x.category}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md font-sans whitespace-nowrap p-4">
          <h1>Q.{x.question}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md font-sans whitespace-nowrap p-4">
          <h1>Ans. {x.answer.slice(0, 35)}...</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right ">
          <li className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
            <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2" onClick={() => UpdateData(queId)}>
              <i className="fa-regular fa-pen-to-square text-green-500"></i>
            </button>
            <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2" onClick={() => deleteData(queId)}>
              <i className="fa-solid fa-trash text-yellow-500"></i>
            </button>
          </li>
        </td>
      </tr>

      {updateModal === true ? (
        <UpdateQuestion queId={queId} x={x} modal={setupdateModal} />
      ) : (
        ""
      )}

    </>
  )
}

export default Questionlistcard