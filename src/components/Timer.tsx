import { StyleSheet, Text, View } from "react-native"

export const Timer = ({ time }: { time: number }) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(time)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 55,
    fontWeight: 'bold'
  }
})
