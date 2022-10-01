import { useEffect, useRef } from "react";
import type { EffectCallback, DependencyList } from 'react';

const useUpdateEffect = (effect: EffectCallback, deps: DependencyList): void => {
  const isMounted = useRef(false);

  // 页面刷新时
  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
