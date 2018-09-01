
interface TimerI {
  set (callback :Function, time :number) :boolean
}

/**
 * 定時器
 * 避免受環境影響
 */
export function timer (callback :Function, time :number) {
  setTimeout(callback, time)
}