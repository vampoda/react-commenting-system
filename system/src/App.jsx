import { useState } from 'react'
import Comments from './Comments'
import './App.css'
import useFunction from './useFunction'
import { commentData } from './data'
function App() {
  const [comments, setComments] = useState(commentData)
const{addComment,deleteComment}=useFunction()

const handleAddComments=(commentId,comment)=>{
const updatedTree=addComment(comments,commentId,comment)
setComments(updatedTree)

  console.log(commentId,commentData)
 
}
const handleDeleteComments=(commentId)=>{
const updatedTree= deleteComment(comments,commentId)
setComments(updatedTree)
}


  return (
    
     <div className='App'>
      <Comments
      comments={comments}
      key={comments.id}
      handleAddComments={handleAddComments}
      handleDeleteComments={handleDeleteComments}
      ></Comments>
     </div>
  
  )
}

export default App
