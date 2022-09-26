<template>
<v-app>
    
    <component :is="layout">
        
        <v-main>
            <title-bar />
            <router-view />
        </v-main>

    </component>
</v-app>
</template>

<script>
const Defaultlayout = 'side'
import TitleBar from '@/components/TitleBar.vue';
export default {
    components: {
        TitleBar,

    },
    computed: {
        layout() {
            return (this.$route.meta.layout || Defaultlayout) + '-layout'
        }
    },
};
</script>
