import React, { useEffect, useState } from 'react'
import { Product } from '..'
import Filter from '../common/Filter';
import Title from '../common/Title';
import Sort from '../common/Sort';
import Box from '../common/Box';
import { styled } from 'styled-components';
import titles from '../../../titles';
import { Helmet } from 'react-helmet-async';
import { FaFilter } from 'react-icons/fa';
import { Content, Grid, LoadMore, Loading, Mobile, PageInfo, ProductsGrid, ShowFilter, Top, Wrapper } from '../styles/common'

type Props = {
    products: Array<Product>,
}

function Others({ products }: Props) {
    const [loading, setLoading] = useState<boolean>(true);
    const [catProducts, setCatProducts] = useState<any>([]);
    const [sort, setSort] = useState<string>('a-z');
    const [showFilter, setShowFilter] = useState(false);

    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(8);

    const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);
    const [sortedProudcts, setSortedProducts] = useState<Array<Product>>([]);
    const [initialProudcts, setInitialProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        setLoading(true);
        setCatProducts(products.filter((product: Product) => product.category === 'other').sort((a: Product, b: Product) => (a.name).localeCompare(b.name)));
    }, [products])

    useEffect(() => {
        setFilteredProducts([...catProducts]);
        setLoading(true);
    }, [catProducts])

    useEffect(() => {
        switch (sort) {
            case 'a-z':
                setSortedProducts([...filteredProducts.sort((a: Product, b: Product) => (a.name).localeCompare(b.name))])
                break;
            case 'z-a':
                setSortedProducts([...filteredProducts.sort((a: Product, b: Product) => b.name.localeCompare(a.name))])
                break;
            case 'price-asc':
                setSortedProducts([...filteredProducts.sort((a: Product, b: Product) => a.price - b.price)])
                break;
            case 'price-desc':
                setSortedProducts([...filteredProducts.sort((a: Product, b: Product) => b.price - a.price)])
                break;

            default:
                console.log(sort);
                break;
        }
    }, [sort, filteredProducts])

    useEffect(() => {
        if (index >= sortedProudcts.length || sortedProudcts.length < 8) {
            setIndex(sortedProudcts.length)
            setIsCompleted(true);
            setInitialProducts(sortedProudcts.slice(0, sortedProudcts.length));
        } else {
            setIndex(8);
            setIsCompleted(false);
            setInitialProducts(sortedProudcts.slice(0, 8));
        }
        setLoading(false);
    }, [sortedProudcts])

    useEffect(() => {
        setInitialProducts(sortedProudcts.slice(0, index));
    }, [index])

    const loadMore = (): void => {
        if (index + 8 >= sortedProudcts.length) {
            setIsCompleted(true)
            setIndex(sortedProudcts.length);
        } else {
            setIsCompleted(false);
            setIndex(index + 8)
        }
    }

    function setSortHandler(value: string): void {
        setSort(value);
    }

    function setDisplayProductsHandler(arr: Array<Product>): void {
        setFilteredProducts([...arr]);
    }

    const setShowHandler = (value: boolean) => {
        setShowFilter(value);
    }


    return (
        <Wrapper>
            <Helmet>
                <title>{titles.others.title}</title>
                <meta name='description' content={titles.others.description} />
            </Helmet>
            <Filter products={catProducts} setDisplayProducts={setDisplayProductsHandler} show={showFilter} setShow={setShowHandler} />
            <Content>
                <Top>
                    <Title title="Others" description="Other Cookie Cutters"></Title>
                    <Mobile>
                        <ShowFilter onClick={() => { setShowFilter(true) }}><FaFilter /> Open Filter</ShowFilter>
                        <Sort setSort={setSortHandler} disabled={loading} />
                    </Mobile>
                </Top>
                {loading ? <Loading>Loading</Loading> :
                    <ProductsGrid>
                        {index === 0 ? 'No Products' :
                            <Grid>
                                {initialProudcts.map((product: Product) =>
                                    <Box key={product.ID.toString()} value={product} />
                                )}
                            </Grid>
                        }
                        <PageInfo> {index} of {filteredProducts.length}</PageInfo>
                        {!isCompleted ? <LoadMore onClick={loadMore}> Load More</LoadMore> : ''}
                    </ProductsGrid>
                }
            </Content>
        </Wrapper >
    )
}

export default Others