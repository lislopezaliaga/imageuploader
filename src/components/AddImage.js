import React from 'react'
import back from '../img/image.svg'

export const AddImage = () => {
  return (
      <div className='containerGeneral'>
          <section>
              <h1>Upload your image</h1>
              <h4>File should be Jpeg, Png,...</h4>
              <div>
                  <img src={back} alt="back" />
                  <label>Drag y Drop your image here </label>
              </div>
              <label>Or</label>
              <button>Choose a file</button>
          </section>
      </div>
  )
}
