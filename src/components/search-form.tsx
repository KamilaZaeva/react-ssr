import styles from "../styles/search-form.module.css"

export default function SearchForm({searchText}: { searchText: string }) {
    return <>
        <h1 className={styles.searchFormTitle}>FIND YOUR MOVIE</h1>
        <div className={styles.searchFormContainer}>
            <input
                id='searchFormInput'
                className={styles.searchFormInput}
                placeholder='What do you want to watch?'
                defaultValue={searchText}
            />
            <button
                id='searchFormButton'
                className={styles.searchFormButton}
            >
                SEARCH
            </button>
        </div>
    </>
}
