import { getDefaultWorkspaceTitle, todoInterface, todoWorkspaceInterface } from "../../lib/todos";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[],
    id: string,
    setShowWorkspaces: Function | any
}

export default function ({ setTodos, todos, id,setShowWorkspaces }: mainInterface) {
    let workspace = todos.find(e => e.id == id)!
    let defaultTitle = getDefaultWorkspaceTitle()
    return <div class="showWorkspace">
        {workspace ? <>
            <div class="header">
                <button class="return" onClick={()=>{
                    setTodos(todos.filter(_workspace => _workspace.id != id))
                    setShowWorkspaces("")
                }}>
                    <span class="material-symbols-outlined icon">delete</span>
                </button>
                <input class="title" onChange={(ev)=>{
                    setTodos(todos.map(_workspace => {
                        if(_workspace.id == workspace.id) {
                            return {
                                ...workspace,
                                //@ts-ignore
                                title: ev.target?.value || defaultTitle
                            }
                        } else {
                            return _workspace
                        }
                    }))
                }} value={workspace?.title} placeholder={defaultTitle}/>
                <button class="return" onClick={()=>{
                    setShowWorkspaces("")
                }}>
                    <span class="material-symbols-outlined icon">arrow_back</span>
                </button>
            </div>

            <div class="todos">
                {workspace?.todos.map(todo => {
                    return <Todo id={todo.id} todo={todo.content} workspace={workspace} setTodos={setTodos} todos={todos} />
                })}
            </div>

            <AddTodo setTodos={setTodos} todos={todos} workspace={workspace} />
        </> : <>
            <h1>404</h1>
            <p>something broke... this note group doesn't exist</p>
            <button class="goback" onClick={()=>{
                setShowWorkspaces("")
            }}>Go back</button>
        </>}
    </div>
}