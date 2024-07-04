import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchHeader from './Component/SearchHeader'
import {searchImages} from './api/services/imageSearchService'
import ImageList from './Component/imageList'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term)=>{
    const result = await searchImages(term);
    setImages(result)
  };
  return (
    <div className='App'>
         <SearchHeader search={handleSubmit}/>
         <ImageList imagesPlaceHolder={images}/>
    </div>
  )
}
export default App
