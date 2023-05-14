import { classNames } from '@/shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;

    return (
        <HStack gap="24" className={classNames(cls.MainPage, {}, [className])}>
            <Link
                to="/slider"
            >
                <Text text="Slider" weight="bold" theme={TextTheme.GREEN} />
            </Link>
            <Link
                to="/table"
            >
                <Text text="Table" weight="bold" theme={TextTheme.GREEN} />
            </Link>
        </HStack>
    );
};
