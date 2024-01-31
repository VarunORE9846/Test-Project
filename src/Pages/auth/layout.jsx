import React from 'react'
import { useState } from 'react';
export const Layout = (props) => {
 const {formTitle, children, buttonTitle}= props
  return (
    // <form className='form'>
    <div className='form'>
      <form >
        <div className='title'>
          <h1>{formTitle}</h1>
        </div>
         {children}
        {/* <div className="sign"> */}
        <div className='button'>
          <button type="submit" className="btn btn-primary">{buttonTitle}</button>
        </div>
      </form>
    </div>
  )
};

