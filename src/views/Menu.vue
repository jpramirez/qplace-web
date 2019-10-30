<template>
    <div>
        <home-plans></home-plans>
        <meal-recipes></meal-recipes>
        <upload></upload>
    </div>
</template>

<script>
import HomePlans from '@/components/HomePlans';
import MealRecipes from '@/components/MealRecipes';
import Upload  from '@/components/UploadComponent';

export default {
    name: 'Menu',
    components: {
        HomePlans,
        MealRecipes,
        Upload
    }
};
</script>

<style scoped></style>
