import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TareaInput from './components/taskInput';  // Componente de entrada de tareas
import TareaLista from './components/taskList';  // Componente lista de tareas

export default function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { id: Date.now().toString(), texto, completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      <TareaInput agregarTarea={agregarTarea} />
      <TareaLista tareas={tareas} eliminarTarea={eliminarTarea} toggleCompletada={toggleCompletada} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
