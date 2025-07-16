import React from 'react'
import { useState } from 'react'
import './Home.css'
import './utilities.css'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToPaste, updateToPaste } from '../redux/pasteSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
     const [title, setTitle] = useState("");
     const [value, setValue] = useState("");
     const [searchParams, setSearchParams] = useSearchParams();
     const pasteId = searchParams.get("pasteId");
     const dispatch = useDispatch();
     const allPastes = useSelector((state)=>{
       return state.paste.pastes;
     })
     useEffect((e)=>{
      if(pasteId) {
        const paste = allPastes.find(element=>
          element._id === pasteId
        )
        setTitle(paste.title);
        setValue(paste.value);

      }
     }, [pasteId])

     const date = new Date().toISOString().slice(0,10);
     

     function createPaste () {
        const paste = {
            title: title,
            value: value,
            _id: pasteId || Date.now().toString(36),
            createdAt:date
        }
        if(pasteId) {
            dispatch(updateToPaste(paste));
        }
        else {
            dispatch(addToPaste(paste));
        }

        setTitle("");
        setValue("");
        setSearchParams({});
     }
  return (
    <div>
      <div className='title flex jc al g10'>
       <div>
         <input type="text" placeholder='enter title'
        value={title}
        onChange={e=>setTitle(e.target.value)}
        className='p10'
      />
       </div>

       <div>
        <button onClick={createPaste} className='flex al'>
        {
            pasteId? 
            "Update": 
            "Create"
        }
        </button>
       </div>
      </div>

      <div className='content flex jc'>
        <textarea
          value={value}
          placeholder='enter text here'
          onChange={e=>setValue(e.target.value)}
          rows={20}
          />
     </div>
    </div>
  )
}

export default Home
