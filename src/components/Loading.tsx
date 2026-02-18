interface LoadingProps {
    size?: string;
}

export default function Loading({ size }: LoadingProps) {
    return (
        <div className={`animate-pulse bg-gray-300 h-6 ${size || 'w-full'} rounded`} />
    );
}