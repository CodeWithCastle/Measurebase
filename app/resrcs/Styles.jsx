import { StyleSheet } from 'react-native'

// ===============================================================

export const Styles = StyleSheet.create({
  page: {
    flex: 1,
    flexGrow: 1,
    padding: 0,
    margin: 0,
    backgroundColor: 'red',
    // backgroundColor: theme.colors.background,
  },
  main: {
    position: 'relative',
    flex: 1,
    flexGrow: 1,
    gap: 16,
    padding: 0,
  },

  // Contexts ------------------------------------------------------

  content: {
    paddingHorizontal: 16,
  },
  container: {},

  // Contexts ------------------------------------------------------

  card: {
    minHeight: 100,
    minWidth: 100,
    borderRadius: 8,
    padding: 8,
  },
  glass: {
    backgroundColor: '#ffffff00',
  },

  // Contexts ------------------------------------------------------

  text: {
    color: '#D0D0D0',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// Contexts ------------------------------------------------------
// ===============================================================

// export const styles = StyleSheet.create({
//   content: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingTop: 8,
//     borderTopWidth: 1,
//     borderTopColor: theme.colors.text,
//     backgroundColor: theme.colors.background,
//     borderStyle: 'solid',
//   },
//   container: {
//     width: '100%',
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 8,
//   },
//   appMenu: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: 4,
//   },
//   appMainMenuViewIcon: {
//     color: theme.colors.text,
//     stroke: theme.colors.text,
//   },
//   appMenuTxt: {
//     color: theme.colors.text,
//     textAlign: 'center',
//     textTransform: 'capitalize',
//   },
// })
