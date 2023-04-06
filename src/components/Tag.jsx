import React, { useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/UseGif';

const Tag = () => {
  
  const [tag, setTag] = useState('dog');
  const{loading, fetchData,gif} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    
    <div className='w-1/2 bg-blue-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>)  : (<img src={gif} alt="random gif" width="450" />)
      }

      <input value={tag} onChange={changeHandler} className='w-10/12 bg-yellow-500 text-lg rounded-lg text-center mb-[3px] py-2' type="text" />
      
      <button className='w-10/12 bg-white text-lg rounded-lg mb-[15px] py-2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag;