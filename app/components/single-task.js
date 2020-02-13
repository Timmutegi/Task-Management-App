import Component from '@glimmer/component';
import { action } from "@ember/object";

export default
class SingleTaskComponent extends Component {
    @action
    pinTask(task) {
        console.log(task);
        this.pinnedTask('pinTask');
    }

}