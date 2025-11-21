// import { useContext } from 'react'
// --------------------------------------------------------------
import {
  AppMainMenuView,
  HomeHeaderMenuView,
  PageView,
} from './components/Views'
// --------------------------------------------------------------

{
  /* <Text style={{ color: theme.colors.text }}>
    System theme: {theme.mode}
  </Text> */
}

export default function Index() {
  // const css = useStyle()
  // const dim = useTheme()

  return (
    <PageView bottomBar={<AppMainMenuView />}>
      <HomeHeaderMenuView />

      {/*  */}
      {/* <View style={[appStyle.content, styles.content]}>
        <View style={[{ ...appStyle.container, gap: 16, paddingTop: 16 }]}>
          <CardView>
            <Text>Cards</Text>
          </CardView>

          <View>
            <Text style={{ color: 'white' }}>
              A. Core: 1. home(dashboard), 2. inventory, 3. clients, 4. orders,
              5. reports(your activity, )
            </Text>
            <Text style={{ color: 'white' }}>
              B. Header: 1. profile, 2. settings, 3. calendar(notifications), 4.
              Notifications
            </Text>
            <Text style={{ color: 'white' }}>
              -------------------------------------------------------------------------------
            </Text>
            <Text style={{ color: 'blue' }}>A1. --- Home:</Text>
            <Text style={{ color: 'blue' }}>A2. --- Inventory:</Text>
            <Text style={{ color: 'blue' }}>A3. --- Clients:</Text>
            <Text style={{ color: 'blue' }}>A4. --- Orders:</Text>
            <Text style={{ color: 'blue' }}>A5. --- Reports:</Text>
            <Text style={{ color: 'white' }}>
              -------------------------------------------------------------------------------
            </Text>
            <Text style={{ color: 'blue' }}>
              B1. --- Profile: profile, settings(advanced/pro-features, admin
              tools[analytics dashboard, users access, theme], ),
              help/support(Feedback, ), about/app info, logout
            </Text>
            <Text style={{ color: 'white' }}>
              -------------------------------------------------------------------------------
            </Text>
            <Text style={{ color: 'red' }}>
              B1. --- Profile: i. profile, ii. settings, iii. help/support, iv.
              about/app info, v. logout
            </Text>
          </View>
        </View>
      </View> */}
    </PageView>
  )
}
