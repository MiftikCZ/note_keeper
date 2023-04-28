import { useState } from "preact/hooks"
import { getDefaultWorkspaceTitle, todoInterface, todoWorkspaceInterface } from "../../lib/todos"

interface mainInterface {
    setTodos: Function | any,
    todos: todoWorkspaceInterface[]
}

interface workspaceTypesInterface {
  [key:string]: {
    color: todoWorkspaceInterface["color"],
    title?: string,
    addClass?: "defOption"
    label: string
  }
}

function workspaceTypes():workspaceTypesInterface {
  let dateNow = new Date()
  const uniqueId = (() => {
    return parseInt(dateNow.getDate()+dateNow.getMonth()+""+dateNow.getMinutes()+""+dateNow.getSeconds()).toString(36).toUpperCase()
  })()


  return {
    "def" : {
      color: "yellow",
      label: "Default",
      addClass: "defOption"
    },
    "tommorowTodos" : {
      color: "purple",
      title: `${dateNow.getDate()+1}-${dateNow.getMonth()+1} Todos`,
      label: "Tommorow todos"
    },
    "todaySchedule": {
      color: "red",
      label: "Day schedule",
      title: `${dateNow.getDate()}-${dateNow.getMonth()+1} Program`
    },
    "todayTodos" : {
      color: "purple",
      title: `${dateNow.getDate()}-${dateNow.getMonth()+1} Todos`,
      label: "Today todos"
    },
    "workoutLog" : {
      color: "red",
      title: `${dateNow.getDate()}-${dateNow.getMonth()+1} Workout`,
      label: "Workout log"
    },
    "productivityLog" : {
      color: "green",
      title: `Did on ${dateNow.getDate()}-${dateNow.getMonth()+1}`,
      label: "What happened today"
    },
    "inspirationHit" : {
      color: "purple",
      title: `Cool idea ${dateNow.getDate()}-${dateNow.getMonth()+1}`,
      label: "Inspiration hit"
    },
    "someList" : {
      color: "green",
      title: `My list #${uniqueId}`,
      label: "List about things"
    },
    "coolIdeas": {
      color: "blue",
      title: "Cool ideas",
      label: "Cool ideas"
    }
  }
}

interface addWorkspaceInterface {
  color?: todoWorkspaceInterface["color"],
  title?: string 
}

interface selectionButtonInterface {
  label: string,
  title?: string,
  addClass?: string,
  color?: todoWorkspaceInterface["color"]
}

export default function({setTodos,todos}:mainInterface) {
  let date = Date.now()
  const defaultTitle = getDefaultWorkspaceTitle(date)

  const [showWorkspace,setShowWorkspace] = useState<boolean>(false)
  const thisId = date.toString(36)

  function addWorkspace({color,title}:addWorkspaceInterface) {
    let d = new Date()
    setTodos([...todos, {
      title: title || defaultTitle,
      date: date,
      id: thisId,
      color: color || "yellow",
      todos: [
        {
          content: `hello world ${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} !`,
          date: date,
          id: date.toLocaleString()
        }
      ]
    }])
  }

  function ShowAddWorkspace() {
    const myWorkspaceTypes = workspaceTypes()

    function SelectionButton({label,color,title,addClass}:selectionButtonInterface) {
      return <>
        <button class={"button "+addClass} onClick={()=>{
          addWorkspace({
            color: color,
            title: title
          })
          setShowWorkspace(false)
        }}>{label}</button>
      </>
    }

    return <>
      <div class="relative">
        <div class="addWorkspaceMenu">
          <div class="content">
            <button class="close material-symbols-outlined" onClick={()=>{setShowWorkspace(false)}}>close</button>
            <span class="title">Choose preset</span>
            <div className="buttons">
              {Object.values(myWorkspaceTypes).map(theType => {
                return <>
                  <SelectionButton addClass={theType.addClass} label={theType.label} title={theType.title} color={theType.color}/>
                </>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  }

  return <>
    {showWorkspace && <>
      <ShowAddWorkspace />
    </>}
    <button class="add_workspace" onClick={()=>{setShowWorkspace(true)}}>Add new</button>
  </>
}