import useEffectOnce from "../useEffectOnce";
/**
 * 页面加载时执行一次的 useEffect
 * useMount
 * @param fn 
 */
export default function useMount(fn: any) {
  useEffectOnce(() => {
    fn();
  });
}
