import React, { useState } from 'react'
import { useDispatch, useSelector } 
from 'react-redux'
import { removeFromPastes } from '../feat/slice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
const Paste = () => {

  const pastes = useSelector((state)=> state.paste.pastes );
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('')
  const filteredData = pastes.filter(
    (paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
     dispatch(removeFromPastes(pasteId))
  }
  return (
    <div className="max-w-3xl mx-auto py-8">
      <input
        className="p-3 rounded-xl w-full border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-8"
        type="search"
        placeholder="Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-2xl shadow-xl p-8 transition hover:shadow-2xl"
              key={paste?._id}
            >
              <div className="text-xl font-semibold text-blue-400 mb-2 truncate">{paste.title}</div>
              <div className="bg-black/30 rounded-lg p-4 text-gray-200 mb-4 max-h-32 overflow-auto whitespace-pre-line">
                {paste.content}
              </div>
              <div className="flex flex-wrap gap-3 mb-2">
                <NavLink
                  to={`/?pasteId=${paste?._id}`}
                  className="px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Edit
                </NavLink>
                <NavLink
                  to={`/pastes/${paste?._id}`}
                  className="px-4 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  View
                </NavLink>
                <button
                  className="px-4 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  onClick={() => handleDelete(paste?._id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(paste?.content);
                    toast.success("Content copied");
                  }}
                  className="px-4 py-1 rounded-lg bg-yellow-500 text-black hover:bg-yellow-600 transition"
                >
                  Copy
                </button>
                <button
                  className="px-4 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                  onClick={() => {
                    navigator.share
                      ? navigator.share({
                          title: paste.title,
                          text: paste.content,
                          url: window.location.href,
                        })
                      : toast.error("Share not supported");
                  }}
                >
                  Share
                </button>
              </div>
              <div className="text-xs text-gray-400">
                {new Date(paste.createdAt).toLocaleString()}
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-400 text-center mt-8">No pastes found.</div>
        )}
      </div>
    </div>
  )
}

export default Paste