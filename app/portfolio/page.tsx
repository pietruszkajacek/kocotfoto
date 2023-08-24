import { getPhotos } from '@/lib/photos'
import PortfolioPage from './portfolio-page';

export default async function Page() {
    const portfolioPhotos = await getPhotos('/assets/portfolio/', 'public/assets/portfolio');

    return <PortfolioPage portfolioPhotos={portfolioPhotos}/>


}