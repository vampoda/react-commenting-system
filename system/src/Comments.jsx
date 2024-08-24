

import React, { useState } from 'react'

const Comments = ({comments,handleAddComments,handleDeleteComments}) => {
    const [showInput,setShowInput]=useState(false)
const[commentBody,setCommentBody]=useState("")

let handleAdd=()=>{
    let newcomment={
        id:Date.now(),
        text:commentBody,
        replies:[]
    }
    handleAddComments(comments.id,newcomment)
setShowInput(false)

}

  return (
    <div>
    <div className='comment-container'>
<h3>{comments.text}</h3>
{ showInput &&<input type='text' autoFocus



onChange={(e)=>setCommentBody(e.target.value)}
></input>}

<div>
{showInput?(
    <>
    <button
    onClick={handleAdd}
    >add</button>
    <button onClick={()=>setShowInput(false)}>calcel</button>
    </>
):(
   <div>
        <button onClick={()=>setShowInput(true)}>reply</button>
        
        <button
        onClick={()=>handleDeleteComments(comments.id)}
        >delete</button>
            </div>
  
)}
     </div>
    </div>

<div style={{paddingLeft:10}}>
    {comments?.replies?.map((ele)=>(
        <Comments
        key={ele.id}
handleAddComments={handleAddComments}
        comments={ele}
handleDeleteComments={handleDeleteComments}

        />
    ))}
</div>
</div>

)
}

export default Comments