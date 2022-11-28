import React from "react"
import Avatar from './avatar'

const about = () => {
    return (
        <div className="about-container text-center">
            <div className="about-header">
                A bit about us !
            </div>
            <div className="about-desc">
                This Project is under the guidance of Prof. Rahul Das Gupta , Techno Main saltlake.
            </div>
            <br/>
            <h1>
                Team Members
            </h1>
            <div className="">
                <div className="d-flex flex-col justify-content-evenly p-5">
                    <Avatar name="Aditya Shekhar Tiwary" gender="male"/>
                    <Avatar name="Supriya Roy" gender="female"/>
                </div>
                <div className="d-flex flex-col justify-content-evenly p-5">
                    <Avatar name="Debarati Ghatak" gender="female"/>
                    <Avatar name="Kumari Rupali" gender="female"/>
                </div>
            </div>

        </div>
    )
}

export default about;