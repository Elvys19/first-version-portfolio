import { useEffect, useState } from "react";

type TypewriterState = {
    text: string;
    wordIndex: number;
    deleting: boolean;
};

export const useTypewriter = (
    words: string[],
    typingSpeed = 75,
    pauseSpeed = 2200
) => {
    const [state, setState] = useState<TypewriterState>({
        text: "",
        wordIndex: 0,
        deleting: false,
    });

    useEffect(() => {
        const current = words[state.wordIndex % words.length];

        if (!state.deleting && state.text === current) {
            const timer = setTimeout(
                () => setState((s) => ({ ...s, deleting: true })),
                pauseSpeed
            );
            return () => clearTimeout(timer);
        }

        const timer = setTimeout(
            () =>
                setState((s) => {
                    const word = words[s.wordIndex % words.length];

                    if (s.deleting && s.text === "") {
                        return {
                            text: "",
                            wordIndex: (s.wordIndex + 1) % words.length,
                            deleting: false,
                        };
                    }

                    return {
                        ...s,
                        text: s.deleting
                            ? word.slice(0, s.text.length - 1)
                            : word.slice(0, s.text.length + 1),
                    };
                }),
            state.deleting ? typingSpeed / 2 : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [state, words, typingSpeed, pauseSpeed]);

    return state.text;
};
