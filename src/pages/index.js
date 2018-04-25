import React from "react";
import Link from "gatsby-link";
import browserMock from "../images/browser-mock.png";

const IndexPage = () => (
  <div className="text-center bg-white  my-8">
    
    <h2 className="inline-block my-8 p-3 uppercase leading-loose w-1/2 mx-auto font-title text-5xl">
      The Ultimate Job Hunt Kanban
    </h2>
    <p className="font-body my-8 p-3 mx-auto w-1/2 text-3xl">
        If you like Trello, and you like finding a new job quickly, you will <span className="">absolutely love</span> this.
    </p>
    <img src={browserMock} className="block mx-auto container shadow-lg" />
    <p className="font-body my-8 p-3 mx-auto w-1/2 text-2xl">
    Being a hyper nerd about digital organization, I spent countless hours compiling all the best resources for my job search. And after trying job application tracking software like [huntr](http://huntr.co) I decided I wanted a more custom solution. So I went back to trusty Trello for maximum customization. 

    I transformed my own job searching board into this template for your use.
    Save time on organizing your job search so you can spend more time job searching.
    </p>
    <div className="flex flex-col items-center rounded overflow-hidden">
      <div className="flex">
        <button className="block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4 font-sans tracking-wide uppercase font-bold">
          Open the Template
        </button>
        <div className="bg-blue-light shadow-border p-3">
          <div className="w-4 h-4">
            <svg className="fill-current text-white h-max" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Logos" transform="translate(-1579.000000, -521.000000)">
                    <g id="Group" transform="translate(-9.000000, 1.000000)">
                        <g id="Trello-Logo" transform="translate(468.000000, 0.000000)">
                            <g id="Trello-Mark---Blue---Flat" transform="translate(1020.000000, 420.000000)">
                                <g id="Mark" transform="translate(100.000000, 100.000000)">
                                    <rect id="Board" fill="#0079BF" x="0" y="0" width="200" height="200" rx="25"></rect>
                                    <rect id="Right-List" fill="#FFFFFF" x="113" y="26" width="61" height="87.5" rx="12"></rect>
                                    <rect id="Left-List" fill="#FFFFFF" x="26" y="26" width="61" height="137.5" rx="12"></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
      </div>
    </div>
  </div>
  </div>
  
  </div>
);

export default IndexPage;
