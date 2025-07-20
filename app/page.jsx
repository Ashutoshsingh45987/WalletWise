import HeroSection from "@/components/hero";
import AnimatedBackground from "@/components/animated-background";
import ScrollSparkles from "@/components/scroll-sparkles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { featuresData, howItWorksData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 relative bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Scroll Sparkles */}
      <ScrollSparkles />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <HeroSection />

      {/* Features section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
            Everything You Need to Manage Your Finances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/95 dark:hover:bg-gray-800/95 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4 pt-4 text-center">
                  <div className="flex justify-center">
                    <span className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-500 dark:from-blue-800 dark:to-blue-600 shadow-lg group-hover:from-blue-200 group-hover:to-blue-600 dark:group-hover:from-blue-700 dark:group-hover:to-blue-500 transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-gray-100 mb-12 transition-colors duration-300">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="relative text-center bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl border-t-4 border-blue-500 dark:border-blue-400 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center shadow-md text-white text-2xl font-bold transition-colors duration-300">
                  {index + 1}
                </div>

                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-300 transition-colors duration-300">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{step.description}</p>

                {/* Step Line (only between steps) */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-30px] transform translate-y-[-50%] w-12 h-[2px] bg-blue-400 dark:bg-blue-500 transition-colors duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
