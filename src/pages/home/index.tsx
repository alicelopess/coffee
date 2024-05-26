import { MapPin } from '@phosphor-icons/react'
import styles from './style.module.css'
import { CartButton } from '../../components/buttons/CartButton'
import { ProductCard } from '../../components/cards/ProductCard'
import { Tag } from '../../components/Tag'
import { SearchInput } from '../../components/inputs/SearchInput'

function Home() {
    return (
        <>
            <section className={styles.introSection}>
                <nav className={styles.navigationBar}>
                    <div className={styles.locationWrapper}>
                        <MapPin size={20} weight="fill" color="#8047F8" />
                        <span className={styles.location}>Porto Alegre, RS</span>
                    </div>
                    <CartButton quantity={0} />
                </nav>
                <header className={styles.introSectionHeader}>
                    <span className={styles.headerTitle}>Encontre o café perfeito para qualquer hora do dia</span>
                    <SearchInput />
                </header>
            </section>
            <section className={styles.catalogSection}>
                <div className={styles.catalogSugestionsSection}>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                    <ProductCard price={9.99} cardOption='primary'></ProductCard>
                </div>
                
                <div className={styles.catalogProductsSection}>
                    <header className={styles.catalogProductsHeader}>
                        <span>Nossos cafés</span>
                        <div className={styles.catalogFilterWrapper}>
                            <Tag>Tradicionais</Tag>
                            <Tag>Doces</Tag>
                            <Tag>Especiais</Tag>
                        </div>
                    </header>
                    <div className={styles.catalogProductsList}>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Tradicionais</span>
                            <div className={styles.catalogProductFilteredListItems}>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            </div>
                        </div>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Doces</span>
                            <div className={styles.catalogProductFilteredListItems}>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            </div>
                        </div>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Especiais</span>
                            <div className={styles.catalogProductFilteredListItems}>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                                <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home