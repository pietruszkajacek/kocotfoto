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
                <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
                    {strengths.map((strength, index) => (
                        <Strength 
                            key={strength.slug}
                            title={strength.title}
                            content={strength.content}
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
