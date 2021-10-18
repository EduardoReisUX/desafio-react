import { useState, useContext } from "react";
import "./styles.css";

import { HomeContext } from "../../context/home";
import { SummaryTable } from "../SummaryTable";

export const ServersTable = () => {
  const { serverData } = useContext(HomeContext);

  // checked useState é responsável por gerenciar checkboxes preenchidos ou vazios
  const [checked, setChecked] = useState(
    new Array(serverData.length).fill(false)
  );

  // total useState será atualizado a cada checked checkbox e seus dados serão passados para o componente <SummaryTable />
  const [total, setTotal] = useState({
    servers: 0,
    memoria: 0,
    CPUs: 0,
    discos: 0,
  });

  const handleOnChange = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updatedCheckedState);

    // Ao selecionar servidor, faz a somatória do total de memória
    const updatedMemoriaTotal = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + serverData[index].configuracao.memoryProvisioned;
        }
        return sum;
      },
      0
    );

    // Ao selecionar servidor, faz a somatória do total de vCPUs
    const updatedCPUTotal = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + serverData[index].configuracao.cpuProvisioned;
        }
        return sum;
      },
      0
    );

    // Ao selecionar servidor, faz a somatória do total de discos
    const updatedDiscosTotal = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + serverData[index].configuracao.totalDiskGB;
        }
        return sum;
      },
      0
    );

    setTotal({
      servers: updatedCheckedState.filter(Boolean).length,
      memoria: updatedMemoriaTotal,
      CPUs: updatedCPUTotal,
      discos: updatedDiscosTotal,
    });
  };

  // Componente Err em caso de erro na API
  const Err = [];
  for (let i = 0; i < 6; i++) {
    Err.push(
      <td className="td2" key={`Err-${i}`}>
        "Erro: sem dados do servidor"
      </td>
    );
  }

  return (
    <>
      <SummaryTable total={total} />
      <table className="table" style={{ marginTop: 0 }}>
        <tr>
          <th className="th3">Tabela de servidores</th>
        </tr>
        <tr>
          <td>
            <table className="table-inside-table">
              <tr>
                <th className="th4">Select</th>
                <th className="th4">Hostname</th>
                <th className="th4">Memória</th>
                <th className="th4">vCPUs</th>
                <th className="th4">Disco</th>
                <th className="th4">IP</th>
              </tr>

              {serverData.length !== 0 ? (
                serverData.map((server, index) => (
                  <tr key={server.id_vm}>
                    <td className="td2" key={`table-data-1-${server.id_vm}`}>
                      <input
                        type="checkbox"
                        name={`select-${index}`}
                        key={`select-${index}`}
                        checked={checked[index]}
                        onChange={() => handleOnChange(index)}
                      />
                    </td>
                    <td className="td2" key={`table-data-2-${server.id_vm}`}>
                      {!server.configuracao.hostname
                        ? "Sem HostName"
                        : server.configuracao.hostname}
                    </td>
                    <td className="td2" key={`table-data-3-${server.id_vm}`}>
                      {!server.configuracao.memoryProvisioned
                        ? "Sem Memória"
                        : `${server.configuracao.memoryProvisioned} GB`}
                    </td>
                    <td className="td2" key={`table-data-4-${server.id_vm}`}>
                      {!server.configuracao.cpuProvisioned
                        ? "Sem vCPUs"
                        : `${server.configuracao.cpuProvisioned} vCPUs`}
                    </td>
                    <td className="td2" key={`table-data-5-${server.id_vm}`}>
                      {!server.configuracao.totalDiskGB
                        ? "Sem Disco"
                        : `${server.configuracao.totalDiskGB} GB`}
                    </td>
                    <td className="td2" key={`table-data-6-${server.id_vm}`}>
                      {!server.configuracao.ip
                        ? "Sem IP"
                        : `${server.configuracao.ip}`}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>{Err}</tr>
              )}
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};
