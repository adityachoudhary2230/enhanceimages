import React from 'react'
import Home from './components/Home'
function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
     <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold text-gray-800 mb-3'>AI IMAGE ENHANCE</h1>
      <p className='text-lg text-gray-800'>Upload Image and Enhance </p>
     </div>
<Home />
<div className='text-lg text-gray-800 mt-6 text-sm'>
powerd by AI @aditya.AI
</div>

    </div>
  )
}

export default App