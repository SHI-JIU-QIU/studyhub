<template>
    <div>
        <Header class="justify-between">
            <template #left>
                <el-icon size="24" class="nav"><MoreFilled /></el-icon>
            </template>

            <template #middle>
                <Title></Title>
            </template>

            <template #right>
                <Avatar></Avatar>
            </template>

        </Header>
    </div>
</template>

<script setup lang='ts' name="LayoutSmall">
import Header from '../components/header/index.vue';
import Title from '@/components/Title/index.vue'
import Nav from '@/components/Nav/index.vue'
import Search from '@/components/Search/index.vue'
import Avatar from '@/components/Avatar/index.vue'
import {MoreFilled} from '@element-plus/icons-vue'

</script>

<style scoped>
.nav{
    width: 46px !important;
}

</style>