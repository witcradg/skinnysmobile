
import SkeletonCard from "@/components/ui/SkeletonCard";

export default function loading() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {"abcdefghi".split("").map((letter) => (
                    <SkeletonCard key={letter} />
                ))}
            </div>
        </main>
    )
}