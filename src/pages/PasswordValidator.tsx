import validator from "validator";
import { useState } from "react";

export default function PasswordValidator() {
    const [password, setPassword] = useState("");
    const [isStrong, setIsStrong] = useState<boolean | null>(null);

    const validate = (value: string) => {
        setPassword(value);

        const strong = validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        });

        setIsStrong(strong);
    };

    return (
        <div>
            <label htmlFor="password">Enter Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => validate(e.target.value)}
            />

            {isStrong !== null && (
                <p
                    style={{
                        fontWeight: "bold",
                        color: isStrong ? "green" : "red",
                    }}
                >
                    {isStrong ? "Password is strong!" : "Password is weak!"}
                </p>
            )}
        </div>
    );
}
