import React from "react";

import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview className='text-black'>
        New message from your portfolio site
      </Preview>
      <Tailwind>
        <Body className='bg-slate-200 text-black'>
          <Container>
            <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                Your received the following message from the contact form
              </Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>The senders email is - {senderEmail} </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
