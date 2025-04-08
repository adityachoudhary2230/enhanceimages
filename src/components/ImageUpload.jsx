import React from 'react'

function ImageUpload(props) {
  const ShowImageHandler=(e) =>{
    const file = e.target.files[0]
    if (file){
props.UploadImageHandler(file)
    }
  }
  return (
    <div className='bg-white shadow -lg rounded-2xl p-6 w-full max-w-2xl'>
 <label htmlFor="fileinput" className='block w-full cursor-pointer border-2 border-dashed border-gary-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
 <input type="file" id='fileinput' className='hidden' onChange={ShowImageHandler} />
 <span className='text-lg font-medium text-gray-600'>click upload image</span>
 </label>

 </div>
  )
}

export default ImageUpload