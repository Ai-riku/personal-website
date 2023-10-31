import { createStyles, Text, Overlay, Container, Avatar, Group, Title, rem } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(200),
    paddingBottom: rem(200),
    backgroundImage:
      'url(https://images.unsplash.com/photo-1564457461758-8ff96e439e83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginTop: theme.spacing.md,
    marginBottom: 0,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  avatar: {
    size: '120',
    radius: 'lg'
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

}));

export function HeroHeader() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.85} zIndex={1} />

      <div className={classes.inner}>
        <Group position='center' noWrap>
          <Avatar src={'https://cdn.discordapp.com/attachments/1167609061605388299/1167609089677852784/image.png?ex=654ebfb4&is=653c4ab4&hm=c7fd788360ebd76a3b4c9e8c26eb7ead444e803cc11a9939b27f31e66d5b1996&'} size={160} radius="lg" />
        </Group>

        <Title className={classes.title}>
          Eric Wang
        </Title>

        <Container size={640}>
          <Text size="xl" c='dimmed' className={classes.description}>
            Software engineer looking to make a big impact in technology
          </Text>
        </Container>
      </div>
    </div>
  );
}