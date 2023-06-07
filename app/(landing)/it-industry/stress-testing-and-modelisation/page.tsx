import Content from "../wifi-survey/content";

// Importing components
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import HeaderSection from "@/app/components/headerSection";

const description =
    "comprehensive set of features and benefits designed to assess and optimize the performance, reliability, and scalability of IT systems within industrial environments.";

export default function StressTestingAndModelisationPage() {
    return (
        <div className="stresstestingandmodelisation">
            <Header styleElements={{ linksColor: "purple-header-links" }} />
            <HeaderSection
                title="Stress Testing And Modelisation"
                description={description}
            />
            <Content />
            <Footer />
        </div>
    );
}
