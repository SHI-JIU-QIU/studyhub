<template>
    <div class="bg-#f5f5f5  h-1000px">
        <div class="grid grid-cols-4 h-full max-w-1200px mx-auto gap-3 py-3">
            <div class="bg-white ">
                <ul class="py-10 px-6">
                    <li class="h-50px flex justify-center items-center hvr-fade rounded"><el-icon>
                            <Document />
                        </el-icon><a href="" class="ml-3 text-gray-700">热门帖子</a> </li>
                    <li class="h-50px flex justify-center items-center hvr-fade rounded"><el-icon>
                            <Guide />
                        </el-icon><a href="" class="ml-3 text-gray-700">热门分区</a> </li>
                    <li class="h-50px flex justify-center items-center hvr-fade rounded"><el-icon>
                            <Histogram />
                        </el-icon><a href="" class="ml-3 text-gray-700">粉丝排行</a> </li>
                </ul>
            </div>
            <div class="col-span-2">
                <div class="bg-white overflow-hidden">
                    <div class="flex items-center px-4 py-4">
                        <el-avatar :size="50"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <div class="flex flex-col ml-2">
                            <span class="text-lg">Hello</span>
                            <span class=" text-xs color-gray-500">{{ new Date() }}</span>
                        </div>
                        <div class="rounded-full border-1 border-#ffc524  text-sm ml-auto">
                            <a href="" class=" color-#ffc524 px-4 py-1 block">关注</a>
                        </div>

                    </div>
                    <div class="px-8 ">
                        <div>#王濛苏醒不舍诸神黄昏# 卡塔尔世界杯决战今夜，#濛主来了之我的眼睛就是尺# 也到了最后一期。@王濛 现场谈到“诸神的黄昏”，引发众人感慨。@苏醒AllenSu
                            说自己能在三十几岁时看上三届世界杯是幸运的。@大嘴韩乔生 也感叹“青春不过几届世界杯”#世界杯# 咪咕体育的微博视频 ​</div>
                        <div class="pt-3">
                            <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                                :zoom-rate="1.2" :initial-index="4" fit="cover" />
                        </div>
                    </div>
                    <div class="flex justify-around items-center my-2 ">
                        <div class="w-100px h-50px rounded-full  hvr-back-pulse items-center justify-center"><el-icon
                                size="22">
                                <Opportunity />
                            </el-icon> <span class="color-gray-500 text-xs ml-1">1236</span></div>
                        <div class="w-100px h-50px rounded-full  hvr-back-pulse items-center justify-center"><el-icon
                                size="22">
                                <ChatDotRound />
                            </el-icon> <span class="color-gray-500 text-xs ml-1">1999</span></div>
                    </div>
                </div>


            </div>


            <div class="bg-white pt-4">
                <h3>正在热搜</h3>
                <ul class="px-4 ">
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                    <li class="mb-2"><a href="#" class="flex items-center"><span class="color-red-600 text-lg">1</span> <span class="mx-2 truncate">dnisdhaisdindkadasdnasuhnaufihiasfasjk</span> <span class="text-xs ml-auto color-gray-500">1523w</span></a></li>
                </ul>

            </div>
        </div>


    </div>
</template>

<script setup lang='ts'>
import { Document, Guide, Histogram, Opportunity, ChatDotRound } from '@element-plus/icons-vue';
let a: Array<number> = [1, 2, 3]




</script>

<style scoped>
.hvr-fade,
.hvr-back-pulse {
    display: flex;
}

.hvr-fade:hover {
    background-color: #ffc524;
}

.hvr-back-pulse:hover,
.hvr-back-pulse:focus,
.hvr-back-pulse:active {
    background-color: rgb(231, 231, 231) !important;
}
</style>