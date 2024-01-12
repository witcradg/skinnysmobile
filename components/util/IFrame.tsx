import React, { HTMLAttributeReferrerPolicy } from 'react';

interface IFrameProps {
    src: string;
    width: string;
    height: string;
    style: React.CSSProperties;
    allowFullScreen: boolean;
    loading: "eager" | "lazy" | undefined;
    referrerPolicy: HTMLAttributeReferrerPolicy | undefined
}

const IFrame: React.FC<IFrameProps> = ({ src, width, height, style, allowFullScreen, loading, referrerPolicy }) => {
    return (
        <iframe 
            src={src} 
            width={width} 
            height={height} 
            style={style} 
            allowFullScreen={allowFullScreen} 
            loading={loading} 
            referrerPolicy={referrerPolicy}
        />
    );
}

export default IFrame;