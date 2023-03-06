<template>
    <div  class="">
        <div class="post">


            <div class="post-user">
                <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <div class="post-name">
                    <span class="">Hello</span>
                    <span class="post-time">{{ new Date() }}</span>
                </div>
                <div class="follow">
                    <a href="" class="">关注</a>
                </div>

            </div>
            <div class="post-content">
                <div>#王濛苏醒不舍诸神黄昏# 卡塔尔世界杯决战今夜，#濛主来了之我的眼睛就是尺# 也到了最后一期。@王濛 现场谈到“诸神的黄昏”，引发众人感慨。@苏醒AllenSu
                    说自己能在三十几岁时看上三届世界杯是幸运的。@大嘴韩乔生 也感叹“青春不过几届世界杯”#世界杯# 咪咕体育的微博视频 ​</div>
                <div class="pt-3">
                    <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                        :zoom-rate="1.2" :initial-index="4" fit="cover" />
                </div>
            </div>
            <div class="post-handle">
                <div class="  hvr-back-pulse "><el-icon size="22">
                        <Opportunity />
                    </el-icon> <span class="">1236</span></div>
                <div class="  hvr-back-pulse "><el-icon size="22">
                        <ChatDotRound />
                    </el-icon> <span class="">1999</span></div>
            </div>
        </div>








    </div>
</template>

<script setup lang='ts'>
import { Document, Guide, Histogram, Opportunity, ChatDotRound } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';





</script>

<style scoped lang="less">
.post {
    width: 600px;
    // border: 1px solid black;
    box-shadow: var(--el-box-shadow-light);
    padding: 20px;

    .post-user {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
       

        .post-name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;

            .post-time {
                font-size: 12px;
                color: gray;
            }
        }

        .follow {
            margin-left: auto;
            font-size: 14px;

            padding: 5px 20px;
            border-radius: 20px;
            background-color: #ffc524;
        }
    }
    .post-handle{
        display: flex;
        height: 40px;
        justify-content: space-around;
        align-items: center;
    }
}


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