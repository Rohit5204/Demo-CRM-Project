<template>
<v-flex>
    <v-layout wrap>
        <v-flex md4 v-for="i in dashboardItems" :key="i.title">
            <widgets-dashboard class="elevation-8" :value="i.value" :title="i.title" :icon="i.icon" :color="i.color"></widgets-dashboard>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-row>
            <v-col cols="12">
                <v-card class="ml-2 mr-2" width="580" elevation="10">
                    <v-card-subtitle><strong>Bar Representation Of Data</strong></v-card-subtitle>
                    <bar-widget />
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="mb-5">
                <v-card elevation="10" class="mr-1" width="auto">
                    <v-card-title primary-title>
                        PLATFORM WISE LEADS
                    </v-card-title>
                    <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-layout>
    <v-layout>
        <v-row>
            <v-col>
                <v-card class="ml-2 mt-5 mr-2" elevation="10">
                    <v-card-title>Platform Wise Donut Representation </v-card-title>
                    <v-row>
                        <v-col>
                            <strong class="pl-8">Facebook</strong>
                            <pie-widget />
                        </v-col>
                        <v-col>
                            <strong>Instagram</strong>
                            <pie-widget />
                        </v-col>
                        <v-col>
                            <strong>Justdial</strong>
                            <pie-widget />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-layout>
</v-flex>
</template>

<script>
import BarWidget from '@/components/BarWidget.vue';
import PieWidget from '@/components/PieWidget.vue';
import WidgetsDashboard from '@/components/WidgetsDashboard.vue';
export default {
    components: {
        WidgetsDashboard,
        BarWidget,
        PieWidget
    },
    data() {
        return {
            headers: [{
                    text: 'Platform Name',
                    value: 'name',
                },
                { text: 'Total Leads', value: 'count' },
            ],
            desserts: [{
                    name: 'Facebook',
                    count: 159,

                }, {
                    name: 'Instagram',
                    count: 250,

                }, {
                    name: 'Justdial',
                    count: 450,

                },
                {
                    name: 'India Mart',
                    count: 24,

                },
            ],
            dashboardItems: [{
                    value: 21,
                    title: "Total Leads",
                    icon: "mdi-calendar-month",
                    color: "cyan darken-3"
                },
                {
                    value: 15,
                    title: "Active Leads",
                    icon: "mdi-send",
                    color: "deep-orange  lighten-3"
                },
                {
                    value: 8,
                    title: "Closed Leads",
                    icon: "mdi-send",
                    color: "blue-grey lighten-4"
                },
            ],
            // platformItems: [{
            //         value: 11,
            //         title: "Facebook",
            //         icon: "mdi-facebook",

            //     },
            //     {
            //         value: 35,
            //         title: "Instagram",
            //         icon: "mdi-instagram",

            //     },
            //     {
            //         value: 41,
            //         title: "Justdial",
            //         icon: "mdi-circle",

            //     },
            //     {
            //         value: 15,
            //         title: "India Mart",
            //         icon: "mdi-google-plus",

            //     },
            // ],
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
