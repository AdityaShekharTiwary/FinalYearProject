import React from 'react'

const home = () => {
    return (
        <div className='home-container m-5'> 
            <div className='d-flex flex-col justify-content-between'>
                <div>
                    <div className='header-text'>Project Name </div>
                    <div className='header-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, reprehenderit itaque dolores porro iure voluptas tenetur amet nihil quis aut, nostrum placeat quisquam! Perspiciatis nostrum, fugiat molestias veniam praesentium eveniet?</div>
                </div>
                <div>
                    <img className="home-img" src ='./images/homeImg.jpg'/>
                </div>
            </div>
            

        </div>
    )
}

export default home;