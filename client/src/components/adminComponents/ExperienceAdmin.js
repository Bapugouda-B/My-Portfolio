import React from 'react'
import "./admin.css"
import { Link } from 'react-router-dom'

const ExperienceAdmin = () => {
  return (
    <div className='same-component'>
      <div className="same-form">
        <form >
          <h4>Experience Component</h4>
          <label htmlFor="text">Experience</label>
          <input type="text" />
          <button type='submit'>Add Item</button>
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          <div className="same-admin">
          <div className="icons">
              <Link to={`/editExperience`}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>
            <div className="experience-info">
              <p>Graphic Designer</p>
            </div>
            {/* <h3 className="item-delete-tab">Deleted</h3> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceAdmin
