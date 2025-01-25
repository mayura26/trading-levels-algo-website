const Footer = () => {
    return (
      <footer className="w-full py-4 px-4 mt-8 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm">
        <div className="container mx-auto">
          <p className="text-center">
            <b className="text-gray-800 dark:text-gray-200">Risk Disclosure:</b>
            <br />
            Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones' financial security or life style. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results. 
            <br />
            <br />
            <b className="text-gray-800 dark:text-gray-200">Hypothetical Performance Disclosure:</b>
            <br />
            Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. for example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.
          </p>
        </div>
        <div className="container mx-auto mt-4">
          <p className="text-center">
            <a href="/risk-disclosure" className="text-primary hover:text-primary/80 underline">
              View Full Risk Disclosure
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;