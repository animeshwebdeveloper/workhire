export default function Footer() {
    return (
        <footer className="border-t  mt-0 bg-gray-50">
            <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} WorkHire. All rights reserved.
            </div>
        </footer>
    )
}