import React from 'react'
import './App.css'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'

interface ITask {
  value: string
  id: string
}

interface ITasks {
  tasks: ITask[]
}

let tasks: ITasks = {
  tasks: [
    { value: 'asdfasdf', id: '1' },
    { value: '9456654', id: '2' },
    { value: 'סאטבועהינלחךלמ', id: '3' },
  ],
}

function App() {
  return (
    <Container className="main_container">
      <Container className="newTask_container">
        <Input className="newTask_input" />
        <Button className="add_button" text="add" action="add" />
      </Container>
      <Container className="tasks_container">
        {tasks.tasks.map((task) => (
          <Input className={task.id} value={task.value}/>
        ))}
      </Container>
    </Container>
  )
}

export default App
