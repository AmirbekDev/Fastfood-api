export const verifyCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
}
export const differentBetweenDates = (start: Date, end: Date) => {
    return (end.getTime() - start.getTime())
}

export const getTimeOut = (time: Date, timeOutSeconds: number) => {
    const elapsedTimeMillis = differentBetweenDates(time, new Date())
    return Math.round(timeOutSeconds - elapsedTimeMillis / 1000)
}