import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Polpular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="789"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="maths"
          duration={30}
          color="#BDE7FF"
        />
        <CompanionCard
          id="456"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="language"
          duration={50}
          color="#FFDA6E"
        />
      </section>
      <section className="home-section">
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
