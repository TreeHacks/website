import './faq.css';
import FAQ from "./faq.svg?react";

const FAQSection: React.FC = () => {

    return (
        <div className="faq-section">
             <FAQ className="background-svg" />
            <div className="section-title">FAQs</div>
        </div>
    );
}

export default FAQSection;