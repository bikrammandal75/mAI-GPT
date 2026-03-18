export const formsTemplates = [
    // ... (previous templates)
    {
        id: "premium_event_registration",
        title: "Premium Workshop Registration",
        category: "Data Collection",
        thumbnail: null,
        content: `
<div style="max-width: 850px; margin: 40px auto; padding: 0; font-family: 'Inter', system-ui, sans-serif; background: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); overflow: hidden; border: 1px solid #f1f5f9; min-height: 1000px;">
  
  <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 60px 40px; color: white; text-align: center;">
    <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">Executive Strategy Workshop 2026</h1>
    <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Secure your spot for the annual innovation summit in San Francisco.</p>
  </div>

  <div style="padding: 50px;">
    <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 25px;">01. Personal Information</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
      <div>
        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">First Name</label>
        <input type="text" placeholder="e.g. Jane" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;"/>
      </div>
      <div>
        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Last Name</label>
        <input type="text" placeholder="e.g. Doe" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;"/>
      </div>
    </div>

    <div style="margin-bottom: 30px;">
      <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Professional Email Address</label>
      <input type="email" placeholder="jane.doe@company.com" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;"/>
    </div>

    <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 25px; margin-top: 40px;">02. Professional Details</h3>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
      <div>
        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Organization</label>
        <input type="text" placeholder="Company Name" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;"/>
      </div>
      <div>
        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Job Title</label>
        <select style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; outline: none; box-sizing: border-box;">
          <option>Executive / C-Suite</option>
          <option>Department Head</option>
          <option>Manager / Lead</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #6366f1; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-bottom: 25px; margin-top: 40px;">03. Logistics & Preferences</h3>
    
    <div style="margin-bottom: 20px;">
      <label style="display: flex; align-items: center; font-size: 14px; color: #4b5563; cursor: pointer; margin-bottom: 12px;">
        <input type="checkbox" style="margin-right: 10px; width: 16px; height: 16px; accent-color: #4f46e5;"/>
        I require ADA-compliant seating/access.
      </label>
      <label style="display: flex; align-items: center; font-size: 14px; color: #4b5563; cursor: pointer;">
        <input type="checkbox" style="margin-right: 10px; width: 16px; height: 16px; accent-color: #4f46e5;"/>
        I would like to receive the post-event digital toolkit.
      </label>
    </div>

    <div style="margin-bottom: 40px;">
      <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Dietary Restrictions (Optional)</label>
      <textarea placeholder="Please list any allergies or dietary requirements..." style="width: 100%; height: 80px; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box; font-family: inherit; resize: none;"></textarea>
    </div>

    <div style="padding-top: 30px; border-top: 1px solid #f1f5f9; text-align: right;">
      <button style="background: #111827; color: white; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 15px; border: none; cursor: pointer; transition: background 0.2s;">
        Complete Registration →
      </button>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 15px;">By registering, you agree to our terms of service and privacy policy.</p>
    </div>
  </div>

  <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
    <p style="font-size: 12px; color: #64748b; margin: 0;">Questions? Contact us at <strong>events@innovationhub.io</strong></p>
  </div>
</div>`
    },
    {
        id: "dark_mode_product_survey",
        title: "Product Experience Survey",
        category: "Data Collection",
        thumbnail: null,
        content: `
<div style="max-width: 850px; margin: 40px auto; padding: 0; font-family: 'Inter', -apple-system, sans-serif; background: #0f172a; color: #f8fafc; border-radius: 20px; overflow: hidden; border: 1px solid #1e293b; min-height: 1000px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
  
  <div style="background: radial-gradient(circle at top left, #1e293b, #0f172a); padding: 60px 50px; border-bottom: 1px solid #334155; position: relative;">
    <div style="position: absolute; top: 20px; right: 40px; background: rgba(56, 189, 248, 0.1); color: #38bdf8; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; border: 1px solid rgba(56, 189, 248, 0.2);">Estimated time: 3 mins</div>
    <h1 style="margin: 0; font-size: 36px; font-weight: 800; letter-spacing: -1px; background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Product Experience Insight</h1>
    <p style="margin: 15px 0 0; font-size: 16px; color: #94a3b8; max-width: 500px;">Your technical feedback directly shapes our next deployment. Help us refine the ecosystem.</p>
  </div>

  <div style="padding: 50px;">
    <div style="margin-bottom: 45px;">
      <label style="display: block; font-size: 14px; font-weight: 600; color: #f1f5f9; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">How would you rate the v2.0 UI fluidity?</label>
      <div style="display: flex; justify-content: space-between; gap: 10px;">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => `
          <div style="flex: 1; padding: 15px 0; background: #1e293b; border: 1px solid #334155; border-radius: 8px; text-align: center; cursor: pointer; font-weight: 700; transition: all 0.2s;">${num}</div>
        `).join('')}
      </div>
      <div style="display: flex; justify-content: space-between; margin-top: 10px; font-size: 11px; color: #64748b; font-weight: 600;">
        <span>FRUSTRATING</span>
        <span>FLAWLESS</span>
      </div>
    </div>

    <div style="margin-bottom: 45px;">
      <label style="display: block; font-size: 14px; font-weight: 600; color: #f1f5f9; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Which modules do you use daily?</label>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
        <div style="padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid #334155; border-radius: 12px; display: flex; align-items: center;">
          <input type="checkbox" style="width: 18px; height: 18px; accent-color: #38bdf8;"/>
          <span style="margin-left: 12px; font-size: 14px; color: #cbd5e1;">Real-time Analytics Engine</span>
        </div>
        <div style="padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid #334155; border-radius: 12px; display: flex; align-items: center;">
          <input type="checkbox" style="width: 18px; height: 18px; accent-color: #38bdf8;"/>
          <span style="margin-left: 12px; font-size: 14px; color: #cbd5e1;">Automated API Webhooks</span>
        </div>
        <div style="padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid #334155; border-radius: 12px; display: flex; align-items: center;">
          <input type="checkbox" style="width: 18px; height: 18px; accent-color: #38bdf8;"/>
          <span style="margin-left: 12px; font-size: 14px; color: #cbd5e1;">Cloud Asset Management</span>
        </div>
        <div style="padding: 15px; background: rgba(255,255,255,0.03); border: 1px solid #334155; border-radius: 12px; display: flex; align-items: center;">
          <input type="checkbox" style="width: 18px; height: 18px; accent-color: #38bdf8;"/>
          <span style="margin-left: 12px; font-size: 14px; color: #cbd5e1;">Collaborative Workspace</span>
        </div>
      </div>
    </div>

    <div style="margin-bottom: 45px;">
      <label style="display: block; font-size: 14px; font-weight: 600; color: #f1f5f9; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">What is one thing we could do better?</label>
      <textarea placeholder="Technical suggestions or UI pain points..." style="width: 100%; height: 120px; background: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 15px; color: #fff; font-size: 14px; line-height: 1.6; outline: none; focus: border-color: #38bdf8;"></textarea>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 30px; border-top: 1px solid #1e293b;">
      <div style="color: #64748b; font-size: 12px;">
        <strong style="color: #94a3b8;">Privacy Note:</strong> Data is encrypted and anonymized.
      </div>
      <button style="background: #38bdf8; color: #0f172a; padding: 14px 40px; border-radius: 12px; font-weight: 800; font-size: 15px; border: none; cursor: pointer; box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);">
        Submit Feedback
      </button>
    </div>
  </div>

  <div style="padding: 25px; text-align: center; background: rgba(255,255,255,0.02); font-size: 12px; color: #475569;">
    Nexus v2.4.1 System | © 2026 Innovation Labs
  </div>
</div>`
    }
];