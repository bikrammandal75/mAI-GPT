import james from '../templates/job/jamess.png'
import emilyy from '../templates/job/emilyy.png'
import marcus from '../templates/job/marcuss.jpg'
import black from '../templates/job/black.png'
import resume_modern_corporate from '../templates/job/resume_modern_corporate.jpg'
import resume_sarah_johnson_modern from '../templates/job/resume_sarah_johnson_modern.jpg'
import Metric_Focus from '../templates/job/Metric_Focus.jpg'
import Premium_Executive from '../templates/job/Premium_Executive.jpg'



export const jobApplicationsTemplates = [
  {
    "id": "resume_emily",
    "title": "Emily Anderson",
    "category": "Career & Hiring",
    "thumbnail": emilyy,
    content: `
<div style="max-width: 880px; margin: auto; padding: 40px 60px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #333; background: #ffffff;">

  <div style="display: flex; justify-content: space-between; border-bottom: 3px solid #00ced1; padding-bottom: 20px; margin-bottom: 30px;">
    <div>
      <h1 style="font-size: 48px; font-weight: 800; margin: 0; color: #1a1a1a; letter-spacing: -1px;">Emily Anderson</h1>
      <div style="font-size: 16pt; color: #00ced1; font-weight: 700; letter-spacing: 2px; margin-top: 5px;">
        SENIOR PRODUCT DESIGNER
      </div>
    </div>
    <div style="text-align: right; font-size: 10.5pt; color: #555;">
      <div style="margin-bottom: 4px;">📍 San Francisco, CA</div>
      <div style="margin-bottom: 4px;">📞 415-555-0199</div>
      <div style="margin-bottom: 4px;">✉️ emily.design@example.com</div>
      <div>🌐 portfolio.emilyanderson.com</div>
    </div>
  </div>

  <div style="margin-bottom: 35px;">
    <p style="font-size: 11pt; line-height: 1.6; text-align: justify; color: #444;">
      Innovative Senior Product Designer with <strong>6+ years of experience</strong> architecting user-centric digital ecosystems. Expert at bridging the gap between complex business requirements and intuitive user experiences. Proven track record of <strong>increasing user retention by 25%</strong> through data-driven iterations and cross-functional leadership. Deeply committed to digital accessibility (WCAG) and building scalable, high-performance design systems.
    </p>
  </div>

  <div style="margin-bottom: 35px;">
    <div style="font-size: 14pt; font-weight: 700; padding-left: 15px; margin-bottom: 20px; border-left: 5px solid #00ced1; color: #1a1a1a; text-transform: uppercase; letter-spacing: 1px;">
      Professional Experience
    </div>

    <div style="margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
        <span style="font-size: 12pt; font-weight: 700; color: #222;">Lead Product Designer | TechFlow Solutions</span>
        <span style="font-size: 10pt; font-weight: 600; color: #00ced1;">2021 – Present</span>
      </div>
      <ul style="padding-left: 18px; font-size: 10.5pt; color: #444; margin-top: 8px;">
        <li style="margin-bottom: 6px;">Spearheaded the complete redesign of a B2B SaaS dashboard, resulting in a <strong>40% reduction in customer onboarding time</strong> and a 15% lift in daily active users (DAU).</li>
        <li style="margin-bottom: 6px;">Architected "FlowUI," a centralized design system used by 4 product teams, reducing frontend development handoff time by 30%.</li>
        <li style="margin-bottom: 6px;">Facilitated quarterly Design Thinking workshops for stakeholders to align product roadmap with user pain points identified via 50+ usability sessions.</li>
      </ul>
    </div>

    <div style="margin-bottom: 25px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 5px;">
        <span style="font-size: 12pt; font-weight: 700; color: #222;">UX Designer | Creative Pulse Agency</span>
        <span style="font-size: 10pt; font-weight: 600; color: #00ced1;">2018 – 2021</span>
      </div>
      <ul style="padding-left: 18px; font-size: 10.5pt; color: #444; margin-top: 8px;">
        <li style="margin-bottom: 6px;">Delivered high-fidelity mobile prototypes for Fortune 500 clients in the Fintech and Retail sectors, achieving a 98% client satisfaction rate.</li>
        <li style="margin-bottom: 6px;">Collaborated with engineering to implement <strong>WCAG 2.1 Level AA compliance</strong> across all web properties, expanding the accessible user base.</li>
        <li style="margin-bottom: 6px;">Conducted A/B testing on checkout flows, leading to a 12% increase in conversion rates for a major e-commerce partner.</li>
      </ul>
    </div>
  </div>

  <div style="margin-bottom: 35px;">
    <div style="font-size: 14pt; font-weight: 700; padding-left: 15px; margin-bottom: 15px; border-left: 5px solid #00ced1; color: #1a1a1a; text-transform: uppercase; letter-spacing: 1px;">
      Featured Projects
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">
        <div style="font-weight: 700; font-size: 11pt; margin-bottom: 5px;">FinTrack Mobile App</div>
        <p style="font-size: 9.5pt; color: #666; margin: 0;">Designed an end-to-end personal finance management tool focusing on data visualization for novice investors. Resulted in 100k+ downloads within 6 months.</p>
      </div>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee;">
        <div style="font-weight: 700; font-size: 11pt; margin-bottom: 5px;">EcoShop E-Commerce</div>
        <p style="font-size: 9.5pt; color: #666; margin: 0;">Lead UX research and information architecture for a sustainable retail brand, optimizing the mobile checkout funnel and decreasing cart abandonment.</p>
      </div>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; margin-top: 20px;">

    <div>
      <div style="font-size: 13pt; font-weight: 700; margin-bottom: 15px; color: #1a1a1a; border-bottom: 1px solid #ddd; padding-bottom: 5px;">EDUCATION & AWARDS</div>
      
      <div style="margin-bottom: 15px;">
        <div style="font-weight: 700; font-size: 10.5pt;">B.S. Human-Computer Interaction</div>
        <div style="color: #666; font-style: italic; font-size: 10pt;">Georgia Institute of Technology | 2014 – 2018</div>
      </div>

      <div style="font-size: 10pt; line-height: 1.8;">
        🏆 <strong>Awwwards</strong> - Mobile Site of the Day (2019)<br/>
        📜 <strong>Google</strong> - UX Design Professional Certificate (2022)<br/>
        📜 <strong>IxDF</strong> - Accessibility Specialist Certification (2020)
      </div>
    </div>

    <div>
      <div style="font-size: 13pt; font-weight: 700; margin-bottom: 15px; color: #1a1a1a; border-bottom: 1px solid #ddd; padding-bottom: 5px;">TECHNICAL SKILLS</div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">Figma</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">Adobe Creative Suite</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">Prototyping</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">User Research</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">HTML/CSS</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">Agile/Scrum</span>
        <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 15px; font-size: 9pt; font-weight: 600; color: #008b8b;">Design Systems</span>
      </div>
    </div>

  </div>

</div>
`

  },
  {
    "id": "resume_marcus_reed",
    "title": "Marcus Reed",
    "category": "Career & Hiring",
    "thumbnail": marcus,
    "content":
      `<div style="max-width:880px;margin:auto;padding:32px 80px;font-family:Inter,Arial,sans-serif;background:#fafafa;">
  <div style="display:flex;box-shadow:0 0 10px rgba(0,0,0,.1);background:white;min-height:1050px;">

    <div style="width:35%;background:#8b9b7a;color:white;padding:40px 30px;">

      <div style="width:150px;height:150px;border-radius:50%;background:#c0c0c0;margin:0 auto 20px;border:3px solid rgba(255,255,255,0.2);"></div>

      <div style="font-size:14px;font-weight:600;letter-spacing:1px;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:5px;">PROFILE</div>
      <p style="font-size:11px;line-height:1.6;margin-bottom:25px;text-align:justify;">
        Data-driven Growth Marketing Manager with 8+ years of experience specializing in acquisition funnels, paid media optimization,
        and revenue acceleration. Proven track record of scaling startup revenue from $1M to $10M ARR within 18 months.
      </p>

      <div style="font-size:14px;font-weight:600;letter-spacing:1px;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:5px;">SKILLS</div>
      <ul style="font-size:11px;list-style:none;padding:0;line-height:2;margin-bottom:25px;">
        <li>✔ Growth Marketing</li>
        <li>✔ Google Ads & Paid Media</li>
        <li>✔ SEO / SEM Strategy</li>
        <li>✔ Conversion Optimization</li>
        <li>✔ SQL & Data Analytics</li>
        <li>✔ HubSpot Automation</li>
        <li>✔ A/B Testing Frameworks</li>
        <li>✔ CRM Lifecycle Management</li>
      </ul>

      <div style="font-size:14px;font-weight:600;letter-spacing:1px;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:5px;">EDUCATION</div>
      <div style="margin-bottom:20px;">
        <div style="font-size:11px;font-weight:600;">M.S. in Digital Marketing</div>
        <div style="font-size:10px;opacity:0.9;">University of Texas, Austin</div>
      </div>
      <div style="margin-bottom:25px;">
        <div style="font-size:11px;font-weight:600;">B.A. in Communications</div>
        <div style="font-size:10px;opacity:0.9;">Texas A&M University</div>
      </div>

      <div style="font-size:14px;font-weight:600;letter-spacing:1px;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.3);padding-bottom:5px;">LANGUAGES</div>
      <ul style="font-size:11px;list-style:none;padding:0;">
        <li>English (Native)</li>
        <li>Spanish (Professional)</li>
      </ul>

    </div>

    <div style="width:65%;background:#f5f5dc;padding:40px 35px;display:flex;flex-direction:column;">

      <h1 style="font-family:Playfair Display,serif;font-size:42px;color:#8b9b7a;margin:0;line-height:1;">
        MARCUS REED
      </h1>
      <p style="letter-spacing:3px;color:#666;margin:10px 0 15px;font-size:14px;font-weight:500;">GROWTH MARKETING MANAGER</p>

      <div style="border-bottom:1px solid #8b9b7a;padding-bottom:15px;margin-bottom:25px;font-size:11px;color:#666;">
        Austin, TX • 512-555-0122 • marcus.growth@example.com
      </div>

      <div style="color:#8b9b7a;font-weight:700;margin-bottom:15px;font-size:14px;letter-spacing:1px;">PROFESSIONAL EXPERIENCE</div>

      <div style="margin-bottom:25px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <strong style="font-size:13px;color:#333;">Growth Lead</strong>
          <span style="font-size:11px;color:#8b9b7a;font-weight:600;">2021 – Present</span>
        </div>
        <em style="font-size:12px;color:#666;">ViralLoop Media</em>
        <ul style="font-size:11px;color:#555;padding-left:18px;margin-top:8px;line-height:1.6;">
          <li>Managed $2.5M annual paid media budget across Google, Meta, and LinkedIn.</li>
          <li>Boosted overall platform conversions by 22% through rigorous A/B testing of landing pages.</li>
          <li>Built a proprietary referral engine that now generates 30% of all new monthly signups.</li>
          <li>Lead a cross-functional team of 5 designers and copywriters to refresh brand identity.</li>
        </ul>
      </div>

      <div style="margin-bottom:25px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <strong style="font-size:13px;color:#333;">Marketing Specialist</strong>
          <span style="font-size:11px;color:#8b9b7a;font-weight:600;">2019 – 2021</span>
        </div>
        <em style="font-size:12px;color:#666;">BrightMetrics</em>
        <ul style="font-size:11px;color:#555;padding-left:18px;margin-top:8px;line-height:1.6;">
          <li>Increased organic search traffic by 200% through a comprehensive SEO content audit.</li>
          <li>Automated email drip campaigns which improved user open rates by 12% and CTR by 5%.</li>
          <li>Reduced Customer Acquisition Cost (CAC) by 18% within the first year by refining target personas.</li>
        </ul>
      </div>

      <div style="color:#8b9b7a;font-weight:700;margin-bottom:15px;font-size:14px;letter-spacing:1px;margin-top:10px;">KEY PROJECTS</div>
      
      <div style="margin-bottom:20px;">
        <strong style="font-size:12px;color:#333;">Project "Skyrocket" (2022)</strong>
        <p style="font-size:11px;color:#555;margin:5px 0;">Lead the end-to-end migration of CRM data to HubSpot, integrating advanced lead scoring that prioritized high-value prospects for the sales team.</p>
      </div>

      <div style="margin-bottom:25px;">
        <strong style="font-size:12px;color:#333;">Global Expansion Initiative (2020)</strong>
        <p style="font-size:11px;color:#555;margin:5px 0;">Localized marketing campaigns for the LATAM market, resulting in a 45% increase in regional user adoption over 6 months.</p>
      </div>

      <div style="color:#8b9b7a;font-weight:700;margin-top:10px;margin-bottom:15px;font-size:14px;letter-spacing:1px;">AWARDS & ACHIEVEMENTS</div>
      <p style="font-size:11px;color:#555;line-height:1.8;">
        🏆 Marketing Innovator of the Year — 2023<br>
        🏆 Forbes 30 Under 30 Nominee — 2022<br>
        🏆 Certified Google Ads Search Professional (Renewed 2024)<br>
        🏆 HubSpot Inbound Marketing Certification
      </p>

    </div>

  </div>
</div>`
  },
  {
    id: "resume_fresh_graduate",
    title: "Fresh Graduate Resume",
    category: "Career & Hiring",
    thumbnail: "/templates/job/fresh-graduate.png",
    content: `
<div style="max-width: 880px; margin: auto; padding: 40px; font-family: 'Inter', sans-serif; background: #F3F4F9; color: #1e293b; border: 1px solid #e2e8f0; line-height: 1.5;">
  
  <header style="text-align: center; margin-bottom: 30px; border-bottom: 4px solid #3b82f6; padding-bottom: 20px;">
    <h1 style="font-size: 32px; font-weight: 800; margin: 0; color: #1e293b; text-transform: uppercase; letter-spacing: 1px;">Jordan Smith</h1>
    <p style="font-size: 16px; color: #3b82f6; font-weight: 600; margin: 5px 0;">Aspiring Software Engineer & Computer Science Graduate</p>
    <div style="font-size: 13px; color: #64748b; margin-top: 10px;">
      📍 Boston, MA • ✉️ j.smith@university.edu • 📞 (555) 012-3456 • 🔗 github.com/jsmith-dev • 🔗 linkedin.com/in/jsmith-dev
    </div>
  </header>

  <section style="margin-bottom: 30px; background: #f8fafc; padding: 15px; border-radius: 8px;">
    <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; margin-bottom: 8px; margin-top: 0;">Professional Summary</h3>
    <p style="font-size: 13px; color: #475569; margin: 0;">
      Detail-oriented Computer Science graduate with a strong foundation in full-stack development and algorithmic problem-solving. Experienced in React and Python through high-impact internships and open-source contributions. Proven ability to collaborate in Agile environments and a passion for building scalable, user-centric web applications.
    </p>
  </section>

  <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 30px;">
    
    <aside>
      <div style="margin-bottom: 25px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">Education</h3>
        <p style="font-weight: 700; font-size: 14px; margin: 0;">B.S. in Computer Science</p>
        <p style="font-size: 13px; color: #64748b; margin: 0;">University of Massachusetts</p>
        <p style="font-size: 12px; color: #94a3b8; margin: 2px 0;">Class of 2024 • GPA: 3.8/4.0</p>
      </div>

      <div style="margin-bottom: 25px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">Technical Skills</h3>
        <ul style="list-style: none; padding: 0; font-size: 13px; color: #475569; line-height: 1.8;">
          <li><strong>Languages:</strong> Java, Python, JavaScript, C++, SQL</li>
          <li><strong>Web:</strong> React, HTML5, CSS3, Node.js, Express</li>
          <li><strong>Tools:</strong> Git, Docker, AWS, VS Code, Figma</li>
          <li><strong>Databases:</strong> PostgreSQL, Firebase, MongoDB</li>
        </ul>
      </div>

      <div style="margin-bottom: 25px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">Coursework</h3>
        <p style="font-size: 12px; color: #475569; line-height: 1.6;">
          Data Structures & Algorithms, Database Management, UI/UX Design Systems, Cloud Computing, Agile Methodologies, Operating Systems, Machine Learning Basics.
        </p>
      </div>

      <div>
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">Certifications</h3>
        <p style="font-size: 12px; color: #475569; margin-bottom: 5px;">• AWS Certified Developer Associate</p>
        <p style="font-size: 12px; color: #475569;">• Meta Front-End Developer Certificate</p>
      </div>
    </aside>

    <main>
      <section style="margin-bottom: 30px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px;">Internship Experience</h3>
        
        <div style="margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; font-weight: 700;">
            <span>Full-Stack Intern @ DevHouse Lab</span>
            <span style="font-size: 12px; color: #94a3b8;">June 2023 – Aug 2023</span>
          </div>
          <ul style="font-size: 13px; color: #475569; padding-left: 18px; margin-top: 5px;">
            <li>Developed and tested 10+ reusable React components for the core product dashboard.</li>
            <li>Collaborated with senior engineers to migrate legacy API endpoints to Node.js.</li>
            <li>Optimized database queries in PostgreSQL, reducing page load times by 15%.</li>
          </ul>
        </div>

        <div style="margin-bottom: 15px;">
          <div style="display: flex; justify-content: space-between; font-weight: 700;">
            <span>IT Support Assistant @ UMass Tech</span>
            <span style="font-size: 12px; color: #94a3b8;">Sept 2022 – May 2023</span>
          </div>
          <ul style="font-size: 13px; color: #475569; padding-left: 18px; margin-top: 5px;">
            <li>Resolved 20+ technical hardware and software tickets weekly for students and faculty.</li>
            <li>Maintained campus computer labs and updated security software on 50+ machines.</li>
          </ul>
        </div>
      </section>

      <section style="margin-bottom: 30px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px;">Academic Projects</h3>
        
        <div style="margin-bottom: 15px;">
          <p style="font-weight: 700; margin: 0; font-size: 14px;">Smart-Campus Mobile App</p>
          <p style="font-size: 13px; color: #475569; margin: 5px 0;">
            Built a React Native application for campus navigation and event tracking, used by 500+ students during orientation week. Integrated Google Maps API and Firebase Authentication.
          </p>
        </div>

        <div style="margin-bottom: 15px;">
          <p style="font-weight: 700; margin: 0; font-size: 14px;">E-Commerce Engine</p>
          <p style="font-size: 13px; color: #475569; margin: 5px 0;">
            Developed a Python-based backend for a mock store using Django and Stripe API for secure payment processing. Implemented a custom inventory management system.
          </p>
        </div>

        <div style="margin-bottom: 15px;">
          <p style="font-weight: 700; margin: 0; font-size: 14px;">WeatherWise Dashboard</p>
          <p style="font-size: 13px; color: #475569; margin: 5px 0;">
            Created a real-time weather tracking site using OpenWeatherMap API and JavaScript. Features include dynamic backgrounds and 7-day forecasting.
          </p>
        </div>
      </section>

      <section>
        <h3 style="font-size: 14px; text-transform: uppercase; color: #3b82f6; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 10px;">Honors & Leadership</h3>
        <p style="font-size: 13px; color: #475569; margin: 0;">🏆 Dean’s List (6 Consecutive Semesters)</p>
        <p style="font-size: 13px; color: #475569; margin: 5px 0;">🏅 President, University Coding Club - Led weekly workshops on LeetCode patterns</p>
        <p style="font-size: 13px; color: #475569; margin: 0;">👥 Hackathon Finalist - Top 5 out of 40 teams at MassHack 2023</p>
      </section>
    </main>
  </div>
</div>
`
  },
  {
    "id": "resume_modern_corporate",
    "title": "Julian Thorne",
    "category": "Career & Hiring",
    "thumbnail": "resume_modern_corporate",
    "content":
      `<div style="display:flex;width:100%;min-height:1100px;font-family:'Times New Roman',serif;background:white;border:1px solid #ddd;">

  <div style="width:35%;background:#e8e8e8;padding:40px 30px;display:flex;flex-direction:column;gap:35px;border-right:1px solid #ccc;">

    <div style="width:150px;height:150px;border-radius:50%;border:4px solid #2e5c9a;background:#2e5c9a;color:white;
                display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;margin:0 auto;box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      JT
    </div>

    <div>
      <h2 style="color:#2e5c9a;font-size:16px;text-transform:uppercase;border-bottom:2px solid #2e5c9a;padding-bottom:5px;margin-bottom:12px;">Profile</h2>
      <p style="font-size:12px;text-align:justify;line-height:1.6;color:#333;">
        Strategic Security Architect with 10+ years of experience in cloud infrastructure protection,
        Zero Trust frameworks, and large-scale threat mitigation. Expert in aligning cybersecurity 
        initiatives with global business objectives in the fintech and defense sectors.
      </p>
    </div>

    <div>
      <h2 style="color:#2e5c9a;font-size:16px;text-transform:uppercase;border-bottom:2px solid #2e5c9a;padding-bottom:5px;margin-bottom:12px;">Contact</h2>
      <div style="font-size:12px;margin-bottom:8px;">📍 London, UK</div>
      <div style="font-size:12px;margin-bottom:8px;">📞 +44 20 7946 0123</div>
      <div style="font-size:12px;margin-bottom:8px;">✉️ j.thorne@secure-ops.tech</div>
      <div style="font-size:12px;">🔗 linkedin.com/in/jthorne-cyber</div>
    </div>

    <div>
      <h2 style="color:#2e5c9a;font-size:16px;text-transform:uppercase;border-bottom:2px solid #2e5c9a;padding-bottom:5px;margin-bottom:12px;">Education</h2>
      <div style="font-size:12px;margin-bottom:10px;">
        <strong>University College London</strong><br/>
        MSc in Cyber Security (Distinction)
      </div>
      <div style="font-size:12px;">
        <strong>King's College London</strong><br/>
        BSc Computer Science
      </div>
    </div>

    <div>
      <h2 style="color:#2e5c9a;font-size:16px;text-transform:uppercase;border-bottom:2px solid #2e5c9a;padding-bottom:5px;margin-bottom:12px;">Certifications</h2>
      <div style="font-size:11px;line-height:1.8;color:#444;">
        • CISSP – ISC²<br/>
        • CISM – ISACA<br/>
        • AWS Certified Security – Specialty<br/>
        • Certified Ethical Hacker (CEH)
      </div>
    </div>

    <div style="margin-top:auto;">
       <h2 style="color:#2e5c9a;font-size:16px;text-transform:uppercase;border-bottom:2px solid #2e5c9a;padding-bottom:5px;margin-bottom:12px;">References</h2>
       <p style="font-size:11px;color:#666;font-style:italic;">Excellent professional references available upon formal request.</p>
    </div>

  </div>

  <div style="width:65%;background:white;">

    <div style="background:#2e5c9a;color:white;padding:50px 50px;">
      <h1 style="font-size:52px;margin:0;letter-spacing:1px;font-family:'Arial',sans-serif;">Julian Thorne</h1>
      <div style="font-size:20px;text-transform:uppercase;letter-spacing:3px;opacity:0.9;">Security Architect</div>
    </div>

    <div style="padding:40px 50px;">

      <div style="margin-bottom:40px;">
        <h2 style="color:#2e5c9a;text-transform:uppercase;font-size:18px;margin-bottom:15px;border-bottom:1px solid #eee;">Core Competencies</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;color:#333;">
          <span>• Cloud Security Architecture</span>
          <span>• Threat Intelligence</span>
          <span>• Zero Trust Networking</span>
          <span>• Incident Response Planning</span>
          <span>• DevSecOps Integration</span>
          <span>• Regulatory Compliance (GDPR)</span>
        </div>
      </div>

      <div style="margin-bottom:40px;">
        <h2 style="color:#2e5c9a;text-transform:uppercase;font-size:18px;margin-bottom:20px;border-bottom:1px solid #eee;">Professional Experience</h2>
        
        <div style="margin-bottom:25px;">
          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:14px;">
            <span>Principal Security Architect | Fortis Financial</span>
            <span style="color:#666;">2019 – Present</span>
          </div>
          <p style="font-size:12px;text-align:justify;line-height:1.6;margin-top:8px;">
            Led enterprise security for global fintech networks, building Zero Trust systems 
            protecting 50,000+ endpoints. Improved threat detection by 40% using AI-driven 
            SIEM integration and reduced recovery time by 65% via automated response playbooks.
          </p>
        </div>

        <div style="margin-bottom:25px;">
          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:14px;">
            <span>Senior Security Engineer | CyberDyne Systems</span>
            <span style="color:#666;">2014 – 2019</span>
          </div>
          <p style="font-size:12px;text-align:justify;line-height:1.6;margin-top:8px;">
            Managed security audits and vulnerability assessments for government-contracted projects. 
            Designed and implemented a multi-region VPC security structure on AWS that successfully 
            mitigated over 200 targeted intrusion attempts annually.
          </p>
        </div>
      </div>

      <div style="margin-bottom:40px;">
        <h2 style="color:#2e5c9a;text-transform:uppercase;font-size:18px;margin-bottom:15px;border-bottom:1px solid #eee;">Key Projects</h2>
        
        <div style="margin-bottom:15px;">
          <div style="font-weight:bold;font-size:13px;color:#2e5c9a;">Project Aegis — Firewall Modernization</div>
          <p style="font-size:12px;margin-top:5px;line-height:1.5;">
            Directed a £2.5M infrastructure overhaul, replacing legacy firewalls with next-gen 
            SD-WAN solutions. Achieved 99.99% uptime during peak transaction volume.
          </p>
        </div>

        <div>
          <div style="font-weight:bold;font-size:13px;color:#2e5c9a;">Sentinel — Automated Compliance Bot</div>
          <p style="font-size:12px;margin-top:5px;line-height:1.5;">
            Developed a custom Python tool to monitor real-time ISO 27001 compliance across 
            distributed engineering teams, reducing audit preparation time by 80%.
          </p>
        </div>
      </div>

      <div>
        <h2 style="color:#2e5c9a;text-transform:uppercase;font-size:18px;margin-bottom:15px;border-bottom:1px solid #eee;">Technical Proficiencies</h2>
        <div style="font-size:12px;line-height:1.8;">
          <strong>Security:</strong> Wireshark, Burp Suite, Splunk, CrowdStrike, Okta<br/>
          <strong>Cloud/DevOps:</strong> AWS, Azure, Docker, Kubernetes, Terraform<br/>
          <strong>Development:</strong> Python, Go, Shell Scripting, PowerShell
        </div>
      </div>

    </div>
  </div>

</div>`
  },
  {
    id: "resume_executive",
    title: "Executive Resume",
    category: "Career & Hiring",
    thumbnail: "/templates/job/executive.png",
    content: `
<div style="max-width: 880px; margin: auto; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #fff; color: #333; display: flex; flex-direction: column; border: 1px solid #ddd; min-height: 1050px;">
  
  <div style="background: #1a1a1a; color: #fff; padding: 50px 80px; display: flex; justify-content: space-between; align-items: center;">
    <div>
      <h1 style="margin: 0; font-size: 38px; font-weight: 300; letter-spacing: 5px; text-transform: uppercase;">Sloane <span style="font-weight: 800; color: #d4af37;">Vanderbilt</span></h1>
      <p style="margin: 5px 0 0; font-size: 14px; letter-spacing: 3px; color: #aaa;">CHIEF OPERATING OFFICER</p>
    </div>
    <div style="text-align: right; font-size: 10px; color: #aaa; letter-spacing: 1px; line-height: 1.8;">
      SV.EXECUTIVE@CONSULTING.COM<br/>
      +1 212 555 8899<br/>
      NEW YORK • LONDON • SINGAPORE
    </div>
  </div>

  <div style="padding: 40px 80px;">
    <div style="margin-bottom: 40px; border-left: 3px solid #d4af37; padding-left: 25px;">
      <p style="font-size: 13pt; font-style: italic; line-height: 1.5; color: #555;">
        "Visionary executive with 15+ years of experience steering multi-billion dollar operations. 
        Specializing in global market expansion, M&A integration, and cultural transformation 
        that drives sustainable EBITDA growth and stakeholder value."
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 50px;">
      <div>
        <h3 style="font-size: 12pt; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">CORE COMPETENCIES</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; font-size: 10pt; gap: 10px; margin-bottom: 40px;">
          <div style="font-weight: 700;">• Strategic Planning</div>
          <div style="font-weight: 700;">• P&L Management</div>
          <div style="font-weight: 700;">• Capital Raising</div>
          <div style="font-weight: 700;">• Global Supply Chain</div>
          <div style="font-weight: 700;">• Board Relations</div>
          <div style="font-weight: 700;">• M&A Due Diligence</div>
          <div style="font-weight: 700;">• ESG & Sustainability</div>
          <div style="font-weight: 700;">• Organizational Lean</div>
        </div>

        <h3 style="font-size: 12pt; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">EXECUTIVE EXPERIENCE</h3>
        
        <div style="margin-bottom: 30px;">
          <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 11pt;">
            <span>AETHER GLOBAL CORP</span>
            <span style="color: #d4af37;">2018 – PRESENT</span>
          </div>
          <div style="font-style: italic; margin-bottom: 8px; color: #666;">Chief Operating Officer</div>
          <ul style="font-size: 10pt; padding-left: 15px; color: #444; line-height: 1.6;">
            <li>Directs 1,200+ staff across 4 continents, overseeing a portfolio valued at $3.5B.</li>
            <li>Increased annual revenue from $450M to $1.2B in 4 years through market penetration and product diversification.</li>
            <li>Led successful $200M Series D funding round with Tier-1 institutional investors.</li>
            <li>Restructured global supply chain, achieving a 22% reduction in operational expenditure.</li>
          </ul>
        </div>

        <div style="margin-bottom: 30px;">
          <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 11pt;">
            <span>VANGUARD INDUSTRIES</span>
            <span style="color: #d4af37;">2012 – 2018</span>
          </div>
          <div style="font-style: italic; margin-bottom: 8px; color: #666;">SVP of Global Operations</div>
          <ul style="font-size: 10pt; padding-left: 15px; color: #444; line-height: 1.6;">
            <li>Orchestrated the post-merger integration of three international subsidiaries, achieving $50M in synergies.</li>
            <li>Implemented enterprise-wide ERP systems, enhancing real-time data visibility for the board.</li>
            <li>Maintained 99.8% compliance rating across diverse regulatory environments in EMEA and APAC regions.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 style="font-size: 12pt; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">EXECUTIVE IMPACT</h3>
        <div style="margin-bottom: 30px;">
          <div style="font-size: 22px; font-weight: 800; color: #d4af37; margin-bottom: 5px;">$1.2B</div>
          <div style="font-size: 9pt; color: #666; text-transform: uppercase;">Peak Revenue Managed</div>
        </div>
        <div style="margin-bottom: 30px;">
          <div style="font-size: 22px; font-weight: 800; color: #d4af37; margin-bottom: 5px;">140%</div>
          <div style="font-size: 9pt; color: #666; text-transform: uppercase;">Average ROI on M&A</div>
        </div>

        <h3 style="font-size: 12pt; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 20px; letter-spacing: 1px;">EDUCATION</h3>
        <div style="margin-bottom: 20px;">
          <div style="font-weight: 800; font-size: 10pt;">HARVARD BUSINESS SCHOOL</div>
          <div style="font-size: 9pt;">Executive MBA</div>
          <div style="font-size: 9pt; color: #999;">Focus: Global Leadership</div>
        </div>
        <div style="margin-bottom: 20px;">
          <div style="font-weight: 800; font-size: 10pt;">LONDON SCHOOL OF ECONOMICS</div>
          <div style="font-size: 9pt;">B.Sc. in International Finance</div>
          <div style="font-size: 9pt; color: #999;">First Class Honours</div>
        </div>

        <h3 style="font-size: 12pt; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 20px; margin-top: 20px; letter-spacing: 1px;">AFFILIATIONS</h3>
        <ul style="font-size: 9pt; list-style: none; padding: 0; line-height: 2.2; color: #444;">
          <li>• Chairman, Global Trade Council</li>
          <li>• Member, Forbes Business Council</li>
          <li>• Advisor, TechStart Incubator</li>
          <li>• Board Director, GreenEnergy Initiative</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div style="background: #f9f9f9; padding: 25px 80px; font-size: 9px; color: #999; text-align: center; letter-spacing: 2px; margin-top: auto;">
    CONFIDENTIAL | 2026 EXECUTIVE PORTFOLIO • NEW YORK • LONDON • SINGAPORE
  </div>
</div>
`
  },

  {
    "id": "resume_data_analyst_modern",
    "title": "Data Analyst - Metric Focus",
    "category": "Career & Hiring",
    "thumbnail": "Metric_Focus",
    "content": "<div style='background-color: #fcfcfc; color: #334155; padding: 45px; font-family: \"Inter\", -apple-system, sans-serif; line-height: 1.5; border: 1px solid #e2e8f0; border-top: 8px solid #10b981; min-height: 1050px;'>\n      \n      <header style='display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;'>\n        <div>\n          <h1 style='font-size: 2.5rem; margin: 0; color: #1e293b; font-weight: 800; letter-spacing: -1px;'>Jordan Avery</h1>\n          <p style='font-size: 1.1rem; color: #10b981; font-weight: 600; margin: 5px 0;'>Senior Data Analyst</p>\n        </div>\n        <div style='text-align: right; font-size: 0.85rem; color: #64748b;'>\n          <p style='margin: 2px 0;'>📍 Chicago, IL</p>\n          <p style='margin: 2px 0;'>✉️ j.avery.data@analysis.io</p>\n          <p style='margin: 2px 0;'>🌐 portfolio.io/javery-data</p>\n          <p style='margin: 2px 0;'>📱 +1 (312) 555-0144</p>\n        </div>\n      </header>\n\n      <div style='display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;'>\n        <div style='background: #f8fafc; padding: 15px; border-radius: 8px; border-bottom: 3px solid #10b981; text-align: center;'>\n          <span style='display: block; font-size: 1.4rem; font-weight: 800; color: #1e293b;'>98%</span>\n          <span style='font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: bold;'>Data Accuracy Rate</span>\n        </div>\n        <div style='background: #f8fafc; padding: 15px; border-radius: 8px; border-bottom: 3px solid #10b981; text-align: center;'>\n          <span style='display: block; font-size: 1.4rem; font-weight: 800; color: #1e293b;'>$1.2M</span>\n          <span style='font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: bold;'>Cost Savings Identified</span>\n        </div>\n        <div style='background: #f8fafc; padding: 15px; border-radius: 8px; border-bottom: 3px solid #10b981; text-align: center;'>\n          <span style='display: block; font-size: 1.4rem; font-weight: 800; color: #1e293b;'>400+</span>\n          <span style='font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: bold;'>Queries Optimized</span>\n        </div>\n      </div>\n\n      <div style='display: grid; grid-template-columns: 2fr 1fr; gap: 40px;'>\n        \n        <section>\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;'>EXPERIENCE</h3>\n          \n          <div style='margin: 20px 0;'>\n            <div style='display: flex; justify-content: space-between;'>\n              <strong style='color: #1e293b;'>Lead Insights Analyst @ FinTech Solutions</strong>\n              <span style='font-size: 0.8rem; color: #94a3b8;'>2020 — PRESENT</span>\n            </div>\n            <ul style='font-size: 0.9rem; color: #475569; padding-left: 18px; margin-top: 8px;'>\n              <li>Developed automated ETL pipelines using Python and SQL, reducing weekly reporting time by 15 hours and eliminating manual entry errors.</li>\n              <li>Built interactive Tableau dashboards for executive leadership to track real-time KPIs across 4 global departments.</li>\n              <li>Identified market trends that led to a 12% increase in customer retention via targeted predictive modeling and churn analysis.</li>\n              <li>Mentored a team of 3 junior analysts, establishing best practices for version control using Git.</li>\n            </ul>\n          </div>\n\n          <div style='margin: 20px 0;'>\n            <div style='display: flex; justify-content: space-between;'>\n              <strong style='color: #1e293b;'>Data Analyst @ Retail Metrics Inc.</strong>\n              <span style='font-size: 0.8rem; color: #94a3b8;'>2017 — 2020</span>\n            </div>\n            <ul style='font-size: 0.9rem; color: #475569; padding-left: 18px; margin-top: 8px;'>\n              <li>Cleaned and validated legacy datasets containing 1M+ rows, ensuring 99.9% data integrity for critical financial audits.</li>\n              <li>Supported A/B testing initiatives for the e-commerce platform, resulting in an 8% lift in checkout conversions worth $450k in annual revenue.</li>\n              <li>Automated monthly inventory forecasting reports, improving stock accuracy by 22% across 12 regional warehouses.</li>\n            </ul>\n          </div>\n\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px; text-transform: uppercase; letter-spacing: 1px;'>KEY PROJECTS</h3>\n          \n          <div style='margin: 20px 0;'>\n            <p style='font-size: 0.9rem; color: #1e293b; margin: 0;'><strong>Automated Fraud Detection Engine</strong></p>\n            <p style='font-size: 0.85rem; color: #475569; margin-top: 4px;'>Integrated Scikit-learn random forest models into the transaction stream to flag suspicious activities. Reduced fraudulent transactions by 34% within the first quarter of deployment.</p>\n          </div>\n\n          <div style='margin: 20px 0;'>\n            <p style='font-size: 0.9rem; color: #1e293b; margin: 0;'><strong>Supply Chain Optimization Suite</strong></p>\n            <p style='font-size: 0.85rem; color: #475569; margin-top: 4px;'>Utilized Python and Snowflake to create a bottleneck-detection tool. Decreased average shipping lead times by 2.5 days for Midwest distribution centers.</p>\n          </div>\n        </section>\n\n        <aside>\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;'>TECHNICAL STACK</h3>\n          <div style='margin-top: 15px;'>\n            <p style='font-size: 0.8rem; margin: 10px 0;'><strong>Languages:</strong> Python (Pandas, NumPy, Scikit-learn), SQL (PostgreSQL, T-SQL), R (Ggplot2)</p>\n            <p style='font-size: 0.8rem; margin: 10px 0;'><strong>Visualization:</strong> Power BI, Tableau, Matplotlib, D3.js, Seaborn</p>\n            <p style='font-size: 0.8rem; margin: 10px 0;'><strong>Database/Cloud:</strong> Snowflake, BigQuery, AWS Redshift, MongoDB</p>\n            <p style='font-size: 0.8rem; margin: 10px 0;'><strong>Tools:</strong> Excel (VBA/Macros), Git, Docker, Jupyter, Airflow</p>\n          </div>\n\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 35px; text-transform: uppercase; letter-spacing: 1px;'>EDUCATION</h3>\n          <div style='margin-top: 15px;'>\n            <p style='font-size: 0.85rem; margin: 0; font-weight: bold;'>B.S. in Statistics</p>\n            <p style='font-size: 0.8rem; color: #64748b; margin: 0;'>University of Illinois</p>\n            <p style='font-size: 0.75rem; color: #94a3b8;'>Graduated 2017 | Cum Laude</p>\n          </div>\n\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 35px; text-transform: uppercase; letter-spacing: 1px;'>CERTIFICATIONS</h3>\n          <ul style='list-style: none; padding: 0; font-size: 0.8rem; color: #475569; line-height: 1.8;'>\n            <li>🏆 Google Data Analytics Professional</li>\n            <li>🏆 Microsoft Certified: Power BI Data Analyst</li>\n            <li>🏆 AWS Certified Data Analytics</li>\n            <li>🏆 Tableau Desktop Specialist</li>\n          </ul>\n\n          <h3 style='font-size: 1rem; color: #1e293b; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 35px; text-transform: uppercase; letter-spacing: 1px;'>PUBLICATIONS</h3>\n          <div style='margin-top: 15px;'>\n            <p style='font-size: 0.8rem; color: #475569; line-height: 1.4;'><em>\"The Future of Predictive Retail\"</em><br/>Data Insights Monthly, Oct 2024</p>\n          </div>\n        </aside>\n      </div>\n\n      <footer style='margin-top: 50px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 0.75rem;'>\n        Reference upon request • Last Updated: Jan 2026\n      </footer>\n    </div>"
  },
  {
    id: "resume_james",
    title: "James Johnson",
    category: "Career & Hiring",
    thumbnail: "james",
    templateId: "xyz",
    content: `
      <div style="max-width: 800px; margin: auto; padding: 40px; font-family: 'Inter', sans-serif; color: #333; background: #f0fffe; border: 1px solid #e2e8f0; min-height: 1050px; display: flex; flex-direction: column;">
        
        <header style="display: flex; justify-content: space-between; border-bottom: 3px solid #00ced1; padding-bottom: 20px; margin-bottom: 30px;">
          <div>
            <h1 style="font-size: 32px; margin: 0; font-weight: 800;">James Johnson</h1>
            <p style="font-size: 14px; color: #00ced1; font-weight: 600; margin-top: 5px; text-transform: uppercase; letter-spacing: 1px;">Senior Marketing Manager</p>
          </div>
          <div style="text-align: right; font-size: 12px; color: #666;">
            <p style="margin: 0;">NY, New York</p>
            <p style="margin: 3px 0;">james.mkt@example.com</p>
            <p style="margin: 0;">linkedin.com/in/jamesj</p>
            <p style="margin: 3px 0;">+1 (212) 555-0134</p>
          </div>
        </header>

        <section style="margin-bottom: 30px;">
          <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin-bottom: 10px; text-transform: uppercase;">Professional Profile</h3>
          <p style="font-size: 13px; line-height: 1.6; color: #444; margin: 0; text-align: justify;">
            Results-driven marketing leader with 8+ years of experience in digital growth and brand development. Proven track record in managing $2M+ annual budgets and increasing online revenue by up to 46% through data-driven strategies. Expert in leading cross-functional teams to deliver high-impact omnichannel campaigns that scale customer acquisition and retention.
          </p>
        </section>

        <section style="margin-bottom: 30px;">
          <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin-bottom: 15px; text-transform: uppercase;">Experience</h3>
          
          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <strong>Senior Marketing Manager | BrightWave Corp</strong>
              <span style="color: #666;">2020 – Present</span>
            </div>
            <ul style="font-size: 12px; color: #555; margin-top: 8px; padding-left: 15px; line-height: 1.7;">
              <li>Led digital transformation initiatives that increased online revenue by 46% within the first 18 months.</li>
              <li>Managed a $2.5M annual marketing budget across paid media, SEO, and brand partnerships.</li>
              <li>Built a performance marketing pod that improved overall ROAS by 38% year-over-year.</li>
              <li>Implemented CRM automation workflows that improved customer retention rates by 22%.</li>
            </ul>
          </div>

          <div style="margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <strong>Brand Marketing Lead | Elevate Media</strong>
              <span style="color: #666;">2018 – 2020</span>
            </div>
            <ul style="font-size: 12px; color: #555; margin-top: 8px; padding-left: 15px; line-height: 1.7;">
              <li>Repositioned brand identity for mid-market clients, leading to a 110% increase in social engagement.</li>
              <li>Directly managed influencer partnership programs that generated $1.2M in attributable sales.</li>
              <li>Orchestrated the launch of three core product lines across North American and European markets.</li>
            </ul>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 13px;">
              <strong>Marketing Strategist | Nova Growth Agency</strong>
              <span style="color: #666;">2016 – 2018</span>
            </div>
            <ul style="font-size: 12px; color: #555; margin-top: 8px; padding-left: 15px; line-height: 1.7;">
              <li>Developed omnichannel growth frameworks for 30+ enterprise clients, boosting lead gen by 41%.</li>
              <li>Introduced advanced analytics dashboards to provide real-time visibility into campaign attribution.</li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 30px;">
          <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin-bottom: 15px; text-transform: uppercase;">Key Projects</h3>
          <div style="margin-bottom: 15px;">
            <p style="font-size: 13px; margin: 0; font-weight: 600;">Global Rebranding Initiative (2023)</p>
            <p style="font-size: 12px; color: #555; margin-top: 3px;">Directed a full-scale visual and voice overhaul for BrightWave, resulting in a 15% lift in organic search traffic and 3 industry award nominations.</p>
          </div>
          <div>
            <p style="font-size: 13px; margin: 0; font-weight: 600;">Automated Lead Scoring System</p>
            <p style="font-size: 12px; color: #555; margin-top: 3px;">Designed a custom scoring model using HubSpot and Salesforce, reducing sales response time by 60% and increasing MQL-to-SQL conversion by 18%.</p>
          </div>
        </section>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 30px;">
          <section>
            <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin-bottom: 10px; text-transform: uppercase;">Education</h3>
            <p style="font-size: 12px; margin: 0;"><strong>MBA - Marketing Strategy</strong></p>
            <p style="font-size: 12px; color: #666; margin: 2px 0;">UC Berkeley | 2014 – 2016</p>
            <div style="margin-top: 10px;">
              <p style="font-size: 12px; margin: 0;"><strong>B.S. Business Administration</strong></p>
              <p style="font-size: 12px; color: #666; margin: 2px 0;">New York University | 2010 – 2014</p>
            </div>
          </section>

          <section>
            <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin-bottom: 10px; text-transform: uppercase;">Core Skills</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 5px; font-size: 11px;">
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">SEO/SEM</span>
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">CRM Analytics</span>
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">Growth Strategy</span>
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">Budgeting</span>
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">Paid Social</span>
              <span style="background: #e0fbfc; padding: 4px 10px; border-radius: 4px; border: 1px solid #00ced1;">Team Leadership</span>
            </div>
          </section>
        </div>

        <section style="margin-top: auto; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-size: 14px; font-weight: 700; color: #00ced1; margin: 0; text-transform: uppercase;">Honors & Awards</h3>
            <p style="font-size: 11px; color: #999;">References available upon request</p>
          </div>
          <p style="font-size: 12px; color: #555; margin-top: 10px;">
            🏆 <strong>Top Growth Campaign (2023)</strong> - Marketing Excellence Awards <br/>
            🏆 <strong>Digital Innovation Leadership</strong> - BrightWave Annual Summit
          </p>
        </section>
      </div>
    `
  },
  {
    "id": "resume_pm_premium_executive",
    "title": "PM - Premium Executive",
    "category": "Career & Hiring",
    "thumbnail": Premium_Executive,
    // "content": "<div style='background-color: #ffffff; color: #334155; padding: 40px; font-family: \"Garamond\", serif; line-height: 1.4; max-width: 900px; margin: auto; border: 1px solid #d1d5db; box-shadow: 0 10px 25px rgba(0,0,0,0.05);'>\n  \n  \n  <header style='text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 20px; margin-bottom: 25px;'>\n    <h1 style='font-size: 3rem; margin: 0; color: #1e3a8a; font-weight: 500; letter-spacing: 1px;'>Morgan Vance</h1>\n    <p style='font-family: \"Arial\", sans-serif; font-size: 1rem; color: #64748b; text-transform: uppercase; letter-spacing: 4px; margin: 10px 0;'>Principal Product Manager | SaaS & Enterprise Solutions</p>\n    <div style='font-family: \"Arial\", sans-serif; font-size: 0.8rem; display: flex; justify-content: center; gap: 20px; color: #475569;'>\n      <span>📍 San Francisco, CA</span>\n      <span>✉️ m.vance@executive-leads.com</span>\n      <span>📞 +1 (415) 555-0199</span>\n      <span>🔗 linkedin.com/in/morganvance</span>\n    </div>\n  </header>\n\n  \n  <div style='display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; background: #f8fafc; padding: 15px; border-radius: 4px; text-align: center;'>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>$12M+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>P&L Managed</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>25%</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>Churn Reduction</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>500k+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>User MAU Growth</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>15+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>Cross-Functional Squads</span></div>\n  </div>\n\n  <div style='display: grid; grid-template-columns: 1fr 2.2fr; gap: 35px;'>\n    \n    <aside>\n      <section style='margin-bottom: 25px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Core Expertise</h3>\n        <ul style='list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;'>\n          <li>• Product Lifecycle (0 to 1)</li>\n          <li>• Market Segmentation & GTM</li>\n          <li>• High-Fidelity Prototyping</li>\n          <li>• OKR & KPI Management</li>\n          <li>• Behavioral Data Analysis</li>\n          <li>• Stakeholder Evangelism</li>\n        </ul>\n      </section>\n\n      <section style='margin-bottom: 25px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Technical Stack</h3>\n        <p style='font-size: 0.8rem; color: #475569;'><strong>Analytics:</strong> Amplitude, Mixpanel, Google Analytics 4, SQL</p>\n        <p style='font-size: 0.8rem; color: #475569;'><strong>Design/Dev:</strong> Figma, Jira, Confluence, Postman, Python</p>\n      </section>\n\n      <section>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Education</h3>\n        <p style='font-size: 0.85rem; margin-bottom: 5px;'><strong>MBA, Technology Mgmt</strong><br>Stanford University | 2016</p>\n        <p style='font-size: 0.85rem;'><strong>BS, Computer Science</strong><br>Georgia Tech | 2012</p>\n      </section>\n    </aside>\n\n    \n    <main>\n      <section style='margin-bottom: 30px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Professional Narrative</h3>\n        <p style='font-size: 0.95rem; color: #334155;'>Strategic Product Leader with a decade of experience driving digital transformation in the SaaS space. Expert at aligning technical capabilities with business objectives to deliver user-centric products that scale.</p>\n      </section>\n\n      <section>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Selected Leadership</h3>\n        \n        <div style='margin-bottom: 20px;'>\n          <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n            <strong style='font-size: 1.1rem; color: #0f172a;'>Nexus Cloud Solutions</strong>\n            <span style='font-size: 0.8rem; color: #64748b;'>2020 — PRESENT</span>\n          </div>\n          <em style='font-size: 0.9rem; color: #1e3a8a;'>Principal Product Manager</em>\n          <ul style='padding-left: 18px; font-size: 0.9rem; color: #475569; margin-top: 8px;'>\n            <li>Spearheaded v3.0 platform overhaul, resulting in 40% reduction in customer onboarding friction and 3x increase in API integrations.</li>\n            <li>Negotiated roadmap priorities with C-suite stakeholders, aligning a $12M R&D budget with 2-year growth targets.</li>\n            <li>Mentored a team of 4 Senior PMs, instituting a data-driven PRD framework that accelerated ship-cycles by 22%.</li>\n          </ul>\n        </div>\n\n        <div style='margin-bottom: 20px;'>\n          <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n            <strong style='font-size: 1.1rem; color: #0f172a;'>Streamline App</strong>\n            <span style='font-size: 0.8rem; color: #64748b;'>2016 — 2020</span>\n          </div>\n          <em style='font-size: 0.9rem; color: #1e3a8a;'>Senior Product Manager</em>\n          <ul style='padding-left: 18px; font-size: 0.9rem; color: #475569; margin-top: 8px;'>\n            <li>Directed the \"Enterprise Mobility\" initiative, capturing $4.5M in ARR within the first fiscal year.</li>\n            <li>Utilized Amplitude for deep-funnel analysis, identifying and fixing drop-off points that reduced churn by 18%.</li>\n            <li>Consolidated legacy user feedback into a centralized roadmap, improving Net Promoter Score (NPS) from 42 to 68.</li>\n          </ul>\n        </div>\n      </section>\n    </main>\n  </div>\n\n  <footer style='margin-top: 40px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center; font-family: \"Arial\", sans-serif; font-size: 0.7rem; color: #94a3b8; letter-spacing: 2px;'>\n    BUILDING THE FUTURE OF SCALABLE SYSTEMS\n  </footer>\n</div>"
    "content": "<div style='background-color: #ffffff; color: #334155; padding: 40px; font-family: \"Garamond\", serif; line-height: 1.4; max-width: 900px; margin: auto; border: 1px solid #d1d5db; box-shadow: 0 10px 25px rgba(0,0,0,0.05);'>\n  \n  <header style='text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 20px; margin-bottom: 25px;'>\n    <h1 style='font-size: 3rem; margin: 0; color: #1e3a8a; font-weight: 500; letter-spacing: 1px;'>Morgan Vance</h1>\n    <p style='font-family: \"Arial\", sans-serif; font-size: 1rem; color: #64748b; text-transform: uppercase; letter-spacing: 4px; margin: 10px 0;'>Principal Product Manager | SaaS & Enterprise Solutions</p>\n    <div style='font-family: \"Arial\", sans-serif; font-size: 0.8rem; display: flex; justify-content: center; gap: 20px; color: #475569;'>\n      <span>📍 San Francisco, CA</span>\n      <span>✉️ m.vance@executive-leads.com</span>\n      <span>📞 +1 (415) 555-0199</span>\n      <span>🔗 linkedin.com/in/morganvance</span>\n    </div>\n  </header>\n\n  <div style='display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 30px; border: 1px solid #e5e7eb; background: #f8fafc; padding: 15px; border-radius: 4px; text-align: center;'>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>$12M+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>P&L Managed</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>25%</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>Churn Reduction</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>500k+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>User MAU Growth</span></div>\n    <div><strong style='display: block; font-size: 1.2rem; color: #1e3a8a;'>15+</strong><span style='font-size: 0.65rem; text-transform: uppercase; color: #64748b;'>Cross-Functional Squads</span></div>\n  </div>\n\n  <div style='display: grid; grid-template-columns: 1fr 2.2fr; gap: 35px;'>\n    <aside>\n      <section style='margin-bottom: 25px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Core Expertise</h3>\n        <ul style='list-style: none; padding: 0; font-size: 0.85rem; line-height: 2;'>\n          <li>• Product Lifecycle (0 to 1)</li>\n          <li>• Market Segmentation & GTM</li>\n          <li>• High-Fidelity Prototyping</li>\n          <li>• OKR & KPI Management</li>\n          <li>• Behavioral Data Analysis</li>\n          <li>• Stakeholder Evangelism</li>\n        </ul>\n      </section>\n\n      <section style='margin-bottom: 25px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Technical Stack</h3>\n        <p style='font-size: 0.8rem; color: #475569;'><strong>Analytics:</strong> Amplitude, Mixpanel, Google Analytics 4, SQL</p>\n        <p style='font-size: 0.8rem; color: #475569;'><strong>Design/Dev:</strong> Figma, Jira, Confluence, Postman, Python</p>\n      </section>\n\n      <section>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Education</h3>\n        <p style='font-size: 0.85rem; margin-bottom: 5px;'><strong>MBA, Technology Mgmt</strong><br>Stanford University | 2016</p>\n        <p style='font-size: 0.85rem;'><strong>BS, Computer Science</strong><br>Georgia Tech | 2012</p>\n      </section>\n    </aside>\n\n    <main>\n      <section style='margin-bottom: 30px;'>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Professional Narrative</h3>\n        <p style='font-size: 0.95rem; color: #334155;'>Strategic Product Leader with a decade of experience driving digital transformation in the SaaS space. Expert at aligning technical capabilities with business objectives to deliver user-centric products that scale. Known for building high-trust executive partnerships, translating market signals into product vision, and consistently delivering platforms that outperform growth targets.</p>\n      </section>\n\n      <section>\n        <h3 style='font-family: \"Arial\", sans-serif; font-size: 0.85rem; border-bottom: 1px solid #1e3a8a; padding-bottom: 5px; color: #1e3a8a; text-transform: uppercase;'>Selected Leadership</h3>\n        \n        <div style='margin-bottom: 20px;'>\n          <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n            <strong style='font-size: 1.1rem; color: #0f172a;'>Nexus Cloud Solutions</strong>\n            <span style='font-size: 0.8rem; color: #64748b;'>2020 — PRESENT</span>\n          </div>\n          <em style='font-size: 0.9rem; color: #1e3a8a;'>Principal Product Manager</em>\n          <ul style='padding-left: 18px; font-size: 0.9rem; color: #475569; margin-top: 8px;'>\n            <li>Spearheaded v3.0 platform overhaul, resulting in 40% reduction in customer onboarding friction and 3x increase in API integrations.</li>\n            <li>Negotiated roadmap priorities with C-suite stakeholders, aligning a $12M R&D budget with 2-year growth targets.</li>\n            <li>Mentored a team of 4 Senior PMs, instituting a data-driven PRD framework that accelerated ship-cycles by 22%.</li>\n            <li>Launched enterprise analytics suite adopted by 70+ Fortune clients within six months.</li>\n            <li>Established quarterly customer advisory boards driving roadmap precision and retention.</li>\n          </ul>\n        </div>\n\n        <div style='margin-bottom: 20px;'>\n          <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n            <strong style='font-size: 1.1rem; color: #0f172a;'>Streamline App</strong>\n            <span style='font-size: 0.8rem; color: #64748b;'>2016 — 2020</span>\n          </div>\n          <em style='font-size: 0.9rem; color: #1e3a8a;'>Senior Product Manager</em>\n          <ul style='padding-left: 18px; font-size: 0.9rem; color: #475569; margin-top: 8px;'>\n            <li>Directed the \"Enterprise Mobility\" initiative, capturing $4.5M in ARR within the first fiscal year.</li>\n            <li>Utilized Amplitude for deep-funnel analysis, identifying and fixing drop-off points that reduced churn by 18%.</li>\n            <li>Consolidated legacy user feedback into a centralized roadmap, improving Net Promoter Score (NPS) from 42 to 68.</li>\n            <li>Scaled product operations across three global regions.</li>\n            <li>Introduced experimentation frameworks increasing feature adoption rates.</li>\n          </ul>\n        </div>\n      </section>\n    </main>\n  </div>\n\n  <footer style='margin-top: 40px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center; font-family: \"Arial\", sans-serif; font-size: 0.7rem; color: #94a3b8; letter-spacing: 2px;'>\n    BUILDING THE FUTURE OF SCALABLE SYSTEMS\n  </footer>\n</div>"
  },


  {
    "id": "resume_ui_ux_designer_ultra_modern",
    "title": "UI Designer - Dark Premium",
    "category": "Career & Hiring",
    "content": "<div style='background-color: #0f172a; color: #f8fafc; padding: 0; font-family: \"Inter\", sans-serif; line-height: 1.6; max-width: 850px; margin: auto; border: 1px solid #1e293b; display: flex; min-height: 1080px;'>\n\n      \n      <div style='width: 280px; background: #1e293b; padding: 60px 40px; display: flex; flex-direction: column;'>\n        <div style='width: 80px; height: 80px; background: linear-gradient(135deg, #7c3aed, #ec4899); border-radius: 20px; margin-bottom: 30px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 2rem;'>CA</div>\n        \n        <h1 style='font-size: 2.2rem; margin: 0; font-weight: 800; line-height: 1; letter-spacing: -1px;'>Casey<br/>Aris</h1>\n        <p style='font-size: 0.9rem; color: #94a3b8; margin-top: 15px; text-transform: uppercase; letter-spacing: 2px;'>UI/UX Architect</p>\n\n        <div style='margin-top: 60px;'>\n          <h3 style='font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: #7c3aed; margin-bottom: 20px;'>Connect</h3>\n          <p style='font-size: 0.85rem; margin: 10px 0; color: #cbd5e1;'>casey.design@visuals.io</p>\n          <p style='font-size: 0.85rem; margin: 10px 0; color: #cbd5e1;'>behance.net/caseyaris</p>\n          <p style='font-size: 0.85rem; margin: 10px 0; color: #cbd5e1;'>Brooklyn, NY</p>\n        </div>\n\n        <div style='margin-top: 50px;'>\n          <h3 style='font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: #7c3aed; margin-bottom: 20px;'>Expertise</h3>\n          <div style='display: flex; flex-wrap: wrap; gap: 8px;'>\n            <span style='border: 1px solid #334155; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; background: rgba(255,255,255,0.05);'>Figma</span>\n            <span style='border: 1px solid #334155; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; background: rgba(255,255,255,0.05);'>Three.js</span>\n            <span style='border: 1px solid #334155; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; background: rgba(255,255,255,0.05);'>Design Ops</span>\n            <span style='border: 1px solid #334155; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; background: rgba(255,255,255,0.05);'>Prototyping</span>\n            <span style='border: 1px solid #334155; padding: 4px 10px; border-radius: 4px; font-size: 0.7rem; background: rgba(255,255,255,0.05);'>React-UI</span>\n          </div>\n        </div>\n\n        <div style='margin-top: auto; padding-top: 40px;'>\n          <p style='font-size: 0.7rem; color: #64748b; line-height: 1.4;'>\"Design is not just what it looks like; it's how it works.\"</p>\n        </div>\n      </div>\n\n      \n      <div style='flex: 1; padding: 60px; background: #0f172a;'>\n        \n        <section style='margin-bottom: 50px;'>\n          <h2 style='font-size: 0.8rem; text-transform: uppercase; letter-spacing: 4px; color: #94a3b8; margin-bottom: 20px;'>01. The Mission</h2>\n          <p style='font-size: 1.1rem; color: #cbd5e1; font-weight: 300; line-height: 1.8;'>\n            Visual storyteller with 7+ years of experience crafting intuitive digital experiences. I specialize in <span style='color: #fff; font-weight: 600;'>scalable design systems</span> and pixel-perfect interfaces that bridge the gap between user needs and business goals.\n          </p>\n        </section>\n\n        <section style='margin-bottom: 50px;'>\n          <h2 style='font-size: 0.8rem; text-transform: uppercase; letter-spacing: 4px; color: #94a3b8; margin-bottom: 30px;'>02. Professional Journey</h2>\n          \n          <div style='margin-bottom: 40px; position: relative; padding-left: 20px; border-left: 2px solid #334155;'>\n            <div style='position: absolute; left: -6px; top: 0; width: 10px; height: 10px; background: #7c3aed; border-radius: 50%;'></div>\n            <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n              <h4 style='margin: 0; font-size: 1.2rem; color: #fff;'>Lead UI Designer @ Aura Fintech</h4>\n              <span style='font-size: 0.75rem; color: #64748b;'>2021 — PRESENT</span>\n            </div>\n            <ul style='font-size: 0.9rem; color: #94a3b8; padding-left: 18px; margin-top: 15px;'>\n              <li>Redesigned core mobile application architecture, resulting in a 25% spike in DAU and a 4.8 App Store rating.</li>\n              <li>Led a team of 4 designers to establish a multi-platform Design System, reducing dev handoff friction by 40%.</li>\n              <li>Pioneered the integration of motion-based micro-interactions to increase transaction completion rates by 12%.</li>\n            </ul>\n          </div>\n\n          <div style='margin-bottom: 40px; position: relative; padding-left: 20px; border-left: 2px solid #334155;'>\n            <div style='display: flex; justify-content: space-between; align-items: baseline;'>\n              <h4 style='margin: 0; font-size: 1.2rem; color: #fff;'>Senior UI Designer @ Creative Pulse</h4>\n              <span style='font-size: 0.75rem; color: #64748b;'>2018 — 2021</span>\n            </div>\n            <ul style='font-size: 0.9rem; color: #94a3b8; padding-left: 18px; margin-top: 15px;'>\n              <li>Executed high-fidelity visual direction for 15+ Fortune 500 clients in the SaaS and Fintech space.</li>\n              <li>Won the 2020 Webby for \"Best Financial Service UI\" for a project involving real-time crypto-tracking assets.</li>\n            </ul>\n          </div>\n        </section>\n\n        <section style='margin-bottom: 40px;'>\n          <h2 style='font-size: 0.8rem; text-transform: uppercase; letter-spacing: 4px; color: #94a3b8; margin-bottom: 30px;'>03. Selected Works</h2>\n          <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 20px;'>\n            <div style='background: #1e293b; padding: 20px; border-radius: 12px;'>\n              <p style='font-size: 0.8rem; font-weight: 700; color: #fff; margin: 0;'>Project Zenith</p>\n              <p style='font-size: 0.7rem; color: #64748b; margin-top: 5px;'>AI-Powered Dashboard Redesign</p>\n            </div>\n            <div style='background: #1e293b; padding: 20px; border-radius: 12px;'>\n              <p style='font-size: 0.8rem; font-weight: 700; color: #fff; margin: 0;'>Ether-Flow</p>\n              <p style='font-size: 0.7rem; color: #64748b; margin-top: 5px;'>Crypto Wallet Web Interface</p>\n            </div>\n          </div>\n        </section>\n\n        <footer style='margin-top: 60px; border-top: 1px solid #1e293b; padding-top: 20px; display: flex; justify-content: space-between;'>\n          <p style='font-size: 0.7rem; color: #475569;'>© 2026 CA Design Studio</p>\n          <p style='font-size: 0.7rem; color: #475569;'>Built with Precision</p>\n        </footer>\n      </div>\n    </div>"
  },
  {
    id: "cover_letter_executive_modern",
    title: "Executive Cover Letter",
    category: "Career & Hiring",
    thumbnail: "/templates/job/cover-letter-modern.png",
    content: `
<div style="max-width: 850px; margin: auto; padding: 70px 60px; font-family: 'Inter', -apple-system, sans-serif; line-height: 1.8; color: #334155; background: #ffffff; border: 1px solid #e2e8f0; min-height: 1050px; box-sizing: border-box;">
  
  <header style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 60px; border-bottom: 1px solid #f1f5f9; padding-bottom: 30px;">
    <div>
      <h1 style="margin: 0; color: #0f172a; font-size: 32px; font-weight: 800; letter-spacing: -1px; text-transform: uppercase;">Alex Rivera</h1>
      <p style="margin: 5px 0 0 0; color: #6366f1; font-weight: 600; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">Operations & Project Leadership</p>
    </div>
    <div style="text-align: right; font-size: 12px; color: #64748b; line-height: 1.5;">
      <p style="margin: 0;"><strong>Location:</strong> San Francisco, CA</p>
      <p style="margin: 0;"><strong>Phone:</strong> 555-0123</p>
      <p style="margin: 0;"><strong>Email:</strong> a.rivera@email.com</p>
      <p style="margin: 0;"><strong>LinkedIn:</strong> linkedin.com/in/arivera</p>
    </div>
  </header>

  <div style="display: grid; grid-template-columns: 1fr 3fr; gap: 40px;">
    
    <aside style="font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">
      <div style="margin-bottom: 30px;">
        <p style="font-weight: 800; color: #475569; margin-bottom: 10px;">Date</p>
        <p>January 29, 2026</p>
      </div>
      <div style="margin-bottom: 30px;">
        <p style="font-weight: 800; color: #475569; margin-bottom: 10px;">To</p>
        <p style="color: #64748b;">
          <strong>Hiring Manager</strong><br/>
          Global Tech Solutions<br/>
          123 Innovation Drive<br/>
          Palo Alto, CA
        </p>
      </div>
    </aside>

    <main style="font-size: 14px; color: #334155;">
      <p style="margin-top: 0; font-weight: 700; color: #0f172a; font-size: 16px;">Dear Hiring Manager,</p>

      <p>
        I am writing to express my enthusiastic interest in the <strong>Project Coordinator</strong> position at Global Tech Solutions. Having followed your company’s recent advancements in sustainable infrastructure, I am deeply impressed by your commitment to merging high-level technology with environmental responsibility. With a background in cross-functional team leadership and a history of optimizing complex operational workflows, I am eager to contribute to your upcoming initiatives.
      </p>

      <p>
        In my previous role at Catalyst Operations, I successfully spearheaded a digital transformation project that streamlined internal communication for a team of 150+ employees. By implementing an agile-based tracking system, I was able to <strong>decrease departmental overhead by 15%</strong> and improve project delivery timelines by 22% within the first two quarters. I specialize in identifying bottlenecks that others overlook and converting them into opportunities for measurable growth.
      </p>

      <p>
        My approach to project coordination is rooted in data-driven decision-making and empathetic leadership. I believe that the success of any technical requirement depends on how well it aligns with human business objectives. Throughout my career, I have prided myself on being the bridge between stakeholders and execution teams, ensuring that transparency and efficiency remain at the forefront of every project lifecycle.
      </p>

      <p>
        I am particularly drawn to Global Tech Solutions because of your "Innovation First" philosophy. I am confident that my unique blend of organizational rigor and industry insight will allow me to hit the ground running and add immediate value to your project management office. 
      </p>

      <p>
        Thank you for your time and consideration of my application. I have attached my resume for your review and look forward to the possibility of discussing how my experience can support Global Tech Solutions' vision for the upcoming fiscal year.
      </p>

      <div style="margin-top: 50px;">
        <p style="margin-bottom: 5px; color: #64748b;">Sincerely,</p>
        <p style="margin: 0; font-size: 20px; font-weight: 800; color: #0f172a; font-family: 'Times New Roman', serif;">Alex Rivera</p>
      </div>
    </main>
  </div>

  <footer style="margin-top: 80px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center;">
    <p style="font-size: 10px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 2px;">Confidential Application Documents</p>
  </footer>
</div>
`
  },
  {
    "id": "resume_sarah_johnson_modern",
    "title": "Editorial Executive Resume",
    "category": "Career & Hiring",
    "thumbnail": "resume_sarah_johnson_modern",
    "content":
      `<div style="max-width:880px;margin:auto;padding:32px 80px;font-family:Arial,sans-serif;background:#f5f5f5;color:#333;">

  <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:10px;text-transform:uppercase;letter-spacing:1px;">
    <span>linkedin.com/in/emilyanderson</span>
    <span>415-555-0199</span>
    <span>emily.design@example.com</span>
  </div>

  <div style="display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:20px;border-bottom:1px solid #ccc;padding-bottom:10px;">
    <span>[EMILY ANDERSON]</span>
    <span>[SENIOR UX DESIGNER]</span>
    <span>[SAN FRANCISCO, CA]</span>
  </div>

  <div style="display:grid;grid-template-columns:1.8fr 1.2fr;gap:40px;">

    <div>
      <h1 style="font-size:4.5rem;margin:0;letter-spacing:-4px;line-height:0.9;">RESUME</h1>
      <p style="color:#666;margin:10px 0;font-weight:bold;letter-spacing:2px;">SENIOR UX DESIGNER</p>
      <p style="color:#999;margin:0;font-size:12px;">EST. 2018 — PROFESSIONAL PORTFOLIO</p>

      <p style="margin:25px 0;line-height:1.6;text-align:justify;font-size:14px;color:#444;">
        Innovative UX Designer with 6+ years of experience crafting intuitive and accessible digital
        products. Proven success improving user retention by 25% through research-driven design
        iterations and scalable design systems. Expert at bridging the gap between aesthetic vision 
        and technical implementation while advocating for the end-user at every stage.
      </p>

      <h2 style="margin-top:40px;text-transform:uppercase;font-size:18px;border-left:4px solid #333;padding-left:10px;">Work Experience</h2>

      <div style="margin-bottom:25px;position:relative;">
        <div style="float:right;color:#666;font-size:12px;font-weight:bold;">2021–PRESENT</div>
        <strong>TECHFLOW SOLUTIONS</strong><br/>
        <em style="color:#00ced1;">→ Lead Product Designer</em>
        <p style="font-size:13px;line-height:1.5;margin-top:8px;">
          Architected a comprehensive B2B SaaS redesign that reduced onboarding friction by 40%. 
          Managed a cross-functional team of 4 designers and established a company-wide 
          Atomic Design system that improved development velocity by 30%.
        </p>
      </div>

      <div style="margin-bottom:25px;">
        <div style="float:right;color:#666;font-size:12px;font-weight:bold;">2018–2021</div>
        <strong>CREATIVE PULSE AGENCY</strong><br/>
        <em style="color:#00ced1;">→ UX Designer</em>
        <p style="font-size:13px;line-height:1.5;margin-top:8px;">
          Delivered high-fidelity mobile experiences for premier fintech clients. Orchestrated 
          over 50 usability testing sessions and translated findings into actionable wireframes, 
          leading to a 15% increase in mobile app engagement scores.
        </p>
      </div>

      <h2 style="margin-top:40px;text-transform:uppercase;font-size:18px;border-left:4px solid #333;padding-left:10px;">Achievements</h2>
      <ul style="font-size:13px;line-height:1.8;padding-left:18px;color:#444;">
        <li><strong>Awwwards 2020:</strong> Mobile Site of the Day for "EcoRetail" Concept.</li>
        <li><strong>Accessibility:</strong> Successfully led WCAG 2.1 compliance audit for TechFlow.</li>
        <li><strong>Mentorship:</strong> Mentored 3 junior designers into mid-level roles.</li>
      </ul>

    </div>

    <div>
      <div style="width:100%;max-width:240px;height:300px;margin-left:auto;overflow:hidden;border:1px solid #000;filter:grayscale(100%);">
        <img src="https://via.placeholder.com/240x300" alt="Emily Anderson" style="width:100%;height:100%;object-fit:cover;" />
      </div>

      <h2 style="margin-top:40px;text-transform:uppercase;font-size:16px;">Education</h2>
      <p style="font-size:13px;margin-bottom:5px;">
        <strong>GEORGIA INSTITUTE OF TECHNOLOGY</strong><br/>
        → B.S. Human-Computer Interaction<br/>
        <span style="color:#888;">Class of 2018</span>
      </p>

      <h2 style="margin-top:35px;text-transform:uppercase;font-size:16px;">Technical Skills</h2>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
        <span style="background:#333;color:white;padding:5px 10px;font-size:11px;text-transform:uppercase;">UX Design</span>
        <span style="border:1px solid #333;padding:4px 9px;font-size:11px;text-transform:uppercase;">Figma</span>
        <span style="border:1px solid #333;padding:4px 9px;font-size:11px;text-transform:uppercase;">Accessibility</span>
        <span style="background:#333;color:white;padding:5px 10px;font-size:11px;text-transform:uppercase;">Research</span>
        <span style="border:1px solid #333;padding:4px 9px;font-size:11px;text-transform:uppercase;">HTML/CSS</span>
        <span style="background:#333;color:white;padding:5px 10px;font-size:11px;text-transform:uppercase;">Systems</span>
        <span style="border:1px solid #333;padding:4px 9px;font-size:11px;text-transform:uppercase;">Prototyping</span>
        <span style="border:1px solid #333;padding:4px 9px;font-size:11px;text-transform:uppercase;">Agile</span>
      </div>

      <h2 style="margin-top:35px;text-transform:uppercase;font-size:16px;">Languages</h2>
      <div style="font-size:13px;margin-top:10px;line-height:2;">
        <div style="display:flex;justify-content:space-between;"><span>English</span> <span>●●●●●</span></div>
        <div style="display:flex;justify-content:space-between;"><span>Spanish</span> <span>●●●●○</span></div>
        <div style="display:flex;justify-content:space-between;"><span>French</span> <span>●●●○○</span></div>
      </div>

      <div style="margin-top:40px;padding:15px;border:1px dashed #999;font-size:12px;color:#666;">
        <strong>NOTE:</strong> Portfolio and case studies available upon request. References available via LinkedIn.
      </div>

    </div>

  </div>

  <div style="text-align:center;font-size:3rem;margin-top:50px;letter-spacing:5px;font-weight:bold;color:#e0e0e0;border-top:1px solid #eee;padding-top:20px;">
    EMILY ANDERSON
  </div>

</div>`
  }
];
