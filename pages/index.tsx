import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllStrengths } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Header from '../components/header'
import About from '../components/about'
import Strengths from '../components/strengths'
import StrengthType from '../interfaces/strength'
import markdownToHtml from '../lib/markdownToHtml'

type Props = {
  allStrengths: StrengthType[]
}

export default function Index({ allStrengths }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <Header />
        <About />
        <Strengths strengths={allStrengths}/>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allStrengthsC = getAllStrengths([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'order',
    'content',
  ])

  //allStrengths[1].content = await markdownToHtml(allStrengths[1].content || '')

  const allStrengths = await Promise.all( allStrengthsC.map(async (strength) => {
    strength.content = await markdownToHtml(strength.content || '')
    return strength
  }))

  console.log('test', allStrengthsC)

  return {
    props: { allStrengths },
  }
}

// export function getStaticProps() {
//   const allStrengths = getAllStrengths([
//     'title',
//     'slug',
//     'coverImage',
//     'excerpt',
//     'order',
//     'content',
//   ])
  
//   return {
//     props: { allStrengths },
//   }
// }