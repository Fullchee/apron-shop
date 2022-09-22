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
  const banners = [
    {
      _id: '5e3e88581c9d440000d0f600',
      name: 'women',
      imageURL: 'https://res.cloudinary.com/djlbfjouc/image/upload/v1582518195/banner-2_htripb.jpg',
    },
  ];
  const categories = [
    {
      _id: '5e3e897d1c9d440000d0f603',
      imageURL: 'https://res.cloudinary.com/djlbfjouc/image/upload/v1582274252/categ-02_pqpnm7.jpg',
      name: 'Men',
    },
    {
      _id: '5e3e89e71c9d440000d0f604',
      name: 'Women',
      imageURL:
        'https://res.cloudinary.com/djlbfjouc/image/upload/v1582274091/ezgif.com-webp-to-jpg_l9flc0.jpg',
    },
  ];
  const products = [
    {
      _id: '5e3e8f19f4a19c0417b8dafd',
      name: 'Long Sleeves Polka Dots',
      price: 900,
      description:
        'Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.',
      imageURL:
        'https://res.cloudinary.com/djlbfjouc/image/upload/v1581158167/sbiuoziiqi5gkuvrsymv.jpg',
      category: 'women',
      createdAt: '2020-02-08T10:36:09.862Z',
      updatedAt: '2020-02-08T10:36:09.862Z',
    },
  ];

  return {
    props: {
      banners,
      categories,
      products,
    },
    revalidate: 60,
  };
}
