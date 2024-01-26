import {
    Text,
    Space,
    Title,
    Group,
    rem,
    Button,
  } from "@mantine/core";
import {
    IconMailFilled,
    IconPhoneFilled,
    IconMapPinFilled,
  } from "@tabler/icons-react";
import classes from "../../pages/Pages.module.css"


const AboutHeader = () => {
  return (
    <>
        <Title order={1}>Sushant Jaiswal</Title>
        <Title order={3} c="blue">
        Software Developer
        </Title>
        <Space h="xs" />
        <Group justify="space-between">
        <Button
            variant="default"
            leftSection={
            <IconMailFilled style={{ width: rem(16), height: rem(16) }} />
            }
            className={classes.transparentBtn}
        >
            sushantkjaiswal5@gmail.com
        </Button>
        <Button
            variant="default"
            leftSection={
            <IconPhoneFilled style={{ width: rem(16), height: rem(16) }} />
            }
            className={classes.transparentBtn}
        >
            +91-6203519598
        </Button>
        <Button
            variant="default"
            leftSection={
            <IconMapPinFilled style={{ width: rem(16), height: rem(16) }} />
            }
            className={classes.transparentBtn}
        >
            Muzaffarpur , Bihar , IN
        </Button>
        </Group>
        <Space h="xs" />
        <Text size="xl" fw={700} tt="uppercase">
        Career Objective
        </Text>
        <Space h="xs" />
        <Text>
        As a Versatile Programmer/Software Developer with 3+ years of experience,
        I am seeking a remote role to leverage my experience while
        accommodating ongoing studies. Proficient in Js , C# ... I am
        committed to delivering quality solutions and contributing to team
        success.
        </Text>
    </>
  )
}

export default AboutHeader