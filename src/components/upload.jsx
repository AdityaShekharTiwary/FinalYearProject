import React from 'react'

const upload = () => {
    return (
        <div className='upload-container m-5'>
            <div className="header-text text-center">
                What exactly Project Name is ?
            </div>
            <div className="header-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut non veritatis provident quas nesciunt voluptates, animi illum cumque vitae, possimus soluta repellendus debitis praesentium aliquam ipsam enim accusamus velit.
            </div>
            <div className="header-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut non veritatis provident quas nesciunt voluptates, animi illum cumque vitae, possimus soluta repellendus debitis praesentium aliquam ipsam enim accusamus velit.
            </div>
            <div className="header-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut non veritatis provident quas nesciunt voluptates, animi illum cumque vitae, possimus soluta repellendus debitis praesentium aliquam ipsam enim accusamus velit.
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