import StorageService from "../utils/storage";

export const getAuthHeader = async () => {


  const token = await StorageService.get("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};
