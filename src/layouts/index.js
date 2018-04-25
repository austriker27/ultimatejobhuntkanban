import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import "./footer.css";
import "./typography.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darker bg-blue">
    <Helmet
      title="The Ultimate job search Kanban"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    
    <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto py-8 w-full items-center bg-white">
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
