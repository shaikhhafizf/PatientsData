const host = "http://10.0.2.2:3009";

async function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then((res) => ({
    statusCode: res[0],
    data: res[1],
  }));
}
//api call to add patients
export const addPatients = async (data) => {
  return fetch(`${host}/patient`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  })
    .then(processResponse)
    .catch((err) => console.log(err));
};
//api call to get patients
export const getPatients = async () => {
  console.log("reac");
  return fetch(`${host}/patients`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  })
    .then(processResponse)
    .catch((err) => console.log(err));
};
