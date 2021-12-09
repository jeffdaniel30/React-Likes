import React from 'react'

const Likes = ({totalLikes, addCount, subtractCount}) => {
    return (
        <div>
            <h1>in the Likes</h1>
            <p>{totalLikes}</p>
            <button onClick={addCount}>+</button>
            <button onClick={subtractCount}>-</button>
        </div>
    )
}

export default Likes