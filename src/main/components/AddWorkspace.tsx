import { getDefaultWorkspaceTitle, todoInterface, todoWorkspaceInterface } from "../../lib/todos"

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[]
}

export default function({setTodos,todos}:mainInterface) {
  let date = Date.now()
    return <button class="add_workspace" onClick={()=>{
        let d = new Date()
        setTodos([...todos, {
          title: getDefaultWorkspaceTitle(date),
          date: date,
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
      }}>Add new</button>
}