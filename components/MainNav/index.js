"use client"
import React from 'react'
import { Container, Text, useMantineColorScheme, Title, Anchor } from "@mantine/core";
import classes from "./MainNav.module.css"

export default function MainNavBar() {

    // set color scheme of the page to user's system default
    const { setColorScheme } = useMantineColorScheme();
    setColorScheme("auto");

    return (
        <Container w="full">
            <Title className={classes.title} ta="center" mt={100}>
                Welcome to{' '}
                <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
                    Mantine
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This starter Next.js project includes a minimal setup for server side rendering, if you want
                to learn more on Mantine + Next.js integration follow{' '}
                <Anchor href="https://mantine.dev/guides/next/" size="lg">
                    this guide
                </Anchor>
                . To get started edit page.tsx file.
            </Text>
        </Container>
    )
}
