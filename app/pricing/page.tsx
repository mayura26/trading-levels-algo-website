import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default function Pricing() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
        Pricing Plans
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <Card
          className="bg-black/30 backdrop-blur-sm"
          classNames={{
            base: "border-2 border-white/20"
          }}
        >
          <CardHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Basic</h2>
            <p className="text-3xl font-bold">
              $250<span className="text-sm">/month</span>
            </p>
          </CardHeader>
          <CardBody>
            <ul className="text-left space-y-4 mb-8">
              <li>✓ 3 Contracts Size</li>
              <li>✓ MNQ supported</li>
              <li>✓ Discord support</li>
            </ul>
            <Link href="/contact">
              <Button color="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </Link>
          </CardBody>
        </Card>

        <Card
          className="bg-black/30 backdrop-blur-sm"
          classNames={{
            base: "border-2 border-white/20"
          }}
        >
          <CardHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Standard</h2>
            <p className="text-3xl font-bold">
              $350<span className="text-sm">/month</span>
            </p>
          </CardHeader>
          <CardBody>
            <ul className="text-left space-y-4 mb-8">
              <li>✓ 7 Contracts Size</li>
              <li>✓ MNQ supported</li>
              <li>✓ Discord support</li>
            </ul>
            <Link href="/contact">
              <Button color="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </Link>
          </CardBody>
        </Card>

        <Card
          className="bg-black/30 backdrop-blur-sm"
          classNames={{
            base: "border-2 border-white/20"
          }}
        >
          <CardHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Premium</h2>
            <p className="text-3xl font-bold">
              $500<span className="text-sm">/month</span>
            </p>
          </CardHeader>
          <CardBody>
            <ul className="text-left space-y-4 mb-8">
              <li>✓ 20 contract size</li>
              <li>✓ MNQ supported</li>
              <li>✓ Discord support</li>
            </ul>
            <Link href="/contact">
              <Button color="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </Link>
          </CardBody>
        </Card>

        <Card
          className="bg-black/30 backdrop-blur-sm"
          classNames={{
            base: "border-2 border-white/20"
          }}
        >
          <CardHeader className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold">Unlimited</h2>
            <p className="text-3xl font-bold">
              $800<span className="text-sm">/month</span>
            </p>
          </CardHeader>
          <CardBody>
            <ul className="text-left space-y-4 mb-8">
              <li>✓ Unlimited contract size</li>
              <li>✓ NQ/MNQ supported</li>
              <li>✓ Discord support</li>
            </ul>
            <Link href="/contact">
              <Button color="primary" size="lg" fullWidth>
                Get Started
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    </section>

  );
}