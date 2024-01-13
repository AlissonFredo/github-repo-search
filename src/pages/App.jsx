import { useState } from "react";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Logo from "../components/Logo";
import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {
  const [repos, setRepos] = useState([]);

  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`/repos/${currentRepo}`);

      if (data?.id) {
        const isExist = repos.find((repo) => repo.id == data.id);

        if (isExist) {
          alert("Repositório já existe na listagem");
          setCurrentRepo("");
          return;
        }

        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
      }
    } catch (error) {
      alert("Repositório não foi encontrado");
    }
  };

  const handleRemoveRepo = (id) => {
    const oldRepos = repos.filter((repo) => repo.id != id);

    setRepos(oldRepos);
  };

  return (
    <Container>
      <Logo />

      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />

      <Button onClick={handleSearchRepo} />

      {repos.map((repo, key) => {
        return (
          <ItemRepo key={key} repo={repo} handleRemoveRepo={handleRemoveRepo} />
        );
      })}
    </Container>
  );
}

export default App;
