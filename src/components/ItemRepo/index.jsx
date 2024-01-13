import { ItemRepoContainer } from "./styles";

const ItemRepo = ({ repo, handleRemoveRepo }) => {
  const handleRemove = (id) => {
    handleRemoveRepo(id);
  };

  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank">
        Ver repositorio
      </a>
      <br />
      <a href="#" className="remove" onClick={() => handleRemove(repo.id)}>
        Remover
      </a>
      <hr />
    </ItemRepoContainer>
  );
};

export default ItemRepo;
