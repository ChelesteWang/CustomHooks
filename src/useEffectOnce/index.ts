import { useEffect } from "react";
/**
 * 只执行一次的 useEffect
 * 效果等价于 componentDidMount
 * @param effect
 */
export default function useEffectOnce(effect: any) {
  useEffect(effect, []);
}
