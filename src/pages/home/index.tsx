import { useCart } from '../../hooks/useCart'

import { MapPin } from '@phosphor-icons/react'
import styles from './style.module.css'
import { CartButton } from '../../components/buttons/CartButton'
import { ProductCard } from '../../components/cards/ProductCard'
import { Tag } from '../../components/Tag'
import { SearchInput } from '../../components/inputs/SearchInput'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Coffee } from '../../services/requests/types'
import { getCoffees } from '../../services/requests'

function Home() {
    const navigate = useNavigate()
    const [coffees, setCoffees] = useState<Coffee[]>([])
    const { cartContent } = useCart()

    async function getCoffessData() {
        const coffess = await getCoffees()
        setCoffees(coffess)
    }

    function navigateToCart() {
        navigate("/cart");
    }

    useEffect(() => {
        getCoffessData()
    }, [])

    return (
        <>
            <section className={styles.introSection}>
                <nav className={styles.navigationBar}>
                    <div className={styles.locationWrapper}>
                        <MapPin size={20} weight="fill" color="#8047F8" />
                        <span className={styles.location}>Porto Alegre, RS</span>
                    </div>
                    <CartButton handleClick={() => {navigateToCart()}} quantity={cartContent.length} />
                </nav>
                <header className={styles.introSectionHeader}>
                    <span className={styles.headerTitle}>Encontre o café perfeito para qualquer hora do dia</span>
                    <SearchInput />
                </header>
            </section>
            <section className={styles.catalogSection}>
                <div className={styles.catalogSugestionsSection}>
                    {
                        coffees.map(coffee => {
                            return(
                                <ProductCard 
                                    key={coffee.id}
                                    title={coffee.name}
                                    description={coffee.description}
                                    price={coffee.price} 
                                    imageUrl={coffee.url}
                                    handleClick={() => {
                                        navigate(`/product/${coffee.id}`)
                                        // getOneCoffee(Number(coffee.id))
                                    }}
                                    cardOption='primary'
                                />
                            )
                        })
                    }
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
                                {
                                    coffees.map(coffee => {
                                        if (coffee.type === 'Tradicional') {
                                            return (
                                                <ProductCard 
                                                    key={coffee.id}
                                                    title={coffee.name}
                                                    description={coffee.description}
                                                    price={coffee.price} 
                                                    imageUrl={coffee.url}
                                                    cardOption='secondary'
                                                    handleClick={() => {
                                                        navigate(`/product/${coffee.id}`)
                                                        // getOneCoffee(Number(coffee.id))
                                                    }}
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Doces</span>
                            <div className={styles.catalogProductFilteredListItems}>
                                {
                                    coffees.map(coffee => {
                                        if (coffee.type === 'Doce') {
                                            return (
                                                <ProductCard 
                                                    key={coffee.id}
                                                    title={coffee.name}
                                                    description={coffee.description}
                                                    price={coffee.price}
                                                    imageUrl={coffee.url}
                                                    cardOption='secondary'
                                                    handleClick={() => {
                                                        navigate(`/product/${coffee.id}`)
                                                        // getOneCoffee(Number(coffee.id))
                                                    }}
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.catalogProductFilteredList}>
                            <span className={styles.typeTitle}>Especiais</span>
                            <div className={styles.catalogProductFilteredListItems}>
                                {
                                    coffees.map(coffee => {
                                        if (coffee.type === 'Especial') {
                                            return (
                                                <ProductCard 
                                                    title={coffee.name}
                                                    description={coffee.description}
                                                    price={coffee.price} 
                                                    imageUrl={coffee.url}
                                                    cardOption='secondary'
                                                    handleClick={() => {
                                                        navigate(`/product/${coffee.id}`)
                                                        // getOneCoffee(Number(coffee.id))
                                                    }}
                                                />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home