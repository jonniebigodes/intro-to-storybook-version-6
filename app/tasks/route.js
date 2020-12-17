// app/tasks/route.js
import Route from '@ember/routing/route';
import { store } from '../store';

export default class TasksRoute extends Route {
  model() {
    // thanks to tracked redux, store.getState()
    // returns a tracked state
    // whenever the state changes, these will be reflected in the template
    return store.getState().tasks.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
  }
}