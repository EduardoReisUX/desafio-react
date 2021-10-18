import { useContext } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import { HomeContext } from "../../context/home";
import { ServersTable } from "./../../components/ServersTable";

export const Home = () => {
  const { loading } = useContext(HomeContext);

  return (
    <DefaultLayout>
      {loading === true ? (
        <div
          style={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Carregando...
        </div>
      ) : (
        <ServersTable />
      )}
    </DefaultLayout>
  );
};
