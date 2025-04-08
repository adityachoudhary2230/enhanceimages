import React from 'react'
import Loading from './Loading'
function ImagePreview(props) {
  return (
    <div className='mt-8 grid grid-cols-2 md:grid gap-6 w-full max-w-4xl'>
        <div className='text-white shadow-lg rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>Orignal Image</h2>
         
      {props.upload ? (
        <img src={props.upload} alt="" className='w-full h-full object-cover'/> ):(
        <div className='flex items-center justify-center h-50 bg-gray-200'>No selected image

        </div>
      )
       }
       </div>

    
        <div className='text-white shadow-lg rounded-xl overflow-hidden'>
            <h2 className='text-xl font-semibold text-center bg-yellow-500 text-white py-2'>Enhanced Image</h2>

            {props.enhanced && !props.loading && (
              <div className='relative w-full h-full '>
        <img src={props.enhanced} alt="" className='w-full h-full object-cover'/>
        <div className="text-center mt-2 absolute right-5 bottom-15">
              <a
                href={props.enhanced}
                download="enhanced-image.jpg"
                className="bg-green-500 text-white text-sm px-4 py-2 rounded mt-2 inline-block"
              >
                Download Image
              </a>
            </div>
  </div>
  )}
      { props.loading ? (
       <Loading />
      ):(
          <div className='flex items-center justify-center h-full bg-gray-200'>No Enhanced image

          </div>
         
        )
      }
        </div>
        </div>
     
   
  ) 
}

export default ImagePreview