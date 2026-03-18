import { jobApplicationsTemplates } from "./jobApplications";
import { businessTemplates } from "./businessTemplates";
import { reportsTemplates } from "./reportsTemplates";
import { legalTemplates } from "./legalTemplates";
import { formsTemplates } from "./formsTemplates";
import { educationTemplates } from "./educationTemplates";
import { creativeTemplates } from "./creativeTemplates";
import { rentAgreementTemplates } from "./rentAgreementTemplates";

export const allTemplates = [
  {
    id: "blank",
    title: "Blank document",
    category: "All Templates",
    thumbnail: null,
    content: ""
  },
  ...jobApplicationsTemplates,
  ...businessTemplates,
  ...reportsTemplates,
  ...legalTemplates,
  ...formsTemplates,
  ...educationTemplates,
  ...creativeTemplates,
  ...rentAgreementTemplates

];