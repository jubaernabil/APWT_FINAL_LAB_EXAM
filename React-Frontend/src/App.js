import "./App.css";
import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import AddJob from "./components/AddJob";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    useFetch,
    createEmployee,
    createJob,
    deleteEmployee,
    deleteJob,
    updateEmployee,
    updateJob,
} from "./components/useFetch";
import { list } from "./List";

function App() {
    const [emp, setEmp] = useState(list);
    const [job, setJob] = useState(list);

    const url = "http://localhost:8000/api/";
    useFetch(url, setEmp, setJob);

    const addEmployee = (newEmployee) => {
        createEmployee(url, newEmployee);
        setEmp([...emp, newEmployee]);
    };
    const addJob = (newJob) => {
        createJob(url, newJob);
        setJob([...job, newJob]);
    };
    const editEmployee = (newEmp) => {
        updateEmployee(url, newEmp);
        const data = emp.filter((user) => user.id != newEmp.id);
        setEmp([...data, newEmp]);
    };
    const editJob = (newjob) => {
        updateJob(url, newjob);
        const data = emp.filter((user) => user.id != newjob.id);
        setEmp([...data, newjob]);
    };

    const deleteEmp = (id) => {
        deleteEmployee(url, id);
        const data = emp.filter((user) => user.id !== id);
        setEmp(data);
    };
    const deleteAJob = (id) => {
        deleteJob(url, id);
        const data = emp.filter((user) => user.id !== id);
        setEmp(data);
    };

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <h2>Welcome Home</h2>
                </Route>
                <Route path="/employeeList">
                    <div>
                        <EmployeeList list={emp} callback={deleteEmp} />
                    </div>
                </Route>
                <Route path="/jobList">
                    <div>
                        <JobList list={emp} callback={deleteAJob} />
                    </div>
                </Route>
                <Route path="/createEmployee">
                    <AddEmployee status="add" callback={addEmployee} />
                </Route>
                <Route path="/editEmployee/:id">
                    <AddEmployee status="edit" callback={editEmployee} />
                </Route>
                <Route path="/createJob">
                    <AddJob status="add" callback={addJob} />
                </Route>
                <Route path="/editJob/:id">
                    <AddJob status="edit" callback={editJob} />
                </Route>
                <Route path="*">
                    <h3>404 not found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
