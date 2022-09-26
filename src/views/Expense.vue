<template>
<div>
    <v-container>
        <h1 class="display-1" align="center">EXPENSES MANAGER TABLE</h1>
        <br />
        <v-row>
            <v-col cols="10">
                <v-text-field placeholder="Search Box" append-icon="mdi-magnify" v-model="search" outlined></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
                <v-btn color="success" @click="dialog = true">ADD Expense</v-btn>
            </v-col>
        </v-row>
        <expense-form v-model="dialog"></expense-form>
        <v-data-table :headers="headers" :items="expenses" :search="search" class="elevation-4" round-lg hide-default-footer>
            <template v-slot:item.action="{ item }">
                <v-icon color="success" @click="goToUpdatePage"> mdi-square-edit-outline </v-icon> |
                <v-icon color="red" @click="removeData(item.id)">
                    mdi-delete-outline
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</div>
</template>

<script>
import axios from 'axios';
import ExpenseForm from '@/components/ExpenseForm.vue';
export default {
    data: () => ({
        dialog: false,
        search: "",
        expenses: [],
        headers: [
            { text: 'Sr. No', value: 'id', },
            { text: 'Amount (Rs.)', value: 'amount', },
            { text: 'Date', value: 'date' },
            { text: 'Category', value: 'category' },
            { text: 'Type', value: 'type' },
            { text: 'Description', value: 'description' },
            { text: 'Actions', value: 'action' },
        ],
    }),
    components: {
        ExpenseForm,
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get("http://localhost:3000/expenses").then((res) =>
                this.expenses = res.data
            )
        },
        removeData(id) {
            axios.delete(`http://localhost:3000/expenses/${id}`);
            this.expenses = this.expenses.filter((expense) => expense.id !== id);
        },
        goToUpdatePage() {
            this.dialog = true;
        }
    },
}
</script>
