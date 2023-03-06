<template>
    <div class="login">
        <el-card shadow="always" class="card">
            <el-image style="width: 66%; height: auto"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            <el-form class="login-form" :rules="rules" :model="loginForm" ref="loginFormRef" status-icon>
                <div class="tltle">Sign into your account</div>
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="Username" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" placeholder="Password" />
                </el-form-item>
                <div class="btn">
                    <el-button @click="login(loginFormRef)">登录</el-button>
                    <el-button type="danger">忘记密码</el-button>
                </div>

            </el-form>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { inject, reactive, Ref, ref } from 'vue'
import { loginApi } from '@/api/module/user'
import type { FormInstance, FormRules } from 'element-plus';
import { GlobalStore } from '@/store/globalState';
import { useRouter } from 'vue-router';
import { getCurrentInstance } from "vue";
import { io, Socket } from 'socket.io-client'
import { storeToRefs } from 'pinia';


const loginFormRef = ref<FormInstance>()
const globalState = GlobalStore()
const router = useRouter()

const socket = inject<Ref<Socket>>('socket')


const loginForm = reactive({
    username: '',
    password: ''
})



const rules = reactive<FormRules>({
    username: [
        {
            required: true, message: 'Please select Activity zone', trigger: 'blur',
        }

    ],
    password: [{
        required: true,
        message: 'Please select Activity zone',
        trigger: 'blur',
    }]
})



const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                const { data } = await loginApi(loginForm)
                //保存token
                const{token,userInfo} = storeToRefs(globalState)
                token.value = data.token
                userInfo.value = data.userInfo
                router.push('/page/chat')
               

            } catch (error) {

            }


        } else {
            console.log('error submit!', fields)
        }
    })
}



</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1000px;
    background: url(https://static.zhihu.com/heifetz/assets/sign_bg.47eec442.png) center center;
    background-size: cover;

    .card {
        width: 70%;
        border-radius: 30px;
        padding: 20px;

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
                    margin-bottom: 40px;

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