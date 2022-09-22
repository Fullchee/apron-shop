import { InferGetStaticPropsType } from 'next';

import { Categories } from '@/components/category';
import { Meta, MobileBottomMenu } from '@/components/core';
import { ProductOverviewSection } from '@/components/home';
import { Banners, Container, Heading } from '@/components/ui';
import { useScrollRestoration } from '@/hooks';

const Home = ({
  banners,
  categories,
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useScrollRestoration();

  return (
    <>
      <Meta />
      <Banners banners={banners} />
      <Container>
        <Heading>Categories</Heading>
        <Categories categories={categories} />
        <ProductOverviewSection initialProducts={products} />
      </Container>
      <MobileBottomMenu />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const banners = [];
  const categories = [];
  const products = [];

  return {
    props: {
      banners,
      categories,
      products,
    },
    revalidate: 60,
  };
}
