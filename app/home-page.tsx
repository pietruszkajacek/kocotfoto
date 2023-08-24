'use client'

import About from '@/components/about'
import Header from '@/components/header'
import Packages from '@/components/packages'
import Strengths from '@/components/strengths'
import PackageType from '@/interfaces/package'
import type StrengthType from '@/interfaces/strength'

type Props = {
  allStrengths: StrengthType[],
  allPackages: PackageType[]
}

export default function HomePage({ allStrengths, allPackages }: Props) {
  return (
    <>
      <Header pic="header" text="Kamil Kocot Fotografia" />
      <About />
      <Strengths strengths={allStrengths} />
      <Packages packages={allPackages} />
    </>
  )
}