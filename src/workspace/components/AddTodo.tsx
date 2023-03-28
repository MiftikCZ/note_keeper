import { useState } from "preact/hooks"
import { JSX } from "preact/jsx-runtime"
import { todoInterface, todoWorkspaceInterface } from "../../lib/todos"

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[],
    workspace: todoWorkspaceInterface,
}

interface PopupFromTopInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[],
    workspace: todoWorkspaceInterface,
    setAfter: Function | any
}


function PopupFromTop({ setTodos, todos, workspace, setAfter }: PopupFromTopInterface) {
    const [value, setValue] = useState<string>("")
    return <>
        <form class="relative" onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <div class="popup">

                <input type="text" class="input" placeholder="Write some note..." onInput={(ev) => {
                    //@ts-ignore
                    setValue(ev.target?.value)
                }} autofocus />
                <div class="content">
                    <button type="submit" class="button _add" onClick={() => {
                        if(value) {

                            addTodo({ setTodos, todos, workspace }, value)
                            setAfter(<></>)
                        }
                    }}>Add</button>

                    <button type="close" class="button close" onClick={() => {
                        setAfter(<></>)
                    }}>Close</button>
                </div>
            </div>
        </form>
    </>
}

function addTodo({ setTodos, todos, workspace }: mainInterface, content: string) {
    setTodos(todos.map(_workspace => {
        if (_workspace.id == workspace.id) {
            let id = Date.now()
            return {
                ...workspace,
                todos: [
                    ...workspace.todos,
                    {
                        content: content,
                        date: id,
                        id: id.toLocaleString()
                    }
                ]
            }
        }
        return _workspace
    }))
}

export default function ({ setTodos, todos, workspace }: mainInterface) {
    const [after, setAfter] = useState<JSX.Element>(<></>)

    return <>
        {after}
        <button class="add" onClick={() => {
            setAfter(<>
                <PopupFromTop setAfter={setAfter} setTodos={setTodos} todos={todos} workspace={workspace} />
            </>)
        }}>+</button>
    </>
}