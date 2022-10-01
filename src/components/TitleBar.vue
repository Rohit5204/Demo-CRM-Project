<template>
<div>
    <v-app-bar app>
        <!-- <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="$emit('drawerclick', (drawer = !drawer))"></v-app-bar-nav-icon> -->
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>CRM DEMO PROJECT</v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-show="serach" class="mt-4">
            <v-text-field placeholder="Search here ...." v-model="search"></v-text-field>
        </div>
        <v-btn icon @click="serach=!serach">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <profile />
    </v-app-bar>
</div>
</template>

<script>
import Profile from '@/components/Profile.vue';

export default {
    components: {
        Profile,
    },
    data: () => ({
        serach: false,
        drawer: true,
    }),
}
</script>
