import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";

const AchievementsSection = () => {
  if (!ACHIEVEMENTS || ACHIEVEMENTS.length === 0) return null;
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[60vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="My problem solving and coding milestones."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: typeof ACHIEVEMENTS[0];
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
      className="h-full"
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border h-full",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md flex flex-col justify-between"
        )}
      >
        <CardHeader className="pb-3 flex flex-row items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full text-primary">
            <Trophy className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-bold tracking-tight m-0 leading-tight">
            {achievement.link ? (
              <Link href={achievement.link} target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                {achievement.title}
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors shrink-0" />
              </Link>
            ) : (
              <span>{achievement.title}</span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
