import { notFound } from "next/navigation";
import { getMessages, isLocale } from "@/lib/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Chef from "@/components/Chef";
import TastingMenu from "@/components/TastingMenu";
import ALaCarte from "@/components/ALaCarte";
import TheSpace from "@/components/TheSpace";
import ReservationSection from "@/components/ReservationSection";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const m = getMessages(locale);
  const year = new Date().getFullYear();

  return (
    <>
      <Header locale={locale} m={m} />
      <main id="main">
        <Hero m={m} />
        <Philosophy m={m} />
        <Chef m={m} />
        <TastingMenu m={m} />
        <ALaCarte m={m} />
        <Divider />
        <TheSpace m={m} />
        <ReservationSection m={m} />
        <Visit m={m} />
      </main>
      <Footer m={m} year={year} />
    </>
  );
}
