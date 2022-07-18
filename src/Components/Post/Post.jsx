import React, { useState } from 'react';
import "./Post.css";

const PostButton = (props) => {

    const [likeButton, setLikeButton] = useState('inactive-like');
    const [dislikeButton, setDislikeButton] = useState('inactive-dislike');

    function handleClickLike() {
        if(likeButton === 'inactive-like'){
            setLikeButton('active-like');
        }
        else{
            setLikeButton('inactive-like');
        }
    };

    function handleClickDisLike() {
        if(dislikeButton === 'inactive-dislike'){
            setDislikeButton('active-dislike');
        }
        else{
            setDislikeButton('inactive-dislike');
        }
    };


    return ( 
        <div>
            <button className={likeButton} onClick={handleClickLike}>{props.message}Like</button>
            <button className={dislikeButton} onClick={handleClickDisLike}>{props.message}Dislike</button>
        </div>
     );
}
 
export default PostButton;