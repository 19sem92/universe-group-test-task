export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className="w-full p-2 border rounded focus:outline-blue-500"
            {...props}
        />
    );
}