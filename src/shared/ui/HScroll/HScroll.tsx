import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './HScroll.module.scss';

interface HScrollProps {
    className?: string;
    children?: ReactNode;
}

export const HScroll = memo((props: HScrollProps) => {
    const { className, children } = props;

    return (
        <div
            className={classNames(cls.HScroll, {}, [className])}
        >
            {children}
        </div>
    );
});
