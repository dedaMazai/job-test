import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { CardWithDescription } from '@/entities/CardWithDescription';
import { HScroll } from '@/shared/ui/HScroll/HScroll';

import cls from './SliderPage.module.scss';

const renderBlock = (
    <VStack className={cls.renderBlock} max justify="center" align="center">
        <Text text="Info header" weight="bold" />
        <Text text="Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info InfoInfo Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info" />
        {/* <img
            className="img"
            alt="preView"
            src="https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png"
        /> */}
    </VStack>
);

const previewBlock1 = (
    <img
        className={cls.img}
        alt="preView"
        src="https://static.tildacdn.com/tild3935-3662-4162-a431-306635613665/react.png"
    />
)

const previewBlock2 = (
    <img
        className={cls.img}
        alt="preView"
        src="https://mobimg.b-cdn.net/v3/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg?w=1470&r=0.5625"
    />
)

const CARDS = [
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock1,
        description: renderBlock,
        info: 'Open',
    },
    {
        preview: previewBlock2,
        description: renderBlock,
        info: 'Open',
    },
];

export function SliderPage() {
    return (
        <div className={cls.SliderPage}>
            <HScroll className={cls.scroll}>
                {CARDS.map((card) => (
                    <CardWithDescription
                        descriptionBlock={card.description}
                        previewBlock={card.preview}
                        textInfo={card.info}
                    />
                ))}
            </HScroll>
        </div>
    );
}
