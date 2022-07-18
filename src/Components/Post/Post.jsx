import React, { useState } from 'react';

const PostButton = (props) => {

    function handleClick() {

    }
    return ( 
        <div>
            <button className='inactive' onClick={handleClick}>{props.message}</button>
        </div>
     );
}
 
export default PostButton;