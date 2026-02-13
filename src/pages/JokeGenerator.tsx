import Joke from "../components/Joke";

export default function JokeGenerator() {
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-4 mt-10">
                <h1>Joke Generator Using React & JokeAPI</h1>
                <Joke />
            </div>
        </>
    )
}