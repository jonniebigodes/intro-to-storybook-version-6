import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Task extends Component {
  // computed property for the component (to assign a value to the task state checkbox)
  get isArchived() {
    return this.args.task.state === 'TASK_ARCHIVED';
  }

  // actions available to the task, the usage of (?) will check if the argument exists
  @action
  pin() {
    this.args.pin?.(this.args.task.id);
  }

  @action
  archive() {
    this.args.archive?.(this.args.task.id);
  }
}