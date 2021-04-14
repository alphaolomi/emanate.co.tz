import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/emanatecodes/">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'We specialize in building modern platforms\n'}
            <span className="text-primary-500">Exceptional!</span>
          </>
        )}
        description="The easiest way to get your idea into market."
        button={(
          <Link href="/">
            <a>
              <Button xl>Contact Us</Button>
            </a>
          </Link>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
