import React from 'react';

export default () => {
  return (
    <div className="emailSignup">
      <div id="mc_embed_signup">
        <form action="https://treehacks.us8.list-manage.com/subscribe/post?u=e6ff5c7ae36357707280fa752&amp;id=6bbee6e6d5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            {/*<label htmlFor="mce-EMAIL">Enter your email to receive updates about TreeHacks 2020</label>*/}
            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div aria-hidden="true"><input type="text" name="b_e6ff5c7ae36357707280fa752_6ec8dfd393" tabIndex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="notify me when applications open" name="subscribe" id="mc-embedded-subscribe" className="apply-button" /></div>
          </div>
        </form>
      </div>
    </div>
  );
}
