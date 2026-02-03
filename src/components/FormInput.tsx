interface FormInputProps {
    labelName: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({labelName, type = "text", name, value, onChange}: FormInputProps) {
    return (
        <div className="relative z-0 w-full mb-5 group">
            <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />

            <label 
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{labelName}&nbsp;<span className="text-red-500">*</span></label>
        </div>
    )
}