<template>
    <div class="register">
        <el-card class="card">
            <!-- <el-image style="width: 66%; height: auto"
                :src="loginImg" fit="cover" /> -->
            <el-form class="login-form">
                <div class="tltle">Register</div>
                <el-form-item>
                    <el-input v-model="form.name" placeholder="Username" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" placeholder="Password" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" placeholder="Confirm Password" />
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.name" placeholder="Email" />
                    <a href="#" class="captcha">获取验证码</a>
                </el-form-item>

                <el-form-item>
                    <el-input v-model="form.name" placeholder="Captcha" />
                </el-form-item>
                <div class="btn">
                    <el-button>注册</el-button>
                </div>

            </el-form>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
import loginImg from '@/assets/images/login.jpg'
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})


</script>

<style scoped lang="less">
.register {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png) center center;
    background-size: cover;

    .card {
        width: 70%;
        border: 0;
        background-color: #fff;
        border-radius: 30px;

        .el-image {
            border-radius: 20px;
        }

        :deep(.el-card__body) {

            display: flex;
            padding: 0;

            .login-form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 1;
                padding: 40px 20px;


                .el-form-item {
                    display: flex;
                    justify-content: center;

                    margin-bottom: 20px;

                    .el-form-item__content {
                        flex-direction: column;

                        .captcha {
                            font-size: 12px;
                        }
                    }


                }

                .tltle {

                    text-align: center;
                    font-size: 30px;
                    font-weight: 700;
                    margin-bottom: 20px;

                }

                .btn {
                    display: flex;
                    justify-content: center;
                }
            }
        }

    }

}
</style>