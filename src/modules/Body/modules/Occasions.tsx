import React, { useEffect, useState } from 'react'
import { Product } from '..';
import Filter from '../common/Filter';
import Title from '../common/Title';
import Sort from '../common/Sort';
import Box from '../common/Box';
import { styled } from 'styled-components';
import titles from '../../../titles';
import { Helmet } from 'react-helmet-async';

type Props = {
    products: Array<Product>,
}

export default function Occasions({ products }: Props) {
    const [loading, setLoading] = useState<boolean>(true);
    const [catProducts, setCatProducts] = useState<any>([]);
    const [sort, setSort] = useState<string>('a-z');

    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(8);

    const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);
    const [sortedProudcts, setSortedProducts] = useState<Array<Product>>([]);
    const [initialProudcts, setInitialProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        setLoading(true);
        setCatProducts(products.filter((product: Product) => product.category === 'occasions').sort((a: Product, b: Product) => (a.name).localeCompare(b.name)));
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


    return (
        <Wrapper>
            <Helmet>
                <title>{titles.occasions.title}</title>
                <meta name='description' content={titles.occasions.description} />
            </Helmet>
            <Filter products={catProducts} setDisplayProducts={setDisplayProductsHandler} />
            <Content>
                <Top>
                    <Title title="Occasions" description="Cookie Cutters For Special Occasions"></Title>
                    <Sort setSort={setSortHandler} disabled={loading} />
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

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const Content = styled.div`
    margin-left: 20px;
    width: 82%;
    display: flex;
    flex-direction: column;
`
const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`
const ProductsGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Grid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 0px;
`
const PageInfo = styled.div`
    justify-content: center;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
`
const Loading = styled.div`
    text-align: center;
`
const LoadMore = styled.button`
    margin-bottom: 20px;
    font-size: 16px;
    padding: 4px 10px;
    background-color: #d6e0f0;
    border-radius: 4px;

    &:hover{
        background-color: #d2def3;
        color: black;
    }
`