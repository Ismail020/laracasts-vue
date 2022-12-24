import { defineStore } from 'pinia';

export let useTeamStore = defineStore('team', {
    state: () => {
        return {
            name: 'Team 1',
            spots: 0,
            members: [
            ]
        }
    },

    actions: {
        fill() {
            import('@/team.json').then(r => {
                this.$state = r.default;
            });
        },

        grow(spots) {
            this.spots = spots;
        }
    },

    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }
});