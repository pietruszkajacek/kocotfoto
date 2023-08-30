'use client'

import Header from '@/components/header'
import { Photo, PhotoAlbum } from "react-photo-album";
import NextJsImage from '@/components/next-js-image'
import Container from '@/components/container'
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

type Props = {
    portfolioPhotos: Photo[],
}

export default function PortfolioPage({ portfolioPhotos }: Props) {
    const [index, setIndex] = useState(-1);

    return (
        <>
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
                                layout="masonry"
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
                                onClick={({ index }) => setIndex(index)}
                            />

                            <Lightbox
                                slides={portfolioPhotos}
                                open={index >= 0}
                                index={index}
                                close={() => setIndex(-1)}
                                // enable optional lightbox plugins
                                plugins={[Fullscreen, Slideshow, Zoom, Counter]}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
