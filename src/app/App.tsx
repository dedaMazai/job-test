import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { CardWithDescription } from '@/entities/CardWithDescription';
import { HScroll } from '@/shared/ui/HScroll/HScroll';

import './App.scss';

const renderBlock = (
    <VStack className="renderBlock" max justify="center" align="center">
        <Text text="Info header" weight="bold" />
        <Text text="Info Info Info Info Info Info" />
    </VStack>
);

const previewBlock1 = (
    <img
        className="img"
        alt="preView"
        src="https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png"
    />
)

const previewBlock2 = (
    <img
        className="img"
        alt="preView"
        src="https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625"
    />
)

const CARDS = [
    {
        img: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        img: '=1470&r=0.5625',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625',
        description: renderBlock,
        info: 'Open',
    },
    {
        img: 'https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png',
        description: renderBlock,
        info: 'Open',
    },
];

export function App() {
    return (
        <div className="App">
            <></>
            <HScroll className='scroll'>
                {CARDS.map((card) => (
                    <CardWithDescription
                        descriptionBlock={card.description}
                        preViewImg={card.img}
                        textInfo={card.info}
                    />
                ))}
            </HScroll>
        </div>
    );
}
