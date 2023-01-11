<template>
    <div>
        <Header>
            <template #left>
                <Title></Title>
            </template>

            <template #middle>
                <Nav class="mx-20"></Nav>
            </template>

            <template #right>
                <div class="flex items-center justify-start w-full">
                    <Avatar class="ml-auto"></Avatar>
                </div>
            </template>
        </Header>
    </div>
</template>

<script setup lang='ts'>
import Header from '../components/header/index.vue';
import Title from '@/components/Title/index.vue'
import Nav from '@/components/Nav/index.vue'
import Search from '@/components/Search/index.vue'
import Avatar from '@/components/Avatar/index.vue'


</script>

<style scoped>

</style>