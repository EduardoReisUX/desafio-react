import api from "./../api";

const GetData = async () => {
  try {
    const ServerData = await api.get("/servers");
    return ServerData.data;
  } catch (err) {
    return err;
  }
};

export default GetData;
