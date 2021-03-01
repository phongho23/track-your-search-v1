import React from 'react'
import { Link } from 'react-router-dom'
import CircleButton from '../CircleButton/CircleButton'
import './landingPage.css'

export default function landingPage() {
    return (
        <section>
            <div className='landing-page'>
                <p>
                TrackYourSearch was created to assist you during your job search.  
                </p>
                
                <p>
                TrackYourSearch provides a way to organize and log your job application
                activity by week to track your progress and opportunities
                in an effective manner.  
                </p>

                <p>
                Go ahead and click the button below to get started!  
                </p>            
            </div>

            <div className='landingPageButton__button-wrapper'>
                    <CircleButton
                        tag={Link}
                        to='/home'
                        type='button'
                        className='landingPageButton'>
                        Click here to start tracking today!
                    </CircleButton>
            </div>
        </section>
        )
  }




