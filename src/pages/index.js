import React from "react";
import Link from "gatsby-link";
import browserMock from "../images/browser-mock.png";

const IndexPage = () => (
  <div className="text-center w-4/5">
    
    <h2 className="bg-yellow inline-block my-8 p-3 uppercase leading-loose container mx-auto">
      The Ultimate Job Hunt Kanban
    </h2>
    <p className="font-body container mx-auto">
        If you like Trello, and finding a new job, you will absolutely love this.
    </p>
    <img src={browserMock} className="block mx-auto container" />
  </div>
);

export default IndexPage;
