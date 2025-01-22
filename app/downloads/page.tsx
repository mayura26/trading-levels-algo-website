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
    version: '5.0.0',
    downloadUrl: '/downloads/basic-package.zip'
  },
  {
    name: 'Standard Package',
    version: '5.0.0',
    downloadUrl: '/downloads/standard-package.zip'
  },
  {
    name: 'Premium Package',
    version: '5.0.0',
    downloadUrl: '/downloads/premium-package.zip'
  }
];

const DownloadsPage: FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Downloads</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.name} className="p-4">
            <CardHeader className="flex-col items-start gap-2">
              <h2 className="text-2xl font-bold">{pkg.name}</h2>
              <p className="text-default-500">Version: {pkg.version}</p>
            </CardHeader>
            <CardBody className="py-2">
              <Button
                as={Link}
                href={pkg.downloadUrl}
                color="primary"
                variant="solid"
                className="w-full"
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
