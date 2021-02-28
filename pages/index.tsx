// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/react';
import Container from '../components/Container';
import ContentSection from '../components/ContentSection';
import FAV_THINGS from '../utils/favs';
import { shuffleArray } from '../utils/utils';
import { Socials } from '../components/Socials';

export default function Home() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto mb-16">
        <ContentSection>
          <p>Hi, I&apos;m Sal.</p>
          <p>
            I&apos;m a software engineer trying his best to document his experiences. You can usually find me
            evangelizing others to the wonders of TypeScript.
          </p>
          <div className="h-16">
            <p className="inline">I also enjoy </p>
            <Typewriter
              options={{
                strings: shuffleArray(FAV_THINGS.map((h) => `${h}.`)),
                autoStart: true,
                loop: true,
                skipAddStyles: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </ContentSection>
        <Socials />
      </div>
    </Container>
  );
}
