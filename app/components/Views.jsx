import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
// Contexts ------------------------------------------------------
import { useCompx } from '../contexts/CompxProvider'
import { useStyle } from '../contexts/StyleProvider'
import { useTheme } from '../contexts/ThemeProvider'
// SVG icon components ------------------------------------------------------
import Home from '../assets/icons/home.svg'
import Inventory from '../assets/icons/inventory.svg'
import Order from '../assets/icons/order.svg'
import Client from '../assets/icons/people.svg'
import Setting from '../assets/icons/settings.svg'

// ======================================
// Page Frame and Design
// ======================================
export function PageView({ children, bottomBar }) {
  const insets = useSafeAreaInsets()
  const css = useStyle()
  const dim = useTheme()
  const compx = useCompx()

  return (
    <View
      style={[
        css.page,
        {
          paddingTop: insets.top,
          paddingBottom: bottomBar ? 0 : insets.bottom,
        },
      ]}
    >
      <StatusBar style='light' hidden={false} />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps='handled'
        style={[css.main, {}]}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: bottomBar
            ? dim.custom.mainMenuBar.h + insets.bottom
            : insets.bottom + dim.layout.gap.lg,
          gap: dim.layout.gap.md,
        }}
      >
        {children}
      </KeyboardAwareScrollView>

      {bottomBar && bottomBar}
    </View>
  )
}

// ======================================
// App Main Menu (fixed - Bottom)
// ======================================
export function AppMainMenuView({ children }) {
  const insets = useSafeAreaInsets()
  const compx = useCompx()
  const css = useStyle()
  const dim = useTheme()

  const menuItems = [
    {
      name: 'home',
      linkto: '',
    },
    {
      name: 'inventory',
      linkto: '',
    },
    {
      name: 'clients',
      linkto: '',
    },
    {
      name: 'orders',
      linkto: '',
    },
    {
      name: 'settings',
      linkto: '',
    },
  ]

  const MenuIconSelect = (iconName) => {
    switch (iconName) {
      case 'home':
        return (
          <Home
            width={dim.custom.mainMenuBar.icons.w}
            height={dim.custom.mainMenuBar.icons.h}
            stroke-width={dim.custom.mainMenuBar.icons.stroke}
            style={css.appMainMenuViewIcon}
          />
        )
      case 'inventory':
        return (
          <Inventory
            width={dim.custom.mainMenuBar.icons.w}
            height={dim.custom.mainMenuBar.icons.h}
            stroke={dim.colors.dullText}
            style={css.appMainMenuViewIcon}
          />
        )
      case 'clients':
        return (
          <Client
            width={dim.custom.mainMenuBar.icons.w}
            height={dim.custom.mainMenuBar.icons.h}
            stroke={dim.colors.dullText}
            style={css.appMainMenuViewIcon}
          />
        )
      case 'orders':
        return (
          <Order
            width={dim.custom.mainMenuBar.icons.w}
            height={dim.custom.mainMenuBar.icons.h}
            stroke={dim.colors.dullText}
            style={css.appMainMenuViewIcon}
          />
        )
      case 'settings':
        return (
          <Setting
            width={dim.custom.mainMenuBar.icons.w}
            height={dim.custom.mainMenuBar.icons.h}
            stroke={dim.colors.dullText}
            style={css.appMainMenuViewIcon}
          />
        )
      default:
        return null
    }
  }

  return (
    <compx.Row>
      {menuItems.map((menuItem) => {
        return (
          <View style={[css.appMenu]} key={menuItem.name}>
            {MenuIconSelect(menuItem.name)}
            <compx.Span style={viewstyle.appMainMenuTxt}>
              {menuItem.name}
            </compx.Span>
          </View>
        )
      })}
    </compx.Row>
  )
}

// ======================================
// Home Header Menu Bar (Top)
// ======================================
export function HomeHeaderMenuView({ children }) {
  return <></>
}

// ============================================================================

export const viewstyle = StyleSheet.create({
  appMainMenuTxt: {},
})
