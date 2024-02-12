import React from 'react'
import './App.css'
import Container from './components/Container'
import Input from './components/Input'
import Button from './components/Button'
import Task from './components/Task'

interface ITask {
  value: string
  id: number
}

interface ITasks {
  tasks: ITask[]
}

let tasks: ITasks = {
  tasks: [
    { value: 'asdfasdf', id: 1 },
    { value: '9456654', id: 2 },
    { value: 'סאטבועהינלחךלמ', id: 3 },
  ],
}

function App() {
  return (
    <Container className="main">
      <Container className="new_task">
        <Input className="new_task" />
        <Button text="add" action="add" key={"add"} />
      </Container>
      <Container className="tasks">
        {tasks.tasks.map((task) => (
          <Task id={task.id} content={task.value}/>
        ))}
      </Container>
    </Container>
  )
}

export default App
