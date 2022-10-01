<template>
<v-container>
    <v-card flat color="grey lighten-3" max-width="auto">
        <v-card-text>
            <center>
                <h2>User Profile</h2>
            </center>
        </v-card-text>
        <v-row class="ml-2 mr-2">
            <v-col>
                <v-text-field label="Name" outlined v-model="user.name"></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Email" outlined v-model="user.email" readonly></v-text-field>
            </v-col>
        </v-row>
        <v-row class="ml-2 mr-2">
            <v-col>
                <v-text-field label="Status" v-model="user.status" outlined></v-text-field>
            </v-col>
            <v-col>
                <v-text-field label="Mobile" v-model="user.mobile" outlined></v-text-field>
            </v-col>
        </v-row>
        <div class="text-xs-center">
            <v-btn color="success" @click="message()">Submit</v-btn> &nbsp;
            <v-btn color="red" to="/dashboard">Cancel</v-btn>
        </div>
    </v-card>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            user: {
                id: 3,
                name: "Rohit",
                email: "rohit@gmail.com",
                mobile: "2022-09-14",
                type: "Customer",
                status: "Active",
            },

        }
    },
    methods: {
        message() {
            alert("Are You Sure you want to change....")
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
