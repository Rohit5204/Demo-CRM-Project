<template>
<div>
    <v-app app>
        <v-main>
            <div class="mt-10">
                <v-container class="fill-height" fluid>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8" md="4">
                            <v-card class="elevation-12">
                                <v-toolbar color="primary" dark flat>
                                    <v-toolbar-title class="ml-30">Login </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-tooltip bottom> </v-tooltip>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form>
                                        <b> User Name *</b>
                                        <v-text-field v-model="Users.username" placeholder="Enter Your User Name or Email" :rules="rules" append-icon="mdi-account" outlined background-color="white">
                                        </v-text-field>
                                        <b> Password *</b>
                                        <v-text-field v-model="Users.password" type="password" :rules="password" placeholder="Enter Your Password" append-icon="mdi-lock" outlined background-color="white">
                                        </v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" to="/dashboard">Login</v-btn>
                                    <div v-if="invalid">Invalid Login</div>
                                    &nbsp;
                                    <v-btn color="primary" to="/">Register</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-main>
    </v-app>
</div>
</template>

<script>
export default {
    data() {
        return {
            Users: {
                username: "",
                password: "",
            },
            rules: [
                (value) => !!value || "User Name Required.",
                (value) => (value && value.length >= 3) || "Min 3 characters",
            ],
            password: [
                (value) => !!value || "Password Should Not Empty",
                (value) =>
                (value && value.length >= 8) || "Min 8 characters or Numbers ",
            ],
        };
    },
    methods: {
        showAlert() {
            alert(" Welcome Back To Dashboard. Click 'ok' to Continue ");
        },

        hello() {
            this.$router.push({ name: "dashboard" });
        },
    },
};
</script>
