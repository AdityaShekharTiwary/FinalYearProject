import React from 'react'

const avatar = (props) => {
    return (
        <div className='avatar-container'>
           <img className="avatar-img p-3" src = {props.gender == "male" ? './images/boy.png' : './images/girl.png'}/>
           <div className='name'>{props.name}</div>
        </div>
    )
}

export default avatar;