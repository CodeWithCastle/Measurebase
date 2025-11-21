import { Stack } from 'expo-router'
// -----------------------------------------------------
import ContextWrapper from './contexts/ContextWrapper'
// -----------------------------------------------------

export default function RootLayout() {
  return (
    <ContextWrapper>
      <Stack screenOptions={{ headerShown: false }} />
    </ContextWrapper>
  )
}
