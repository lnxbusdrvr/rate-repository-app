import { StyleSheet, Text as NativeText } from 'react-native';

const Text = ({ children, style }) => {
  return (
    <NativeText style={style}>
      {children}
    </NativeText>
  )
}

export default Text
