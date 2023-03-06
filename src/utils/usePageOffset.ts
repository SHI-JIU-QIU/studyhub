
import {onBeforeUnmount, onMounted} from 'vue'



export const usePageOffset = (cb:any) => {



    onMounted(()=>{
        window.addEventListener('scroll',cb)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll',cb)
    })
    


}

