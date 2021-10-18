import "./styles.css";

export const SummaryTable = ({ total }) => {
  return (
    <table className="table">
      <tr>
        <th className="th1">Sumário dos recursos dos servidores</th>
      </tr>
      <tr>
        <table className="table-inside-table">
          <tr>
            <th className="th2">Servidores Selecionados</th>
            <td className="td1">
              {total.servers === 0
                ? `Nenhum servidor selecionado`
                : total.servers === 1
                ? `${total.servers} servidor selecionado`
                : `${total.servers} servidores selecionados`}
            </td>
          </tr>
          <tr>
            <th className="th2">Total de Memória</th>
            <td className="td1">{total.memoria} GB</td>
          </tr>
          <tr>
            <th className="th2">Total de CPUs</th>
            <td className="td1">{total.CPUs} vCPUs</td>
          </tr>
          <tr>
            <th className="th2">Total de Discos</th>
            <td className="td1">{total.discos} GB</td>
          </tr>
        </table>
      </tr>
    </table>
  );
};
