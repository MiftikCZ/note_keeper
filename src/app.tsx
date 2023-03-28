import { useEffect, useState } from 'preact/hooks'
import './app.css'
import './main/colors.css'
import ListWorkspaces from './main/components/ListWorkspaces'

import { todoWorkspaceInterface } from './lib/todos'
import AddWorkspace from './main/components/AddWorkspace'
import Workspace from './workspace/components/Workspace'

export function App() {
  const date = new Date()
  const date_time = `${date.getDate()}.${date.getMonth()}`
  let todos_db = JSON.parse(localStorage.getItem("nk_todos") || "[]") || []
  if (!todos_db) {
    todos_db = [

    ]
  }
  
  const [showWorkspace, setShowWorkspace] = useState<string | null>("")
  const [todos, setTodos] = useState<Array<todoWorkspaceInterface>>(todos_db)

  useEffect(() => {
    localStorage.setItem("nk_todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {/* <style>{`:root {--bg-link: url("${rnWallpaper}");}`}</style> */}
      {!showWorkspace ? <>
        <div class="app">
          <div class="allWorkspaces">
            <div class="header">Notes <span class="clocks">{date_time}</span></div>
            <ListWorkspaces setShowWorkspaces={setShowWorkspace} setTodos={setTodos} todos={todos} />
            <AddWorkspace setTodos={setTodos} todos={todos} />
          </div>

        </div>
      </> : <Workspace id={showWorkspace} setShowWorkspaces={setShowWorkspace} setTodos={setTodos} todos={todos} />}
    </>
  )
}
