import { steps } from "../../data/steps";

function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Three Simple Steps To Success
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Prepare for interviews with AI in just three easy steps.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <Icon
                  size={32}
                  className="text-blue-600"
                />
              </div>

              {/* Step Number */}
              <p className="mt-6 text-sm font-semibold text-blue-600 uppercase">
                Step {step.number}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-4 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowItWorks;