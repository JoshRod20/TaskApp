import React from 'react';
import { View, StyleSheet } from 'react-native';
import TareaItem from './taskItem';

export default function TareaLista({ tareas, eliminarTarea }) {
  return (
    <View style={styles.lista}>
      {tareas.map((tarea) => (
        <TareaItem key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginTop: 20,
  },
});
