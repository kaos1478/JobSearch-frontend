// External libs

// Assets

// Componentes

// Subcomponentes and style
import FilterBar from '@/components/organisms/FilterBar'
import JobDetails from '@/components/organisms/JobDetails'
import JobsList from '@/components/organisms/JobsList'
import Modal from '@/components/organisms/JobsList/Modal'
import PageWrapper from '@/components/templates/PageWrapper'
import { useAppSelector } from '@/redux/store'
import * as Styled from './styles'

// Services

// Types

const JobsPage: React.FC = () => {
  const { showModal } = useAppSelector(state => state.jobsData)

  return (
    <Styled.Container>
      {showModal && <Modal />}
      <FilterBar />
      <PageWrapper padding="1rem">
        <Styled.Content>
          <JobsList />
          <Styled.RelativeDetails>
            <JobDetails />
          </Styled.RelativeDetails>
        </Styled.Content>
      </PageWrapper>
    </Styled.Container>
  )
}

export default JobsPage
