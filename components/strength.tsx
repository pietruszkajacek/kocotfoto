import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import { InView } from 'react-intersection-observer'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  content: string
  even: boolean
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Strength = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  content,
  even
}: Props) => {
  return (
      <div className="flex flex-wrap justify-center mb-10">
        <InView triggerOnce={false}>
          {({ inView, ref, entry }) => (
            <div ref={ref} className={classNames(`transition-opacity ${inView ? 'opacity-1' : 'opacity-0'}`, 'max-w-full shrink-0 w-full sm:w-2/5 sm:grow-0 sm:basis-auto')}>
              <img className='rounded-2xl w-full' src={coverImage}></img>
            </div>
          )}
        </InView>
        <div className={classNames(even ? 'sm:order-first' : '', 'sm:px-5 max-w-full shrink-0 w-full sm:w-3/5 sm:grow-0 sm:basis-auto')}>
          <h4 className='font-amaticsc mb-5 text-center sm:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title}</h4>
          <p>{content}</p>
          </div>
      </div>
  )
}

export default Strength
