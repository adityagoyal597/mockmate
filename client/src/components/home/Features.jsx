import {
  Brain,
  Mic,
  FileText,
  BarChart3,
  TrendingUp,
  Wallet,
} from "lucide-react";

const features = [
  {
    title: "AI Generated Questions",
    description:
      "Generate personalized interview questions based on your resume.",
    icon: Brain,
  },
  {
    title: "Voice Interviews",
    description:
      "Practice speaking naturally with AI-powered voice interviews.",
    icon: Mic,
  },
  {
    title: "Instant Feedback",
    description:
      "Receive detailed technical and communication feedback instantly.",
    icon: BarChart3,
  },
  {
    title: "Resume Analysis",
    description:
      "Upload your resume and let AI identify strengths and weaknesses.",
    icon: FileText,
  },
  {
    title: "Progress Tracking",
    description:
      "Track interview readiness and improve over time.",
    icon: TrendingUp,
  },
  {
    title: "Credit System",
    description:
      "Flexible credit-based access with secure Razorpay payments.",
    icon: Wallet,
  },
];

function Features() {
  return (
    <section className="py-24 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Everything You Need To Ace Interviews
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          MockMate combines AI, voice technology, resume analysis,
          and detailed feedback into one seamless interview platform.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
              "
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Icon
                  size={32}
                  className="text-blue-600"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;