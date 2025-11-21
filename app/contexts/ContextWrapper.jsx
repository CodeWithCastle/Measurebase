import CompxProvider from './CompxProvider'
import IconProvider from './IconProvider'
import StyleProvider from './StyleProvider'
import ThemeProvider from './ThemeProvider'
// -----------------------------------------------------

export default function ContextWrapper({ children }) {
  return (
    <>
      <ThemeProvider>
        <StyleProvider>
          <CompxProvider>
            <IconProvider>{children}</IconProvider>
          </CompxProvider>
        </StyleProvider>
      </ThemeProvider>
    </>
  )
}
