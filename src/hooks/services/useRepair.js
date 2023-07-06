import { useQuery } from "react-query";
import axios from "axios";

const useRepair = ({ id, category, description, status, date}) => {
  const fetchRequest = async () => {
    const query = new URLSearchParams();
    if (id) {
      query.append("id", id);
    }
    if (category) {
      query.append("Category", category);
    }
    if (description) {
      query.append("Description", description);
    }
    if (status) {
      query.append("Status", status);
    }
    if (date) {
        query.append("Date", date);
      }
    try {
      const data = await axios.get(
        `http://localhost:8080/repair?${query.toString()}`
      );

      return data.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(
    ["requestData", id, category, description, status, date],
    fetchRequest,
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useRepair;
