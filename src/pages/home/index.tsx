import { MapPin, ShoppingCart, MagnifyingGlass, Plus } from '@phosphor-icons/react'
import styles from './style.module.css'
import { Button } from '../../components/buttons/Button'
import { IconButton } from '../../components/buttons/IconButton'
import { CartButton } from '../../components/buttons/CartButton'
import { Tag } from '../../components/Tag'
import { Counter } from '../../components/Counter'
import { PrimaryCard } from '../../components/cards/PrimaryCard'

function Home() {
    return (
        <>
            <section className={styles.introSection}>
                <nav className={styles.navigationBar}>
                    <div className={styles.locationWrapper}>
                        <MapPin size={20} weight="fill" color="#8047F8" />
                        <p className="location">Porto Alegre, RS</p>
                    </div>

                    <div className={styles.cartWrapper}>
                        <ShoppingCart size={20} weight="fill" color="#C47F17"/>
                    </div>
                </nav>
                <header className={styles.introSectionHeader}>
                    <span className={styles.headerTitle}>Encontre o café perfeito para qualquer hora do dia</span>
                    <div className={styles.searchBarWrapper}>
                        <MagnifyingGlass size={16} className={styles.introSearchIcon}/>
                        <input type="text" name="#" id="#" className={styles.searchInput} placeholder="Pesquisar" />
                    </div>
                </header>

                {/* Example */}
                <Button onClick={() => console.log('Hello')} >
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
                <Tag>
                    Traditional
                </Tag>
                <Counter>1</Counter>
                <PrimaryCard price={9.99}></PrimaryCard>
            </section>
        </>
    )
}

export default Home