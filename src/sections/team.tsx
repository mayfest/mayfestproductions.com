'use client';

import { Section } from '@/components';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import GradientDivider from '../components/team/gradient-divider';
import TeamsGrid from '../components/team/teams-grid';

const variants = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, scale: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.0],
      delayChildren: 0.5,
    },
  },
};

const grandchildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 0.8,
    y: 0,
  },
};

export default function Team() {
  return (
    <div id="our-team" className="my-16">
      <motion.div
        className="relative h-[480px] overflow-hidden"
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 'all' }}
      >
        <GradientDivider top height={32} />
        <img
          src="/team-background.jpg"
          alt="Mayfest Productions Teams Background"
          className="w-full h-full object-cover object-center"
        />
        <GradientDivider bottom height={128} />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black p-4"
          variants={childVariants}
        >
          <h2 className="text-[128px] font-bold text-center text-transparent bg-[url('/team-background.jpg')] bg-[100%] bg-center bg-clip-text text-opacity-30 md:text-[64px]">
            Meet Mayfest
          </h2>
          <motion.p
            className="text-white text-lg max-w-2xl text-center"
            variants={grandchildVariants}
          >
            The organization is comprised of{' '}
            <span className="text-purple-300 font-medium">10 committees</span>,
            each with its own core responsibilities and cross-committee
            collaborations that translate directly to the success of our events.
          </motion.p>
        </motion.div>
      </motion.div>

      <Section className="mx-auto">
        <TeamsGrid />
        <p className="text-center mt-4 text-sm opacity-50">
          click on a team for more info
        </p>
        <div className="flex justify-center items-center mt-4">
          <a
            href="/roster/"
            className="flex items-center gap-1 text-purple-200 px-2 py-1 rounded-lg transition duration-150 hover:bg-white/10 active:bg-white/20"
          >
            <span>View Full Historical Roster</span>
            <ChevronRightIcon className="w-4 h-4 stroke-2" />
          </a>
        </div>
      </Section>
    </div>
  );
}



/*
'use client';

import { Section, mobile } from '@/components';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GradientDivider from '../components/gradient-divider';
import TeamsGrid from '../components/teams-grid';

const Container = styled.div`
  margin: 64px 0;
`;

const Heading = styled(motion.div)`
  height: 480px;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 128px;
  background: url(/team-background.jpg);
  background-size: 100%;
  background-position: 50% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: rgba(216, 180, 254, 0.3);
  text-align: center;

  ${mobile} {
    font-size: 64px;
  }
`;

const Text = styled(motion.p)`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  max-width: 800px;
`;

const TextHighlight = styled.span`
  color: #d8b4fe;
  font-weight: 500;
`;

const Note = styled.p`
  text-align: center;
  margin: 16px 0;
  font-size: 14px;
  opacity: 0.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #e9d5ff;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background-color 150ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ArrowIcon = styled(ChevronRightIcon)`
  width: 16px;
  height: 16px;
  stroke-width: 2px;
`;

const variants = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, scale: 5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.0],
      delayChildren: 0.5,
    },
  },
};

const grandchildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 0.8,
    y: 0,
  },
};

export default function Team() {
  return (
    <Container id="our-team">
      <Heading
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 'all' }}
      >
        <GradientDivider top height={32} />
        <Image
          src="/team-background.jpg"
          alt="Mayfest Productions Teams Background"
        />
        <GradientDivider bottom height={128} />
        <TitleContainer variants={childVariants}>
          <Title>Meet Mayfest</Title>
          <Text variants={grandchildVariants}>
            The organization is comprised of{' '}
            <TextHighlight>10 committees</TextHighlight>, each with its own core
            responsibilities and cross-committee collaborations that translate
            directly to the success of our events.
          </Text>
        </TitleContainer>
      </Heading>
      <Section style={{ margin: '0 auto' }}>
        <TeamsGrid />
        <Note>click on a team for more info</Note>
        <ButtonContainer>
          <Button href="/roster/">
            <span>View Full Historical Roster</span>
            <ArrowIcon />
          </Button>
        </ButtonContainer>
      </Section>
    </Container>
  );
}
*/