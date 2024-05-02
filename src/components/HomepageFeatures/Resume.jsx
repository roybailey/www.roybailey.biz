'use strict'
import React from 'react'
import styles from './Resume.module.scss'
import useBaseUrl from "@docusaurus/useBaseUrl";
import SocialMediaList from "./SocialMediaList";


export default (({className, image, title, message, social}) => {

    console.log("Rendering PhotoCard");

    return (
        <div className={[className, "card", styles.card].join(' ')}>
            <div className="card__image">
                <img
                    src={useBaseUrl(image)}
                    alt={title}
                    title={title}/>
            </div>
            <div className="card__body">
                <h4>{title}</h4>
                <small>
                    {message}
                </small>
            </div>
            <div className="card__footer">
                <SocialMediaList social={social} showText='false' vert='false'/>
            </div>
        </div>
    );
});
