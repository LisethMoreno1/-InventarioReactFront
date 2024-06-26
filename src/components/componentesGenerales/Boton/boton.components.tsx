import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { SxProps, Theme } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsColorOverrides, ButtonPropsVariantOverrides, ButtonPropsSizeOverrides } from '@mui/material/Button';

interface ComponenteButtonProps {
    text: string;
    variant?: OverridableStringUnion<'text' | 'contained' | 'outlined', ButtonPropsVariantOverrides>;
    color?: OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning', ButtonPropsColorOverrides>;
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>;
    startIcon?: React.ReactNode;
    onClick: () => void;
    tooltip?: string;
    sx?: SxProps<Theme>;
    disabled?: boolean;
}

const ComponenteButton: React.FC<ComponenteButtonProps> = ({
    text,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    startIcon = null,
    onClick,
    tooltip = '',
    sx = {},
    disabled = false
}) => {
    return (
        <Tooltip title={tooltip}>
            <span>
                <Button
                    variant={variant}
                    color={color}
                    size={size}
                    startIcon={startIcon}
                    onClick={onClick}
                    sx={sx}
                    disabled={disabled}
                >
                    {text}
                </Button>
            </span>
        </Tooltip>
    );
};

export default ComponenteButton;
