import React from "react";
import classNames from "classnames";

import styles from "./Wrapper.module.css";

interface Props {
    children: React.ReactNode;
    center?: boolean;
    style?: React.CSSProperties;
}

export const Wrapper = ({children, center, style}: Props) => (
    <div
        className={classNames(styles.Wrapper, center && styles.center)}
        style={style}
    >
        {children}
    </div>
);
