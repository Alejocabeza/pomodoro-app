import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Header, Timer } from "./src/components";
import { COLOR } from "./src/lib";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  const handleStartAndStop = () => setIsActive(!isActive);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => setTime(time - 1), 1);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: COLOR[currentTime] }]}
    >
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
      <Timer time={time} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleStartAndStop()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 32,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 10,
    width: "80%",
  },
});
