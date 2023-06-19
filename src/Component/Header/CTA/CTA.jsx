import React from 'react'
import CV_2022 from '../../../assets/CV (6).pdf'

const CTA = () => {
    return (
        <div className='CTA'>
            <a href={CV_2022} download className='btn'>Download CV</a>
            <a href="#Contact" className='btn btn-primary'>Lets Talk</a>
        </div>
    )
}

export default CTA

