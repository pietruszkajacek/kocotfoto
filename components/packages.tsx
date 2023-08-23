'use client'

import Container from '../components/container'
import type PackageType from '../interfaces/package'
import Package from './package'
import { InView } from 'react-intersection-observer'
import classNames from 'classnames'

type Props = {
  packages: PackageType[],
}

const Packages = ({ packages }: Props) => {
  function isEven(n: number) {
    return n % 2 == 0;
  }
  return (
    <section id="packages">
      <Container>
        <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto text-white text-justify text-xl md:text-2xl lg:text-3xl font-light font-dosis mb-14">
          <div className='mb-10 sm:w-5/6 mx-auto'>
            <h4 className='font-amaticsc my-6 sm:mb-6 sm:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Pakiety</h4>
            <p className="pt-5 lg:pt-10">
              No dobrze, ale gdzie rzecz najważniejsza, czyli pakiety i&nbsp;ceny? Znajdziecie je poniżej. Są one oczywiście jedynie
              moją propozycją, więc możemy je dostosować zależnie od Waszych oczekiwań.
            </p>
            <p className="pt-5 lg:pt-10">
              Nie ma podanych przy nich cen — jest to spowodowane tym, że część Par Młodych szuka fotografa na ten rok, niektórzy na
              przyszły lub nawet z&nbsp;dwuletnim wyprzedzeniem. Jeśli chcecie poznać cenę za reportaż w dniu Waszego ślubu lub macie
              inne pytania, skorzystajcie z&nbsp;poniższego przycisku i&nbsp;wypełnijcie formularz kontaktowy.
            </p>
            <div className="mt-10">
              <InView triggerOnce={true}>
                {({ inView, ref, entry }) => (
                  <a ref={ref}
                    href="kontakt"
                    className={classNames({
                      'top-0': inView,
                      'opacity-100': inView,
                      'top-4': !inView,
                      'opacity-0': !inView
                    },
                      'transition-all ease-in-out duration-500 delay-150 relative block mx-auto w-1/3 rounded-3xl bg-purple-mountains-majesty-600 uppercase text-center px-3 py-2 shadow-sm hover:bg-white hover:text-purple-mountains-majesty-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fiolet'
                    )}
                  >
                    Kontakt
                  </a>
                )}
              </InView>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly'>
            {packages.map((pack, index) => (
              <Package
                key={pack.slug}
                title={pack.title}
                content={pack.content}
                slug={pack.slug}
                coverImage={pack.coverImage}
                even={isEven(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Packages
