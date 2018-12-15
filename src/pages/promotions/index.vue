<template>
    <div>
        <immadb-index-content
            title="Promotions"
        >
        <!-- <immadb-index-content
            title="Past Events"
            :pagination="pagination"
            :loading="loading"
        > -->
            <!-- <ul class="list-unstyled mb-0" v-if="events">
                <immadb-event-entry v-for="event in events" :key="event.id" :event="event" />
            </ul> -->
        </immadb-index-content>
    </div>
</template>

<script>
// import eventEntry from "./../common/event-entry";
import indexContent from "@/components/content/index";

export default {
    components: {
        // 'immadb-event-entry': eventEntry,
        'immadb-index-content': indexContent,
    },
    data() {
        return {
            loading: false,
            // events: null,
            // pagination: null,
        };
    },
    computed: {
        promotions() {
            let data = this.$store.getters['promotions/data'];
// console.log('computed promotions data:');
// console.log(data);
            return data ? data.data : null;
        },
        pagination() {
            let data = this.$store.getters['promotions/data'];
            return data ? data.meta : null;
        },
        page() {
            return this.$route.query.page ? this.$route.query.page : 1;
        },
    },
    methods: {
        buildParams(params = { page: 1 }) {
            for (let k in this.params) {
                if (!params[k]) {
                    params[k] = this.params[k];
                }
            }

            return params;
        },
        getPromotions(params = null) {
        // async getPastEvents(params = null) {
            try {
                this.loading = true;

                const p = (!params ? this.buildParams() : this.buildParams(params));

                this.$store.dispatch('promotions/index', { page: this.page });
            //     // const data = await this.$store.dispatch('events/past', { page: this.page });
            //     // const data = await this.$store.dispatch('events/past', p);
            //
            //     // this.events = data.data;
            //     // this.pagination = data.meta;
            } catch (err) {
                console.log(err);
                // this.error = get(err, "response.data", {});
                // this.error.errors = mapKeys(this.error.errors, (val, key) => `data.${key}`);
            } finally {
                this.loading = false;
            }
        },
    },
    watch: {
        '$route': 'getPromotions',
    },
    created() {
        console.log('Promotions index page created.')
        // this.clearFilters();
        this.getPromotions();
    },
    mounted() {
        console.log('Promotions index page mounted.')
    },
};
</script>

<style lang="scss" scoped>
    ul.list-unstyled li.media:not(:last-child) {
    	margin-bottom: 0.75em;
    }
</style>
