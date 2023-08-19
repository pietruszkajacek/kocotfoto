import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import { getPhotos, getUnsplashPhotos } from '../lib/photos'
import { Photo, PhotoAlbum } from "react-photo-album";
import NextJsImage from '../components/next-js-image'
import Container from '../components/container'

type Props = {
    portfolioPhotos: Photo[],
}

export default function Portfolio({ portfolioPhotos }: Props) {
    return (
        <Layout>
            <Head>
                <title>{`${CMS_NAME}`}</title>
            </Head>
            <Header pic="headerportfolio" text='Portfolio' />
            <section id="portfolio">
                <Container>
                    <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto text-white text-justify text-xl md:text-2xl lg:text-3xl font-light font-dosis mb-14">
                        <div className='sm:w-5/6 mx-auto'>
                            <p className="py-5 lg:py-10">
                                Poniżej znajdziecie część zdjęć mojego autorstwa. Pełne reportaże ślubne znajdziecie w&nbsp;zakładce "Wasze Historie".
                            </p>
                            <PhotoAlbum
                                photos={portfolioPhotos}
                                layout="rows"
                                renderPhoto={NextJsImage}
                                defaultContainerWidth={1200}
                                componentsProps={{
                                    imageProps: {
                                        className: 'transition-transform ease-in-out duration-500 hover:scale-125'
                                    },
                                }}
                                sizes={{
                                    size: "calc(100vw - 40px)",
                                    sizes: [
                                        { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                                        { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                                        { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
                                    ],
                                }}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const portfolioPhotos = await getPhotos('/assets/portfolio/', 'public/assets/portfolio');
    return {
        props: { portfolioPhotos },
    }
}