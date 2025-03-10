import { StyleSheet, Text as NativeText } from 'react-native';

const Text = ({ children }) => {
  return (
    <NativeText>
      {children}
    </NativeText>
  )
}

export default Text
