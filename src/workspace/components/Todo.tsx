import { todoInterface, todoWorkspaceInterface } from "../../lib/todos"

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[],
    id: string,
    workspace: todoWorkspaceInterface,
    todo: string
}

export default function ({ id, setTodos, todo, todos, workspace }: mainInterface) {
    return <div class="todo">
        <div class="body">
            <span class="text">{todo}</span>
        </div>
        <button class="remove" onClick={() => {
                workspace.todos = workspace.todos.filter(e => e.id != id)
                setTodos(todos.map(_workspace => {
                    if (_workspace.id == workspace.id) {
                        return {
                            ..._workspace,
                            todos: _workspace.todos.filter(todo => todo.id != id)
                        }
                    } else {
                        return _workspace
                    }
                }))
            }}>
            <span class="material-symbols-outlined icon">delete</span>
    </button >
    </div>
}