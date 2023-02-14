import React from "react";
import style from "./Contact.module.scss";

import {ReactComponent as Telegram} from '../../../../asssets/images/somestuff/contacts/Telegram.svg'
import {ReactComponent as Viber} from '../../../../asssets/images/somestuff/contacts/Viber.svg'
import {ReactComponent as WhatsApp} from '../../../../asssets/images/somestuff/contacts/WhatsApp.svg'
import {ReactComponent as Mail} from '../../../../asssets/images/somestuff/contacts/Mail.svg'

const Contact = () => {
  return (
    <div className={style.Contact}>
      <div className={style.tel}>
        <a href="/#">+38 (050) 810 97 37</a>
        <a href="/#">+38 (067) 373 23 06</a>
      </div>
      <div className={style.contacts}>
        <a href="/#"><Viber/></a>
        <a href="/#"><WhatsApp/></a>
        <a href="https://telegram.im/@smolensky69" target="_blank"><Telegram/></a>
        <a href="mailto:vanya.smolensky@gmail.com" target="_blank"><Mail/></a>
      </div>
    </div>
  );
};

export default Contact;
