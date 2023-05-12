import { memo } from 'react';
import cls from './Text.module.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    GREY100 = 'grey100',
    GREY200 = 'grey200',
    RED = 'red',
    GREEN = 'green',
    ORANGE = 'orange',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    XSS = 'size_xss',
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

type WeightType = 'lighter' | 'normal' | 'bold';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    weight?: WeightType;
    noWrap?: boolean;
    dynamicHeight?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
const mapSizeToHeader: Record<TextSize, HeaderTagType> = {
    [TextSize.XSS]: 'h6',
    [TextSize.XS]: 'h5',
    [TextSize.S]: 'h4',
    [TextSize.M]: 'h3',
    [TextSize.L]: 'h2',
    [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        weight = 'normal',
        noWrap,
        dynamicHeight,
    } = props;

    const HeaderTag = mapSizeToHeader[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
        [cls[weight]]: true,
        [cls.noWrap]: noWrap,
        [cls.dynamicHeight]: dynamicHeight,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
