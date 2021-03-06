// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/react';
import Container from '../components/Container';
import Content from '../components/Content';
import FAVE_THINGS from '../data/fave-things';
import { shuffleArray } from '../utils/utils';
import { Socials } from '../components/Socials';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Content>
          <h1>Hi, I&apos;m Sal.</h1>
          <p>
            I&apos;m a software engineer trying his best to document his experiences. You can
            usually find me evangelizing others to the wonders of TypeScript.
          </p>
          <div className="h-16">
            <p className="inline">I also enjoy </p>
            <Typewriter
              options={{
                strings: shuffleArray(FAVE_THINGS.map((h) => `${h}.`)),
                autoStart: true,
                loop: true,
                skipAddStyles: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </Content>
        <Socials />
      </div>
    </Container>
  );
}
