import React  from 'react';
import face from './Cute-face-with-smile-emoji-vectors.png'
function Home() {
    return(
<div className="home">
<h1 className='title'>Welcome</h1>
<img className='face' src={face} />

</div>
)
}

export default Home;
