import { useEffect, useState } from 'preact/hooks'
import './app.css'
import './main/colors.css'
import ListWorkspaces from './main/components/ListWorkspaces'

import { todoInterface, todoWorkspaceInterface } from './lib/todos'
import AddWorkspace from './main/components/AddWorkspace'
import Workspace from './workspace/components/Workspace'

export function App() {
  /* [ 
    {todos: [TODO, TODO], title: ""} , 
    {todos: [TODO, TODO], title: ""} 
  ] */
  let todos_db = JSON.parse(localStorage.getItem("nk_todos") || "[]") || []
  if (!todos_db) {
    todos_db = [

    ]
  }
  let [showWorkspace, setShowWorkspace] = useState<string | null>("")
  let [todos, setTodos] = useState<Array<todoWorkspaceInterface>>(todos_db)

  useEffect(() => {
    localStorage.setItem("nk_todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {!showWorkspace ? <>
        <div class="app">
          <div class="header">My notes</div>
          <ListWorkspaces setShowWorkspaces={setShowWorkspace} setTodos={setTodos} todos={todos} />

          <AddWorkspace setTodos={setTodos} todos={todos} />
        </div>
      </> : <Workspace id={showWorkspace} setShowWorkspaces={setShowWorkspace} setTodos={setTodos} todos={todos}/>}
    </>
  )
}
