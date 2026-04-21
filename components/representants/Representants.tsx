export const Representants = () => {
    return (
        <div className="flex justify-center px-4 m-auto">
            <div className="max-w-xl w-full rounded-xl border border-gray-200 bg-white shadow-sm">
                
                {/* Top accent */}
                <div className="h-1 w-full bg-blue-500 rounded-t-xl" />

                <div className="px-6 py-6 flex flex-col gap-4 text-center">
                    
                    {/* Label */}
                    <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                        Notice
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        Registration Notice
                    </h2>

                    {/* Body */}
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Account registration is limited to members of the International Church of Almighty God Number 1 and the Czech Church of Almighty God.
                        <br /><br />
                        Registrations from other churches or organizations will not be approved.
                        <br /><br />
                        This is a community-run project intended specifically for these groups. Thank you for your understanding.
                    </p>

                </div>
            </div>
        </div>
    )
}