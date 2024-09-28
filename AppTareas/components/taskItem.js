import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';  // Si usas íconos

export default function TareaItem({ tarea, eliminarTarea }) {
  return (
    <View style={styles.item}>
      {/* Asegúrate de envolver el texto dentro de <Text> */}
      <Text style={styles.texto}>{tarea.texto}</Text>
      <TouchableOpacity onPress={() => eliminarTarea(tarea.id)}>
        <AntDesign name="close" style={styles.iconoEliminar} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
  iconoEliminar: {
    fontSize: 24,
    color: 'red',
  },
});
