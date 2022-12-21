export default {
    template: `
        <div class="flex gap-2 overflow-x-auto"> 
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border border-gray-600 rounded px-1 py-px text-xs"
                :class="{ 'border-blue-500 text-blue-500': tag == currentTag }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}