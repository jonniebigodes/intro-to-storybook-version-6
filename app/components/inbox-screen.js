import Component from "@glimmer/component";
import { action } from "@ember/object";
import { store,pinTask,archiveTask } from "../store";

/* import { pinTask, archiveTask } from "../actions"; */

export default class InboxScreenComponent extends Component {
  get loading() {
    return this.args.loading ?? store.getState().isLoading;
  }

  get error() {
    return this.args.error ?? store.getState().isError;
  }

  get tasks() {
    return store
      .getState()
      .tasks.filter(
        (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
      );
  }

  @action
  pinTask(task) {
    console.log(`inbox screen pinTask:${task}`)
    //store.dispatch(pinTask(task.id));
    store.dispatch(pinTask(task));
  }

  @action
  archiveTask(task) {
    console.log(`inbox screen archiveTask:${task}`)
    //store.dispatch(archiveTask(task.id));
    store.dispatch(archiveTask(task));
  }
}
