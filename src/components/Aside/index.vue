<template>
    <div class="aside">
        <div class="post-title">热门帖子</div>
        <ul>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
            <li><a href="">dasdfoajkfnaifnioefmdsal</a></li>
        </ul>
    </div>
</template>

<script setup lang='ts' name="Aside">
import { reactive, ref } from 'vue';




</script>

<style scoped lang="less">
.aside {
    background-color: #fff;
    width: 240px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid  gray;

    .post-title {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        background-color: aqua;
    }

    ul li {
        height: 30px;

        a {
            text-align: center;
            line-height: 30px;
            display: block;
            height: 100%;
        }
    }
}
</style>