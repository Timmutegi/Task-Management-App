import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model() {
        return [
            this.store.createRecord('task', {
                id: 1,
                name: 'Complete frontend challenge',
                description: 'Easy as Pie',
                isComplete: false,
                creator: 2
            }),
            this.store.createRecord('task', {
                id: 2,
                name: 'Feel Awesome',
                description: 'Accomplishing stuff is the best.',
                isComplete: false,
                creator: 2
            }),
            this.store.createRecord('task', {
                id: 3,
                name: 'Join an Awesome team',
                description: 'Friends, coffee and building stuff',
                isComplete: false,
                creator: 2
            })
        ];
    }
}