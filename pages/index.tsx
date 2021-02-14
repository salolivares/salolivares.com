// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/react';
import Wrapper from '../components/layout/Wrapper';
import ContentSection from '../components/ContentSection';
import FAV_THINGS from '../utils/favs';
import { shuffleArray } from '../utils/utils';
import { Socials } from '../components/Socials';

const IndexPage = () => (
  <Wrapper title="Sal Olivares" description="Sal Olivares. Software Engineer.">
    <ContentSection className="lg:pr-52">
      <p>Hi, I&apos;m Sal.</p>
      <p>
        I&apos;m a software engineer trying his best to document his experiences. You can usually find me evangelizing
        others to the wonders of TypeScript.
      </p>
      <p className="h-14">
        I also enjoy{' '}
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
      </p>
    </ContentSection>
    <Socials />
  </Wrapper>
);

export default IndexPage;
