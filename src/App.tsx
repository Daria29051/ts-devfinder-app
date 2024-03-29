import { Container } from "components/Container";
import { Search } from "components/Search";
import { Search2 } from "components/Search2";
import { TheHeader } from "components/TheHeader";

function App() {
  return (
<Container>
<TheHeader/>
<Search hasError onSubmit={()=>{}}/>
{/* <Search2 hasError onSubmit={()=>{}}/> */}
</Container>
  );
}

export default App;
