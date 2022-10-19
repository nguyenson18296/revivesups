import React, { CSSProperties } from "react";
import Image from "next/image";
import cx from "classnames";

import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import styles from "./SlideButton.module.scss";

const nextButtonStyle: CSSProperties = {
    right: "calc(60px / -2)",
}

const prevButtonStyle: CSSProperties = {
    left: "calc(60px / -2)",
}

export const SliderButton: React.FC<({ left?: boolean, isHover: boolean })> = ({
    left, isHover
}) => {
    const customStyles: CSSProperties = left ? prevButtonStyle : nextButtonStyle
    return (
        <button
            className={cx(styles.button, "slider-button")}
            style={{
                ...customStyles,
                opacity: isHover ? 1 : 1,
                marginLeft: isHover ? "0" : "-20px",
                marginRight: isHover ? "0" : "-20px",
            }}
        >
            <span className={styles.icon}>
                <Image src={left ? arrowLeft : arrowRight} alt="arrow" />
            </span>
        </button>
    )
}