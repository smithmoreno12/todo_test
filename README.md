# Todo List - Prueba Junior

Este proyecto es una base para una prueba técnica de nivel junior centrada en la creación de un CRUD para una lista de tareas (todo list).

## Descripción

La aplicación debe permitir al usuario:

- crear tareas nuevas,
- ver la lista de tareas,
- marcar tareas como completadas,
- editar tareas existentes,
- eliminar tareas,
- filtrar por estado o buscar por texto.

El objetivo principal es evaluar conocimientos básicos de React, TypeScript, estado, componentes y lógica de flujo de datos.

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Estructura del proyecto

```text
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
├── context/
│   └── todoContext.tsx
└── assets/
```

### Archivos principales

- [src/App.tsx](src/App.tsx): componente principal de la aplicación.
- [src/context/todoContext.tsx](src/context/todoContext.tsx): ideal para manejar el estado global de las tareas.
- [src/main.tsx](src/main.tsx): punto de entrada de la app.
- [src/index.css](src/index.css): estilos globales y base de Tailwind.

## Requisitos funcionales del CRUD

### 1. Crear tareas

El usuario debe poder escribir una tarea en un campo de texto y agregarla con un botón.

Reglas básicas:

- no debe permitir texto vacío,
- la tarea debe aparecer inmediatamente en la lista,
- cada tarea debe tener un identificador único.

### 2. Leer tareas

La aplicación debe mostrar todas las tareas en pantalla.

Se puede mostrar:

- título de la tarea,
- estado (pendiente/completada),
- fecha de creación,
- acciones de editar o eliminar.

### 3. Actualizar tareas

Debe existir la posibilidad de:

- marcar una tarea como completada o pendiente,
- editar el texto de una tarea existente.

### 4. Eliminar tareas

Cada tarea debe contar con una acción para eliminarla. La eliminación debe reflejarse de inmediato en la interfaz.

## Reglas de negocio sugeridas

- una tarea no puede quedar vacía,
- el texto debe validarse antes de guardar,
- el estado de una tarea puede ser pendiente o completada,
- si una tarea se elimina, debe desaparecer de la lista,
- si se edita, el nuevo valor debe reemplazar el anterior.

## Flujo esperado de la aplicación

1. El usuario escribe una tarea.
2. Presiona “Agregar”.
3. La tarea se guarda en el estado.
4. La lista se renderiza en pantalla.
5. El usuario puede completar, editar o eliminar la tarea.
6. La UI refleja siempre el estado actual.

## Estado recomendado para la prueba

La mejor práctica para esta prueba es trabajar con un state centralizado usando Context API o useState en el componente principal.

Ejemplo de estructura sugerida:

```tsx
const [todos, setTodos] = useState<Todo[]>([]);
```

Modelo de tarea sugerido:

```ts
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
```

## Instalación

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Criterios de evaluación para una prueba junior

Se espera que el candidato pueda:

- crear la estructura base de la app con React,
- manejar estados de forma correcta,
- implementar formularios y eventos,
- reutilizar componentes simples,
- mantener la lógica del CRUD clara y legible,
- trabajar con condicionales para mostrar estados,
- usar TypeScript para tipar datos.

## Recomendaciones adicionales

Para mejorar la prueba, se pueden agregar funcionalidades opcionales como:

- filtro por tareas completadas o pendientes,
- búsqueda por texto,
- contador de tareas pendientes,
- persistencia en localStorage,
- diseño más atractivo con Tailwind.

## Nota del proyecto actual

Este repositorio se encuentra en una base inicial de Vite + React. La lógica del CRUD aún no está implementada y sirve como punto de partida para que un desarrollador junior complete la funcionalidad de una todo list siguiendo esta guía.

## Objetivo final

Desarrollar una aplicación funcional de lista de tareas donde el usuario pueda crear, listar, actualizar y borrar elementos de forma intuitiva y con una interfaz limpia.
