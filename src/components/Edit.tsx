import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../features/posts/postSlice'
import { selectAllUsers } from '../features/users/userSlice'

interface PostTemplate{
  title: string,
  content: string
}

function Edit() {
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState<PostTemplate>({
      title: '',
      content: '',
    })
    const [userId, setUserId] = useState<string>('')

    const users = useSelector(selectAllUsers)

    const inputsHandler: React.ChangeEventHandler<HTMLInputElement> = (event) =>{
      setInputs({
        ...inputs, 
        [event.target.name]: event.target.value
      })
    }

    const authorHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) =>{
      setUserId(event.target.value)
    }

    const canSave = Boolean(inputs.title) && Boolean(inputs.content) && Boolean(userId)

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      if(inputs.title && inputs.content){
        dispatch(addPost(inputs.title, inputs.content, userId))
        setInputs({title: '', content: ''})
      }else{
        alert('There is missing something!')
      }
    }

    return (
      <>
        <h1>Create a new Post</h1>

        <form>
          <label>Title</label>
          <input type="text" value={inputs.title} name='title'
          onChange={(event) => inputsHandler(event)}/> <br />
          <label>Content</label>
          <input type="text" value={inputs.content} name='content'
           onChange={(event) => inputsHandler(event)}/> <br />

          <label>Author</label>
          <select onChange={(e) => authorHandler(e)}>
          <option value="">Select one author</option>
              {users.map((user) => (
                <option key={user.id} value={user.id} >{user.name}</option>
                ))}
          </select> <br />
          
          <button onClick={(event) => handleSubmit(event)}
          disabled={!canSave}
          >Add Post</button>
        </form>
      </>
    );
  }
  
  export default Edit;