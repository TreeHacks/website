import React from "react";
import { code_of_conduct } from "./content.json";

function CodeOfConduct() {
    return (
        <div id="codeofconduct">
            <div className="container">
                <p className="header">TreeHacks Code Of Conduct</p>
                <p className="paragraph">TreeHacks is dedicated to providing a safe and comfortable environment and harassment-free experience for everyone. All attendees, sponsors, mentors, speakers, partners, volunteers, organizers and anyone else attending TreeHacks are required to agree and abide by the following code of conduct. </p>
                <p className="paragraph"><b>TL;DR. </b><i>Always be respectful of others. If you even remotely believe that your actions or words may make someone feel uncomfortable, don’t do it. If you are in a situation that makes you feel uncomfortable or unsafe, or you suspect someone may be in such a situation, please report it using the procedures documented below.</i></p>
                <p className="paragraph">Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, religion, sexual images in public spaces, deliberate intimidation, stalking, following, photography or audio/video recording against reasonable consent, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Harassment can include any behavior that makes another person feel targeted or uncomfortable.</p>
                <p className="paragraph">In particular, attendees should not use sexualised or discriminatory images, activities, or other material both in their hacks and during the event. Attendees (including sponsors, mentors, speakers, partners, volunteers and organizers) should not use sexualised or discriminatory clothing/uniforms/costumes, or otherwise create a sexualised or discriminatory environment.</p>
                <p className="paragraph">Photography is encouraged, but subjects must be given a reasonable chance to opt out from being photographed. If they object to the taking of their photograph, comply with their request. It is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or designated resting spaces).</p>
                <p className="paragraph">If a participant engages in harassing behavior, TreeHacks may take any action it deems appropriate, including warning the offender, contacting Stanford University officials or the police, or expulsion from the event with no eligibility for reimbursement or refund of any type. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer using the reporting procedures defined below.</p>
                <p className="paragraph">TreeHacks representatives can assist participants in contacting campus police or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. If you are in immediate physical danger, please call the Stanford Police Department at (650) 723-9633, or the Emergency Telephone Number at 911.</p>
                <p className="paragraph">We expect participants to follow these rules at all TreeHacks venues, online interactions in relation to the event, all TreeHacks-related events, and on hackathon supplied transportation.</p>
                <p className="paragraph"><b>Reporting Procedure</b></p>
                <p className="paragraph">If at any point you feel uncomfortable or think there may be a potential violation of the code of conduct, please report it by emailing <a href="mailto:incident@treehacks.com">incident@treehacks.com</a> or by calling <span>(661) 524-6459</span>‪‬. We would also recommend reporting to a TreeHacks organizer. If you are uncomfortable reporting your situation to one or more organizers, please ask for one of the three co-directors. All reporters have the right to remain anonymous. </p>
                <p className="paragraph">TreeHacks reserves the right to revise, make exceptions to, or otherwise amend these policies in whole or in part. If you have any questions regarding these policies, please contact us by e-mail at <a href="mailto:hello@treehacks.com">hello@treehacks.com</a>.</p>
                <p className="paragraph"><i>Our code of conduct is based on the<a href="http://hackcodeofconduct.org/"> Hack Code of Conduct.</a></i></p>
            </div>
        </div>
    );
}

export default CodeOfConduct;
