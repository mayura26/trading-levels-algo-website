export default function About() {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary text-gray-900 dark:text-white">
          About Us
        </h1>
        <h2 className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-2">
          A Market Edge Analytics Product
        </h2>
        <div className="flex flex-col gap-8 mb-8">
          <div className="bg-white/70 dark:bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              About the Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Trading Levels Algo was developed by Market Edge Analytics as a way to make my trading more consistent. I&apos;m a software engineer with experience trading across different markets.
              Through my trading journey, I realized that while I knew a lot about the how of trading, I wasn&apos;t as sharp on the execution.
              That led me, at the beginning of this year, to start developing a bot to improve my trading performance.
              The bot came to life in May, and I&apos;ve been actively tracking and analyzing its performance since July.
            </p>
          </div>

          <div className="bg-white/70 dark:bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              About the Bot
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              TradingLevelsAlgo is a powerful day trading bot tailored for NASDAQ futures (NQ/MNQ), leveraging advanced volume and momentum analysis for precise trade execution. By dissecting the volume structure of each candle—evaluating wicks and body—it estimates buy and sell activity with accuracy. Smoothing this data with moving averages generates clear buy and sell volume lines, identifying actionable zones for trading opportunities.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The bot's triggers go beyond basic analysis. Using volume delta, trend direction, and momentum shifts, it pinpoints ideal entry points within buy or sell zones. Additional filters, such as ATR signals and rate-of-change (RoC) analysis, enhance flexibility and adaptability to various market conditions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unlike bots that rely on market orders, TradingLevelsAlgo uses limit orders to avoid chasing trades or falling for false breakouts. It combines EMA-based dynamic trend lines with volume and momentum signals to secure optimal entries. Each trade starts with pre-defined Take Profit (TP) and Stop Loss (SL) levels, which are dynamically adjusted to capture maximum potential.
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              To ensure smart, risk-aware trading, the bot incorporates features to avoid unfavorable conditions. It detects market "chop," respects protective levels (e.g., avoiding longs below the previous day's high), and sidesteps risky bounce zones. With TradingLevelsAlgo, every decision is rooted in strategy and precision, empowering traders to navigate the markets with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}