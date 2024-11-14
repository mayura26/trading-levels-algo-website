'use client'

import { Card, CardBody, Accordion, AccordionItem } from "@nextui-org/react";

export default function FullRiskDisclosure() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Full Risk Disclosure</h1>

      <Accordion>
        <AccordionItem key="futures" title="Futures Risk Disclosure">
          <Card>
            <CardBody>
              <div className="space-y-4">
                <p>The following statement is furnished pursuant to Commodity Futures Trading Commission (“CFTC”) Regulation 1.55(c).This brief statement does not disclose all of the risks and other significant aspects of trading in futures, forex and options. In light of the risks, you should undertake such transactions only if you understand the nature of the contracts (and contractual relationships) into which you are entering and the extent of your exposure to risk. Trading in futures, forex and options is not suitable for many members of the public. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources and other relevant circumstances.</p>
                <p>The risk of loss in trading commodity futures contracts and foreign currency can be substantial. You should, therefore, carefully consider whether such trading is suitable for you in light of your circumstances and financial resources. You should be aware of the following points:</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>You may sustain a total loss of the funds that you deposit with your broker to establish or maintain a position in the commodity futures market or foreign exchange market, and you may incur losses beyond these amounts. If the market moves against your position, you may be called upon by your broker to deposit a substantial amount of additional margin funds, on short notice, in order to maintain your position. If you do not provide the required funds within the time required by your broker, your position may be liquidated at a loss, and you will be liable for any resulting deficit in your account.</li>

                  <li>The funds you deposit with a futures commission merchant for trading futures and forex positions are not protected by insurance in the event of the bankruptcy or insolvency of the futures commission merchant, or in the event your funds are misappropriated.</li>

                  <li>The funds you deposit with a futures commission merchant for trading futures or forex positions are not protected by the Securities Investor Protection Corporation even if the futures commission merchant is registered with the Securities and Exchange Commission as a broker or dealer.</li>

                  <li>The funds you deposit with a futures commission merchant are generally not guaranteed or insured by a derivatives clearing organization in the event of the bankruptcy or insolvency of the futures commission merchant, or if the futures commission merchant is otherwise unable to refund your funds. Certain derivatives clearing organizations, however, may have programs that provide limited insurance to customers. You should inquire of your futures commission merchant whether your funds will be insured by a derivatives clearing organization and you should understand the benefits and limitations of such insurance programs.</li>

                  <li>The funds you deposit with a futures commission merchant are not held by the futures commission merchant in a separate account for your individual benefit. Futures commission merchants commingle the funds received from customers in one or more accounts and you may be exposed to losses incurred by other customers if the futures commission merchant does not have sufficient capital to cover such other customers&apos; trading losses.</li>

                  <li>The funds you deposit with a futures commission merchant may be invested by the futures commission merchant in certain types of financial instruments that have been approved by the Commission for the purpose of such investments. Permitted investments are listed in Commission Regulation 1.25 and include: U.S. government securities; municipal securities; money market mutual funds; and certain corporate notes and bonds. The futures commission merchant may retain the interest and other earnings realized from its investment of customer funds. You should be familiar with the types of financial instruments that a futures commission merchant may invest customer funds in.</li>

                  <li>Futures commission merchants are permitted to deposit customer funds with affiliated entities, such as affiliated banks, securities brokers or dealers, or foreign brokers. You should inquire as to whether your futures commission merchant deposits funds with affiliates and assess whether such deposits by the futures commission merchant with its affiliates increases the risks to your funds.</li>

                  <li>You should consult your futures commission merchant concerning the nature of the protections available to safeguard funds or property deposited for your account.</li>

                  <li>Under certain market conditions, you may find it difficult or impossible to liquidate a position. This can occur, for example, when the market reaches a daily price fluctuation limit ("limit move").</li>

                  <li>All futures, forex and options positions involve risk, and a "spread" position may not be less risky than an outright "long" or "short" position.</li>

                  <li>The high degree of leverage (gearing) that is often obtainable in futures and forex trading because of the small margin requirements can work against you as well as for you. Leverage (gearing) can lead to large losses as well as gains.</li>

                  <li>In addition to the risks noted in the paragraphs enumerated above, you should be familiar with the futures commission merchant you select to entrust your funds for trading futures positions. As of July 12, 2014, the Commodity Futures Trading Commission requires each futures commission merchant to make publicly available on its Web site firm specific disclosures and financial information to assist you with your assessment and selection of a futures commission merchant. Information regarding this futures commission merchant may be obtained by visiting the websites of the respective FCM partner of NinjaTrader Brokerage: NinjaTrader Clearing, LLC, Dorman Trading, and Phillip Capital.
                    <p className="mt-6 mb-4">ALL OF THE POINTS NOTED ABOVE APPLY TO ALL FUTURES AND FOREX TRADING WHETHER FOREIGN OR DOMESTIC. IN ADDITION, IF YOU ARE CONTEMPLATING TRADING FOREIGN FUTURES OR OPTIONS CONTRACTS, YOU SHOULD BE AWARE OF THE FOLLOWING ADDITIONAL RISKS:</p>
                  </li>

                  <li>Foreign futures transactions involve executing and clearing trades on a foreign exchange. This is the case even if the foreign exchange is formally "linked" to a domestic exchange, whereby a trade executed on one exchange liquidates or establishes a position on the other exchange. No domestic organization regulates the activities of a foreign exchange, including the execution, delivery, and clearing of transactions on such an exchange, and no domestic regulator has the power to compel enforcement of the rules of the foreign exchange or the laws of the foreign country. Moreover, such laws or regulations will vary depending on the foreign country in which the transaction occurs. For these reasons, customers who trade on foreign exchanges may not be afforded certain of the protections which apply to domestic transactions, including the right to use domestic alternative dispute resolution procedures. In particular, funds received from customers to margin foreign futures transactions may not be provided the same protections as funds received to margin futures transactions on domestic exchanges. Before you trade, you should familiarize yourself with the foreign rules which will apply to your particular transaction.</li>

                  <li>Finally, you should be aware that the price of any foreign futures or option contract and, therefore, the potential profit and loss resulting therefrom, may be affected by any fluctuation in the foreign exchange rate between the time the order is placed and the foreign futures contract is liquidated or the foreign option contract is liquidated or exercised.</li>
                </ol>

                <p className="font-bold">THIS BRIEF STATEMENT CANNOT, OF COURSE, DISCLOSE ALL THE RISKS AND OTHER ASPECTS OF THE COMMODITY AND FOREIGN CURRENCY MARKETS.</p>
              </div>
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="options" title="Options Risk Disclosure">
          <Card>
            <CardBody>
              <div className="space-y-4">
                <p className="mb-4 text-base">BECAUSE OF THE VOLATILE NATURE OF THE COMMODITIES MARKETS, THE PURCHASE AND GRANTING OF COMMODITY OPTIONS INVOLVE A HIGH DEGREE OF RISK. COMMODITY TRANSACTIONS ARE NOT SUITABLE FOR MANY MEMBERS OF THE PUBLIC. SUCH TRANSACTIONS SHOULD BE ENTERED INTO ONLY BY PERSONS WHO HAVE READ AND UNDERSTOOD THIS DISCLOSURE STATEMENT AND WHO UNDERSTAND THE NATURE AND EXTENT OF THEIR RIGHTS AND OBLIGATIONS AND OF THE RISKS INVOLVED IN THE OPTION TRANSACTIONS COVERED BY THIS DISCLOSURE STATEMENT.</p>
                <p className="mb-4 text-base">BOTH THE PURCHASER AND THE GRANTOR SHOULD KNOW THAT THE OPTION IF EXERCISED, RESULTS IN THE ESTABLISHMENT OF A FUTURES CONTRACT (AN "OPTION ON A FUTURES CONTRACT").</p>
                <p className="mb-4 text-base">OTH THE PURCHASER AND THE GRANTOR SHOULD KNOW WHETHER THE PARTICULAR OPTION IN WHICH THEY CONTEMPLATE TRADING IS SUBJECT TO A "STOCK-STYLE" OR "FUTURES-STYLE" SYSTEM OF MARGINING. UNDER A STOCK-STYLE MARGINING SYSTEM, A PURCHASER IS REQUIRED TO PAY THE FULL PURCHASE PRICE OF THE OPTION AT THE INITIATION OF THE TRANSACTION. THE PURCHASER HAS NO FURTHER OBLIGATION ON THE OPTION POSITION. UNDER A FUTURES-STYLE MARGINING SYSTEM, THE PURCHASER DEPOSITS INITIAL MARGIN AND MAY BE REQUIRED TO DEPOSIT ADDITIONAL MARGIN IF THE MARKET MOVES AGAINST THE OPTION POSITION. THE PURCHASER&apos;S TOTAL SETTLEMENT VARIATION MARGIN OBLIGATION OVER THE LIFE OF THE OPTION, HOWEVER, WILL NOT EXCEED THE ORIGINAL OPTION PREMIUM, ALTHOUGH SOME INDIVIDUAL PAYMENT OBLIGATIONS AND/OR RISK MARGIN REQUIREMENTS MAY AT TIMES EXCEED THE ORIGINAL OPTION PREMIUM. IF THE PURCHASER OR GRANTOR DOES NOT UNDERSTAND HOW OPTIONS ARE MARGINED UNDER A STOCK-STYLE OR FUTURES-STYLE MARGINING SYSTEM, HE OR SHE SHOULD REQUEST AN EXPLANATION FROM THE FUTURES COMMISSION MERCHANT ("FCM") OR INTRODUCING BROKER ("IB").</p>
                <p className="mb-4 text-base">A PERSON SHOULD NOT PURCHASE ANY COMMODITY OPTION UNLESS HE OR SHE IS ABLE TO SUSTAIN A TOTAL LOSS OF THE PREMIUM AND TRANSACTION COSTS OF PURCHASING THE OPTION. A PERSON SHOULD NOT GRANT ANY COMMODITY OPTION UNLESS HE OR SHE IS ABLE TO MEET ADDITIONAL CALLS FOR MARGIN WHEN THE MARKET MOVES AGAINST HIS OR HER POSITION AND, IN SUCH CIRCUMSTANCES, TO SUSTAIN A VERY LARGE FINANCIAL LOSS.</p>
                <p className="mb-4 text-base">A PERSON WHO PURCHASES AN OPTION SUBJECT TO STOCK-STYLE MARGINING SHOULD BE AWARE THAT, IN ORDER TO REALIZE ANY VALUE FROM THE OPTION, IT WILL BE NECESSARY EITHER TO OFFSET THE OPTION POSITION OR TO EXERCISE THE OPTION. OPTIONS SUBJECT TO FUTURES-STYLE MARGINING ARE MARKED TO MARKET, AND GAINS AND LOSSES ARE PAID AND COLLECTED DAILY. IF AN OPTION PURCHASER DOES NOT UNDERSTAND HOW TO OFFSET OR EXERCISE AN OPTION, THE PURCHASER SHOULD REQUEST AN EXPLANATION FROM THE FCM OR IB. CUSTOMERS SHOULD BE AWARE THAT IN A NUMBER OF CIRCUMSTANCES, SOME OF WHICH WILL BE DESCRIBED IN THIS DISCLOSURE STATEMENT, IT MAY BE DIFFICULT OR IMPOSSIBLE TO OFFSET AN EXISTING OPTION POSITION ON AN EXCHANGE.</p>
                <p className="mb-4 text-base">THE GRANTOR OF AN OPTION SHOULD BE AWARE THAT, IN MOST CASES, A COMMODITY OPTION MAY BE EXERCISED AT ANY TIME FROM THE TIME IT IS GRANTED UNTIL IT EXPIRES. THE PURCHASER OF AN OPTION SHOULD BE AWARE THAT SOME OPTION CONTRACTS MAY PROVIDE ONLY A LIMITED PERIOD OF TIME FOR EXERCISE OF THE OPTION.</p>
                <p className="mb-4 text-base">THE PURCHASER OF A PUT OR CALL SUBJECT TO STOCK-STYLE OR FUTURES-STYLE MARGINING IS SUBJECT TO THE RISK OF LOSING THE ENTIRE PURCHASE PRICE OF THE OPTION - THAT IS, THE PREMIUM CHARGED FOR THE OPTION PLUS ALL TRANSACTION COSTS.</p>
                <p className="mb-4 text-base"> THE COMMODITY FUTURES TRADING COMMISSION REQUIRES THAT ALL CUSTOMERS RECEIVE AND ACKNOWLEDGE RECEIPT OF A COPY OF THIS DISCLOSURE STATEMENT BUT DOES NOT INTEND THIS STATEMENT AS A RECOMMENDATION OR ENDORSEMENT OF EXCHANGE-TRADED COMMODITY OPTIONS.</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="mb-4 text-base">Some of the risks of option trading.</p>
                    <p className="mb-2 text-base">Specific market movements of the underlying future cannot be predicted accurately.</p>
                    <p className="mb-2 text-base">The grantor of a call option who does not have a long position in the underlying futures contract is subject to risk of loss should the price of the underlying futures contract be higher than the strike price upon exercise or expiration of the option by an amount greater than the premium received for granting the call option.</p>
                    <p className="mb-2 text-base">The grantor of a call option who has a long position in the underlying futures contract is subject to the full risk of a decline in price of the underlying position reduced by the premium received for granting the call. In exchange for the premium received for granting a call option, the option grantor gives up all of the potential gain resulting from an increase in the price of the underlying futures contract above the option strike price upon exercise or expiration of the option.</p>
                    <p className="mb-2 text-base">The grantor of a put option who does not have a short position in the underlying futures contract is subject to risk of loss should the price of the underlying futures contract decrease below the strike price upon exercise or expiration of the option by an amount in excess of the premium received for granting the put option.</p>
                    <p className="mb-2 text-base">The grantor of a put option on a futures contract who has a short position in the underlying futures contract is subject to the full risk of a rise in the price in the underlying position reduced by the premium received for granting the put. In exchange for the premium received for granting a put option on a futures contract, the option grantor gives up all of the potential gain resulting from a decrease in the price of the underlying futures contract below the option strike price upon exercise or expiration of the option.</p>
                  </li>
                  <li>
                    <p className="mb-4 text-base"><span className="font-bold">Description of commodity options.</span> Prior to entering into any transaction involving a commodity option, an individual should thoroughly understand the nature and type of option involved and the underlying futures contract. The futures commission merchant or introducing broker is required to provide, and the individual contemplating an option transaction should obtain:</p>
                    <ol className="list-[lower-alpha] pl-6 space-y-2">
                      <li>An identification of the futures contract underlying the option and which may be purchased or sold upon exercise of the option or, if applicable, whether exercise of the option will be settled in cash;</li>
                      <li>The procedure for exercise of the option contract, including the expiration date and latest time on that date for exercise. (The latest time on an expiration date when an option may be exercised may vary; therefore, option market participants should ascertain from their futures commission merchant or their introducing broker the latest time the firm accepts exercise instructions with respect to a particular option.);</li>
                      <li>A description of the purchase price of the option including the premium, commissions, costs, fees and other charges. (Since commissions and other charges may vary widely among futures commission merchants and among introducing brokers, option customers may find it advisable to consult more than one firm when opening an option account.);</li>
                      <li>A description of all costs in addition to the purchase price which may be incurred if the commodity option is exercised, including the amount of commissions (whether termed sales commissions or otherwise), storage, interest, and all similar fees and charges which may be incurred;</li>
                      <li>An explanation and understanding of the option margining system;</li>
                      <li>A clear explanation and understanding of any clauses in the option contract and of any items included in the option contract explicitly or by reference which might affect the customer&apos;s obligations under the contract. This would include any policy of the futures commission merchant or the introducing broker or rule of the exchange on which the option is traded that might affect the customer&apos;s ability to fulfill the option contract or to offset the option position in a closing purchase or closing sale transaction (for example, due to unforeseen circumstances that require suspension or termination of trading); and</li>
                      <li>If applicable, a description of the effect upon the value of the option position that could result from limit moves in the underlying futures contract.</li>
                    </ol>
                  </li>
                  <li>
                    <p className="mb-2 text-base"><span className="font-bold">The mechanics of option trading.</span> Before entering into any exchange-traded option transaction, an individual should obtain a description of how commodity options are traded.</p>
                    <p className="mb-2 text-base">Option customers should clearly understand that there is no guarantee that option positions may be offset by either a closing purchase or closing sale transaction on an exchange. In this circumstance, option grantors could be subject to the full risk of their positions until the option position expires, and the purchaser of a profitable option might have to exercise the option to realize a profit.</p>
                    <p className="mb-2 text-base">For an option on a futures contract, an individual should clearly understand the relationship between exchange rules governing option transactions and exchange rules governing the underlying futures contract. For example, an individual should understand what action, if any, the exchange will take in the option market if trading in the underlying futures market is restricted or the futures prices have made a "limit move."</p>
                    <p className="mb-2 text-base">The individual should understand that the option may not be subject to daily price fluctuation limits while the underlying futures may have such limits, and, as a result, normal pricing relationships between options and the underlying future may not exist when the future is trading at its price limit. Also, underlying futures positions resulting from exercise of options may not be capable of being offset if the underlying future is at a price limit.</p>
                  </li>
                  <li>
                    <p className="mb-2 text-base">Margin requirements. An individual should know and understand whether the option he or she is contemplating trading is subject to a stock-style or futures-style system of margining. Stock-style margining requires the purchaser to pay the full option premium at the time of purchase. The purchaser has no further financial obligations, and the risk of loss is limited to the purchase price and transaction costs. Futures-style margining requires the purchaser to pay initial margin only at the time of purchase. The option position is marked to market, and gains and losses are collected and paid daily. The purchaser&apos;s risk of loss is limited to the initial option premium and transaction costs</p>
                    <p className="mb-2 text-base">An individual granting options under either a stock-style or futures-style system of margining should understand that he or she may be required to pay additional margin in the case of adverse market movements.</p>
                  </li>
                  <li>
                    <p className="mb-2 text-base">Profit potential of an option position. An option customer should carefully calculate the price which the underlying futures contract would have to reach for the option position to become profitable. Under a stock-style margining system, this price would include the amount by which the underlying futures contract would have to rise above or fall below the strike price to cover the sum of the premium and all other costs incurred in entering into and exercising or closing (offsetting) the commodity option position. Under a future-style margining system, option positions would be marked to market, and gains and losses would be paid and collected daily, and an option position would become profitable once the variation margin collected exceeded the cost of entering the contract position.</p>
                    <p className="mb-2 text-base">Also, an option customer should be aware of the risk that the futures price prevailing at the opening of the next trading day may be substantially different from the futures price which prevailed when the option was exercised.</p>
                  </li>
                  <li>
                    <p className="mb-2 text-base"><span className="font-bold">Deep-out-of-the-money options.</span> A person contemplating purchasing a deep-out-of-the-money option (that is, an option with a strike price significantly above, in the case of a call, or significantly below, in the case of a put, the current price of the underlying futures contract) should be aware that the chance of such an option becoming profitable is ordinarily remote.</p>
                    <p className="mb-2 text-base">On the other hand, a potential grantor of a deep-out-of-the-money option should be aware that such options normally provide small premiums while exposing the grantor to all of the potential losses described in section (1) of this disclosure statement.</p>
                  </li>
                  <li>
                    <p className="mb-4 font-bold text-base">Glossary of terms -</p>
                    <ol className="list-[lower-alpha] pl-6 space-y-2">
                      <li><span className="font-bold">Contract market.</span> Any board of trade (exchange) located in the United States which has been designated by the Commodity Futures Trading Commission to list a futures contract or commodity option for trading.</li>
                      <li><span className="font-bold">Exchange-traded option; put option; call option.</span> The options discussed in this disclosure statement are limited to those which may be traded on a contract market. These options (subject to certain exceptions) give an option purchaser the right to buy in the case of a call option, or to sell in the case of a put option, a futures contract underlying the option at the stated strike price prior to the expiration date of the option. Each exchange-traded option is distinguished by the underlying futures contract, strike price, expiration date, and whether the option is a put or a call.</li>
                      <li><span className="font-bold">Underlying futures contract.</span> The futures contract which may be purchased or sold upon the exercise of an option on a futures contract.</li>
                      <li>[Reserved]</li>
                      <li><span className="font-bold">Class of options.</span> A put or a call covering the same underlying futures contract.</li>
                      <li><span className="font-bold">Series of options.</span> Options of the same class having the same strike price and expiration date.</li>
                      <li><span className="font-bold">Exercise price. See</span> strike price.</li>
                      <li>Expiration date. The last day when an option may be exercised.</li>
                      <li><span className="font-bold">Premium.</span> The amount agreed upon between the purchaser and seller for the purchase or sale of a commodity option.</li>
                      <li><span className="font-bold">Strike price.</span> The price at which a person may purchase or sell the underlying futures contract upon exercise of a commodity option. This term has the same meaning as the term "exercise price."</li>
                      <li><span className="font-bold">Short option position.</span> See opening sale transaction.</li>
                      <li><span className="font-bold">Long option position.</span> See opening purchase transaction.</li>
                      <li>
                        <span className="font-bold">Types of options transactions -</span>
                        <ol className="list-[lower-alpha] pl-6 space-y-2">
                          <li><span className="font-bold">Opening purchase transaction.</span> A transaction in which an individual purchases an option and thereby obtains a long option position.</li>
                          <li><span className="font-bold">Opening sale transaction.</span> A transaction in which an individual grants an option and thereby obtains a short option position.</li>
                          <li><span className="font-bold">Closing purchase transaction.</span> A transaction in which an individual with a short option position liquidates the position. This is accomplished by a closing purchase transaction for an option of the same series as the option previously granted. Such a transaction may be referred to as an offset transaction.</li>
                          <li><span className="font-bold">Closing sale transaction.</span> A transaction in which an individual with a long option position liquidates the position. This is accomplished by a closing sale transaction for an option of the same series as the option previously purchased. Such a transaction may be referred to as an offset transaction.</li>
                        </ol>
                      </li>
                      <li><span className="font-bold">Purchase price.</span> The total actual cost paid or to be paid, directly or indirectly, by a person to acquire a commodity option. This price includes all commissions and other fees, in addition to the option premium.</li>
                      <li><span className="font-bold">Grantor, writer, seller.</span> An individual who sells an option. Such a person is said to have a short position.</li>
                      <li><span className="font-bold">Purchaser.</span> An individual who buys an option. Such a person is said to have a long position.</li>
                    </ol>
                  </li>
                </ol>
              </div>
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="virtual" title="Virtual Currencies (Including Bitcoin) Futures Risk Disclosure">
          <Card>
            <CardBody>
              <div className="space-y-4">
                <p className="text-base">The purpose of this investor advisory is to remind investors that, just like any other speculative investment, trading futures on virtual currencies, including Bitcoin, have certain benefits and various risks. While futures on virtual currencies must be traded on regulated futures exchanges, trading these products involves a high level of risk and may not be suitable for all investors.</p>
                <p className="text-base">It is critical, therefore, for investors who are considering trading virtual currency futures to educate themselves about these products, understand their risks, and conduct due diligence before making investment decisions. Investor protection begins with investor education.</p>
                <ul className="space-y-4">
                  <li>Conduct due diligence on any individuals and firms soliciting for an investment in futures on virtual currencies including Bitcoin by checking their Commodity Futures Trading Commission (CFTC) registration status, NFA membership status, and background using NFA&apos;s BASIC system or calling NFA&apos;s Information Center at 800-621-3570.</li>
                  <li>Virtual currencies including Bitcoin experience significant price volatility, and fluctuations in the underlying virtual currency&apos;s value between the time you place a trade for a virtual currency futures contract and the time you attempt to liquidate it will affect the value of your futures contract and the potential profit and losses related to it. Be very cautious and monitor any investment that you make.</li>
                  <li>Be aware of sales pitches offering investment schemes that promise significant returns with little risk or that encourage you to "act now." If an investment sounds too good to be true (e.g., high returns, guaranteed to perform in a certain way), then it probably is.</li>
                  <li>Virtual currency futures contracts are bought and sold using initial margin money that can enable you to hold a virtual currency futures contract valued more than your initial investment. This is referred to as leverage. If the price of the futures contract moves in an unfavorable direction, the leveraged nature of the futures investment can produce large losses in relation to your initial investment. In fact, even a small move against your position may result in a large loss, including the loss of your entire initial deposit, and you may be liable for additional losses.</li>
                  <li>Be aware of the risk of Ponzi scheme operators and fraudsters seeking to capitalize on the current attention focused on virtual currencies, including Bitcoin.</li>
                </ul>
                <p className="text-base">Outlined above are just some of the risks associated with trading futures on virtual currencies, including Bitcoin. Investors should consult the risk disclosures provided by their FCM and fully educate themselves on all of the associated risks before trading.</p>
                <p className="text-base">With CFTC oversight, each futures exchange listing a virtual currency futures contract is responsible for regulating its futures market. NFA performs market regulation services on behalf of certain futures exchanges and swap execution facilities. Please be aware, however, that just because futures on virtual currencies, including Bitcoin, must be traded on regulated futures exchanges does not mean that the underlying virtual currency markets are regulated in any manner, and as discussed above what occurs in a virtual currency&apos;s underlying market will impact the price of a virtual currency&apos;s futures contract</p>
                <p className="text-base">Investors with questions or concerns regarding trading futures on virtual currencies including Bitcoin should contact NFA&apos;s Information Center (312-781-1410 or 800-621-3570 or <a href="mailto:information@nfa.futures.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">information@nfa.futures.org</a>).</p>
              </div>
            </CardBody>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}