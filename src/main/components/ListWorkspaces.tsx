import { todoInterface, todoWorkspaceInterface } from "../../lib/todos";

interface mainInterface {
    todos: todoWorkspaceInterface[],
    setShowWorkspaces: Function | any,
    setTodos: Function | any
}

export default function({todos,setTodos,setShowWorkspaces}:mainInterface) {
    return <div class="workspaces">
    {todos.map((workspace) => {
        const changeColor = () => {
          setTodos(todos.map(_workspace => {
            if(_workspace.id == workspace.id) {
              return {
                ..._workspace,
                color: (()=>{
                  switch(workspace.color) {
                    case "red":    return "orange";break; 
                    case "orange": return "yellow";break;
                    case "yellow": return "green" ;break;
                    case "green":  return "blue"  ;break;
                    case "blue":   return "pink"  ;break;
                    case "pink":   return "purple";break;
                    default:       return "red"   ;break;
                  }
                })()
              }
            }
            return _workspace
          }))
        }

        return <div onClick={()=>{
            setShowWorkspaces(workspace.id)
        }} class={(workspace?.color || "orange") + " workspace"}  >
          <div class="title">{workspace?.title}</div>
          <div class="tools">
            <span class="tool changeColor" onClick={()=>{
              changeColor()
            }}>color</span>
          </div>
        </div>
      })}
    </div>
}