interface TextErrorProps {
    children: React.ReactNode;
}

export default function TextError({ children }: TextErrorProps) {
    return (
        <small className="text-sm font-medium text-red-400">{children}</small>
    );
}
