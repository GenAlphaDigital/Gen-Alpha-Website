import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "./styles.module.css";

export function Model({ children, job, formRef, scrollToForm }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-[80%] bg-[var(--navyblue)]  border-none text-white flex flex-col items-center justify-center"
        id="model"
      >
        <div className="flex gap-3 flex-col">
          <p className="text-2xl">{job.title}</p>
          <p className="text-base">Job Description:</p>
          <p className="text-sm">{job.jobDescription}</p>
          <p className="text-base">Required Skills:</p>
          <ul
            style={{
              listStyle: "disc",
            }}
            className="px-8 text-base"
          >
            {job.requiredSkills.map((skill, index) => (
              <li key={index} className="text-sm">
                {skill}
              </li>
            ))}
          </ul>

          <p className="text-base">Roles and Responsibilities:</p>
          <ul
            style={{
              listStyle: "disc",
            }}
            className="px-8 text-sm"
          >
            {job.rolesAndResponsibilities.map((role, index) => (
              <li key={index} className="text-sm">
                {role}
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-[var(--orange)]" onClick={scrollToForm}>
          {" "}
          Apply Now{" "}
        </button>
      </DialogContent>
    </Dialog>
  );
}
