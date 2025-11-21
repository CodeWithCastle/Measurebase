import { Text, View } from 'react-native'
import { Styles } from './Styles'

// Typography ---------------------------------------------
export function H1({ children, style }) {
  return <Text style={[Styles.h1, style]}>{children}</Text>
}

export function H2({ children, style }) {
  return <Text style={[Styles.h2, style]}>{children}</Text>
}

export function H3({ children, style }) {
  return <Text style={[Styles.h3, style]}>{children}</Text>
}

export function Title({ children, style }) {
  return <Text style={[Styles.title, style]}>{children}</Text>
}

export function Subtitle({ children, style }) {
  return <Text style={[Styles.subtitle, style]}>{children}</Text>
}

export function Span({ children, style }) {
  return <Text style={[Styles.span, style]}>{children}</Text>
}

export function SpanSmall({ children, style }) {
  return <Text style={[Styles.smallspan, style]}>{children}</Text>
}

export function Caption({ children, style }) {
  return <Text style={[Styles.caption, style]}>{children}</Text>
}

// Forms ---------------------------------------------
export function Form({ children, style }) {
  return <View style={[Styles.form, style]}>{children}</View>
}

export function TextInput({ children, style }) {
  return <View style={[Styles.textinput, style]}>{children}</View>
}

export function EmailInput({ children, style }) {
  return <View style={[Styles.emailinput, style]}>{children}</View>
}

export function Button({ children, style }) {
  return <View style={[Styles.button, style]}>{children}</View>
}

// TextInput
// Secure field (password)
// Email input (keyboardType="email-address")
// Phone number (keyboardType="phone-pad")
// Multiline input
// Search input
// --------------------------------------------------------------
// <TextInput />
// <TextInput secureTextEntry />
// <TextInput keyboardType="email-address" />

// Cards ---------------------------------------------
export function Card({ children, style }) {
  return <View style={[Styles.card, style]}>{children}</View>
}

// Layout ---------------------------------------------
export function Row({ children, style }) {
  return <View style={[Styles.row, style]}>{children}</View>
}

// EXPORT ======================================================
export const Compx = {
  H1,
  H2,
  H3,
  Title,
  Subtitle,
  Span,
  SpanSmall,
  Caption,
  Form,
  TextInput,
  EmailInput,
  Button,
  Card,
  Row,
}
