import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/primitives/Accordion.tsx";

export const JoinFAQ = () => {
  return (
    <>
      <AccordionItem>
        <AccordionTrigger>Who are we?</AccordionTrigger>
        <AccordionContent>We’re a University of Waterloo student design team, made up of students with backgrounds in Chemistry, Computation, Instrumentation, and Business. We all share a common passion for innovation and advancing the field of nanotechnology! </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>What do we do?</AccordionTrigger>
        <AccordionContent>Our team is working on building a nanocar, a molecular machine with applications in science, healthcare and engineering, optimized for speed, functionality and performance to compete in the next International Nanocar ace.  </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>When can I join?</AccordionTrigger>
        <AccordionContent>Research and development is continuous throughout the year, and new members are welcome to join anytime! We always look forward to adding diverse skills to our ongoing projects! </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>I don’t have a lot of experience, should I still apply? </AccordionTrigger>
        <AccordionContent>You don't need extensive experience to join our team! While some knowledge is beneficial, it isn’t necessary. What matters most is a strong desire to innovate and a readiness to explore the future of nanotechnology. If you’re enthusiastic about getting involved and eager to learn, we’d love to have you! 
          <p className="mt-4">
            You’ll be surrounded by students with diverse knowledge who are ready to provide mentorship and support!
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>What is the expected time commitment for team members?  </AccordionTrigger>
        <AccordionContent> The anticipated time commitment varies based on your availability and project needs. We are students too and are always flexible to accommodate your schedule.  
          <p className="mt-4">
            Keep in mind that, the more you put into this experience, the more you'll get out of it! More time put into this can lead to more opportunities for engagement and growth :)
          </p>  
            </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>Can I be a part of Formula Nano while on a work term?  </AccordionTrigger>
        <AccordionContent>Of course! We accept students on both study and work terms. While our main lab facilities are located on campus at the University of Waterloo for hands-on research, team members also work remotely from all over the world. This flexibility allows you to join regardless of your location! </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger> What can I do as a new team member?</AccordionTrigger>
        <AccordionContent> As a new team member at Formula Nano, depending on our current project stage and your own preferences, you can contribute in numerous ways, including:  
          <ul className= "list-disc list-inside ml-100 mt-2 ">
            <li>Hands-on Research: Assist with lab experiments and ongoing projects. </li>
            <li>Collaboration: Join discussions and brainstorming sessions, bringing your unique perspective to our research. </li>
            <li>Project Support: Help with data analysis, literature reviews, and documentation. </li>
            <li>Design and Simulation: Contribute to the design of simulation components or experimental setups for hands-on experience. </li>
            <li>Skill Development: Gain exposure to new techniques and tools relevant to nanotechnology.  </li>
            <li>Business Development and Outreach: Support sponserships, finances, and promote our research and team via social media.</li>

          </ul>
            </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionTrigger>What’s the process for joining Formula Nano? </AccordionTrigger>
        <AccordionContent>
          <ol className= "list-decimal list-inside ml-100 space-y-2 mt-2 ">
            <li> Submit Your Application <br></br>Start by filling out our recruitment form to tell us a bit about yourself and why you’re interested in Formula Nano. If we think you’d be a great fit, we’ll reach out to schedule a casual chat! </li>
            <li>Casual Interview <br></br>You’ll have a laid-back conversation with a few of our members. This is a perfect time to ask questions and get to know Formula Nano better! We’ll also ask a few role-specific questions to see how your skills match up with our current projects :)  
              <p className="mt-4">
              In the meantime, check out our social media to see what we’re working on!
              </p>    
            </li>
          </ol>
            </AccordionContent>
      </AccordionItem>


    </>
  );
};
