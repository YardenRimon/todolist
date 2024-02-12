import Button from './Button'
import Container from './Container'
import Input from './Input'

interface ITask {
  id: number
  content: string
}

const Task = ({ id, content, ...props }: ITask) => {
  return (
    <Container className="task">
        <Input value={content}></Input>
        <Button text="X" action="delete" />
    </Container>
  )
}

export default Task
