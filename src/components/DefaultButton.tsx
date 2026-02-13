type DefaultButtonProps = {
    children: string;
    callApi: () => void;
}

export default function DefaultButton({ children, callApi }: DefaultButtonProps) {
    return (
        <button type="button" onClick={callApi} className="text-white bg-blue-500 hover:bg-blue-800 box-border border border-transparent focus:ring-4 focus:ring-blue-100 shadow-xs font-medium leading-5 rounded text-sm px-4 py-2.5 focus:outline-none">{children}</button>
    )
}