export default function LoadingSkeleton() {
    return (
        <div className="animate-pulse flex space-x-4 text-gray-700">
            <div className="rounded-full bg-grey-300 h-10 w-10"></div>
            <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-grey-300 rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-grey-300 rounded"></div>
                    <div className="h-4 bg-grey-300 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}