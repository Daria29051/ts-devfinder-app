import { Container } from "components/Container";
import { Search } from "components/Search";
import { Search2 } from "components/Search2";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";

function App() {
  return (
<Container>
<TheHeader/>
<Search hasError onSubmit={()=>{}}/>
{/* <Search2 hasError onSubmit={()=>{}}/> */}
<UserCard {...defaultUser}/>
</Container>
  );
}

export default App;
