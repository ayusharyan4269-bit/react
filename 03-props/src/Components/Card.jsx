import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
   console.log(props.age2,props.user)
  return (
   
<div className='card'>
<img src={props.img} alt="" />
<h1>{props.user}  , {props.age2} 
</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
<button>view profile <Bookmark />

</button>



</div>

  )
}

export default Card


/* imp thing justify-content: space-between
flex-direction : column */