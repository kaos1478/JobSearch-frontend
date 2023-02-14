// External libs

// Assets

// Componentes

// Subcomponentes and style
import FilterBar from '@/components/organisms/FilterBar'
import JobDetails from '@/components/organisms/JobDetails'
import JobsList from '@/components/organisms/JobsList'
import Modal from '@/components/organisms/JobsList/Modal'
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
      <Styled.Content>
        <JobsList />
        <Styled.RelativeDetails>
          <JobDetails />
        </Styled.RelativeDetails>
      </Styled.Content>
    </Styled.Container>
  )
}

export default JobsPage
