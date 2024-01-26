import { SimpleGrid, Container } from '@mantine/core';
import { CarouselCard } from '../Cards/CarouselCards';

const mockdata = [
  {
    id: "0" ,
    title: 'Trade-Craft',
    image:[
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    date: 'August 18, 2022',
    description : ""
  },
  {
    id: "1" ,
    title: 'Nandaka',
    image:[
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
     date: 'August 27, 2022',
     description : ""
  },
  {
    id: "2" ,
    title: 'Freak-Bros Website',
    image:[
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    date: 'September 9, 2022',
    description : ""
  },
  {
    id: "3" ,
    title: 'Beware',
    image:[
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    date: 'September 12, 2022',
    description : ""
  },
  {
    id: "4" ,
    title: 'Fbrs Accounting',
    image:[
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    date: 'September 12, 2022',
    description : ""
  },
  {
    id: "5" ,
    title: 'By My Side',
    image:[
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
    ],
    date: 'September 12, 2022',
    description : ""
  },
];

export function ProjectListGrid() {
  const cards = mockdata.map((article) => (
    <CarouselCard {...article} key={article.id}/>
    // <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
    //   <AspectRatio ratio={1920 / 1080}>
    //     <Image src={article.image} />
    //   </AspectRatio>
    //   <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
    //     {article.date}
    //   </Text>
    //   <Text className={classes.title} mt={5}>
    //     {article.title}
    //   </Text>
    // </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}