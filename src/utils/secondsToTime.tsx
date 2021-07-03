export const secondsToTime = (seconds: any) => {
    let string = `${new Date(seconds*1000).toLocaleTimeString(['pl'], {hour: '2-digit', minute:'2-digit'})}`
    return `${string}`
  }