import DashboardPreview from "./DashboardPreview";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-28">

      <div className="flex items-center justify-between gap-12">

        {/* Left Section */}
        <div className="flex-1">

          <p className="text-blue-600 font-semibold mb-4">
            AI Powered Interview Platform
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Your Personal
            <span className="text-blue-600"> AI Interview Coach</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Upload your resume, practice technical and HR interviews,
            receive AI-powered feedback, and land your dream job with confidence.
          </p>

          <div className="flex gap-4 mt-8">

            <Button>
    Get Started
</Button>

<Button variant="secondary">
    Watch Demo
</Button>
            

          </div>

        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">

          <DashboardPreview />

        </div>

      </div>

    </section>
  );
}

export default Hero;