<template>
    <div>
        <el-popover placement="top" :visible="visible" trigger="click" :width="400"  @show="visible=true">
            <template #reference >
                <el-button class="m-2" @click="visible = !visible">{{ emojiJson[0] }}</el-button>
            </template>
            <div class="emoji-list">
                <ul @click="chooseEmoji">
                    <li v-for="(item, index) in emojiJson" :data-index="index">{{ item }}</li>
                </ul>
            </div>
        </el-popover>
    </div>
</template>

<script setup lang='ts'>
import emoji from './emoji.json'
import { ElPopover } from 'element-plus';
import { ref } from 'vue';

const emojiJson = ref<string[]>(emoji.data.split(','))
const visible = ref(false)

const emit = defineEmits(['setEmoji'])
// const prop = defineProps<{
//     emojiValue: string
// }>()


const chooseEmoji = (e: any) => {
  
    if (!e.target.dataset.index) return
    emit('setEmoji', emojiJson.value[e.target.dataset.index])
      visible.value = false
}





</script>

<style scoped lang="less">
.emoji-list {
    ul {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        justify-items: center;
        height: 300px;
        overflow-y: auto;

        li {
            padding: 5px;
            display: inline;
            font-size: 16px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            text-align: center;

            &:hover {
                background-color: rgb(222, 222, 222);
            }
        }
    }

}
</style>