import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getAllStrengths } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Header from '../components/header'
import About from '../components/about'
import Strengths from '../components/strengths'
import StrengthType from '../interfaces/strength'

type Props = {
  allPosts: Post[],
  allStrengths: StrengthType[]
}

export default function Index({ allPosts, allStrengths }: Props) {

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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  
  const allStrengths = getAllStrengths([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'order',
    'content',
  ])
  return {
    props: { allPosts, allStrengths },
  }
}
