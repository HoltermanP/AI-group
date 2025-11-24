import siteData from '../data/site.json'

export function getSiteData() {
  return siteData
}

export function getSolution(slug: string) {
  // Zoek eerst in solutions
  const solution = siteData.solutions.find(solution => solution.slug === slug)
  if (solution) return solution
  
  // Zoek dan in applications
  const application = siteData.applications.find(app => app.slug === slug)
  return application || undefined
}

export function getCase(slug: string) {
  return siteData.cases.find(caseItem => caseItem.slug === slug)
}

export type SiteData = typeof siteData
export type Solution = typeof siteData.solutions[0]
export type Case = typeof siteData.cases[0]
export type TeamMember = { name: string; role: string; bio: string; image: string }
