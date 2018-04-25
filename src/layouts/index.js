import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import "./footer.css";
import "./typography.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-dark bg-blue">
    <Helmet
      title="The Ultimate job search Kanban"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    
    <div className="flex flex-col flex-1 md:justify-center mx-auto py-8 w-1/4 sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 items-center bg-white">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
