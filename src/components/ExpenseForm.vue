<template>
<v-dialog v-model="dialog" max-width="550px" persistent>
    <v-card>
        <v-card-title>Expense Form</v-card-title>
        <v-container>
            <v-row>
                <v-col>
                    <v-select :items="categories" v-model="expense.category" placeholder="Category" outlined></v-select>
                </v-col>
                <v-col>
                    <v-text-field v-model="expense.date" placeholder="Date" type="date" outlined></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-select :items="types" v-model="expense.type" placeholder="Type" outlined></v-select>
                </v-col>
                <v-col>
                    <v-text-field v-model="expense.amount" placeholder="Amount" outlined></v-text-field>
                </v-col>
            </v-row>
            <v-textarea v-model="expense.description" placeholder="Description" outlined></v-textarea>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="postItem()" color="success" outlined>{{ buttonText}}</v-btn>
                <v-btn @click="closeDialog()" color="error" outlined>Cancel</v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    props: ["value", "expenseData", "addFlag"],
    data() {
        return {
            expense: {},
            categories: ["General Expenses", "Shopping", "Utilities", "Travel"],
            types: ["credit card", "debit card", "cash"],
        };
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            },
        },
        buttonText() {
            if (this.addFlag) {
                this.expense = {};
                return "Submit";
            } else {
                this.expense = this.expenseData;
                return "Edit";
            }
        },
    },
    methods: {
        postItem() {
            if (this.addFlag) this.$emit("addExpenseData", this.expense);
            else this.$emit("editExpenseData", this.expense);
            this.dialog = false;
        },
        closeDialog() {
            this.$emit('close')
            this.dialog = false;
        },
    },
};
</script>

<style lang="css" scoped></style>
