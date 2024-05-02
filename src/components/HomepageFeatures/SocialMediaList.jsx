'use strict'
import React from 'react'

import styles from './SocialMediaList.module.scss'

export default ((props) => {

    const { social } = props;
    console.log("Rendering SocialMediaList "+JSON.stringify(social));
    const display = (props.vert==='true')?'flex':'inline-flex';
    const SocialItem = ({link, icon}) => {
        return ((link)?
        <a href={link} target="_blank">
            <li style={{display:display}}><i className={"fb fa " + icon}></i>
                {((props.showText==='true')?
                    <small>{link}</small>
                    : ""
                )}
            </li>
        </a>
        : "");
    }

    return (
      <ul className={props.className || styles.social}>
          <SocialItem link={social.facebook} icon='fa-facebook-square'    />
          <SocialItem link={social.linkedin} icon='fa-linkedin-square'    />
          <SocialItem link={social.rss}      icon='fa-rss-square'         />
          <SocialItem link={social.github}   icon='fa-github-square'      />
          <SocialItem link={social.twitter}  icon='fa-twitter-square'     />
      </ul>
    );
});
