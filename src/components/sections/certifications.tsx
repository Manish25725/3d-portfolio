import { CERTIFICATIONS, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CertificationsSection = () => {
  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) return null;
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[120vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="My certifications and learning achievements."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />
          {CERTIFICATIONS.map((cert, index) => (
            <div key={cert.id} className="relative">
              <CertificationCard certification={cert} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const CertificationCard = ({
  certification,
  index,
}: {
  certification: typeof CERTIFICATIONS[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold tracking-tight">
                {certification.title}
              </CardTitle>
              <div className="text-base font-medium text-muted-foreground">
                {certification.issuer}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal">
              {certification.date}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
            {certification.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          
          {certification.skills && certification.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skillName) => {
                const skill = SKILLS[skillName as SkillNames];
                if (!skill) return null;
                return (
                  <Badge
                    key={skillName}
                    variant="outline"
                    className="gap-2 text-xs font-normal bg-secondary/30 hover:bg-secondary/50 transition-colors border-transparent"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="w-3.5 h-3.5 object-contain opacity-80"
                    />
                    {skill.label}
                  </Badge>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificationsSection;
