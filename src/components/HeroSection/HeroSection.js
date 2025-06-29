import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={styles['hero']}>
            <div className={styles['hero-content']}>
                <h1 className={styles['hero-title']}>Welcome to CABOA</h1>
                <div className={styles['tagline-banner']}>
                    Central Alberta Basketball Officials Association
                </div>
            </div>
        </div>
    );
}
export default HeroSection;