import axios from "axios";

const getLocations = async () => {
  const apiUrl = 'http://localhost:5000';
  const EndPoint = '/v1/location';

  try {
    const response = await axios.get(apiUrl + EndPoint);
    return response.data;
  } catch (error:any) {
    console.error('Error fetching data:', error.message);
  }
};

const sendLocation = async (id: number, locationId: string) => {
  const apiUrl = 'http://localhost:5000';
  const EndPoint = "/v1/location";

  try {
    await axios.put(apiUrl + EndPoint, { id: id, locationId: locationId });
  } catch (error:any) {
    console.error("Error sending location: " + error.message);
  }
};

export { getLocations, sendLocation };