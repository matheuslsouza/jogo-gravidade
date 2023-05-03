import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ball } from "./Components/Ball";

// Variável global para armazenar o ID do timer
let timer: number;

const App = () => {
  // Estados iniciais
  const [gravity, setGravity] = useState(0.98); // Força da gravidade
  const [upForce, setUpForce] = useState(0); // Força de impulso para cima
  const [speed, setSpeed] = useState(0); // Velocidade do objeto
  const [posY, setPosY] = useState(0); // Posição vertical do objeto

  // Efeito que é executado sempre que uma das variáveis de estado é atualizada
  useEffect(() => {
    const applyGravity = () => {
      // Reduzindo a força para cima (upForce)
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      // Modificando a velocidade (speed) com base na força para cima e a força da gravidade
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      // Atualizando a posição vertical (posY) com base na velocidade
      let newPosY = posY - newSpeed;
      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0); // Se o objeto tocar o chão, a velocidade é definida como zero
      }

      setPosY(newPosY);
    };
    // Limpa o timer existente e define um novo
    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  // Função para lidar com o botão de força
  const handleForceButton = () => {
    setUpForce(7); // Define a força para cima como 7 (impulso para cima)
  };

  // Renderiza o componente
  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Velocity: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={{ color: "#fff" }}>Fazer Força</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
