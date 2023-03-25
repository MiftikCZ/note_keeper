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
    let [value, setValue] = useState<string>("")
    return <>
        <div class="popup">

            <input type="text" class="input" placeholder="Write some note..." onInput={(ev) => {
                //@ts-ignore
                setValue(ev.target?.value)
            }} />
            <div class="content">


                <button class="material-symbols-outlined button _add" onClick={() => {
                    addTodo({ setTodos, todos, workspace }, value)
                    setAfter(<></>)
                }}>add</button>

                <button class="button close" onClick={() => {
                    setAfter(<></>)
                }}>close</button>
            </div>
        </div>
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



    let [after, setAfter] = useState<JSX.Element>(<></>)
    return <>
        {after}
        <button class="add" onClick={() => {
            setAfter(<>
                <PopupFromTop setAfter={setAfter} setTodos={setTodos} todos={todos} workspace={workspace} />
            </>)
        }}>+</button>
    </>
}