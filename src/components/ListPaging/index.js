import { ListPagingContent } from "../../styles/components/ListPagingContent";

const ListPaging = ({ last }) => {
  return (
    <ListPagingContent last={last}>
      <div className="paginas">
        <p>mostrando 1 - 11 de 11</p>
      </div>
      <div className="navegacao">
        <button>primeira |</button>
        <button> {'< '}anterior</button>
        <button>| próxima {' >'}</button>
        <button>| última</button>
      </div>
    </ListPagingContent>
  );
}

export default ListPaging;