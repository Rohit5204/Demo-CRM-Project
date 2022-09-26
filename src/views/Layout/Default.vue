<template>
<div>
    <sidebar v-model="drawer"></sidebar>
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="$emit('drawerclick', (drawer = !drawer))"></v-app-bar-nav-icon>
    <slot />
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
    data() {
        return {
            drawer: false,
        };
    },
    components: {
        Sidebar,
    },
};
</script>
