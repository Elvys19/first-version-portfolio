import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CounterProps = {
    target: number;
    suffix?: string;
    duration?: number;
};

const Counter = ({ target, suffix = "", duration = 1200 }: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        const step = Math.ceil(target / (duration / 16));
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setValue(current);
        }, 16);

        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
};

export default Counter;
