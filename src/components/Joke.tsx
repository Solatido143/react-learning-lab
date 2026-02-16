import { useState, useEffect, useRef } from "react";
import Button from "./JokeButton";

export default function Joke() {
    const apiURL = 'https://v2.jokeapi.dev/joke/Any';

    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    const fetchJoke = async () => {
        if (loading) return;

        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        const timeout = setTimeout(() => controller.abort(), 5000);

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

            <div className="mt-4 min-h-10 w-100">
                {loading ? (
                    <div className="space-y-2">
                        <div className="animate-pulse bg-gray-300 h-6 w-full rounded" />
                        <div className="animate-pulse bg-gray-300 h-6 w-3/4 rounded" />
                    </div>
                ) : (<p>{joke}</p>)}
            </div>
        </div>
    );
}
