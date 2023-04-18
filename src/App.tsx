import { FC, useState } from "react";
import "./App.css";
import { defaultUser } from "./types/index";
import { IGithubUser } from "./types/user";
import { Container, Header, Search, UserCard } from "./components";
import { isGithubUser } from "./utils/isGithubUser";
import { exportLocalUser } from "./utils/exportLocalUser";

const BASE_URL = "https://api.github.com/users/";

const App: FC = () => {
  const [user, setUser] = useState<IGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as IGithubUser;

    if (isGithubUser(user)) {
      setUser(exportLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <div className='App'>
      <Container>
        <Header />
        <Search onSubmit={fetchUser} hasError={!user} />
        {user && <UserCard {...user} />}
      </Container>
    </div>
  );
};

export default App;
