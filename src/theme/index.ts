import { extendTheme, UsageTheme } from "@yamada-ui/react"
// import components from './components'
import tokens from "./tokens"

const customTheme: UsageTheme = {
  ...tokens,
}

export default extendTheme(customTheme)()