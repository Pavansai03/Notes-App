import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom';
import './utilities.css'
import './views.css'

const ViewPastes = () => {
  const allpastes = useSelector(state=>{
    return state.paste.pastes;
  })

  const [searchParams, setSearchParams] = useSearchParams();
  const {id} = useParams();

  const paste = allpastes.filter(e=>e._id === id)[0];
  console.log(paste);

  return (
    <div>
       <div className='flex jc'>
        <h1>{paste.title}</h1>
       </div>

       <div id='content' className='flex jc p2'>
        <textarea className='p5' type="text" value={paste.value} disabled/>
       </div>
    </div>

  )
}

export default ViewPastes
