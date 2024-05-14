import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DEFAULT_OPTS } from "../lib/opts";

export const Header = ({
  currentTime,
  setCurrentTime,
  setTime,
}: {
  currentTime: number;
  setCurrentTime: Function;
  setTime: Function;
}) => {
  function handlePress(index: number) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.container}>
        {DEFAULT_OPTS.map((opt, index) => (
          <TouchableOpacity key={index} onPress={() => handlePress(index)}>
            <Text style={[styles.item, currentTime !== index && {borderColor: 'transparent'}]}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  container: {
    flexDirection: "row",
    gap: 10,
    width: "33%",
  },
  item: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
