import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useSearchParams} from "react-router-dom"
import { addToPaste, updateToPaste } from '../feat/slice';

const ViewPaste = () => {

  const {id} = useParams();
  const allpastes = useSelector((state)=> state.paste.pastes);
  const paste = allpastes.filter((p)=> p._id ===id)[0];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex flex-row gap-4 mb-6">
        <input
          type="text"
          className="p-3 rounded-lg w-full bg-gray-900 text-white border border-gray-700"
          placeholder="Title"
          value={paste.title}
          disabled
        />
      </div>
      <textarea
        className="rounded-2xl p-4 w-full min-h-[200px] bg-gray-900 text-white border border-gray-700"
        value={paste.content}
        placeholder="Enter content here"
        disabled
        rows={12}
      />
      <div className="text-xs text-gray-400 mt-4">
        {new Date(paste.createdAt).toLocaleString()}
      </div>
    </div>
  )
}

export default ViewPaste
