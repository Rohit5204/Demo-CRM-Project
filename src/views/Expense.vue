<template>
<div>
    <v-container>
        <h1 class="display-1" align="center">EXPENSES MANAGER TABLE</h1>
        <br/>
        <v-row>
            <v-col cols="10">
                <v-text-field placeholder="Search Box" append-icon="mdi-magnify" v-model="expense" outlined></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="mt-2">
                <v-btn color="success" @click="goToExpenseForm()">ADD Expense</v-btn>
            </v-col>
        </v-row>
        <expense-form v-model="dialog" :expenseData="expenseData" :addFlag="addFlag" @close="getItem()" @addExpenseData="postItem($event)" @editExpenseData="editItem($event)"></expense-form>
        <v-data-table :headers="headers" :items="items" :search="expense" class="elevation-4" hide-default-footer>
            <template v-slot:item.action="{ item }">
                <v-icon @click="sendDataForEdit(item)" color="success">mdi-square-edit-outline</v-icon> |
                <v-icon @click="deleteItem(item.id)" color="red">mdi-delete-outline</v-icon>
            </template>
        </v-data-table>
    </v-container>
</div>
</template>

<script>
import axios from "axios";
import ExpenseForm from "@/components/ExpenseForm.vue";
export default {
    components: {
        ExpenseForm,
    },
    data() {
        return {
            expenseData: {},
            addFlag: true,
            dialog: false,
            expense: "",
            headers: [
                { text: "ExpId", value: "id" },
                { text: "Category", value: "category" },
                { text: "Amount", value: "amount" },
                { text: "Date", value: "date" },
                { text: "Type", value: "type" },
                { text: "Description", value: "description" },
                { text: "Action", value: "action" },
            ],
            items: [],
        };
    },
    async mounted() {
        await this.getItem();
    },
    methods: {
        async getItem() {
            await axios
                .get("http://localhost:3000/items")
                .then((response) => (this.items = response.data));
        },
        async postItem(event) {
            await axios
                .post("http://localhost:3000/items", event)
                .then(() => this.getItem());
        },
        async editItem(event) {
            await axios
                .put("http://localhost:3000/items/" + event.id, event)
                .then(() => this.getItem());
        },
        async deleteItem(id) {
            await axios
                .delete("http://localhost:3000/items/" + id)
                .then(() => this.getItem());
        },
        sendDataForEdit(item) {
            this.expenseData = item;
            this.addFlag = false;
            this.dialog = true;
        },
        goToExpenseForm() {
            this.addFlag = true;
            this.dialog = true;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
