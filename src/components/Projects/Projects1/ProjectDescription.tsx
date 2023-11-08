import React from 'react'
import { createStyles, Title, Text, Container, Grid, Skeleton, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    },

    grid: {
        borderRight: `${rem(2)} solid ${theme.colors.gray[2]}`,
    },

    title: {
        paddingTop: `calc(${theme.spacing.xl} * 1)`,
        paddingBottom: `calc(${theme.spacing.xl} * 1)`,
    },

    description: {
        margin: 'auto'
    }
  }));

export function ProjectDescription() {
    const { classes, theme } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container>
                    <Grid columns={3}>
                        <Grid.Col className={classes.grid} span={2}>
                            <Title className={classes.title} align={'left'} order={2}>Personalized website</Title>
                            <Text className={classes.description} align={'left'}>Establishing a personal website provides a straightforward and effective means of presenting and showcasing my work. By having a dedicated platform to exhibit my work, I can effectively highlight my skills, expertise, and growth in the field of development, allowing others to easily assess and appreciate my contributions.</Text>
                            <Title className={classes.title} align={'left'} order={3}>Modern Frameworks</Title>
                            <Text className={classes.description}align={'left'}>By actively acquiring knowledge and skills in modern frameworks, I enhance my ability to produce exceptional products of superior quality. Consequently, I maintain an open-minded approach towards learning innovative concepts that can elevate the overall standard of my code. It is worth noting that the website in question has been developed using the React Framework and Mantine component library</Text>
                        </Grid.Col>
                        <Grid.Col span={1}>
                            <Title className={classes.title} align={'left'} order={4}>Github Link:</Title>
                            <Text className={classes.description} align={'left'}><a href="https://github.com/Ai-riku/personal-website">https://github.com/Ai-riku/personal-website</a></Text>
                            <Title className={classes.title} align={'left'} order={4}>Date Created:</Title>
                            <Text className={classes.description} align={'left'}>Nov 01, 2023</Text>
                        </Grid.Col>
                    </Grid>
                </Container>
            </div>
        </>
    )
  }