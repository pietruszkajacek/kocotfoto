import Layout from '../components/layout'
import { getAllStrengths, getAllPackages } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/header'
import About from '../components/about'
import Strengths from '../components/strengths'
import StrengthType from '../interfaces/strength'
import PackageType from '../interfaces/strength'
import Packages from '../components/packages'

type Props = {
  allStrengths: StrengthType[],
  allPackages: PackageType[],
}

export default function Index({ allStrengths, allPackages }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <Header />
        <About />
        <Strengths strengths={allStrengths}/>
        <Packages packages={allPackages}/>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allStrengths = await getAllStrengths([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'order',
    'content',
  ])

  const allPackages = await getAllPackages([
    'title',
    'slug',
    'coverImage',
    'order',
    'content',
  ])

  return {
    props: { allStrengths, allPackages },
  }
}