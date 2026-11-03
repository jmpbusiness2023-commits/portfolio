import {
  Contact,
  Environments,
  Experiences,
  Expertise,
  Hero,
  Profile,
  Projects,
  Stack,
  TmrcFeature,
  TwoWays,
  UseCases,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <TwoWays />
      <TmrcFeature />
      <Expertise />
      <Experiences />
      <Projects />
      <Environments />
      <UseCases />
      <Stack />
      <Contact />
    </>
  );
}
