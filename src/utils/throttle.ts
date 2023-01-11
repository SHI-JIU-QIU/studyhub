export function throttle(func: Function, delay: number) {
    let timer: any = null
    return function () {
        if (timer) {
            return
        }
        timer = setTimeout(function () {
            func()
            timer = null
        }, delay)
    }
}