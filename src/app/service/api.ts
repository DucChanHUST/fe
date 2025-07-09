import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL || "";

export const getChartPrice = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/chart?chainId=42161&pairs=ETH/USDC&type=h1`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching chart price:", error);
    throw error;
  }
};

export const getAllocation = async () => {
  try {
    const response = await axios.get(
      `${LOCAL_URL}/suggestions/detailed_allocation`
    );

    return response.data;
  } catch (error) {
    console.log("Error fetching allocation:", error);
  }
};
