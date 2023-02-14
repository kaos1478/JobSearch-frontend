import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TJob = {
  jobId: string
  source: string
  jobTitle: string
  location: string
  estimatedSalary: string
  unifiedZippiaSalary: number
  companyName: string
  companyInitial: string
  companyID: number
  companyLogo: string
  companyCategories: string[]
  jobDescription: string
  showNewJobBedge: boolean
  jobURL: string
  url: string
  partnerName: string
  iconSVG: string
  iconClass: string
  templateName: string
  titleID: string
  socode: string
  socCodeName: boolean
  listingHash: string
  postedDate: string
  postingDate: string
  actionDateSince: string
  benefits: string[]
  jobTags: string[]
  jobLevels: string[]
  cpc: number
  sponsorFlag: boolean
  contactEmailsFlag: boolean
  sponsoredDlp: boolean
  easyApplyFlag: boolean
  contactEmails: string[]
  bestCompaniesPageURLAtJobLocation: string
  careerMainPageURL: string
  skillsets: string[]
  OBJcountry: string[]
  OBJcity: string
  OBJstateCode: string
  OBJstate: string
  OBJcompanyID: number
  OBJcompanyDisplay: string
  OBJindustry: string
  OBJpostingDate: string
  OBJtitle: string
  OBJtitleDisplay: string
  OBJurl: string
  OBJzipcode: string
  OBJjobTags: string[]
  OBJdesc: string
  jobMajor: boolean
  requiredDegree: string | null
  preferredDegrees: string[]
  formattedOriginalCompanyName: string
  originalCPC: string
  companyZippiaOverallScore: number
  isSpammyCompany: boolean
  nearbyTo0: any[]
  snippets: string[]
}

interface IJobs {
  jobs: TJob[]
  remainingJobs: number
  totalJobs: number
}

interface IFilter {
  selected?: TJob
  filters: {
    companyName: string[]
    onlyRecent: boolean
  }
}

interface IState extends IFilter, IJobs {}

const initialState: IState = {
  jobs: [],
  remainingJobs: 0,
  totalJobs: 0,
  filters: {
    companyName: [],
    onlyRecent: false
  }
}

export const jobsSlice = createSlice({
  initialState,
  name: 'jobsData',
  reducers: {
    setJobs: (state, action: PayloadAction<IJobs>) => {
      state.jobs = action.payload.jobs
      state.remainingJobs = action.payload.remainingJobs
      state.remainingJobs = action.payload.remainingJobs
    },
    setSelected: (state, action: PayloadAction<TJob>) => {
      state.selected = action.payload
    },
    setCompanyNameFilter: (state, action: PayloadAction<string>) => {
      const { companyName: companyNameFilter } = state.filters
      const exists = companyNameFilter.includes(action.payload)

      if (exists) {
        const index = companyNameFilter.indexOf(action.payload)
        companyNameFilter.splice(index, 1)
      } else {
        companyNameFilter.push(action.payload)
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setJobs, setSelected, setCompanyNameFilter } = jobsSlice.actions

export default jobsSlice.reducer
