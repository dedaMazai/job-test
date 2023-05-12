import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    CLEAR_INVERTED_ACTIVE = 'clearInvertedActive',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_GREEN = 'backgroundGreen',
    BACKGROUND_RED = 'backgroundRed',
    BACKGROUND_RED_LIGHT = 'backgroundRedLight',
    BACKGROUND_INVERTED = 'backgroundInverted',
    BACKGROUND_INVERTED_BG = 'backgroundInvertedBgColor',
}

export enum SizeButton {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
    noShirk?: boolean;
    noPadding?: boolean;
    type?: 'reset' | 'button' | 'submit';
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        fullWidth,
        size = SizeButton.M,
        noShirk,
        noPadding,
        type = 'button',
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
        [cls.noShirk]: noShirk,
        [cls.noPadding]: noPadding,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
});
