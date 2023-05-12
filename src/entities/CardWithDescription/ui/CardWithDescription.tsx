import { ReactNode, useCallback, useState } from 'react';
import Plus from '@/shared/assets/icons/plus.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';

import cls from './CardWithDescription.module.scss';

interface CardWithDescriptionProps {
    className?: string;
    descriptionBlock: ReactNode;
    previewBlock: ReactNode;
    textInfo: string;
}

export const CardWithDescription = (props: CardWithDescriptionProps) => {
    const {
        className,
        previewBlock,
        descriptionBlock,
        textInfo,
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleChangeOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <Card className={classNames(cls.CardWithDescription, {}, [className])}>
            <div
                className={classNames(cls.descriptionBlock, {
                    [cls.isActive]: isOpen,
                })}
            >
                {descriptionBlock}
            </div>
            <div
                className={classNames(cls.previewBlock, {
                    [cls.isActive]: isOpen,
                })}
            >
                {previewBlock}
            </div>
            <HStack gap="16" max justify="between">
                <Text
                    text={textInfo}
                    weight="bold"
                    className={classNames(cls.hideText, {
                        [cls.isActive]: isOpen,
                    })}
                />
                <Button
                    onClick={handleChangeOpen}
                    theme={ThemeButton.CLEAR}
                    className={cls.circleButton}
                >
                    <Icon
                        Svg={Plus}
                        className={classNames(cls.iconPlus, {
                            [cls.isActive]: isOpen,
                        })}
                    />
                </Button>
            </HStack>
        </Card>
    );
};
