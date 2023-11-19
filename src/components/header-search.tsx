'use client'

import styles from "../styles/header-search.module.css"
import {useRouter} from "next/navigation";
import SearchForm from "./search-form";

export default function HeaderSearch({searchText}: { searchText: string }) {
    const router = useRouter()

    return (
        <div className={styles["headerContainer"]}>
            <div className={styles["blurContainer"]}></div>
            <button className={styles["headerAddMovieButton"]} onClick={() => router.push('/new')}>+ Add Movie</button>
            <SearchForm
                searchText={searchText}
            />
        </div>
    )
}
