import {
    Container,
    Text,
    Space,
    Group , 
    rem , 
    List
  } from "@mantine/core";
  import {
    IconMapPinFilled,
    IconCalendarMonth,
  } from "@tabler/icons-react";

const WorkAndExperience = () => {
  return (
    <Container size="lg">
        <Text size="xl" fw={700} tt="uppercase">
            Work Experience
        </Text>
        <Space h="xs" />
        <Text size="xl" >Programmer</Text>
        <Text size="lg" fw={700} c="blue" >Freak-Bros Studio.</Text>
        <Group gap="xl">
            <Group gap="xs">
                <IconCalendarMonth style={{ width: rem(16), height: rem(16) }}/>
                <Text size="sm">January 2020 - December 2023</Text>
            </Group>
            <Group gap="xs">
                <IconMapPinFilled style={{ width: rem(16), height: rem(16) }}/>
                <Text size="sm">Bihar , IN</Text>
            </Group>
        </Group>
        <Space h="lg"/>
        <List withPadding>
            <List.Item>Made a Story sharing social media service named Tales for play store release.</List.Item>
            <List.Item>Developed a fully functional Business account management service .</List.Item>
            <List.Item>Worked with an international jewellery hallmarking company .</List.Item>
            <List.Item>Developed the lobby and matchmaking service for a peer to peer multiplayer game .</List.Item>
            <List.Item>Made Ecommerse service for two clients .</List.Item>
            <List.Item>Developed and tested a fully functional Server client multiplayer game .</List.Item>
            <List.Item>Integrated SQL database in the Business account management service.</List.Item>
            <List.Item>Created multiple games including horror multiplayer , hypercasual , casual obastacle course , Multiplayer TDM </List.Item>
            <List.Item>Developed my website and hosted it on firebase .</List.Item>
        </List>
        <Space h="lg"/>
        <Text size="xl" fw={700} tt="uppercase">
           Additional Projects
        </Text>
        <Space h="lg"/>
        <List withPadding>
            <List.Item>Made a uniform circular color picker for Unity .</List.Item>
            <List.Item>Made a animation combining system for Godot engine .</List.Item>
            <List.Item>Made myself a music management system for my pc .</List.Item>
        </List>
    </Container>
  )
}

export default WorkAndExperience