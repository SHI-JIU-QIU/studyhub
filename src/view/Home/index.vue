<template>
    <Main class="main">
        <template #left>
            <List title="热门帖子"></List>
        </template>

        <template #middle>
            <Post></Post>
        </template>

        <template #right>
            
        </template>
    </Main>
</template>

<script setup lang='ts'>
import List from '@/components/List/index.vue'
import Post from '@/components/Post/index.vue'
import Main from '@/layout/components/main/index.vue'

</script>

<style scoped>
 .main{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-items: center;
    }
</style>