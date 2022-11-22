// const host = "http://localHost:3009";
import Constants from "expo-constants";

const { manifest } = Constants;

const host = `http://${manifest.debuggerHost.split(":").shift()}:3009`;
async function processResponse(response) {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then((res) => ({
    statusCode: res[0],
    data: res[1],
  }));
}
//api call to add patients
export const addNewPatients = async (data) => {
  return fetch(`${host}/patients`, {
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
//api call to delete patient
export const deletePatient = async (id) => {
  return fetch(`${host}/patients/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  })
    .then(processResponse)
    .catch((err) => console.log(err));
};
//api call to delete patient
export const updatePatient = async (data) => {
  return fetch(`${host}/patients/${data.id}`, {
    method: "PATCH",
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
//api call to add patient record
export const addPatientRecord = async (data) => {
  return fetch(`${host}/patientRecords`, {
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
//api call to get all patient record
export const updatePatientRecords = async (data) => {
  return fetch(`${host}/patientRecords/${data.id}`, {
    method: "PATCH",
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
//api call to get all patient record
export const deletePatientRecords = async (id) => {
  return fetch(`${host}/patientRecords/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(processResponse)
    .catch((err) => console.log(err));
};
//api call to get all patient record
export const getPatientRecords = async (patientId) => {
  return fetch(`${host}/patientRecords?patientId=${patientId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    credentials: "include",
  })
    .then(processResponse)
    .catch((err) => console.log(err));
};
