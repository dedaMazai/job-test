import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { registerAllModules } from 'hdtable/registry';
import { HotTable } from 'hdtable-react';

import cls from './TablePage.module.scss';
import { useRemoveLicenseKey } from '@/shared/lib/hooks/removeLicenseKey/removeLicenseKey';

registerAllModules();
interface TablePageProps {
    className?: string;
}

const hotData = [
    ['', 'Tesla', 'Volvo', 'Toyota', 'Honda', 'Tesla', 'Volvo', 'Toyota', 'Honda'],
    ['2020', 10, 11, 12, 13, 10, 11, 12, 13],
    ['2021', 20, 11, 14, 13, 20, 11, 14, 13],
    ['2022', 30, 15, 12, 13, 30, 15, 12, 13],
    ['2023', 30, 15, 12, 13, 30, 15, 12, 13],
    ['2024', 30, 15, 12, 13, 30, 15, 12, 13],
    ['2025', 30, 15, 12, 13, 30, 15, 12, 13],
    ['2026', 30, 15, 12, 13, 30, 15, 12, 13],
];

export const TablePage = (props: TablePageProps) => {
    const { className } = props;
    // useRemoveLicenseKey();

    return (
        <div className={classNames(cls.TablePage, {}, [className])}>
            <Text text="Table" weight="bold" theme={TextTheme.ERROR} />
            <HotTable
                className={cls.table}
                data={hotData}
                rowHeaders={true}
                colHeaders={true}
                width="600"
                height="300"
                // licenseKey="non-commercial-and-evaluation"
                // height="auto"
                // licenseKey="non-commercial-and-evaluation"
            />
        </div>
    );
};
