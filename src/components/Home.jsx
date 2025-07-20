import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useSearchParams} from "react-router-dom"
import { addToPaste, updateToPaste } from '../feat/slice';
const Home = () => {
    const [title,setTitle] = useState('');
    const [value, setValue]= useState('');
    const [searchParams, setSearchParams]= useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allpastes = useSelector((state)=>state.paste.pastes );
    useEffect(() => {
      if (pasteId) {
        const paste = allpastes.find((p)=> p._id ===pasteId);
        setTitle(paste.title);
        setValue(paste.content);

      }
    }, [pasteId])
    function createPaste(){
        const paste = {
          title : title,
          content :value,
          _id: pasteId||
          Date.now().toString(36),
          createdAt: new Date().toISOString(),

        }
       

        if (pasteId) {
          dispatch(updateToPaste(paste));
        }
        else{
          dispatch(addToPaste(paste));
        }

        setTitle("");
        setValue('');
        setSearchParams({});


    }
  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex flex-row gap-4 mb-6">
        <input
          type="text"
          className="p-3 rounded-lg w-full bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          onClick={createPaste}
        >
          {pasteId ? "Update paste" : "Create paste"}
        </button>
      </div>
      <textarea
        className="rounded-2xl p-4 w-full min-h-[200px] bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={value}
        placeholder="Enter content here"
        onChange={(e) => setValue(e.target.value)}
        rows={12}
      />
    </div>
  )
}

export default Home