import { useRef } from "react";
import useEffectOnce from "../useEffectOnce";

/**
 * 页面卸载时执行一次的 useEffect
 * useUnMount
 * @param fn
 */
export default function useUnmount(fn) {
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffectOnce(() => () => fnRef.current());
}
