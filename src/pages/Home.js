import EntryView from '../components/layout/EntryView';
import Adventages from '../components/layout/Adventages';
import PortfolioPreview from "../components/layout/PortfolioPreview";

function Home() {
  return (
    <div>
      <EntryView />
      <Adventages />
      <PortfolioPreview />
    </div>
  )
}

export default Home;