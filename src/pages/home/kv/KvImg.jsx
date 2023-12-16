
import clsx from 'clsx'
import kv01 from '../../../assets/img/kv01.png';

export const BluredBackground = ({ children }) => {
    return (
        <div
            className={'w-60 h-auto transform-gpu [-webkit-backdrop-filter:saturate(180%)_blur(20px)] [backdrop-filter:saturate(180%)_blur(20px)] [backface-visibility:hidden] bg-themed-bg_opacity [border-bottom:1px_solid_rgb(187_187_187_/_20%)] opacity-100'
            }
        >{children}</div>
    )
}
