import { useEffect } from "react";

export const useFetch = (url, employee, job) => {
    const getData = async () => {
        const response = await fetch(url + "employeeList");
        const data = await response.json();
        employee(data);
        const res = await fetch(url + "jobList");
        const d = await res.json();
        job(d);
    };

    useEffect(() => {
        getData();
    }, []);
};

export const createEmployee = (url, data) => {
    fetch(url + "createEmployee", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const createJob = (url, data) => {
    fetch(url + "createJob", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const deleteEmployee = (url, id) => {
    fetch(url + "deleteEmployee/" + id, {
        method: "get",
    })
        .then(() => {
            console.log("removed");
        })
        .catch((err) => {
            console.error(err);
        });
};

export const deleteJob = (url, id) => {
    fetch(url + "deleteJob/" + id, {
        method: "get",
    })
        .then(() => {
            console.log("removed");
        })
        .catch((err) => {
            console.error(err);
        });
};

export const EditEmployee = (url, id, callback) => {
    const getData = async () => {
        const response = await fetch(url + "editEmployee/" + id);
        const data = await response.json();
        callback(data);
    };

    useEffect(() => {
        getData();
    }, []);
};

export const updateEmployee = (url, data) => {
    fetch(url + "editEmployee/" + data.id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const EditJob = (url, id, callback) => {
    const getData = async () => {
        const response = await fetch(url + "editJob/" + id);
        const data = await response.json();
        callback(data);
    };

    useEffect(() => {
        getData();
    }, []);
};

export const updateJob = (url, data) => {
    fetch(url + "editJob/" + data.id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};
