import {
    Container,
    Text,
    Space,
    Group,
    rem, 
    List
  } from "@mantine/core";
import {
    IconMapPinFilled,
    IconCalendarMonth,
  } from "@tabler/icons-react";

const EducationAndSkills = () => {
  return (
    <Container size="lg">
        <Text size="xl" fw={700} tt="uppercase">
            Education
        </Text>
        <Space h="xs" />
        <Text>BCA</Text>
        <Text fw={700}>I.G.N.O.U</Text>
        <Group>
            <IconCalendarMonth style={{ width: rem(16), height: rem(16) }}/>
            <Text size="sm">January 2023 - Ongoing</Text>
        </Group>
        <Group>
            <IconMapPinFilled style={{ width: rem(16), height: rem(16) }}/>
            <Text size="sm">Delhi , India</Text>
        </Group>
        <Space h="lg"/>
        <Text size="xl" fw={700} tt="uppercase">
            Skills
        </Text>
        <Space h="xs" />
        <List withPadding>
            <List.Item>Javascript</List.Item>
            <List.Item>HTML/CSS</List.Item>
            <List.Item>Python</List.Item>
            <List.Item>React Js.</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>Electron Js</List.Item>
            <List.Item>SQL</List.Item>
            <List.Item>Node Js</List.Item>
            <List.Item>Typescript</List.Item>
            <List.Item>Flutter</List.Item>
            <List.Item>C , C++</List.Item>
            <List.Item> C# </List.Item>
            <List.Item>Firebase</List.Item>
            <List.Item>A.W.S</List.Item>
            <List.Item>Unity Engine</List.Item>
            <List.Item>Unreal Engine</List.Item>
            <List.Item>Godot</List.Item>
            <List.Item>Kotlin</List.Item>
        </List>
    </Container>
  )
}

export default EducationAndSkills