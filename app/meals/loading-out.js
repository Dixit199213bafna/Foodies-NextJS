import classes from "./loading.module.css";
export default function LoadingOut() {
    return <div className={classes.loading}>
        <p>Fetching meals...</p>
    </div>
}