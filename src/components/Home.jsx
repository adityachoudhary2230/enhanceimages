import React, { useState } from 'react'
import ImagePreview from './imagepreview'
import ImageUpload from './imageupload'
import { EnhancedImageAPI } from '../utils/EnhancedImageAPI'

function home() {
  const [UploadImage, setUploadImage] = useState(null)
  const [EnhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

  const UploadImageHandler= async (file) =>{
    setUploadImage(URL.createObjectURL(file))
   
    setloading(true)
    try {
      const EnhancedURL = await EnhancedImageAPI(file)
      setEnhancedImage(EnhancedURL)
      setloading(false)
     
    } catch (error) {
      alert("Please Try again latter")
    }
  }
    
  return (
    <>
     <ImageUpload UploadImageHandler={UploadImageHandler} />   
     <ImagePreview loading={loading} upload={UploadImage} enhanced={EnhancedImage}/>
    </>
  )
}

export default home