<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">My Audio - </h1>
            <upload></upload>
            <div
                v-for="(item, idx) in userRecipes"
                class="subheading mb-2"
                :key="idx"
            >
                {{ item }}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Menu</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import Upload  from '@/components/UploadComponent';

export default {
    name: 'About',
    components:{
        Upload
    },
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    }
};
</script>

<style scoped></style>
