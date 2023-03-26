export interface todoWorkspaceInterface {
    todos: Array<todoInterface>,
    title?: string,
    color?: "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink",
    id: string,
    date: number
  }

  export interface todoInterface {
    content: string,
    id: string,
    date: number,
  }


  export function getDefaultWorkspaceTitle() {
    let d = new Date()
    return `${d.getDate()}-${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`
  }
