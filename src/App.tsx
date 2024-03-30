import { Container } from "components/Container";
import { Search } from "components/Search";
import { Search2 } from "components/Search2";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { isGithubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";
import { defaultUser } from "mock";
import { useState } from "react";
import { GitHubError, GithubUser, LocalGithubUser } from "types";


const BASE_URL='https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const fetchUser =  async (username: string) => {
  const url = BASE_URL + username;
 const res = await fetch(url);
 const user = await res.json() as GithubUser | GitHubError;
 if(isGithubUser(user)) {
 setUser(extractLocalUser(user));
 } else {
  setUser(null);
 }
  }

  return (
<Container>
<TheHeader/>
<Search hasError={!user} onSubmit={fetchUser}/>
{/* <Search2 hasError onSubmit={fetchUser}/> */}
{user && (
<UserCard {...user}/>
)}

</Container>
  );
}

export default App;
