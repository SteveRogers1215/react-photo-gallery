import React from 'react'
import PhotoGallery from 'react-photo-gallery'

export default function Gallery({photos}) {
  return (
    <div className='gallery'>
      <PhotoGallery photos={photos}/>
    </div>
  )
}
