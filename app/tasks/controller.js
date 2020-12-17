// app/tasks/controller.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { store ,pinTask,archiveTask} from '../store';
/* import { pinTask, archiveTask } from '../actions'; */

export default class TaskController extends Controller {
  @action
  pinTask(task) {
    store.dispatch(pinTask(task));
    //store.dispatch(pinTask(task.id));
  }

  @action
  archiveTask(task) {
    store.dispatch(archiveTask(task));
    //store.dispatch(archiveTask(task.id));
  }
}