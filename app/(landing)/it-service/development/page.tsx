import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Team from "./team";
import Content from "./content-section";
import Section from "./section";
export default function DevelopmentPage() {
    return (
        <div className="development">
            <Header styleElements={{ linksColor: "purple-header-links" }} />
            <Section />
            <Content />
            <Team />
            <Footer />
        </div>
    );
}
