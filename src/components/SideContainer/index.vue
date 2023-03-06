<template>
    <div class="side-container">
        <el-button class="edit" circle size="large" :icon="EditPen" @click="editPost"></el-button>
        <el-backtop :right="50" :bottom="100" />

    </div>
</template>

<script setup lang='ts'>
import { EditPen, Plus, } from '@element-plus/icons-vue';
import { ElMessageBox, ElMessage, ElButton, ElInput, ElSwitch, ElUpload, ElIcon } from 'element-plus'
import { emit } from 'process';
import { h, reactive, ref } from 'vue';
import type { UploadProps, UploadUserFile } from 'element-plus'


const postForm = reactive({
    title: '',
    content: '',
    picture: []
})

const fileList = ref<UploadUserFile[]>([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'plant-1.png',
        url: '/images/plant-1.png',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'plant-2.png',
        url: '/images/plant-2.png',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'figure-1.png',
        url: '/images/figure-1.png',
    },
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'figure-2.png',
        url: '/images/figure-2.png',
    },
])



const editPost = () => {


    ElMessageBox({
        title: "发布帖子",
        message: () =>
            h('div', null, [
                h(ElInput, {

                    style: {
                        marginBottom: '20px'
                    },
                    modelValue: postForm.title,
                    placeholder: '标题',
                    'onUpdate:modelValue': (value: string) => {
                        postForm.title = value
                    }
                }),
                h(ElInput, {
                    type: "textarea",
                    style: {
                        marginBottom: '20px'
                    },
                    modelValue: postForm.content,
                    placeholder: '内容',
                    'onUpdate:modelValue': (value: string) => {
                        postForm.content = value
                    }
                }),
                h(ElUpload, {
                    listType: "picture-card",
                    moduleValue: fileList,
                    action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15'
                }, [h(ElIcon, null, [h(Plus)])])

            ]),




        // ),


        lockScroll: false,

    })
}

</script>

<style scoped lang="less">
.side-container {
    height: 100px;
    width: 50px;
    position: fixed;
    bottom: 100px;
    right: 50px;

    .edit {
        float: right;
        box-shadow: var(--el-box-shadow-lighter);
    }
}
</style>