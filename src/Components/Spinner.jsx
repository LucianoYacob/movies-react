import { FaSpinner } from "react-icons/fa";
import styles from "../styles/Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.spinning} size={70} />
        </div>
    )
}