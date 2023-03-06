

export interface Result {
    code: string
    message: string
}

export interface ResultData<T = {}> extends Result {
    data: T
}


export namespace Login {
    export interface ReqLoginForm {
        username: string
        password: string
    }

    export interface ResLogin {
        token: string
        userInfo: any
    }
}

export namespace Register {
    export interface ReqRegisterForm {
        username: string
        password: string
        confirmPassword: string
        captcha: string
        email: string
    }
}

export namespace Chat {
    export interface ResChatList extends User { }

    export interface ReqHistoryMessage  { 
        id:string
    }
    export interface ResHistoryMessage {
        id: number;
        text: string | null;
        image: null | string;
        fromId: string;
        toId: string;
        createTime: Date;
        isReceived: number;
    }

}

export interface User {
    id: string;
    username: string;
    nickname: string;
    password: string;
    biography: any;
    avatar: any;
    gender: any;
    birthday: any;
    telephone: any;
    email: string;
    city: any;
    points: number;
    role: number;
}


