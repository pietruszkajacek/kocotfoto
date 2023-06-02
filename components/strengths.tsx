import type StrengthType from '../interfaces/strength'
import Container from '../components/container'
import Strength from './strength'

type Props = {
    strengths: StrengthType[],
}

export default function Strengths({ strengths }: Props) {
    function isEven(n: number) {
        return n % 2 == 0;
    }

    return (
        <section id="strengths">
            <Container>
                <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto text-white text-justify text-lg sm:text-xl md:text-2xl lg:text-3xl font-light font-dosis">
                    {strengths.map((strength, index) => (
                        <Strength 
                            key={strength.slug}
                            title={strength.title}
                            content={strength.content}
                            date={strength.date}
                            author={strength.author}
                            slug={strength.slug}
                            excerpt={strength.excerpt} 
                            coverImage={strength.coverImage}
                            even={isEven(index + 1)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
