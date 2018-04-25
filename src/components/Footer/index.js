import React from "react";

import twitter from "../../images/twitter.svg"

const Header = () => (
  <div className="bg-blue">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Created by{" "}
        <a
          href="https://www.davidalindahl.com"
          className="font-bold no-underline text-white"
        >
          David A. Lindahl
        </a>
      </p>

      <p>
        <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/austriker">
          <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee">
          </img>
            <span className="coffeeText">Buy me a coffee</span>
        </a>
      </p>

      <p>
        
          
       
      </p>
      <p>
        <a className="fill current text-white bg-white" target="_blank" href="https://www.buymeacoffee.com/austriker">
          
          <img className="bg-white" src={twitter}>
          </img>
        
        </a>
      </p>
    </div>
  </div>
);

export default Header;
