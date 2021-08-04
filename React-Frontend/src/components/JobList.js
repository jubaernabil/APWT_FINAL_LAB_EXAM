import Job from "./Job";

const JobList = ({ list, callback }) => {
    return (
        <div>
            {list.map((job) => {
                return <Job key={job.id} {...job} deletecallback={callback} />;
            })}
        </div>
    );
};

export default JobList;
