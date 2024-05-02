import React from "react";
import styles from './styles.module.css';
import Resume from "./Resume";

export default function HomepageFeatures(props) {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    <Resume {...props} />
                </div>
            </div>
        </section>
    );
}
