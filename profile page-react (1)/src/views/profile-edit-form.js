import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile-edit-form.css'

const ProfileEditForm = (props) => {
  return (
    <div className="profile-edit-form-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-edit-form-profile-edit-form">
        <div className="profile-edit-form-form">
          <div className="profile-edit-form-fn-edit">
            <span className="profile-edit-form-text Smalltext">
              <span>First name</span>
            </span>
            <div className="profile-edit-form-field">
              <span className="profile-edit-form-text02 Smalltext">
                <span>EnterFirstName</span>
              </span>
            </div>
          </div>
          <div className="profile-edit-form-ln-edit">
            <span className="profile-edit-form-text04 Smalltext">
              <span>Last name</span>
            </span>
            <div className="profile-edit-form-field1">
              <span className="profile-edit-form-text06 Smalltext">
                <span>EnterLastName</span>
              </span>
            </div>
          </div>
          <div className="profile-edit-form-email-edit">
            <span className="profile-edit-form-text08 Smalltext">
              <span>Email address</span>
            </span>
            <div className="profile-edit-form-field2">
              <span className="profile-edit-form-text10 Smalltext">
                <span>EnterEmail</span>
              </span>
            </div>
          </div>
          <Link to="/" className="profile-edit-form-button">
            <span className="profile-edit-form-text12 Bodytext">
              <span>Submit</span>
            </span>
          </Link>
        </div>
        <div className="profile-edit-form-headline">
          <span className="profile-edit-form-text14 Title">
            <span>Edit Your Profile</span>
          </span>
        </div>
        <div className="profile-edit-form-navigation">
          <div className="profile-edit-form-items">
            <span className="profile-edit-form-text16 Bodytext">
              <span>About Double Fugue</span>
            </span>
            <span className="profile-edit-form-text18 Bodytext">
              <span>Contact Us</span>
            </span>
            <span className="profile-edit-form-text20 Bodytext">
              <span>FAQ</span>
            </span>
            <button className="profile-edit-form-button1">
              <span className="profile-edit-form-text22 Smalltext">
                <span>Home</span>
              </span>
            </button>
          </div>
          <span className="profile-edit-form-text24 Bodytext">
            <span>Double Fugue</span>
          </span>
        </div>
        <div className="profile-edit-form-navigation1">
          <div className="profile-edit-form-items1">
            <span className="profile-edit-form-text26 Bodytext">
              <span>About Double Fugue</span>
            </span>
            <span className="profile-edit-form-text28 Bodytext">
              <span>Contact Us</span>
            </span>
            <span className="profile-edit-form-text30 Bodytext">
              <span>FAQ</span>
            </span>
            <button className="profile-edit-form-button2">
              <span className="profile-edit-form-text32 Smalltext">
                <span>Home</span>
              </span>
            </button>
          </div>
          <span className="profile-edit-form-text34 Bodytext">
            <span>Double Fugue</span>
          </span>
        </div>
        <div className="profile-edit-form-frame2"></div>
      </div>
    </div>
  )
}

export default ProfileEditForm
