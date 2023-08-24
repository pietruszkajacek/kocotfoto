'use client'

import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'

type Props = {
  title: string
  coverImage: string
  slug: string
  content: string
  even: boolean
}

const Strength = ({
  title,
  coverImage,
  slug,
  content,
  even
}: Props) => {
  return (
    <div className="flex flex-wrap justify-center mb-10 text-white text-justify text-lg/6 sm:text-xl/6 md:text-2xl lg:text-3xl font-light font-dosis">
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div className={'max-w-full shrink-0 w-full sm:w-2/5 sm:grow-0 sm:basis-auto'}>
            <div className='overflow-hidden relative flex h-full flex-col justify-center'>
              {/* <img className='flex-none rounded-2xl w-full' src={coverImage}></img> */}
              <Image 
                ref={ref} 
                className={cn({
                  'left-0': inView,
                  'opacity-100': inView,
                  'left-[10%]': even && !inView,
                  'left-[-10%]': !even && !inView,
                  'opacity-0': !inView
                },
                  'relative transition-all ease-in-out duration-500 delay-150 flex-none rounded-2xl w-full'
                )}
                width={0}
                height={0}
                src={coverImage}
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 40vw, 40vw"
                alt={slug}
                style={{objectFit: "contain", height: 'auto'}}
              />
            </div>
          </div>
        )}
      </InView>
      <div className={cn(even ? 'sm:order-first' : '', 'sm:px-5 max-w-full shrink-0 w-full sm:w-3/5 sm:grow-0 sm:basis-auto')}>
        <h4 className='font-amaticsc my-6 sm:mb-6 sm:mt-0 text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title}</h4>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default Strength
