import { FC } from 'react';
import { Card, CardBody, CardHeader, Button, Link } from '@nextui-org/react';

interface PackageDownload {
  name: string;
  version: string;
  downloadUrl: string;
}

const packages: PackageDownload[] = [
  {
    name: 'Basic Package',
    version: '6.2.0',
    downloadUrl: '/downloads/TLABasic_v6.2.zip'
  },
  {
    name: 'Standard Package',
    version: '6.2.0',
    downloadUrl: '/downloads/TLAStandard_v6.2.zip'
  },
  {
    name: 'Premium Package',
    version: '6.2.0',
    downloadUrl: '/downloads/TLAPremium_v6.2.zip'
  }
];

const changelog = {
  version: "6.2.0",
  changes: [
    "Predictive Reversal Trades - Anticipates volume-triggered reversals and enters earlier for better entries",
    "ATR-Based Trade Analysis - Uses ATR to adapt entries across high and low volatility",
    "Range Day Detection - Detects range-bound sessions and avoids risky breakout attempts",
    "S1 Day Protection - Adds EMA-based safeguards tailored to S1 days to reduce risk"
  ]
};

const DownloadsPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Downloads
      </h1>
      
      {/* Changelog Section */}
      <Card className="mb-12 bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
        <CardHeader className="flex-col items-start gap-2 px-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            What's New in v{changelog.version}
          </h2>
        </CardHeader>
        <CardBody className="py-4 px-6">
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {changelog.changes.map((change, index) => (
              <li key={index}>{change}</li>
            ))}
          </ul>
        </CardBody>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card 
            key={pkg.name} 
            className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10"
          >
            <CardHeader className="flex-col items-start gap-2 px-6 pt-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {pkg.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Version: {pkg.version}
              </p>
            </CardHeader>
            <CardBody className="py-4 px-6">
              <Button
                as={Link}
                href={pkg.downloadUrl}
                color="primary"
                variant="solid"
                className="w-full font-semibold shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                Download
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
