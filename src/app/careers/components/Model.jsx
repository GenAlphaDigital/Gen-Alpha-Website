import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import styles from "./styles.module.css";

export function Model({ children, job }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-[80%] bg-[var(--navyblue)]  border-none text-white flex flex-col items-center justify-center"
        id="model"
      >
        <div className="flex gap-3 flex-col">
          <p className="text-3xl">{job.title}</p>
          <p className="text-xl">Job Description:</p>
          <p>{job.jobDescription}</p>
          <p className="text-xl">Required Skills:</p>
          <ul
            style={{
              listStyle: "disc",
            }}
            className="px-8"
          >
            {job.requiredSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <p className="text-xl">Roles and Responsibilities:</p>
          <ul
            style={{
              listStyle: "disc",
            }}
            className="px-8"
          >
            {job.rolesAndResponsibilities.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
