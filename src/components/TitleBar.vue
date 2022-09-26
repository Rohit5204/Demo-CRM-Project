<template>
<div>
    <v-app-bar app>
        <!-- <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="$emit('drawerclick', (drawer = !drawer))"></v-app-bar-nav-icon> -->

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>CRM DEMO PROJECT</v-toolbar-title>
        <v-spacer></v-spacer>
        <profile />
    </v-app-bar>
</div>
</template>

<script>
import Profile from '@/components/Profile.vue';
import Sidebar from './Sidebar.vue';
export default {
    components: {
        Profile,
        Sidebar,
    },
    data: () => ({
        drawer: true,
    }),
}
</script>
