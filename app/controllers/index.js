import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
    @tracked completed = 0;

    get completed() {
        return this.completed;
    }

    // get pinnedTask() {
    //     return this.args.pinnedTask;
    // }
}