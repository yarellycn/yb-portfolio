import { useState, useEffect } from "react";

export function useFormField(validate) {
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const [touched, setTouched] = useState(false)

    useEffect(() => {
        const validationError = validate(value);
        setError(validationError);
    }, [value, validate]);

    function onChange(e) {
        setValue(e.target.value);
        setTouched(true);
    }

    function reset(){
        setValue("");
        setError("");
        setTouched(false);
    }

    return {
        value,
        error,
        touched,
        onChange,
        reset
    };
}