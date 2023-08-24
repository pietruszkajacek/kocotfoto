import markdownStyles from './markdown-styles.module.css'
import cn from 'classnames'

type Props = {
  title: string
  coverImage: string
  slug: string
  content: string
  even: boolean
}

const Package = ({
  title,
  coverImage,
  slug,
  content,
  even
}: Props) => {

  return (
    <div className="w-full flex flex-wrap justify-center mb-10 text-white text-justify text-lg/6 sm:text-xl/6 md:text-2xl 
                    lg:text-3xl xl:text-xl font-light font-dosis shrink-0 grow-0 xl:w-[48%] bg-black rounded-2xl overflow-hidden">
      <div className='max-w-full shrink-0 w-full sm:w-1/2 sm:grow-0 sm:basis-auto'>
        <div className={'flex h-full flex-col justify-center min-h-[300px] sm:min-h-[500px] bg-center bg-cover'} style={{ backgroundImage: `url("${coverImage}")` }}>
        </div>
      </div>
      <div className={cn({'sm:order-first': even}, 'px-4 sm:px-5 max-w-full shrink-0 w-full sm:w-1/2 sm:grow-0 sm:basis-auto flex flex-col justify-center')}>
        <h4 className='font-amaticsc mt-6 sm:mb-6 sm:mt-0 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{title}</h4>
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default Package
