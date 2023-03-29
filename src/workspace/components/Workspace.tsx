import { getDefaultWorkspaceTitle, todoInterface, todoWorkspaceInterface } from "../../lib/todos";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[],
    id: string,
    setShowWorkspaces: Function | any
}

interface ListTodosInterface {
    date_now: number,
    workspace: todoWorkspaceInterface,
    todos: todoWorkspaceInterface[],
    setTodos: Function | any
}

interface DividerInterface {
    nowData: number,
    show: boolean
}

function Divider({ nowData, show }: DividerInterface) {
    if (show) {
        return <div class={`divider ${nowData == 0 ? "today" : ""}`}>{nowData == 0 ? "today" :
            nowData == 1 ? "yesterday" :
                `${nowData} days ago`}</div>
    } else {
        return <></>
    }
}


function ListTodos({ date_now, workspace, setTodos, todos }: ListTodosInterface) {
    let lastData: number | string = ""
    return <>
        {
            workspace?.todos.map((todo: todoInterface) => {
                const date_now_obj = new Date(date_now)
                let nowData_container = date_now - todo.date - (date_now_obj.valueOf() - date_now_obj.setHours(0, 0, 0, 0));
                let nowData = Math.floor(nowData_container / 1000 / 60 / 60 / 24)+1

                let show = false
                if (nowData !== lastData) {
                    lastData = nowData
                    show = true
                }

                return <>
                    <Divider nowData={nowData} show={show} />
                    <Todo id={todo.id} todo={todo.content} workspace={workspace} setTodos={setTodos} todos={todos} />
                </>
            })
        }
    </>
}

export default function ({ setTodos, todos, id, setShowWorkspaces }: mainInterface) {
    let workspace = todos.find(e => e.id == id)!
    let defaultTitle = getDefaultWorkspaceTitle(workspace.date)
    const date_now = Date.now()
    return <div class="showWorkspace">
        {workspace ? <>
            <div class="header">
                <button class="return material-symbols-outlined" onClick={() => {
                    setTodos(todos.filter(_workspace => _workspace.id != id))
                    setShowWorkspaces("")
                }}>
                    delete
                </button>
                <input class="title" onChange={(ev) => {
                    setTodos(todos.map(_workspace => {
                        if (_workspace.id == workspace.id) {
                            return {
                                ...workspace,
                                //@ts-ignore
                                title: ev.target?.value || defaultTitle
                            }
                        } else {
                            return _workspace
                        }
                    }))
                }} value={workspace?.title} placeholder={defaultTitle} />
                <button class="return material-symbols-outlined" onClick={() => {
                    setShowWorkspaces("")
                }}>
                    arrow_back
                </button>
            </div>

            <div class="todos">
                <ListTodos date_now={date_now} setTodos={setTodos} todos={todos} workspace={workspace} />
            </div>

            <AddTodo setTodos={setTodos} todos={todos} workspace={workspace} />
        </> : <>
            <h1>404</h1>
            <p>something broke... this note group doesn't exist</p>
            <button class="goback" onClick={() => {
                setShowWorkspaces("")
            }}>Go back</button>
        </>}
    </div>
}