import React from 'react'

const upload = () => {
    return (
        <div className='upload-container m-5'>
            <div className="header-text text-center">
                What exactly does our project do?
            </div>
            <div className="header-desc">
            The web app aims to generate a Super Resolution image of your low resolution image/ Night Vision image using Generative Adversarial Network. Upload your image here to get an optimized image.
            </div>
            <input className='' type="file" id="file-input" />
            <button> Proceed</button>
            <div className="result-container result-header text-center">
                <div className='my-5'>Here's you output image !!</div>
                <div className='d-flex flex-col justify-content-between mt-5'>
                    <img className="result-img" src ='./images/sample.jpg'/>
                    <img className="result-img" src ='./images/sample.jpg'/>
                </div>
            </div>
        </div>
    )
}

export default upload;