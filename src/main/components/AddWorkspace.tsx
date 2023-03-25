import { getDefaultWorkspaceTitle, todoInterface, todoWorkspaceInterface } from "../../lib/todos"

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[]
}

export default function({setTodos,todos}:mainInterface) {
    return <button class="add" onClick={()=>{
        let d = new Date()
        setTodos([...todos, {
          title: getDefaultWorkspaceTitle(),
          date: Date.now(),
          id: Date.now().toLocaleString(),
          color:"yellow",
          todos: [
            {
              content: `hello world ${d.getDate()}.${d.getMonth()}.${d.getFullYear()} !`,
              date: Date.now(),
              id: Date.now().toLocaleString()
            }
          ]
        }])
      }}>+</button>
}