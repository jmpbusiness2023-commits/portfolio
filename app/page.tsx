import {
  Contact,
  Environments,
  Experiences,
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
      <Experiences />
      <Projects />
      <Environments />
      <UseCases />
      <Stack />
      <Contact />
    </>
  );
}
