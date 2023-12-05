import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

function ErrorPage() {
  return (
    <div className="bg-stone-900 h-screen flex flex-col gap-auto justify-between">
      <Header />
      <main>
        <Section>
          <div className="w-full">
            <div className="flex flex-col gap-6 items-center justify-start">
              <SectionHeading overline="oh, wait" style="center">
                There is something wrong
              </SectionHeading>
              <p className="text-stone-50">Why don&apos;t you go back?</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
