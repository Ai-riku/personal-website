import { createStyles, Text, Container,Title, Group, Card, Badge, SimpleGrid, rem } from '@mantine/core'
import { IconShieldCheck, IconPuzzle, IconCookie, IconPalette, IconBulb, IconStairsUp, IconHeartHandshake } from '@tabler/icons-react';
import React from 'react'

const traitdata = [
    {
      title: 'Strong Integrity',
      description:
        'I pride myself in my dedication to upholding ethical standards, being honest, and maintaining a strong moral character. I believe it is crucial to build trust with colleagues, stakeholders and clients.',
      icon: IconShieldCheck,
    },
    {
      title: 'Adaptable',
      description:
        'I am open to change and embrace new technologies. I am willing and eager to learn new programming languages, frameworks, or methodologies to address evolving needs.',
      icon: IconPalette,
    },
    {
      title: 'Detail Oriented',
      description:
        'I am meticulous in my work to ensure my code is efficient, readable, and maintainable. I also consider as many edge cases and potential pitfalls as possible to ensure delivery of robust and error-free software',
      icon: IconPuzzle,
    },
    {
      title: 'Team Player',
      description:
        'I work hard to ensure effective communication and collaboration when working in teams. I actively share knowledge, seek feedback, and build strong working relationships to maximize my team\'s success.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Curious',
      description:
        'I am driven by curiosity to explore new technologies and learn innovative approaches. I am constantly seeking to discover creative solutions, and adapt to the ever-evolving landscape of technology.',
      icon: IconBulb,
    },
    {
      title: 'Continuously Improving',
      description:
        'I strive to continuously grow and improve my professional skillsets. I am actively seeking opportunities to enhance my skills, expand my knowledge, and refine my craft. ',
      icon: IconStairsUp,
    },
  ];

const useStyles = createStyles((theme) => ({
      titleCard: {
        fontSize: rem(34),
        fontWeight: 900,
    
        [theme.fn.smallerThan('sm')]: {
          fontSize: rem(24),
        },
      },
    
      descriptionCard: {
        maxWidth: 600,
        margin: 'auto',
    
        '&::after': {
          content: '""',
          display: 'block',
          backgroundColor: theme.fn.primaryColor(),
          width: rem(45),
          height: rem(2),
          marginTop: theme.spacing.sm,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
    
      card: {
        border: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
      },
    
      cardTitle: {
        '&::after': {
          content: '""',
          display: 'block',
          backgroundColor: theme.fn.primaryColor(),
          width: rem(45),
          height: rem(2),
          marginTop: theme.spacing.sm,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
  }));

export function MyValues() {
    const { classes, theme } = useStyles();
    const features = traitdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" fw={400} mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">

        <Title order={2} className={classes.titleCard} ta="center" mt="sm">
          My Values
        </Title>
  
        <Text c="dimmed" className={classes.descriptionCard} ta="center" mt="md">
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }
  