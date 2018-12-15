<template>
    <el-container>
        <el-header>
            <el-container>
                <el-row>
                    <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                </el-row>
                <el-row justify="space-between">
                    <el-col :span="12">
                        <!-- <immadb-watchlist-toggle v-if="watchable" class="float-left mr-2"></immadb-watchlist-toggle> -->
                        <h2 class="mb-0">
                            {{ title }}
                            <small v-if="pagination" class="text-muted">{{ pagination.total }}</small>
                        </h2>
                    </el-col>

                    <el-col :span="12">
                        <div>pagination goes here</div>
                        <div v-if="pagination" class="float-right">
                            <!-- <b-pagination-nav
                                :disabled="loading"
                                :number-of-pages="numberOfPages"
                                :value="currentPage"
                                @input="input"
                                :link-gen="linkGen"
                            /> -->
                        </div>
                    </el-col>
                </el-row>
            </el-container>
        </el-header>

        <el-main>Main</el-main>

        <el-footer>Footer</el-footer>
    </el-container>

    <!-- <b-card no-body>
        <b-card-header>
            <b-container>
                <b-row>
                    <b-col class="p-0">
                        <immadb-watchlist-toggle v-if="watchable" class="float-left mr-2"></immadb-watchlist-toggle>
                        <h2 class="mb-0">
                            {{ title }}
                            <small v-if="pagination" class="text-muted">{{ pagination.total }}</small>
                        </h2>
                    </b-col>
                    <b-col class="p-0">
                        <div v-if="pagination" class="float-right">
                            <b-pagination-nav
                                :disabled="loading"
                                :number-of-pages="numberOfPages"
                                :value="currentPage"
                                @input="input"
                                :link-gen="linkGen"
                            />
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </b-card-header>
        <b-card-body>
            <slot></slot>
        </b-card-body>
        <b-card-footer>
            <b-container>
                <b-row>
                    <b-col class="p-0">
                        &nbsp;
                    </b-col>
                    <b-col class="p-0">
                        <div v-if="pagination" class="float-right">
                            <b-pagination-nav
                                :disabled="loading"
                                :number-of-pages="numberOfPages"
                                :value="currentPage"
                                @input="input"
                                :link-gen="linkGen"
                            />
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </b-card-footer>
    </b-card> -->
</template>

<script>
// import ratings from './../general/ratings';
// import watchlistToggle from './../general/watchlist-toggle';

export default {
    components: {
        // 'immadb-ratings': ratings,
        // 'immadb-watchlist-toggle': watchlistToggle,
    },
    props: {
        'title': {
            type: String,
            required: true,
        },
        'pagination': {
            type: Object,
            required: false,
            default: null,
        },
        'loading': {
            type: Boolean,
            required: false,
            default: true,
        },
        'watchable': {
            type: Boolean,
            required: false,
            default: false,
        },
        'ratable': {
            type: Boolean,
            required: false,
            default: false,
        },
        'ratingUrl': {
            type: String,
            required: false,
            default: null,
        },
        'userRating': {
            // type: Number,
            // required: false,
            default: null,
        },
        'averageRating': {
            type: Number,
            required: false,
            default: null,
        },
    },
    computed: {
        currentPage() {
            return this.pagination.current_page;
        },
        numberOfPages() {
            return this.pagination.last_page;
        },
        // totalRows() {
        //     return this.pagination.total;
        // },
        // rowsPerPage() {
        //     return this.pagination.per_page;
        // },
    },
    methods: {
        input(pageNum) {
            this.$emit('pageChange', pageNum);
        },
        // @todo Not currently using b-pagination-nav due to issues (first,
        // prev, next, last links) and figuring out how best to use it (without
        // reloading (page) component, for example).  Want to get where pages
        // are bookmarkable.
        // @todo If using b-pagination-nav and router-links, then we need to get
        // the route name from the parent component.
        linkGen(pageNum) {
            // return '?page=' + pageNum;
            return {
                name: 'past-events',
                query: {
                    page: pageNum,
                },
            };
        },
    },
}
</script>
