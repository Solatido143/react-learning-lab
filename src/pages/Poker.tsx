import { useState, useEffect } from 'react';
import type { Card, DeckResponse, DrawResponse } from '../types/deck';

import Loading from '../components/Loading';

export default function Poker() {
    const [deck, setDeck] = useState<DeckResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [playerHand, setPlayerHand] = useState<Card[]>([]);

    const count = 2

    useEffect(() => {
        const controller = new AbortController();

        async function fetchDeck() {
            // if (import.meta.env.DEV) {
            //     await new Promise(resolve => setTimeout(resolve, 2000));
            // }

            try {
                setLoading(true);
                setError(null);

                // fetch a new shuffled deck
                const res = await fetch(
                    'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1',
                    { signal: controller.signal }
                );

                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const deckData: DeckResponse = await res.json();

                const drawRes = await fetch(
                    `https://deckofcardsapi.com/api/deck/${deckData.deck_id}/draw/?count=${count}`,
                    { signal: controller.signal }
                )

                if (!drawRes.ok) throw new Error(`HTTP error! status: ${drawRes.status}`);

                const drawData: DrawResponse = await drawRes.json();

                setPlayerHand(drawData.cards);

                setDeck(deckData);
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchDeck();

        return () => controller.abort();
    }, []);

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Poker Game</h1>
            {loading ? (
                <div className="space-y-2">
                    <Loading size="w-1/3" />
                </div>
            ) : deck && (

                <>
                    <p>
                        Player Hand:
                        {playerHand.map((card) => (
                            <span key={card.code} className="ml-2">
                                {card.value} of {card.suit}
                            </span>
                        ))}
                    </p>
                </>
            )}
        </div>
    )
}
