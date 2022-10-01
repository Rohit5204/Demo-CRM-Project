<template>
<div>
    <v-menu bottom offset-y>
        <template v-slot:activator="{ on: onMenu }">
            <v-tooltip bottom>
                <template v-slot:activator="{ on: onTooltip }">
                    <v-avatar v-on="{ ...onMenu, ...onTooltip }" size="40" color="white">
                        <v-icon color="black">mdi-account</v-icon>
                    </v-avatar>
                </template>
                <span>Profile</span>
            </v-tooltip>
        </template>

        <v-card color="black--text">
            <v-card-title class="ml-4">Rohit Jaiswal</v-card-title>
            <v-list dark>
                <v-list-item v-for="(items, index) in menu" :key="index" :to="items.link">
                    <v-list-item-icon>
                        <v-icon color="white" v-text="items.icon"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="items.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click="logout()">
                    <v-list-item-icon >
                        <v-icon color="white" >mdi-logout</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title v-text="'Logout'"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                icon: "mdi-account",
                text: "View Profile",
                link: "/viewProfile",
            }, ],
            profileDetails: JSON.parse(localStorage.getItem("profile")),
        };
    },
    methods: {
        logout() {
            this.$router.push({ name: "Login" });
        },
    },
};
</script>

<style lang="scss" scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgb(233 226 226 / 87%);
}
</style>
