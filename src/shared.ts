import { createSSRApp } from 'vue';
import App from './App.vue';
import type { TodoItem } from './api/axios-apilist';

export function createApp(props: { todos: TodoItem[] }) {
  return createSSRApp(App, {
    todos: props.todos,
  });
}
