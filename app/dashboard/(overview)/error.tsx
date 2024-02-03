'use client'

export default function Error({error, reset,}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    return (
        <main className="flex h-full flex-col items-center justify-center">
            <h2 className="text-center">Something went dashboard!</h2>
        </main>
    );
}