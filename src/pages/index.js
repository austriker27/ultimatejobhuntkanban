import React from "react";
import Link from "gatsby-link";
import browserMock from "../images/browser-mock.png";

const IndexPage = () => (
  <div className="text-center bg-white  my-8">
    
    <h2 className="my-8 p-3 uppercase w-3/4 mx-auto font-title text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-normal leading-normal md:leading-loose lg:leading-loose xl:leading-loose">
      The <span className="font-black"><br></br>Ultimate job search Kanban</span>
    </h2>
    <p className="font-body my-8 p-3 mx-auto w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-lg sm:text-base tracking-wide">
        If you like Trello, and you like finding a new job quickly, you will <span className="text-blue font-bold bg-blue-lighter">absolutely love</span> this.
    </p>
    <img src={browserMock} className="block mx-auto container shadow-lg" />
    <p className="font-body font-light my-8 p-3 mx-auto w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-full text-xl sm:text-base tracking-wide">
    Being a hyper nerd about digital organization, I spent countless hours compiling and culling all the best resources for my job search. And after trying several job search organization websites, I decided I needed a more custom solution. <br></br>So I went back to trusty Trello for maximum customization. 
    </p>

    <p className="font-body font-light my-8 p-3 mx-auto w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-full text-xl sm:text-base tracking-wide">
    I transformed my own job searching board into this template for your use.
    </p>

    <p className="font-body font-light my-8 p-3 mx-auto w-full md:w-1/2 lg:w-1/2 xl:w-1/2 sm:w-full text-lg sm:text-base tracking-wide">
    Save time on organizing your job search so you can spend more time job searching.
    </p>

    <div className="flex flex-col items-center rounded overflow-hidden">
      <div className="flex">
        <button className="block text-white text-sm shadow-border bg-blue hover:bg-blue-dark text-sm py-3 px-4 font-body tracking-wide uppercase font-bold text-xl">
        <a href="https://trello.com/b/qdXnbUBi" target="_blank" className="text-white">Open the Template</a>
        </button>
        <div className="bg-blue-light shadow-border p-3">
          <div className="w-8 h-8">
            <svg className="fill-current text-white h-full" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            
            <g id="Page-1" stroke="none" stroke-width="1">
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
