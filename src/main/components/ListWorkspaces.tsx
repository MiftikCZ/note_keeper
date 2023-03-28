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
                    case "red":    return "orange";
                    case "orange": return "yellow";
                    case "yellow": return "green" ;
                    case "green":  return "blue"  ;
                    case "blue":   return "pink"  ;
                    case "pink":   return "purple";
                    default:       return "red"   ;
                  }
                })()
              }
            }
            return _workspace
          }))
        }

        return <div class={(workspace?.color || "orange") + " workspace"}  >
        <div class="title" onClick={()=>{
          setShowWorkspaces(workspace.id)
      }} >{workspace?.title}</div>
          <div class="tools">
            <span class="tool changeColor material-symbols-outlined icon" onClick={()=>{
              changeColor()
            }}>colorize</span>
          </div>
        </div>
      })}
    </div>
}