import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meal";
import {Suspense} from "react";
import LoadingOut from "@/app/meals/loading-out";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>;
}
export default function MealsPage() {
    return <div>
        <header className={classes.header}>
            <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
            <p>Choose and cook recipe</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share you favourite recipe</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<LoadingOut/>}>
                <Meals />
            </Suspense>
        </main>
    </div>;
}