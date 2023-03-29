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


  export function getDefaultWorkspaceTitle(date:string|number) {
    let d = new Date(parseInt(`${date}`))
    return `${d.getDate()}-${d.getMonth()+1} ${d.getHours()}:${d.getMinutes()}`
  }

  // UNSPLASH
  // export const wallpaperList = `https://images.unsplash.com/photo-1618781466372-10b32f475ab3?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTkyMjg4MQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1548167390-863d815de934?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTczNDY0OQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1618781466372-10b32f475ab3?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTkyMjg4MQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1619745037667-5920f2d146ee?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTkyMjkyMw&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1673794784636-2e69436d3eee?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTkyMjg4MQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1508727786488-0d7201955bc0?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTkyMjg4MQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1543379612-e6de247b27ab?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTA4MDEwNQ&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1591511604946-83f343e385e8?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3OTA2MTIyNw&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1663138763894-0cc4a5421dab?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3ODk4NDY2Mg&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3ODk4NDY2Mg&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY3ODkwMTkxMg&ixlib=rb-4.0.3&q=85&w=1920
  // https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4MDAyMTQxMQ&ixlib=rb-4.0.3&q=85&w=1920`.split("\n")