import { render } from 'preact'
import { App } from './app'
import './index.css'
import "@fontsource/fira-sans"
// import { wallpaperList } from './lib/todos'

// const rnWallpaper = wallpaperList[Math.floor(Math.random() * wallpaperList.length)]
render(<App/>, document.getElementById('app') as HTMLElement)
