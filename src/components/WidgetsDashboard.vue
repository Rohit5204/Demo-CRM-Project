<template>
<v-card class="ma-2" :color="color">
    <v-list-item three-line>
        <v-list-item-content class="justify-center">
            <v-card-title class="widget-title justify-center">
                <v-icon class="widget-icon ml-n6" size="45">
                    {{icon}}</v-icon>
                <b class="ml-5">{{ value }}</b>
            </v-card-title>
            <hr />
            <v-card-subtitle class="widget-subtitle mt-3">
                {{title}}</v-card-subtitle>
        </v-list-item-content>
    </v-list-item>
</v-card>
</template>

<script>
export default {
    props: {
        icon: "",
        title: "",
        value: "",
        color:"",
    },
};
</script>

<style>
.widget-subtitle {
    text-align: center;
    font-size: 1rem;
    padding-top: 0.3rem !important;
}

.widget-icon {
    font-size: 34px;
}

.widget-title {
    font-size: 3rem;
}

@media screen and (max-width: 600px) {
    .widget-subtitle {
        text-align: center;
        font-size: 0.8rem;
    }

    .widget-icon {
        font-size: 25px;
    }

    .widget-title {
        font-size: 1.6rem;
    }
}
</style>
