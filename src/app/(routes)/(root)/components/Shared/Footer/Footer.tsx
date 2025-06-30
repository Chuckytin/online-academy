import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-4 px-6 border-t bg-white w-full">
            <div className="flex justify-between items-center text-sm text-slate-500">
                <p>2025 © Lirys Luna</p>
                <div className="flex gap-2 items-center">
                    <Link href="/privacy-policy">Privacy</Link>
                    <Link href="/tems">Terms of use</Link>
                </div>
            </div>

        </footer>
    )
}
