import { MapPin, ShoppingCart, MagnifyingGlass, Plus } from '@phosphor-icons/react'
import styles from './style.module.css'
import { CartButton } from '../../components/buttons/CartButton'
import { ProductCard } from '../../components/cards/ProductCard'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/buttons/Button'
import { IconButton } from '../../components/buttons/IconButton'
import { Counter } from '../../components/Counter'

function Home() {
    return (
        <>
            <section className={styles.introSection}>
                <nav className={styles.navigationBar}>
                    <div className={styles.locationWrapper}>
                        <MapPin size={20} weight="fill" color="#8047F8" />
                        <span className={styles.location}>Porto Alegre, RS</span>
                    </div>

                    {/* <div className={styles.cartWrapper}>
                        <ShoppingCart size={20} weight="fill" color="#C47F17"/>
                    </div> */}
                    <CartButton quantity={0} />
                </nav>
                <header className={styles.introSectionHeader}>
                    <span className={styles.headerTitle}>Encontre o café perfeito para qualquer hora do dia</span>
                    <div className={styles.searchBarWrapper}>
                        <MagnifyingGlass size={16} className={styles.introSearchIcon}/>
                        <input type="text" name="#" id="#" className={styles.searchInput} placeholder="Pesquisar" />
                    </div>
                </header>
            </section>
            <section className={styles.catalogSection}>
                <div className={styles.catalogSugestionsSection}>
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
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                        </div>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Doces</span>
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Example */}
            {/* <Button onClick={() => console.log('Hello')} >
                Click Here
            </Button>
            <Button onClick={() => console.log('Hello')} variant='purple'>
                Click Here
            </Button>
            <Button onClick={() => console.log('Hello')} variant='yellow'>
                Click There
            </Button>
            <Button onClick={() => console.log('Hello')} variant='ghost'>
                Click There
            </Button>

            <IconButton onClick={() => console.log('Hello')}>
                <Plus size={20} />
            </IconButton>

            <CartButton quantity={1} />
            <Counter>1</Counter>
            <ProductCard price={9.99} cardOption='secondary'></ProductCard>
            <SecondaryCard price={9.99}></SecondaryCard> */}


        </>
    )
}

export default Home