import Link from "next/link";

export default function MealsPage() {
    return <div>
        Meals
        <Link href="/meals/1">Meals 1</Link>
        <Link href="/meals/2">Meals 2</Link>
    </div>;
}