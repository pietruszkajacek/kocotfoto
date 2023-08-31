import styles from './scroll-styles.module.css'

const Scroll = () => {
    return (
        <button className={`${styles.scroll} [--size:0.8] sm:[--size:1] md:[--size:1.2] lg:[--size:1.5]`}>
            <span>
            </span>
        </button>
    )
}

export default Scroll