import { useState } from "react";
import Button from "./DefaultButton";

export default function Joke() {
    const apiURL = 'https://v2.jokeapi.dev/joke/Any';

    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);

        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch(apiURL, {
                signal: controller.signal
            });
            const data = await response.json();
            setJoke(data.joke || `${data.setup} ...  ${data.delivery}`);
        }
        catch (error: any) {
            if (error.name === "AbortError") {
                setJoke("Request timed out. Try again.");
            } else {
                console.error(error);
            }
        }
        finally {
            clearTimeout(timeout);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">

            <Button callApi={fetchJoke} disabled={loading}>
                Click to generate a joke
            </Button>

            <div className="mt-4 min-h-10 w-100 text-center">
                {loading ? (<div className="animate-pulse bg-gray-300 h-6 w-full rounded" />) : (<p>{joke}</p>)}
            </div>
        </div>
    );
}
