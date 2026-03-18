export const businessTemplates = [
  {
    id: "business_proposal",
    title: "Business Proposal",
    category: "Professional Messaging",
    thumbnail: "/templates/business/proposal.png",
    content: `
    <div style="max-width: 800px; margin: auto; padding: 50px; font-family: 'Helvetica', 'Arial', sans-serif; color: #2d3436; line-height: 1.6; background: #fff; border-top: 10px solid #0984e3;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 60px;">
        <div>
          <h1 style="font-size: 36px; color: #0984e3; margin: 0; text-transform: uppercase; letter-spacing: 2px;">Strategic Solution Proposal</h1>
          <p style="font-size: 18px; color: #636e72;">Project Reference: #ST-2026-04</p>
        </div>
        <div style="text-align: right; font-size: 14px; color: #636e72;">
          <strong>Date:</strong> January 29, 2026<br>
          <strong>Validity:</strong> 30 Days
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 50px; background: #f9f9f9; padding: 30px; border-radius: 8px;">
        <div>
          <h4 style="margin: 0; color: #0984e3; text-transform: uppercase; font-size: 12px;">Prepared for</h4>
          <p style="font-size: 16px; margin: 5px 0;"><strong>Global Nexus Industries</strong><br>Attn: Marcus Sterling<br>Chief Technology Officer</p>
        </div>
        <div>
          <h4 style="margin: 0; color: #0984e3; text-transform: uppercase; font-size: 12px;">Prepared by</h4>
          <p style="font-size: 16px; margin: 5px 0;"><strong>Innovate Consulting Group</strong><br>Lead: Sarah Jenkins<br>solutions@innovate.com</p>
        </div>
      </div>

      <h3 style="border-bottom: 2px solid #dfe6e9; padding-bottom: 10px; color: #2d3436;">1. Executive Overview</h3>
      <p>Our analysis indicates that Global Nexus Industries currently faces a 14% latency in cross-departmental data synchronization. This proposal outlines a cloud-native architectural migration designed to unify data streams, ensuring 99.9% real-time accuracy and reducing operational overhead by an estimated $200k annually.</p>

      <h3 style="border-bottom: 2px solid #dfe6e9; padding-bottom: 10px; color: #2d3436; margin-top: 40px;">2. Scope of Work</h3>
      <ul style="padding-left: 20px;">
        <li style="margin-bottom: 10px;"><strong>Phase I: Infrastructure Audit</strong> – Comprehensive review of existing legacy systems and API dependencies.</li>
        <li style="margin-bottom: 10px;"><strong>Phase II: Cloud Migration</strong> – Deployment of AWS-based microservices architecture.</li>
        <li style="margin-bottom: 10px;"><strong>Phase III: Training & Support</strong> – 40 hours of staff workshops and 24/7 post-launch monitoring.</li>
      </ul>

      <div style="margin-top: 60px; padding: 20px; border: 1px solid #0984e3; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 18px; font-weight: bold;">Total Investment: $45,000.00</span>
        <button style="background: #0984e3; color: white; padding: 10px 25px; border: none; border-radius: 4px; font-weight: bold;">Accept Proposal</button>
      </div>
    </div>
  `
  },
  {
    id: "sales_pitch",
    title: "Sales Pitch Deck",
    category: "Professional Messaging",
    thumbnail: "/templates/business/sales-pitch.png",
    content: `
    <div style="max-width: 800px; margin: auto; background: #0f172a; color: #f8fafc; font-family: 'Segoe UI', sans-serif; min-height: 1000px;">
      <div style="height: 400px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 60px; display: flex; flex-direction: column; justify-content: center;">
        <h4 style="letter-spacing: 4px; text-transform: uppercase; margin-bottom: 10px; color: #bfdbfe;">Introducing</h4>
        <h1 style="font-size: 64px; margin: 0; line-height: 1; font-weight: 900;">VELOCITY OS</h1>
        <p style="font-size: 20px; margin-top: 20px; color: #dbeafe;">The future of decentralized workflow management.</p>
      </div>

      <div style="padding: 60px;">
        <h2 style="font-size: 32px; color: #3b82f6; margin-bottom: 30px;">The Problem</h2>
        <p style="font-size: 18px; line-height: 1.8; color: #cbd5e1;">Modern teams are losing <strong>3.5 hours per day</strong> switching between disconnected apps. This "context switching tax" is killing your bottom line.</p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 50px;">
          <div style="background: #1e293b; padding: 30px; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">25%</h3>
            <p style="font-size: 14px; color: #94a3b8;">Increase in team productivity within the first 30 days.</p>
          </div>
          <div style="background: #1e293b; padding: 30px; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">Zero</h3>
            <p style="font-size: 14px; color: #94a3b8;">Learning curve. Built on the UI patterns your team already loves.</p>
          </div>
        </div>

        <h2 style="font-size: 32px; color: #3b82f6; margin-top: 60px; margin-bottom: 30px;">Competitive Edge</h2>
        <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 16px;">
          <tr style="border-bottom: 1px solid #334155;">
            <th style="padding: 15px 0; color: #94a3b8;">Feature</th>
            <th style="padding: 15px 0; color: #3b82f6;">Velocity OS</th>
            <th style="padding: 15px 0; color: #94a3b8;">Competitors</th>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 15px 0;">AI Insights</td>
            <td style="padding: 15px 0;">✅ Included</td>
            <td style="padding: 15px 0;">❌ Add-on</td>
          </tr>
          <tr style="border-bottom: 1px solid #334155;">
            <td style="padding: 15px 0;">Offline Sync</td>
            <td style="padding: 15px 0;">✅ Native</td>
            <td style="padding: 15px 0;">⚠️ Partial</td>
          </tr>
        </table>
        
        <div style="margin-top: 60px; text-align: center; border: 2px dashed #334155; padding: 40px;">
           <p style="font-size: 24px; margin-bottom: 20px;">Ready to scale?</p>
           <a href="#" style="display: inline-block; background: #fff; color: #0f172a; padding: 15px 40px; border-radius: 50px; font-weight: bold; text-decoration: none;">Book a Demo</a>
        </div>
      </div>
    </div>
  `
  },
  {
    id: "company_profile",
    title: "Company Profile",
    category: "Professional Messaging",
    thumbnail: "/templates/business/company-profile.png",
    content: `
    <div style="max-width: 850px; margin: auto; font-family: 'Garamond', serif; color: #1a1a1a; background: #fff; border: 1px solid #eee; display: flex; min-height: 1050px;">
      
      <div style="width: 280px; background: #1a1a1a; color: #fff; padding: 60px 40px; display: flex; flex-direction: column;">
        <div style="flex-grow: 1;">
          <div style="width: 60px; height: 60px; background: #eab308; margin-bottom: 30px;"></div>
          <h1 style="font-size: 42px; line-height: 1; margin: 0; font-family: 'Arial'; font-weight: 900;">NEXUS<br/>TECH</h1>
          <p style="font-size: 14px; margin-top: 20px; color: #999; letter-spacing: 2px; text-transform: uppercase;">Est. 2014</p>
          
          <div style="margin-top: 60px;">
            <h4 style="font-family: Arial; font-size: 11px; letter-spacing: 2px; color: #eab308; text-transform: uppercase;">Global Reach</h4>
            <ul style="list-style: none; padding: 0; font-size: 13px; color: #ccc; line-height: 2;">
              <li>• San Francisco (HQ)</li>
              <li>• London Office</li>
              <li>• Singapore Hub</li>
              <li>• Berlin R&D Lab</li>
            </ul>
          </div>

          <div style="margin-top: 40px;">
            <h4 style="font-family: Arial; font-size: 11px; letter-spacing: 2px; color: #eab308; text-transform: uppercase;">Key Clients</h4>
            <p style="font-size: 12px; color: #888; line-height: 1.6;">Serving 15% of the Fortune 100 across Finance, Healthcare, and Logistics.</p>
          </div>
        </div>
        
        <div style="font-size: 13px; line-height: 2; color: #ccc; border-top: 1px solid #333; padding-top: 20px;">
          <p><strong>HQ:</strong> Palo Alto, CA</p>
          <p><strong>Industry:</strong> Enterprise SaaS</p>
          <p><strong>Web:</strong> nexus-tech.io</p>
          <p><strong>Contact:</strong> press@nexus.io</p>
        </div>
      </div>

      <div style="flex: 1; padding: 60px;">
        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #eab308; margin-bottom: 10px;">Our Mission</h2>
        <p style="font-size: 20px; line-height: 1.5; font-style: italic; margin-bottom: 40px;">
          "To bridge the gap between complex data ecosystems and human intuition through seamless, AI-driven interface design."
        </p>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #666; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Company Overview</h2>
        <p style="font-size: 15px; line-height: 1.8; color: #444; text-align: justify; margin-bottom: 30px;">
          Nexus Tech began as a small research lab at Stanford and has evolved into a global leader in data orchestration. We specialize in providing Fortune 500 companies with the tools needed to automate multi-cloud workflows while maintaining rigorous security standards. Our platform currently processes over 14 billion data points daily for clients globally.
        </p>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #666; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Core Services</h2>
        <div style="font-size: 14px; color: #444; margin-bottom: 30px;">
          <p><strong>• Data Harmonization:</strong> Unifying fragmented silos into a single source of truth.</p>
          <p><strong>• Predictive Analytics:</strong> Leveraging ML to forecast infrastructure bottlenecks.</p>
          <p><strong>• Zero-Trust Security:</strong> End-to-end encryption for sensitive cloud migrations.</p>
        </div>

        <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #666; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 20px;">Key Milestones</h2>
        <div style="margin-bottom: 40px;">
          <div style="display: flex; margin-bottom: 15px;">
            <div style="font-weight: bold; width: 60px; color: #eab308;">2024</div>
            <div style="font-size: 14px;">Launched 'Nexus-AI', the world's first autonomous data auditor.</div>
          </div>
          <div style="display: flex; margin-bottom: 15px;">
            <div style="font-weight: bold; width: 60px; color: #eab308;">2021</div>
            <div style="font-size: 14px;">Series C funding reached $120M; expansion into Asian markets.</div>
          </div>
          <div style="display: flex;">
            <div style="font-weight: bold; width: 60px; color: #eab308;">2018</div>
            <div style="font-size: 14px;">Named 'Top Innovator' by the Global Cloud Infrastructure Summit.</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="padding: 20px; background: #f9f9f9;">
            <h4 style="margin: 0; font-family: Arial; font-size: 13px;">INNOVATION</h4>
            <p style="font-size: 12px; color: #666;">We invest 35% of annual revenue back into R&D to stay ahead of the curve.</p>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h4 style="margin: 0; font-family: Arial; font-size: 13px;">INTEGRITY</h4>
            <p style="font-size: 12px; color: #666;">Transparent pricing and open-source contributions are our core DNA.</p>
          </div>
        </div>

        <div style="margin-top: 50px; border-top: 2px solid #1a1a1a; padding-top: 20px; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <h3 style="font-size: 16px; margin: 0;">Sarah L. Jenkins</h3>
            <p style="font-size: 13px; color: #888; margin: 0;">Founding CEO, Nexus Tech</p>
          </div>
          <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Partner With Us →</div>
        </div>
      </div>
    </div>
  `
  },
  {
    id: "meeting_minutes",
    title: "Formal Meeting Minutes",
    category: "Professional Messaging",
    thumbnail: "/templates/business/meeting-minutes.png",
    content: `
    <div style="max-width: 800px; margin: auto; padding: 60px; font-family: 'Inter', sans-serif; color: #334155; background: #ffffff; border: 1px solid #e2e8f0; min-height: 1050px;">
      
      <div style="text-align: right; margin-bottom: 50px;">
        <h1 style="font-size: 28px; color: #1e293b; margin: 0; font-weight: 800;">Meeting Minutes</h1>
        <p style="font-size: 14px; color: #64748b; margin-top: 5px;">Board of Directors | Project: Horizon Alignment</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; font-size: 13px; background: #f8fafc; padding: 20px; border-radius: 8px;">
        <div>
          <p><strong>Date:</strong> January 29, 2026</p>
          <p><strong>Time:</strong> 02:00 PM - 03:30 PM</p>
          <p><strong>Location:</strong> Conference Room C / Secure Virtual Link</p>
        </div>
        <div>
          <p><strong>Facilitator:</strong> David Thorne</p>
          <p><strong>Note Taker:</strong> Elena Rodriguez</p>
          <p><strong>Status:</strong> Approved Document</p>
        </div>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #475569; border-bottom: 2px solid #f1f5f9; padding-bottom: 5px; margin-top: 30px;">1. Call to Order & Attendees</h3>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 10px;">
        The meeting was called to order at 2:05 PM by D. Thorne. 
      </p>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 30px;">
        <strong>Present:</strong> D. Thorne (Chair), E. Rodriguez, M. Chen, S. Gupta, K. Miller (Guest Speaker). <br/>
        <strong>Absent:</strong> L. Baker (Excused).
      </p>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #475569; border-bottom: 2px solid #f1f5f9; padding-bottom: 5px;">2. Approval of Previous Minutes</h3>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 30px;">
        Minutes from the Dec 15, 2025 meeting were reviewed. <strong>Motion:</strong> To approve minutes as written. Moved by S. Gupta, Seconded by M. Chen. <em>Carried unanimously.</em>
      </p>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #475569; border-bottom: 2px solid #f1f5f9; padding-bottom: 5px;">3. Key Discussion Points</h3>
      <div style="font-size: 14px; line-height: 1.6; margin-bottom: 40px; color: #1e293b;">
        <p><strong>3.1 Financial Report:</strong> M. Chen presented the Q4 earnings. Revenue exceeded targets by 12% ($1.2M variance), though cloud hosting costs saw an unexpected 5% spike due to increased latency testing in the EMEA region.</p>
        <p><strong>3.2 Project Horizon Alpha:</strong> The board reviewed the Alpha build. K. Miller reported that user feedback on the security dashboard was overwhelmingly positive. Consensus is to proceed with the private beta launch on Feb 15th with a limit of 500 enterprise users.</p>
        <p><strong>3.3 Infrastructure & Staffing:</strong> Discussion regarding the need for two additional DevOps engineers. S. Gupta noted that without these hires, the Q3 scaling targets might be at risk. David Thorne requested a formal hiring budget by Friday.</p>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #475569; margin-bottom: 15px;">4. Action Items Log</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 40px;">
        <thead>
          <tr style="background: #1e293b; color: #fff; text-align: left;">
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Task Description</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Assigned To</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Priority</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Audit cloud hosting service providers</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">M. Chen</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #dc2626; font-weight: bold;">High</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Feb 05</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Finalize Beta Testing Invitation List</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">S. Gupta</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #2563eb;">Medium</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Feb 02</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Draft DevOps job descriptions</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">E. Rodriguez</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #2563eb;">Medium</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">Feb 01</td>
          </tr>
        </tbody>
      </table>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #475569; border-bottom: 2px solid #f1f5f9; padding-bottom: 5px;">5. Adjournment</h3>
      <p style="font-size: 13px; color: #64748b; margin-bottom: 30px;">
        There being no further business, the meeting was adjourned at 3:32 PM. 
      </p>

      <div style="margin-top: 50px; font-size: 12px; color: #94a3b8; border-top: 2px solid #1e293b; padding-top: 20px;">
        <strong>Next Meeting:</strong> Feb 12, 2026 at 02:00 PM in the Executive Suite. <br/>
        <em>Minutes prepared by Elena Rodriguez on Jan 30, 2026.</em>
      </div>
    </div>
  `
  },
  {
    id: "quarterly_performance_report",
    title: "Quarterly Performance Report",
    category: "Professional Messaging",
    thumbnail: "/templates/business/performance-report.png",
    content: `
    <div style="max-width: 850px; margin: auto; padding: 50px; font-family: 'Segoe UI', Roboto, Helvetica, sans-serif; background: #ffffff; color: #1e293b; border: 1px solid #e2e8f0; min-height: 1050px;">
      
      <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 4px solid #6366f1; padding-bottom: 20px; margin-bottom: 40px;">
        <div>
          <h1 style="font-size: 28px; font-weight: 800; margin: 0; color: #1e293b; text-transform: uppercase; letter-spacing: 1px;">Quarterly Performance</h1>
          <p style="font-size: 16px; color: #6366f1; font-weight: 600; margin: 5px 0;">Q4 Fiscal Year 2025 Summary</p>
        </div>
        <div style="text-align: right;">
          <p style="font-size: 12px; color: #64748b; margin: 0;">Report ID: RPT-7742-Q4</p>
          <p style="font-size: 12px; color: #64748b; margin: 0;">Published: Jan 29, 2026</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 40px;">
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 10px;">Total Revenue</p>
          <h2 style="font-size: 24px; color: #1e293b; margin: 0;">$4.2M</h2>
          <span style="font-size: 12px; color: #10b981; font-weight: bold;">↑ 12.4% vs Q3</span>
        </div>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 10px;">Acquisition Cost</p>
          <h2 style="font-size: 24px; color: #1e293b; margin: 0;">$142.50</h2>
          <span style="font-size: 12px; color: #ef4444; font-weight: bold;">↓ 2.1% Target</span>
        </div>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
          <p style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 10px;">User Retention</p>
          <h2 style="font-size: 24px; color: #1e293b; margin: 0;">94.2%</h2>
          <span style="font-size: 12px; color: #10b981; font-weight: bold;">↑ 0.8% High</span>
        </div>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #6366f1; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 15px;">Executive Summary</h3>
      <p style="font-size: 14px; line-height: 1.8; color: #475569; margin-bottom: 30px; text-align: justify;">
        Q4 2025 proved to be a pivotal quarter for the organization, characterized by a significant expansion into the EMEA market and the successful beta rollout of our AI-driven analytics suite. While operational costs increased due to infrastructure scaling, the organic growth in our enterprise user base has solidified our market position ahead of the 2026 fiscal year.
      </p>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #6366f1; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-bottom: 20px;">Strategic Goals Progress</h3>
      
      <div style="margin-bottom: 25px;">
        <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
          <span style="font-weight: 600;">Market Expansion (APAC)</span>
          <span>85% Completed</span>
        </div>
        <div style="width: 100%; height: 10px; background: #e2e8f0; border-radius: 5px; overflow: hidden;">
          <div style="width: 85%; height: 100%; background: #6366f1;"></div>
        </div>
      </div>

      <div style="margin-bottom: 40px;">
        <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 8px;">
          <span style="font-weight: 600;">Legacy System Migration</span>
          <span>62% Completed</span>
        </div>
        <div style="width: 100%; height: 10px; background: #e2e8f0; border-radius: 5px; overflow: hidden;">
          <div style="width: 62%; height: 100%; background: #fbbf24;"></div>
        </div>
      </div>

      <h3 style="font-size: 14px; text-transform: uppercase; color: #6366f1; margin-bottom: 15px;">Departmental Spend & Efficiency</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 40px;">
        <thead>
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Department</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Budget Util.</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Output Index</th>
            <th style="padding: 12px; border: 1px solid #e2e8f0;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600;">Engineering</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">98%</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">1.4x</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #10b981;">Optimal</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600;">Marketing</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">104%</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">0.9x</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #f59e0b;">Review</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: 600;">Customer Success</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">88%</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">1.2x</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0; color: #10b981;">Optimal</td>
          </tr>
        </tbody>
      </table>

      <div style="background: #1e293b; color: #f8fafc; padding: 30px; border-radius: 8px;">
        <h3 style="font-size: 14px; text-transform: uppercase; color: #a5b4fc; margin-top: 0; margin-bottom: 10px;">Q1 2026 Outlook</h3>
        <p style="font-size: 13px; line-height: 1.6; margin: 0;">
          Our primary focus will shift toward streamlining the marketing funnel and accelerating the legacy migration project. We anticipate a 15% increase in operational efficiency as the new automation tools move out of the stabilization phase.
        </p>
      </div>

      <div style="margin-top: 50px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <p style="font-size: 11px; color: #94a3b8; margin: 0;">Confidential Internal Document - Unauthorized Distribution Prohibited</p>
        <p style="font-size: 11px; color: #94a3b8; margin: 5px 0;">© 2026 Nexus Tech Operations Group</p>
      </div>
    </div>
  `
  }

];
