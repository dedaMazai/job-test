import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';

import cls from './TablePage.module.scss';

interface TablePageProps {
    className?: string
}

export const TablePage = (props: TablePageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.TablePage, {}, [className])}>
            <Text text="Table" weight="bold" />
        </div>
    );
};
