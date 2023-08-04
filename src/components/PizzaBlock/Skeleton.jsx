import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#ebeaea"
        foregroundColor="#d2d1d1"
        {...props}
    >
        <rect x="0" y="243" rx="10" ry="10" width="280" height="27" />
        <rect x="0" y="291" rx="10" ry="10" width="280" height="88" />
        <circle cx="133" cy="119" r="111" />
        <circle cx="156" cy="139" r="8" />
        <rect x="3" y="397" rx="5" ry="5" width="94" height="29" />
        <rect x="128" y="389" rx="11" ry="11" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton