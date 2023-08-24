import About from '@/components/about'
import Header from '@/components/header'
import { getAllStrengths, getAllPackages } from '@/lib/api'
import Strengths from '@/components/strengths';
import Packages from '@/components/packages';

export default async function Index() {
    const allStrengths = await getAllStrengths([
        'title',
        'slug',
        'coverImage',
        'order',
        'content'
    ])

    const allPackages = await getAllPackages([
        'title',
        'slug',
        'coverImage',
        'order',
        'content'
    ])

    return (
        <>
            <Header pic="header" text="Kamil Kocot Fotografia" />
            <About />
            <Strengths strengths={allStrengths}/>
            <Packages packages={allPackages}/>
        </>
    )
}