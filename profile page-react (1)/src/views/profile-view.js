import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './profile-view.css'

const ProfileView = (props) => {
  return (
    <div className="profile-view-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="profile-view-profile-view">
        <div className="profile-view-form">
          <div className="profile-view-fn-view">
            <span className="profile-view-text Smalltext">
              <span>First name</span>
            </span>
            <div className="profile-view-field">
              <span className="profile-view-text02 Smalltext">
                <span>FirstName</span>
              </span>
            </div>
          </div>
          <div className="profile-view-ln-view">
            <span className="profile-view-text04 Smalltext">
              <span>Last name</span>
            </span>
            <div className="profile-view-field1">
              <span className="profile-view-text06 Smalltext">
                <span>LastName</span>
              </span>
            </div>
          </div>
          <div className="profile-view-email-address">
            <span className="profile-view-text08 Smalltext">
              <span>Email address</span>
            </span>
            <div className="profile-view-field2">
              <span className="profile-view-text10 Smalltext">
                <span>EmailAddress</span>
              </span>
            </div>
          </div>
          <Link to="/profile-edit-form" className="profile-view-edit-button">
            <span className="profile-view-text12 Bodytext">
              <span>Edit</span>
            </span>
          </Link>
          <div className="profile-view-postand-replies">
            <span className="profile-view-text14 Smalltext">
              <span>Posts &amp; Replies</span>
            </span>
          </div>
        </div>
        <div className="profile-view-profile">
          <span className="profile-view-text16 Title">
            <span>Profile</span>
          </span>
        </div>
        <div className="profile-view-frame1"></div>
        <div className="profile-view-navigation">
          <div className="profile-view-items">
            <span className="profile-view-text18 Bodytext">
              <span>About Double Fugue</span>
            </span>
            <span className="profile-view-text20 Bodytext">
              <span>Contact Us</span>
            </span>
            <span className="profile-view-text22 Bodytext">
              <span>FAQ</span>
            </span>
            <button className="profile-view-button">
              <span className="profile-view-text24 Smalltext">
                <span>Home</span>
              </span>
            </button>
          </div>
          <span className="profile-view-text26 Bodytext">
            <span>Double Fugue</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
