import React from "react";

import twitter from "../../images/twitter.svg"

const Header = () => (
  <div className="bg-blue">
    <div className="flex justify-around max-w-xl mx-auto p-2 md:p-4 text-sm">
      <p>
          <a href="https://twitter.com/austriker27"  title="Twitter" className=" align-middle">
            <svg className="h-full fill-current text-white" viewBox="0 0 512 512">
              <path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/>
            </svg>
          </a>
      </p>

      <p>
        <a className="bmc-button align-middle" target="_blank" href="https://www.buymeacoffee.com/austriker">
          <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" className="h-full" alt="Buy me a coffee">
          </img>
            <span className="coffeeText text-xs font-light font-body">Buy me a coffee</span>
        </a>
      </p>     
    </div>

    <div className="flex justify-around max-w-xl mx-auto p-2 md:p-4 text-xs font-light font-body">
      <p className="text-white align-middle">
        Created by{" "}
        <a
          href="https://www.davidalindahl.com"
          className="font-bold no-underline text-white"
        >
          David A. Lindahl
        </a>
      </p>
    </div>
  </div>
);

export default Header;
