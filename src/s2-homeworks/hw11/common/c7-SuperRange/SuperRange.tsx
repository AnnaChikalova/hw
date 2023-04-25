import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import s from './SuperRange.module.css'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: "olivedrab"



                // стили для слайдера // пишет студент
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
