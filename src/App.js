import { useState } from "react"

export const App = () => {

  const [ newTaskName, setNewTaskName ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('Task', newTaskName)
    setNewTaskName('')
  }

  return (
    <div className='App'>
      <form onSubmit = { handleSubmit }>
        <input  
          onChange = { (e) => setNewTaskName(e.target.value) }  
          type='text'
          value={newTaskName} 
          placeholder='Enter a news task'
        />


        <button>Save Task Name</button>
      </form>
    </div>
  )
}

