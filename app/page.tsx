import { getAllStrengths, getAllPackages } from '@/lib/api'
import HomePage from './home-page';

export default async function Page() {
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
        <HomePage allPackages={allPackages}  allStrengths={allStrengths}/>
    )
}