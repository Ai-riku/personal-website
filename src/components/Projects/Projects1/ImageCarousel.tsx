import React from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
    'https://cdn.discordapp.com/attachments/1167609061605388299/1171664378349748305/image.png?ex=655d807c&is=654b0b7c&hm=78f57bd312f2ed126ab69b894560bb9700d6d99ddbf941b346ce814a459d4b2d&',
    'https://cdn.discordapp.com/attachments/1167609061605388299/1171665545762971690/image.png?ex=655d8192&is=654b0c92&hm=52c838ae4844f93afde0375bd7e756d3e65ba2ee2ff28b1e7d8c1b48c918dcb4&',
    'https://cdn.discordapp.com/attachments/1167609061605388299/1171665294905839666/image.png?ex=655d8156&is=654b0c56&hm=30cfd056e40422bb5a4603223f69068e1a2e8aae4a439f1178085423eace30d5&',
];

export function ImageCarousel() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image width={640} height={480} radius="lg" src={url}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel align="center" slideSize="70%" slideGap="md" mx="auto" withIndicators height={480} controlSize={40} loop>
      {slides}
    </Carousel>
  );
}