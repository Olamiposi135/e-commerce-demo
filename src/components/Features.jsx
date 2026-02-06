import React from "react";

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <span className="material-symbols-outlined text-4xl text-primary">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-charcoal">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "eco",
      title: "100% Vegan",
      description:
        "No animal-derived ingredients ever. Ethical beauty without compromise.",
    },
    {
      icon: "biotech",
      title: "Lab Tested",
      description:
        "Each batch is third-party tested for purity and efficacy in clinical environments.",
    },
    {
      icon: "recycling",
      title: "Sustainably Made",
      description:
        "Carbon-neutral shipping and 100% recyclable glass packaging.",
    },
  ];

  return (
    <section className="py-16 bg-beige-light/50 rounded-3xl px-8 md:px-16 overflow-hidden relative mt-16">
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-charcoal">
          Clean ingredients, real results.
        </h2>
        <p className="text-gray-600">
          We source only the most potent biological actives, leaving out the
          synthetic fillers and irritants.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Features;
