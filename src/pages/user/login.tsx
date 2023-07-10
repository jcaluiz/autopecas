import Form from "@/components/user/login/Form";

export default function Login() {
    return (
        <main className="bg-white-body font-body h-screen flex items-center justify-center">
            <Form handleRouter="/" />
        </main>
    )
}