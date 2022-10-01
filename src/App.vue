<template>
<v-app>
    <component :is="layout">
        <v-main>
            <router-view />
        </v-main>
    </component>
</v-app>
</template>

<script>
const Defaultlayout = 'side'
export default {
    computed: {
        layout() {
            return (this.$route.meta.layout || Defaultlayout) + '-layout'
        }
    },
};
</script>
