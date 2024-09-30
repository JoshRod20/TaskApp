import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TareaInput({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const manejarCambioTexto = (text) => {
    setTexto(text);
  };

  const manejarAgregarTarea = () => {
    // Verifica que el texto no esté vacío
    if (texto.trim()) {
      agregarTarea(texto);
      setTexto('');  // Limpiar el campo después de agregar
    }
  };

  return (
    <View style={styles.contenedor}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={texto}
        onChangeText={manejarCambioTexto}
      />
      <TouchableOpacity style={styles.boton} onPress={manejarAgregarTarea}>
        <Text style={styles.textoBoton}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#7D2181',
    marginRight: 10,
    padding: 8,
  },
  boton: {
    backgroundColor: '#7D2181',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
