import { Link } from "react-router-dom";
import "./Style.css";

const Job = ({ id, title, location, company_name, salary, deletecallback }) => {
    return (
        <div className="user" style={{ color: "red" }}>
            <h1>ID: {id}</h1>
            <h3>Title: {title}</h3>
            <p>Location: {location}</p>
            <p>Company Name: {company_name}</p>
            <p>Salary: {salary}</p>
            <button onClick={() => deletecallback(id)}>Delete</button>
            <Link to={`/editJob/${id}`}> Edit </Link>
        </div>
    );
};

export default Job;
