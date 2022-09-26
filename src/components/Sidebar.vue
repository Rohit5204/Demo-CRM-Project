<template>
<v-navigation-drawer app height="100%" color=" grey lighten-2" v-model="drawer" absolute :permanent="$vuetify.breakpoint.mdAndUp" :temporary="$vuetify.breakpoint.smAndDown" left>
    <v-list>
        <v-list-item class="px-2">
            <v-list-item-content>
                <div class="text-center">
                    <label class="display-1">Welcome</label>
                </div>
            </v-list-item-content>
        </v-list-item>
        <hr />
        <v-list-item link>
            <v-list-item-avatar color="grey">
                <v-icon size="40px">mdi-account</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="text-h6">

                </v-list-item-title>
                <v-list-item-subtitle>
                    <v-layout>
                        <v-flex>Admin

                        </v-flex>
                        <v-flex text-right>

                            <v-icon>mdi-logout</v-icon>
                        </v-flex>
                    </v-layout>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <hr />

        <v-list-item v-for="[icon, text, l] in links" :key="icon" :to="l" link>
            <v-list-item-avatar>
                <v-icon>{{ icon }}</v-icon>
            </v-list-item-avatar>

            {{ text }}
        </v-list-item>
    </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
    props: ["value", "Users"],
    computed: {
        drawer: {
            get() {
                console.log("Getting :" + this.value);
                return this.value;
            },
            set(newValue) {
                console.log("Setting :" + this.value);
                this.$emit("input", newValue);
            },
        },
    },

    data() {
        return {
            user: "",
            name: "",
            links: [
                ["mdi-view-dashboard", "Dashboard", "/"],
                ["mdi-send", "Expense", "/about"],
                ["mdi-webpack", "Leads", "/service"],
                 ["mdi-bank", "Platform", "/dept"],
                // ["mdi-account-multiple", "Employee", "/emp"],
                // ["mdi-graph", "Roles", "/role"],
            ],
        };
    },
    methods: {
        logout() {
            localStorage.removeItem("Name");
            this.$router.push({ name: "Login" });
        },
        hhh() {
            this.user = localStorage.getItem("LAST");
        },
        local() {
            this.name = localStorage.getItem("Name");
        },
    },
};
</script>
