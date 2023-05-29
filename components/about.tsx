import Container from '../components/container'

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto flex justify-center text-white text-justify text-xl md:text-2xl lg:text-3xl font-light font-dosis">
          <div className='sm:basis-5/6'>
            <p className="pt-5 lg:pt-10">
              Szukacie fotografa ślubnego, który wykona wyjątkowe zdjęcia na Waszym ślubie i&nbsp;weselu? Bardzo dobre technicznie,
              z&nbsp;uchwyconymi emocjami i&nbsp;najważniejszymi momentami? Takie, które wywołają efekt WOW? Albo filmowca, który
              w&nbsp;niecodzienny sposób uwieczni jeden z&nbsp;najważniejszych dni Waszego życia? Jeśli tak, to doskonale trafiliście!
            </p>
            <p className="pt-5 lg:pt-10">
              Do każdego ślubu podchodzę indywidualnie, unikając powtarzania utartych schematów. Staram się łączyć wykonanie jak najlepszych
              zdjęć z&nbsp;pozostawaniem niewidocznym zarówno podczas ceremonii zaślubin, jak i&nbsp;samego wesela. Dzięki temu obecność
              fotografa jest niezauważalna i&nbsp;pozwala gościom na swobodną zabawę.
            </p>
            <p className="py-5 lg:pt-10">
              Zapewne teraz pomyślicie sobie <cite className='font-medium'>"No dobrze, ale to powie nam każdy kandydat na fotografa / filmowca na naszym ślubie. Dlaczego
                mamy wybrać akurat Ciebie?"</cite> Poniżej przekonam Was, dlaczego akurat ja będę odpowiednim wyborem.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
