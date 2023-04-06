import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/UseGif';


const Random = () => {

  const {gif, fetchData, loading} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    
    <div className='w-1/2 bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-3xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner/>)  : (<img src={gif} alt="random gif" width="450" />)
      }
      
      <button className='w-10/12 bg-white text-lg rounded-lg mb-[15px] py-2' onClick={clickHandler} >Generate</button>
    </div>
  )
}

export default Random;