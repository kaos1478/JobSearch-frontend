// External libs

// Assets

// Componentes

// Subcomponentes and style
import FilterBar from '@/components/organisms/FilterBar'
import JobDetails from '@/components/organisms/JobDetails'
import JobsList from '@/components/organisms/JobsList'
import PageWrapper from '@/components/templates/PageWrapper'
import * as Styled from './styles'

// Services

// Types

const JobsPage: React.FC = () => {
  return (
    <Styled.Container>
      <FilterBar />
      <PageWrapper padding="1rem">
        <Styled.Content>
          <JobsList />
          <JobDetails />
        </Styled.Content>
      </PageWrapper>
    </Styled.Container>
  )
}

export default JobsPage
