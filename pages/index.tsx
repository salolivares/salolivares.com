// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/react';
import Wrapper from '../components/layout/Wrapper';
import ContentSection from '../components/ContentSection';
import FAV_THINGS from '../utils/favs';
import { shuffleArray } from '../utils/utils';

const IndexPage = () => (
  <Wrapper title="Sal Olivares" description="Sal Olivares. Software Engineer.">
    <ContentSection className="lg:pr-64">
      <p>Hi, I&apos;m Sal.</p>
      <p>
        I&apos;m a software engineer trying his best to document his experiences. You can usually find me evangelizing
        others to the wonders of TypeScript.
      </p>
      <p>
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
  </Wrapper>
);

export default IndexPage;
