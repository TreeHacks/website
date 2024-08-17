import './faq.css';
import FAQ from "./faq.svg?react";
import Accordion from "./accordion.tsx";

const FAQSection: React.FC = () => {

    return (
        <div className="faq-section">
             <FAQ className="background-svg" />
            <div className="faq-title">FAQs</div>
            <div className='accordionContainer'>
                <Accordion />
            </div>
            <div className="footer"> Made with 💚 by the TreeHacks team </div>
        </div>
    );
}

export default FAQSection;