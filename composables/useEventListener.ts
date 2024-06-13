/**
 * 事件監聽
 * 傳入參數與 addEventListener / removeEventListener 相同
 * onMounted 新增事件監聽
 * onUnmounted 移除事件監聽
 * TODO: VueUse 有提供，之後安裝後撤掉這邊的程式碼
 */
export const useEventListener = (
  target: EventTarget,
  type: string,
  callback: EventListenerOrEventListenerObject | null,
  options?: AddEventListenerOptions | boolean,
) => {
  onMounted(() => {
    target.addEventListener(type, callback, options);
  });

  onUnmounted(() => {
    target.removeEventListener(type, callback, options);
  });
};
