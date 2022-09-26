<template>
<div>
    <v-dialog v-model="dialog" max-width="550">
        <v-card>
            <v-card-title>
                <span class="text-h5">Expense Form</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-select :items="categories" v-model="expense.category" placeholder="Select Category" required outlined> </v-select>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="expense.date" placeholder="Select Date" type="date" required outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select :items="type" v-model="expense.type" placeholder="Select Type" required outlined> </v-select>
                        </v-col>
                        <v-col>
                            <v-text-field v-model="expense.amount" placeholder="Enter Spent Amount " required outlined></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-textarea placeholder="Description" v-model="expense.description" outlined></v-textarea>
                    </v-row>
                    <v-btn color="success" @click="addData">Submit</v-btn>&nbsp;
                    <v-btn color="error" @click="dialog=false">Cancel</v-btn>
                </v-container>
            </v-card-text>
        </v-card>

    </v-dialog>
</div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["value"],
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(newValue) {
                this.$emit("input", newValue);
            },
        },
    },
    data() {
        return {
            expense: {
                id: null,
                category: "",
                date: "",
                type: "",
                amount: "",
                description: ""
            },
            categories: ["Shooping", "Utility", "Bills", "Others"],
            type: ["Credit Card", "Debit Card", "Cash"]
        }
    },
    methods: {
        //method for adding expenses in the list
        addData() {
            axios.post("http://localhost:3000/expenses", this.expense).then(() =>
                axios.get("http://localhost:3000/expenses"));
            this.dialog = false;
        },

    },
}
</script>
